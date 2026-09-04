import { useCallback, useEffect, useRef, useState } from "react";

const RANGE_DEGREES = 25;
const MAX_INPUT = 0.7;
const SENSOR_TIMEOUT_MS = 2500;

function createRuntime() {
  return {
    mounted: false,
    generation: 0,
    status: "checking",
    reducedMotion: false,
    eligible: false,
    visible: true,
    OrientationEvent: null,
    permissionRequired: false,
    permissionGranted: false,
    permissionPending: false,
    permissionToken: 0,
    source: "pointer",
    sourceVersion: 0,
    input: { x: 0, y: 0 },
    originSet: false,
    originX: 0,
    originY: 0,
    sampleCount: 0,
    streamLive: false,
    lastSampleAt: 0,
    deadline: 0,
    screenAngle: 0,
    watchdog: null,
  };
}

function getScreenAngle() {
  const angle = window.screen?.orientation?.angle ?? window.orientation ?? 0;
  return ((Number(angle) || 0) % 360 + 360) % 360;
}

function angularDelta(value, origin) {
  return ((value - origin + 540) % 360) - 180;
}

function normalize(value) {
  return Math.min(MAX_INPUT, Math.max(-MAX_INPUT, value / RANGE_DEGREES));
}

function selectSource(runtime, source) {
  if (runtime.source !== source) runtime.sourceVersion += 1;
  runtime.source = source;
}

function clearWatchdog(runtime) {
  if (runtime.watchdog === null) return;
  window.clearTimeout(runtime.watchdog);
  runtime.watchdog = null;
}

function resetSignal(runtime) {
  clearWatchdog(runtime);
  runtime.input.x = 0;
  runtime.input.y = 0;
  runtime.originSet = false;
  runtime.sampleCount = 0;
  runtime.streamLive = false;
  runtime.lastSampleAt = 0;
  runtime.deadline = 0;
}

function canUseOrientation(runtime) {
  return (
    runtime.mounted &&
    runtime.eligible &&
    runtime.visible &&
    runtime.source === "orientation" &&
    (!runtime.permissionRequired || runtime.permissionGranted)
  );
}

function armWatchdog(runtime, publishStatus) {
  clearWatchdog(runtime);
  if (!canUseOrientation(runtime)) return;

  const generation = runtime.generation;
  const checkSignal = () => {
    runtime.watchdog = null;
    if (runtime.generation !== generation || !canUseOrientation(runtime)) {
      return;
    }

    const now = performance.now();
    const deadline = runtime.streamLive
      ? runtime.lastSampleAt + SENSOR_TIMEOUT_MS
      : runtime.deadline;

    if (deadline > now) {
      runtime.watchdog = window.setTimeout(
        checkSignal,
        Math.max(16, deadline - now),
      );
      return;
    }

    resetSignal(runtime);
    publishStatus("no-data");
  };

  const now = performance.now();
  const deadline = runtime.streamLive
    ? runtime.lastSampleAt + SENSOR_TIMEOUT_MS
    : runtime.deadline;
  runtime.watchdog = window.setTimeout(
    checkSignal,
    Math.max(16, deadline - now),
  );
}

function beginProbe(runtime, publishStatus) {
  resetSignal(runtime);
  runtime.deadline = performance.now() + SENSOR_TIMEOUT_MS;
  publishStatus("probing");
  armWatchdog(runtime, publishStatus);
}

