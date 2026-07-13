import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

import {
  configureSurfaceTexture,
  EARTH_TEXTURES,
  SUN_DIRECTION,
} from "./earthConfig";
import vertexShader from "./shaders/surface.vert.glsl?raw";
import fragmentShader from "./shaders/clouds.frag.glsl?raw";

export default function CloudLayer({ appearance }) {
  const clouds = useTexture(EARTH_TEXTURES.clouds);
  configureSurfaceTexture(clouds, true);

  const uniforms = useMemo(
    () => ({
      cloudMap: { value: clouds },
      sunDirection: { value: SUN_DIRECTION },
      sunlight: { value: appearance.sunlight },
      terminatorSoftness: { value: appearance.terminatorSoftness },
      cloudOpacity: { value: appearance.cloudOpacity },
    }),
    [
      appearance.cloudOpacity,
      appearance.sunlight,
      appearance.terminatorSoftness,
      clouds,
    ],
  );

  return (
    <mesh scale={1.006}>
      <sphereGeometry args={[1, 128, 64]} />
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        transparent
        uniforms={uniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}
