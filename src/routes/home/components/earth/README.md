# Controles visuales de la Tierra

`InteractiveModel` acepta una propiedad `appearance`. Sólo es necesario
indicar los valores que se quieran cambiar; el resto se toma de
`DEFAULT_EARTH_APPEARANCE`.

```jsx
<InteractiveModel
  appearance={{
    sunlight: 1.1,
    cityBrightness: 1.5,
    atmosphereStrength: 0.2,
  }}
/>
```

## Apariencia terrestre

| Propiedad | Rango útil | Efecto |
| --- | ---: | --- |
| `sunlight` | 0–2 | Intensidad de la cara iluminada. |
| `ambientLight` | 0–0.1 | Detalle mínimo conservado en superficie. |
| `terminatorSoftness` | 0.05–1 | Suavidad de la frontera entre día y noche. |
| `cityBrightness` | 0–3 | Intensidad de las luces nocturnas. |
| `cityColor` | color CSS | Color de las luces urbanas. |
| `oceanGlint` | 0–1 | Intensidad del reflejo solar sobre el océano. |
| `oceanGlintSize` | 0–1 | Tamaño del reflejo; valores altos lo ensanchan. |
| `normalStrength` | 0–0.5 | Intensidad visual del relieve. |
| `cloudOpacity` | 0–1 | Opacidad de las nubes. |
| `atmosphereStrength` | 0–1 | Brillo del halo atmosférico. |
| `atmosphereColor` | color CSS | Color del halo. |
| `atmosphereThickness` | 0.005–0.05 | Separación del halo respecto al planeta. |
| `scale` | 0.5–2 | Tamaño del planeta en el hero. |

## Apariencia del espacio

`SpaceBackground` acepta otra propiedad `appearance` con estos controles:

| Propiedad | Rango útil | Efecto |
| --- | ---: | --- |
| `panoramaIntensity` | 0–1.5 | Visibilidad de la Vía Láctea. |
| `panoramaBlurriness` | 0–1 | Suavizado de la panorámica. |
| `starCount` | 0–10000 | Cantidad de estrellas procedurales. |
| `starSize` | 0.5–5 | Tamaño aparente de las estrellas. |
| `starSaturation` | 0–1 | Variación de color de las estrellas. |
| `starSpeed` | 0–1 | Velocidad ambiental; se anula con movimiento reducido. |
