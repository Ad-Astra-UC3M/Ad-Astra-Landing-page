uniform vec3 glowColor;
uniform vec3 sunDirection;
uniform float intensity;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float rim = pow(1.0 - abs(dot(normal, viewDirection)), 5.2);
  float sunlight = smoothstep(-0.32, 0.5, dot(normal, sunDirection));
  float atmosphere = rim * intensity * mix(0.025, 1.0, sunlight);
  gl_FragColor = vec4(glowColor, atmosphere);
}
