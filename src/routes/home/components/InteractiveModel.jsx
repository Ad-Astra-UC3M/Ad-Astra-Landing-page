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

export { default as SpaceBackground } from "./earth/SpaceBackground";
export {
  DEFAULT_EARTH_APPEARANCE,
  DEFAULT_SPACE_APPEARANCE,
} from "./earth/earthConfig";

export default function InteractiveModel({ appearance: appearanceOverrides }) {
  const groupRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const appearance = useMemo(
    () => resolveAppearance(DEFAULT_EARTH_APPEARANCE, appearanceOverrides),
    [appearanceOverrides],
  );

  useFrame(({ pointer }, delta) => {
    if (!groupRef.current || reducedMotion) return;

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
      scale={appearance.scale}
    >
      <EarthSurface appearance={appearance} />
      <CloudLayer appearance={appearance} />
      <Atmosphere appearance={appearance} />
    </group>
  );
}

useTexture.preload(Object.values(EARTH_TEXTURES));
