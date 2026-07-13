uniform sampler2D dayMap;
uniform sampler2D nightMap;
uniform sampler2D normalMap;
uniform sampler2D specularMap;
uniform vec3 sunDirection;
uniform vec3 cityColor;
uniform float sunlight;
uniform float ambientLight;
uniform float terminatorSoftness;
uniform float cityBrightness;
uniform float oceanGlint;
uniform float oceanGlintSize;
uniform float normalStrength;

varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

mat3 cotangentFrame(vec3 normal, vec3 position, vec2 uv) {
  vec3 positionX = dFdx(position);
  vec3 positionY = dFdy(position);
  vec2 uvX = dFdx(uv);
  vec2 uvY = dFdy(uv);
  vec3 tangent = positionX * uvY.y - positionY * uvX.y;
  vec3 bitangent = -positionX * uvY.x + positionY * uvX.x;
  float scale = inversesqrt(max(dot(tangent, tangent), dot(bitangent, bitangent)));
  return mat3(tangent * scale, bitangent * scale, normal);
}

void main() {
  vec3 baseNormal = normalize(vWorldNormal);
  vec3 sampledNormal = texture2D(normalMap, vUv).xyz * 2.0 - 1.0;
  sampledNormal.xy *= normalStrength;
  vec3 surfaceNormal = normalize(
    cotangentFrame(baseNormal, vWorldPosition, vUv) * sampledNormal
  );

  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float lightFacing = dot(surfaceNormal, sunDirection);
  float softness = max(terminatorSoftness, 0.001);
  float daylight = smoothstep(-softness * 0.6, softness * 0.4, lightFacing);
  float diffuse = max(lightFacing, 0.0);

  vec3 dayColor = texture2D(dayMap, vUv).rgb;
  float cityMask = texture2D(nightMap, vUv).r;
  float oceanMask = texture2D(specularMap, vUv).r;

  vec3 reflectedSun = reflect(-sunDirection, surfaceNormal);
  float glintExponent = mix(260.0, 65.0, clamp(oceanGlintSize, 0.0, 1.0));
  float sunGlint = pow(max(dot(reflectedSun, viewDirection), 0.0), glintExponent);
  sunGlint *= oceanMask * daylight * oceanGlint;

  float nightSide = 1.0 - smoothstep(-softness * 0.45, softness * 0.2, lightFacing);
  vec3 surface = dayColor * (ambientLight + diffuse * sunlight) * daylight;
  vec3 cities = cityColor * pow(cityMask, 1.18) * nightSide * cityBrightness;
  vec3 specular = vec3(1.0, 0.78, 0.52) * sunGlint;

  gl_FragColor = vec4(surface + cities + specular, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
