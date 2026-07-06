---
version: alpha
name: AD ASTRA UC3M
description: Sistema visual digital para la landing page publica de la asociacion aeroespacial AD ASTRA UC3M.
colors:
  primary: "#4C52B3"
  secondary: "#8288E9"
  tertiary: "#B9BEFF"
  surface: "#FEFFEE"
  on-surface: "#2F3367"
  accent: "#FFDB5A"
typography:
  display-xl:
    fontFamily: Wild World
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0em
  display-lg:
    fontFamily: Wild World
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: 0em
  headline-lg:
    fontFamily: Wild World
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0em
  headline-md:
    fontFamily: Wild World
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0em
  headline-sm:
    fontFamily: Wild World
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0em
  title-lg:
    fontFamily: Bodoni 72
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0em
  body-lg:
    fontFamily: Bodoni 72
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-md:
    fontFamily: Bodoni 72
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: Bodoni 72
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label-md:
    fontFamily: Wild World
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0em
  label-sm:
    fontFamily: Bodoni 72
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0em
  caption:
    fontFamily: Bodoni 72
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0em
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 96px
  gutter-mobile: 24px
  gutter-desktop: 32px
  container-max: 1280px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 48px
  button-accent-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 48px
  button-secondary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px
    height: 48px
  card-standard:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-support:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  section-dark:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
  table-header-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-sm}"
    padding: "{spacing.sm}"
  table-header-dark:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.label-sm}"
    padding: "{spacing.sm}"
  table-row-alternate:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
  decorative-secondary:
    backgroundColor: "{colors.secondary}"
    height: 2px
  decorative-accent:
    backgroundColor: "{colors.accent}"
    height: 2px
  display-heading:
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
  brand-mark-on-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
  brand-mark-on-dark:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
---

# AD ASTRA UC3M Design System

## Overview

AD ASTRA debe transmitir ambicion aeroespacial, rigor universitario, conexion con el mundo empresarial y una estetica limpia, reconocible y elegante. La interfaz se dirige a alumnado, miembros de la asociacion, colaboradores y potenciales sponsors; debe sentirse tecnica, aspiracional y premium, nunca infantil ni informal.

El sistema prioriza una idea principal por seccion, jerarquias evidentes y grandes areas de espacio negativo. Cada pantalla debe conservar la identidad incluso al retirar el logotipo: crema en vez de blanco, azul muy oscuro en vez de negro, azul oficial como senal dominante y amarillo como acento escaso.

La fuente normativa es el [Manual de identidad visual AD ASTRA](src/assets/Manual_identidad_visual_AD_ASTRA.pdf), version 1.0. Este archivo adapta sus reglas a interfaces web sin sustituirlo.

## Colors

La paleta oficial tiene seis colores y no admite sustituciones decorativas externas:

- **Primary - Azul oficial (`#4C52B3`):** color mas reconocible de la marca. Domina titulos, acciones principales, elementos institucionales y piezas clave.
- **Secondary - Azul medio (`#8288E9`):** apoyo para divisores, bloques secundarios, fondos suaves y elementos no textuales. No sustituye al azul oficial.
- **Tertiary - Azul claro (`#B9BEFF`):** fondos ligeros, separacion de secciones y superficies de apoyo.
- **Surface - Crema claro (`#FEFFEE`):** fondo base y sustituto obligatorio del blanco puro.
- **On surface - Azul muy oscuro (`#2F3367`):** texto principal, fondos oscuros y sustituto obligatorio del negro puro.
- **Accent - Amarillo (`#FFDB5A`):** llamadas a la accion prioritarias, lineas, iconos, subrayados, fechas o cifras clave. Nunca debe dominar una superficie grande.

Combinaciones recomendadas para texto normal por contraste WCAG AA:

- `{colors.on-surface}` sobre `{colors.surface}`.
- `{colors.primary}` sobre `{colors.surface}` y la combinacion inversa.
- `{colors.surface}` sobre `{colors.primary}` o `{colors.on-surface}`.
- `{colors.on-surface}` sobre `{colors.tertiary}` o `{colors.accent}`.

No usar `{colors.secondary}` para texto normal sobre crema: su contraste es insuficiente. Reservarlo para elementos decorativos, texto grande o componentes donde se verifique el contraste de forma especifica.

## Typography

La voz tipografica combina identidad aeroespacial y formalidad institucional:

- **WILD WORLD:** logotipo verbal, heroes, titulos de campana, encabezados y etiquetas de accion breves. Se escribe en mayusculas y nunca forma parrafos.
- **Bodoni 72:** subtitulos, cuerpo, pies, metadatos y comunicaciones formales. Debe conservar un interlineado generoso.
- **Fallback de display:** `Arial Black`, `Impact`, `system-ui`, `sans-serif` cuando WILD WORLD no este disponible.
- **Fallback de lectura:** `Bodoni MT`, `Didot`, `Bodoni Moda`, `Georgia`, `serif` cuando Bodoni 72 no este disponible.

Los displays se reducen por breakpoint sin escalar continuamente con el ancho del viewport. El cuerpo nunca baja de 16px para contenido principal. Mantener `letter-spacing: 0`; la personalidad debe proceder de la fuente, no de comprimir o expandir artificialmente las letras.

## Layout

La landing utiliza una cuadricula fluida mobile-first con contenido centrado y un ancho maximo de `1280px`.

