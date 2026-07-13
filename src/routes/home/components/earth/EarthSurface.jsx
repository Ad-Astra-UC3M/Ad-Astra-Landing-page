import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import {
  configureSurfaceTexture,
  EARTH_TEXTURES,
  SUN_DIRECTION,
} from "./earthConfig";
import vertexShader from "./shaders/surface.vert.glsl?raw";
import fragmentShader from "./shaders/earth.frag.glsl?raw";

export default function EarthSurface({ appearance }) {
  const textures = useTexture({
    dayMap: EARTH_TEXTURES.day,
    nightMap: EARTH_TEXTURES.night,
    normalMap: EARTH_TEXTURES.normal,
    specularMap: EARTH_TEXTURES.specular,
  });

  configureSurfaceTexture(textures.dayMap, true);
  configureSurfaceTexture(textures.nightMap, true);
  configureSurfaceTexture(textures.normalMap);
  configureSurfaceTexture(textures.specularMap);

  const uniforms = useMemo(
    () => ({
      dayMap: { value: textures.dayMap },
      nightMap: { value: textures.nightMap },
      normalMap: { value: textures.normalMap },
      specularMap: { value: textures.specularMap },
      sunDirection: { value: SUN_DIRECTION },
      cityColor: { value: new THREE.Color(appearance.cityColor) },
      sunlight: { value: appearance.sunlight },
      ambientLight: { value: appearance.ambientLight },
      terminatorSoftness: { value: appearance.terminatorSoftness },
      cityBrightness: { value: appearance.cityBrightness },
      oceanGlint: { value: appearance.oceanGlint },
      oceanGlintSize: { value: appearance.oceanGlintSize },
      normalStrength: { value: appearance.normalStrength },
    }),
    [
      appearance.ambientLight,
      appearance.cityBrightness,
      appearance.cityColor,
      appearance.normalStrength,
      appearance.oceanGlint,
      appearance.oceanGlintSize,
      appearance.sunlight,
      appearance.terminatorSoftness,
      textures,
    ],
  );

  return (
    <mesh>
      <sphereGeometry args={[1, 128, 64]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}
