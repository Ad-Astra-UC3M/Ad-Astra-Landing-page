uniform sampler2D cloudMap;
uniform vec3 sunDirection;
uniform float sunlight;
uniform float terminatorSoftness;
uniform float cloudOpacity;

varying vec2 vUv;
varying vec3 vWorldNormal;

void main() {
  vec4 cloudSample = texture2D(cloudMap, vUv);
  float lightFacing = dot(normalize(vWorldNormal), sunDirection);
  float softness = max(terminatorSoftness, 0.001);
  float daylight = smoothstep(-softness * 0.7, softness * 0.3, lightFacing);
  float diffuse = max(lightFacing, 0.0);
  vec3 cloudColor = vec3(0.7, 0.78, 0.88) * (0.06 + diffuse * sunlight * 0.92);

  gl_FragColor = vec4(cloudColor, cloudSample.a * daylight * cloudOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
