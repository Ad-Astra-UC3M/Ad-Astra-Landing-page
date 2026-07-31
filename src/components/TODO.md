# Tareas pendientes de componentes

## Wordmark animado con las letras SVG de AD ASTRA

Objetivo: sustituir el texto tipografico del hero por las letras originales del
logotipo sin perder la animacion escalonada de `TextSpanWrapper`.

### Recursos necesarios

- Guardar cada letra SVG en `src/assets/wordmark/`.
- Mantener el orden de lectura de `AD ASTRA` en el nombre o en un array de datos.
- Normalizar el `viewBox` y eliminar margenes transparentes de cada archivo.
- Usar la misma altura visual y la proporcion original de cada letra.

### Implementacion propuesta

1. Ampliar `TextSpanWrapper` para aceptar nodos React ademas de texto.
2. Cuando `children` no sea un string, convertirlo con
   `React.Children.toArray(children)` en lugar de `String(children)`.
3. Anadir una propiedad `ariaLabel` para conservar el nombre accesible del
   logotipo aunque los SVG sean decorativos.
4. Reutilizar cada nodo SVG en las dos capas que ya crea `TextSpanWrapper` para
   mantener la entrada y el desplazamiento vertical en hover.
5. Crear `src/components/brand/AnimatedWordmark.jsx`, importar alli las letras
   y definir su orden, espacio entre palabras y ajustes de kerning.
6. Renderizar cada SVG como una imagen decorativa con
   `className="block h-full w-auto"` y `alt=""`.
7. Sustituir `AD ASTRA` en `HeroSection.jsx` por `AnimatedWordmark`.

### Criterios de aceptacion

- El wordmark conserva las formas y el espaciado del logotipo oficial.
- La animacion mantiene el stagger actual y funciona en carga y hover.
- Con `prefers-reduced-motion` el logotipo aparece sin desplazamiento.
- El encabezado expone `AD ASTRA` a lectores de pantalla una sola vez.
- No hay saltos de layout ni recortes entre 320 px y escritorio.