export default function useEarthMotionControl({ reducedMotion }) {
  const [status, setStatus] = useState("checking");
  const runtimeRef = useRef(null);

  if (runtimeRef.current === null) runtimeRef.current = createRuntime();

  const publishStatus = useCallback((nextStatus) => {
    const runtime = runtimeRef.current;
    if (runtime.status === nextStatus) return;

    runtime.status = nextStatus;
    if (runtime.mounted) setStatus(nextStatus);
  }, []);

  const activateFromGesture = useCallback(() => {
    const runtime = runtimeRef.current;
    if (
      !runtime.mounted ||
      !runtime.eligible ||
      runtime.reducedMotion ||
      runtime.status === "denied"
    ) {
      return;
    }

    selectSource(runtime, "orientation");

    if (runtime.permissionPending) {
      resetSignal(runtime);
      return;
    }

    if (!runtime.permissionRequired || runtime.permissionGranted) {
      beginProbe(runtime, publishStatus);
      return;
    }

    const OrientationEvent = runtime.OrientationEvent;
    if (typeof OrientationEvent?.requestPermission !== "function") {
      beginProbe(runtime, publishStatus);
      return;
    }

    resetSignal(runtime);
    runtime.permissionPending = true;
    const token = ++runtime.permissionToken;
    const generation = runtime.generation;
    const sourceVersion = runtime.sourceVersion;
    let permissionRequest;

    try {
      // Safari exige invocarlo directamente durante el gesto del usuario.
      permissionRequest = OrientationEvent.requestPermission();
      publishStatus("requesting");
    } catch {
      runtime.permissionPending = false;
      selectSource(runtime, "pointer");
      publishStatus("prompt");
      return;
    }

    Promise.resolve(permissionRequest).then(
      (permission) => {
        if (
          !runtime.mounted ||
          runtime.generation !== generation ||
          runtime.permissionToken !== token
        ) {
          return;
        }

        runtime.permissionPending = false;
        if (permission !== "granted") {
          runtime.permissionGranted = false;
          selectSource(runtime, "pointer");
          resetSignal(runtime);
          publishStatus("denied");
          return;
        }

        runtime.permissionGranted = true;
        if (
          runtime.source === "orientation" &&
          runtime.sourceVersion === sourceVersion
        ) {
          beginProbe(runtime, publishStatus);
        } else {
          publishStatus("probing");
        }
      },
      () => {
        if (
          !runtime.mounted ||
          runtime.generation !== generation ||
          runtime.permissionToken !== token
        ) {
          return;
        }

        runtime.permissionPending = false;
        selectSource(runtime, "pointer");
        resetSignal(runtime);
        publishStatus("prompt");
      },
    );
  }, [publishStatus]);

  const resolveInput = useCallback((pointer, now) => {
    const runtime = runtimeRef.current;
    return runtime.source === "orientation" &&
      runtime.streamLive &&
      runtime.visible &&
      now - runtime.lastSampleAt < SENSOR_TIMEOUT_MS
      ? runtime.input
      : pointer;
  }, []);

  useEffect(() => {
    const runtime = runtimeRef.current;
    const anyCoarsePointer = window.matchMedia("(any-pointer: coarse)");
    const primaryCoarsePointer = window.matchMedia("(pointer: coarse)");

    runtime.mounted = true;
    runtime.generation += 1;
    runtime.reducedMotion =
      Boolean(reducedMotion) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    runtime.visible = !document.hidden;
    runtime.screenAngle = getScreenAngle();
    const generation = runtime.generation;
    let orientationListening = false;

    function setOrientationListening(enabled) {
      if (orientationListening === enabled) return;
      orientationListening = enabled;

      if (enabled) {
        window.addEventListener("deviceorientation", handleOrientation);
      } else {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    }

    const updateAvailability = () => {
      const OrientationEvent = window.DeviceOrientationEvent;
      const wasEligible = runtime.eligible;
      const hasTouch =
        navigator.maxTouchPoints > 0 || anyCoarsePointer.matches;

      runtime.OrientationEvent = OrientationEvent ?? null;
      runtime.permissionRequired =
        typeof OrientationEvent?.requestPermission === "function";
      runtime.eligible = Boolean(
        !runtime.reducedMotion &&
          window.isSecureContext &&
          hasTouch &&
          OrientationEvent,
      );
      setOrientationListening(runtime.eligible);

      if (!runtime.eligible) {
        runtime.permissionPending = false;
        runtime.permissionToken += 1;
        selectSource(runtime, "pointer");
        resetSignal(runtime);
        publishStatus("unavailable");
        return;
      }

      if (wasEligible) return;

      selectSource(
        runtime,
        primaryCoarsePointer.matches ? "orientation" : "pointer",
      );
      resetSignal(runtime);

      if (runtime.permissionRequired && !runtime.permissionGranted) {
        publishStatus("prompt");
      } else {
        beginProbe(runtime, publishStatus);
      }
    };

    const handleOrientation = ({ beta, gamma }) => {
      if (
        !runtime.eligible ||
        !runtime.visible ||
        (runtime.permissionRequired && !runtime.permissionGranted) ||
        !Number.isFinite(beta) ||
        !Number.isFinite(gamma)
      ) {
        return;
      }

      const screenAngle = getScreenAngle();
      if (screenAngle !== runtime.screenAngle) {
        runtime.screenAngle = screenAngle;
        resetSignal(runtime);
        runtime.deadline = performance.now() + SENSOR_TIMEOUT_MS;
        if (runtime.source === "orientation") {
          publishStatus("probing");
          armWatchdog(runtime, publishStatus);
        }
      }

      let horizontal = gamma;
      let vertical = beta;
      if (screenAngle === 90) {
        horizontal = beta;
        vertical = -gamma;
      } else if (screenAngle === 180) {
        horizontal = -gamma;
        vertical = -beta;
      } else if (screenAngle === 270) {
        horizontal = -beta;
        vertical = gamma;
      }

      if (!runtime.originSet) {
        runtime.originSet = true;
        runtime.originX = horizontal;
        runtime.originY = vertical;
      }

      runtime.input.x = normalize(angularDelta(horizontal, runtime.originX));
      runtime.input.y = normalize(angularDelta(vertical, runtime.originY));
      runtime.lastSampleAt = performance.now();
      runtime.sampleCount = Math.min(2, runtime.sampleCount + 1);

      if (runtime.sampleCount === 2 && !runtime.streamLive) {
        runtime.streamLive = true;
        publishStatus("active");
      }

      if (runtime.source === "orientation" && runtime.watchdog === null) {
        if (!runtime.deadline) {
          runtime.deadline = runtime.lastSampleAt + SENSOR_TIMEOUT_MS;
        }
        armWatchdog(runtime, publishStatus);
      }
    };

    const recalibrate = () => {
      runtime.screenAngle = getScreenAngle();
      if (canUseOrientation(runtime)) {
        beginProbe(runtime, publishStatus);
      } else {
        resetSignal(runtime);
      }
    };

    const handleVisibilityChange = () => {
      runtime.visible = !document.hidden;
      if (runtime.visible) {
        recalibrate();
      } else {
        resetSignal(runtime);
      }
    };

    const handlePointerInput = ({ pointerType }) => {
      if (pointerType !== "mouse" && pointerType !== "pen") return;
      selectSource(runtime, "pointer");
      clearWatchdog(runtime);
    };

    updateAvailability();
    anyCoarsePointer.addEventListener("change", updateAvailability);
    window.addEventListener("orientationchange", recalibrate);
    window.screen?.orientation?.addEventListener?.("change", recalibrate);
    window.addEventListener("pointerdown", handlePointerInput);
    window.addEventListener("pointermove", handlePointerInput);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      runtime.mounted = false;
      runtime.eligible = false;
      runtime.visible = false;
      runtime.permissionPending = false;
      runtime.permissionToken += 1;
      clearWatchdog(runtime);
      anyCoarsePointer.removeEventListener("change", updateAvailability);
      setOrientationListening(false);
      window.removeEventListener("orientationchange", recalibrate);
      window.screen?.orientation?.removeEventListener?.("change", recalibrate);
      window.removeEventListener("pointerdown", handlePointerInput);
      window.removeEventListener("pointermove", handlePointerInput);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resetSignal(runtime);
      selectSource(runtime, "pointer");
      if (runtime.generation === generation) runtime.generation += 1;
    };
  }, [publishStatus, reducedMotion]);

  return { status, activateFromGesture, resolveInput };
}
