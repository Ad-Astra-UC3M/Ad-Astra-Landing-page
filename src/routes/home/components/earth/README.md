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

Las nubes derivan de forma independiente y completan una vuelta cada 15
minutos. El efecto se desactiva cuando la persona solicita reducir movimiento.
La textura de nubes conserva una resolución de 2048 × 1024, pero almacena la
opacidad como una máscara WebP en escala de grises y sin canal alfa. El shader
lee el canal rojo y evita mantener una capa de transparencia separada.

## Campo de estrellas

`StarfieldCanvas` dibuja detrás de la Tierra entre 140 y 320 puntos 2D,
ligeramente más grandes que los anteriores y con un halo muy leve. Cada estrella
pulsa a su propio ritmo y mezcla de forma casi imperceptible tonalidades frías,
violetas y cálidas inspiradas en la Vía Láctea. El canvas se limita a 24 FPS,
reutiliza halos precalculados y queda estático cuando se solicita reducir
movimiento; no descarga una textura ni crea geometría WebGL adicional.
