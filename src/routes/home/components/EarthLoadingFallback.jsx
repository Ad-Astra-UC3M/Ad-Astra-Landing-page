import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";

import logoMark from "../../../assets/logo_no_text.svg";
import useReducedMotion from "./earth/useReducedMotion";

const MINIMUM_VISIBLE_MS = 700;
const EXIT_DURATION_MS = 300;
const SAFETY_TIMEOUT_MS = 12000;

export default function EarthLoadingFallback({ onExitStart, ready }) {
  const { errors, progress } = useProgress();
  const reducedMotion = useReducedMotion();
  const startedAt = useRef(Date.now());
  const exitStarted = useRef(false);
  const [visible, setVisible] = useState(true);
  const [rendered, setRendered] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  const maskStyle = useMemo(
    () => ({
      WebkitMaskImage: `url("${logoMark}")`,
      WebkitMaskPosition: "center",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskImage: `url("${logoMark}")`,
      maskPosition: "center",
      maskRepeat: "no-repeat",
      maskSize: "contain",
    }),
    [],
  );

  const beginExit = useCallback(() => {
    if (exitStarted.current) return;

    exitStarted.current = true;
    onExitStart?.();
    setVisible(false);
  }, [onExitStart]);

  useEffect(() => {
    const nextProgress = ready ? 100 : Math.min(100, Math.max(0, progress));
    setDisplayProgress((currentProgress) =>
      Math.max(currentProgress, nextProgress),
    );
  }, [progress, ready]);

  useEffect(() => {
    if (!ready && errors.length === 0) return undefined;

    const elapsed = Date.now() - startedAt.current;
    const remaining = Math.max(0, MINIMUM_VISIBLE_MS - elapsed);
    const timeout = window.setTimeout(beginExit, remaining);

    return () => window.clearTimeout(timeout);
  }, [beginExit, errors.length, ready]);

  useEffect(() => {
    const timeout = window.setTimeout(beginExit, SAFETY_TIMEOUT_MS);

    return () => window.clearTimeout(timeout);
  }, [beginExit]);

  useEffect(() => {
    if (visible) return undefined;

    const timeout = window.setTimeout(
      () => setRendered(false),
      reducedMotion ? 0 : EXIT_DURATION_MS,
    );

    return () => window.clearTimeout(timeout);
  }, [reducedMotion, visible]);

  if (!rendered) return null;

  const revealProgress = reducedMotion ? 100 : displayProgress;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black ${
        visible ? "opacity-100" : "opacity-0"
      } ${
        reducedMotion
          ? "transition-none"
          : "transition-opacity duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
      }`}
    >
      <div className="relative aspect-3001/1043 w-[min(68vw,28rem)] contain-[paint]">
        <span
          className="absolute inset-0 bg-brand-surface opacity-20"
          style={maskStyle}
        />
        <span
          className={`absolute inset-0 bg-brand-surface ${
            reducedMotion
              ? "transition-none"
              : "transition-[clip-path] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[clip-path]"
          }`}
          style={{
            ...maskStyle,
            clipPath: `inset(0 ${100 - revealProgress}% 0 0)`,
          }}
        />
      </div>
    </div>
  );
}
