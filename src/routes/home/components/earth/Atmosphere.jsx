import { useMemo } from "react";
import * as THREE from "three";

import { SUN_DIRECTION } from "./earthConfig";
import vertexShader from "./shaders/surface.vert.glsl?raw";
import fragmentShader from "./shaders/atmosphere.frag.glsl?raw";

export default function Atmosphere({ appearance }) {
  const uniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color(appearance.atmosphereColor) },
      sunDirection: { value: SUN_DIRECTION },
      intensity: { value: appearance.atmosphereStrength },
    }),
    [appearance.atmosphereColor, appearance.atmosphereStrength],
  );

  return (
    <mesh scale={1 + appearance.atmosphereThickness}>
      <sphereGeometry args={[1, 128, 64]} />
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={fragmentShader}
        side={THREE.BackSide}
        transparent
        uniforms={uniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}
