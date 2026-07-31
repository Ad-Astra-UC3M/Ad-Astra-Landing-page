import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import Atmosphere from "./earth/Atmosphere";
import CloudLayer from "./earth/CloudLayer";
import EarthSurface from "./earth/EarthSurface";
import {
  BASE_ROTATION,
  DEFAULT_EARTH_APPEARANCE,
  EARTH_TEXTURES,
  INTERACTION,
  resolveAppearance,
} from "./earth/earthConfig";
import useReducedMotion from "./earth/useReducedMotion";

const INTRO_DURATION_SECONDS = 0.78;
const INTRO_SCALE_RATIO = 0.015;

function easeOutQuart(progress) {
  return 1 - (1 - progress) ** 4;
}

export { default as SpaceBackground } from "./earth/SpaceBackground";
export {
  DEFAULT_EARTH_APPEARANCE,
  DEFAULT_SPACE_APPEARANCE,
} from "./earth/earthConfig";

export default function InteractiveModel({
  appearance: appearanceOverrides,
  introStarted = false,
}) {
  const groupRef = useRef(null);
  const introProgressRef = useRef(0);
  const reducedMotion = useReducedMotion();
  const appearance = useMemo(
    () => resolveAppearance(DEFAULT_EARTH_APPEARANCE, appearanceOverrides),
    [appearanceOverrides],
  );

  useFrame(({ pointer }, delta) => {
    if (!groupRef.current) return;

    if (reducedMotion) {
      groupRef.current.scale.setScalar(appearance.scale);
    } else if (introStarted && introProgressRef.current < 1) {
      introProgressRef.current = Math.min(
        1,
        introProgressRef.current + delta / INTRO_DURATION_SECONDS,
      );

      const easedProgress = easeOutQuart(introProgressRef.current);
      const introScale = appearance.scale * INTRO_SCALE_RATIO;
      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(introScale, appearance.scale, easedProgress),
      );
    }

    if (reducedMotion) return;

    const targetX = BASE_ROTATION.x - pointer.y * INTERACTION.strengthX;
    const targetY = BASE_ROTATION.y + pointer.x * INTERACTION.strengthY;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetX,
      INTERACTION.smoothing,
      delta,
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetY,
      INTERACTION.smoothing,
      delta,
    );
  });

  return (
    <group
      ref={groupRef}
      rotation={Object.values(BASE_ROTATION)}
      scale={
        reducedMotion ? appearance.scale : appearance.scale * INTRO_SCALE_RATIO
      }
    >
      <EarthSurface appearance={appearance} />
      <CloudLayer appearance={appearance} />
      <Atmosphere appearance={appearance} />
    </group>
  );
}

useTexture.preload(Object.values(EARTH_TEXTURES));