- **Margenes:** 24px en movil y 32px desde tablet; aumentar el espacio lateral en pantallas amplias sin superar el contenedor.
- **Ritmo:** escala base de 4px, con 8px para microespacio, 16-32px dentro de componentes y 64-96px entre secciones.
- **Composicion:** una idea principal por bloque, un maximo de dos niveles de jerarquia y suficiente espacio vacio alrededor del contenido.
- **Responsive:** apilar contenido en movil; activar columnas solo cuando cada bloque conserve una anchura legible. No ocultar informacion esencial por breakpoint.
- **Imagenes:** mostrar proyectos, equipo y actividad real de la asociacion. Evitar imagenes atmosfericas que no permitan inspeccionar el objeto o la actividad principal.
- **Firma:** en imagenes y piezas graficas, colocar el isotipo preferentemente abajo a la derecha con un margen minimo equivalente al 4% del ancho de la pieza.

## Elevation & Depth

La profundidad se expresa mediante contraste tonal, separadores finos y cambios de superficie, no mediante sombras pesadas. El crema, el azul claro y el azul muy oscuro crean niveles suficientemente claros.

- Las superficies principales son planas y limpias.
- Las tarjetas pueden usar un borde fino azul claro o un cambio tonal; las sombras, si son necesarias para legibilidad, deben ser discretas y funcionales.
- No aplicar sombras, brillos, degradados agresivos, contornos ni efectos 3D al logotipo.
- Las animaciones decorativas deben quedar visualmente separadas del logo. El logo no rota, no se inclina y no se deforma.

## Shapes

La forma general es precisa y sobria. Usar esquinas rectas o radios pequenos para conservar el tono tecnico.

- **Contenedores y tarjetas:** radio maximo habitual de 8px.
- **Botones e inputs:** 4px, con una silueta estable entre estados.
- **Circulos:** reservar `full` para avatares, indicadores, nodos orbitales y la version circular oficial para redes.
- **Iconos:** trazos simples, geometricos y reconocibles. Mantener un peso visual consistente; no mezclar familias sin motivo.
- **Logotipo:** conservar siempre su proporcion original y un area libre minima equivalente a la altura de las letras "AD" del propio logo.

## Components

### Brand Marks

- Usar `src/assets/full_logo.png` cuando haya espacio y la marca deba quedar explicita.
- Usar `src/assets/logo_no_text.png` como firma, marca de agua o aplicacion reducida.
- Usar `src/assets/circle_logo.png` para perfiles y formatos circulares, centrado y con respiracion.
- En fondos claros, usar azul oficial; en fondos oscuros o fotograficos limpios, usar la version crema.
- No deformar, inclinar, recortar, recolorear, rotar ni aplicar efectos al logo. No usar capturas ni versiones de baja resolucion.

### Navigation

La navegacion debe ser compacta y predecible. Mostrar el logo o wordmark como enlace de inicio, resaltar la ruta activa con color o subrayado amarillo y mantener objetivos tactiles de al menos 44px. En movil, el menu debe abrirse mediante un boton de icono con etiqueta accesible y conservar acceso directo a la accion de unirse.

### Heroes

El hero presenta una sola propuesta: nombre o proyecto, una descripcion breve y una accion principal. Puede usar fondo crema con marca azul o fondo azul muy oscuro con marca crema. El contenido siguiente debe quedar parcialmente visible para indicar continuidad.

### Buttons

- `button-primary` es la accion habitual y utiliza azul oficial.
- `button-accent` se reserva para el CTA mas importante de la vista; no repetir varios botones amarillos con igual jerarquia.
- `button-secondary` mantiene fondo crema y texto azul para acciones de menor prioridad.
- Todos los estados deben conservar contraste, foco visible y dimensiones estables. Las etiquetas son cortas y en WILD WORLD.

### Cards and Project Lists

Las tarjetas solo enmarcan elementos repetidos o proyectos individuales; no convertir secciones completas en tarjetas flotantes. Priorizar titulo, imagen real, estado o disciplina y una accion clara. Evitar tarjetas anidadas y ornamentacion sin funcion.

### Forms

Las etiquetas permanecen visibles fuera del campo. El foco utiliza azul oficial o amarillo con contraste suficiente. Los errores deben comunicarse con texto e icono, no solo con color; si se introduce un color semantico externo por necesidad tecnica, limitarlo al estado y no incorporarlo a la paleta de marca.

### Tables and Data Graphics

Las cabeceras usan azul oficial o azul muy oscuro con texto crema. Las filas alternas pueden combinar crema y azul claro. En graficos, azul oficial es la serie principal, los azules de apoyo son series secundarias y amarillo destaca un unico dato clave.

### Motion

Las transiciones son breves, discretas y funcionales. Evitar movimiento continuo salvo ambientacion muy sutil. Cualquier orbita o decoracion espacial se anima independientemente del logotipo y debe detenerse con `prefers-reduced-motion: reduce`.

## Do's and Don'ts

**Do:**

- Hacer que el azul oficial sea la senal de marca dominante.
- Sustituir blanco y negro puros por crema y azul muy oscuro.
- Usar amarillo solo para dirigir la atencion a una accion o dato concreto.
- Mantener titulares grandes, subtitulos contenidos y cuerpo claramente legible.
- Dejar espacio vacio suficiente y limitar cada seccion a una idea principal.
- Usar archivos de logo oficiales, con alto contraste y area de seguridad.
- Mantener una experiencia coherente entre web, redes, presentaciones y documentos.
- Verificar contraste, foco, navegacion por teclado y reduccion de movimiento.

**Don't:**

- No introducir colores externos como decoracion ni convertir el amarillo en fondo dominante.
- No usar WILD WORLD para parrafos o bloques extensos.
- No saturar una vista con texto, tarjetas, niveles de jerarquia o adornos.
- No deformar, rotar, recortar, recolorear ni aplicar sombras, 3D o degradados al logo.
- No colocar la marca sobre fotografias cargadas o zonas de bajo contraste.
- No usar azul medio como texto normal sobre crema sin comprobar antes el contraste.
- No crear interfaces infantiles, informales, excesivamente redondeadas o con efectos visuales gratuitos.
