import * as THREE from "three";

const TEXTURE_ROOT = "/textures/solar-system-scope";

export const EARTH_TEXTURES = {
  day: `${TEXTURE_ROOT}/earth-day-4k.jpg`,
  night: `${TEXTURE_ROOT}/earth-night-4k.png`,
  clouds: `${TEXTURE_ROOT}/earth-clouds-4k.webp`,
  normal: `${TEXTURE_ROOT}/earth-normal.png`,
  specular: `${TEXTURE_ROOT}/earth-specular.png`,
  stars: `${TEXTURE_ROOT}/stars-milky-way-4k.jpg`,
};

export const SUN_DIRECTION = new THREE.Vector3(-5, 3.5, 1.5).normalize();

export const BASE_ROTATION = {
  x: THREE.MathUtils.degToRad(20),
  y: THREE.MathUtils.degToRad(-88),
  z: THREE.MathUtils.degToRad(-7),
};

export const INTERACTION = {
  strengthX: 0.3,
  strengthY: 0.2,
  smoothing: 4,
};

/**
 * Controles visuales de alto nivel para la Tierra.
 * Las intensidades admiten 0 para desactivar el efecto; los valores por
 * defecto están calibrados para el hero.
 */
export const DEFAULT_EARTH_APPEARANCE = Object.freeze({
  sunlight: 0.98,
  ambientLight: 0.015,
  terminatorSoftness: 0.4,
  cityBrightness: 1.32,
  cityColor: "#ff9e40",
  oceanGlint: 0.13,
  oceanGlintSize: 0.22,
  normalStrength: 0.14,
  cloudOpacity: 0.68,
  atmosphereStrength: 0.24,
  atmosphereColor: "#70b8ff",
  atmosphereThickness: 0.018,
  scale: 1.45,
});

export const DEFAULT_SPACE_APPEARANCE = Object.freeze({
  panoramaIntensity: 0.72,
  panoramaBlurriness: 0.025,
  starCount: 5200,
  starSize: 2.5,
  starSaturation: 0.12,
  starSpeed: 0.05,
});

export function resolveAppearance(defaults, overrides) {
  return { ...defaults, ...overrides };
}

export function configureSurfaceTexture(texture, color = false) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.anisotropy = 4;
}
