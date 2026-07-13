import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

import {
  DEFAULT_SPACE_APPEARANCE,
  EARTH_TEXTURES,
  resolveAppearance,
} from "./earthConfig";
import useReducedMotion from "./useReducedMotion";

export default function SpaceBackground({ appearance: appearanceOverrides }) {
  const appearance = resolveAppearance(DEFAULT_SPACE_APPEARANCE, appearanceOverrides);
  const stars = useTexture(EARTH_TEXTURES.stars);
  const scene = useThree((state) => state.scene);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const previousBackground = scene.background;
    const previousIntensity = scene.backgroundIntensity;
    const previousBlurriness = scene.backgroundBlurriness;

    stars.mapping = THREE.EquirectangularReflectionMapping;
    stars.colorSpace = THREE.SRGBColorSpace;
    scene.background = stars;
    scene.backgroundIntensity = appearance.panoramaIntensity;
    scene.backgroundBlurriness = appearance.panoramaBlurriness;

    return () => {
      scene.background = previousBackground;
      scene.backgroundIntensity = previousIntensity;
      scene.backgroundBlurriness = previousBlurriness;
    };
  }, [
    appearance.panoramaBlurriness,
    appearance.panoramaIntensity,
    scene,
    stars,
  ]);

  return (
    <Stars
      count={appearance.starCount}
      depth={35}
      factor={appearance.starSize}
      fade
      radius={70}
      saturation={appearance.starSaturation}
      speed={reducedMotion ? 0 : appearance.starSpeed}
    />
  );
}
