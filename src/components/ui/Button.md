# Button

`Button` permite usar el mismo diseño para botones y enlaces sin repetir clases
de Tailwind.

## Importar

```jsx
import Button from "../../../components/ui/Button";
```

La cantidad de `../` cambia según la carpeta desde la que se importe.

## Tres formas de usarlo

### Ruta interna

Usa `to` para navegar con React Router sin recargar la página:

```jsx
<Button to="/projects">Ver proyectos</Button>
```

### Enlace externo

Usa `href` para abrir otra web:

```jsx
<Button href="https://example.com" target="_blank" rel="noreferrer">
  Visitar web
</Button>
```

### Acción

Sin `to` ni `href`, el componente crea un botón HTML:

```jsx
<Button onClick={handleSave}>Guardar cambios</Button>
```

## Estilos

Los valores predeterminados son:

```jsx
<Button variant="solid" color="brand" size="md">
  Guardar cambios
</Button>
```

Por tanto, normalmente basta con escribir:

```jsx
<Button>Guardar cambios</Button>
```

### Variantes

| Valor | Apariencia | Uso |
| --- | --- | --- |
| `solid` | Fondo relleno | Acción principal |
| `soft` | Fondo suave | Acción secundaria |
| `outline` | Borde visible | Alternativa a la principal |
| `ghost` | Sin fondo ni borde | Acción terciaria |

```jsx
<Button variant="outline">Más información</Button>
```

### Colores

- `accent`: amarillo de marca para la acción prioritaria de la vista.
- `brand`: paleta principal de Ad Astra.
- `surface`: texto y superficies claras para fondos oscuros.
- `indigo`, `sky`, `emerald`, `rose`, `amber` y `slate`: paletas de Tailwind.

```jsx
<Button color="emerald">Confirmar</Button>
```

```jsx
<Button color="accent">Enviar formulario</Button>
```

### Tamaños

| Valor | Uso |
| --- | --- |
| `sm` | Navbar y espacios pequeños |
| `md` | Tamaño normal |
| `lg` | CTA y acciones destacadas |

```jsx
<Button size="lg">Únete a nosotros</Button>
```

## Ejemplo sobre fondo oscuro

```jsx
<Button
  to="/sponsors"
  variant="outline"
  color="surface"
  size="lg"
>
  Colabora como sponsor
</Button>
```

## Reglas rápidas

- Usa `to` para rutas internas y `href` para páginas externas.
- No combines `to` y `href`. Si existen ambos, `to` tiene prioridad.
- Usa `type="submit"` para enviar un formulario.
- `disabled` funciona en botones HTML, pero no bloquea enlaces.
- Usa `className` para layout, por ejemplo `w-full sm:w-auto`.
- Mantén `color="brand"` salvo que el fondo o el significado pidan otra paleta.

