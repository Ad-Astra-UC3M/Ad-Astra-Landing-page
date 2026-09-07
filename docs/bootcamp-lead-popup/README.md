# Popup de captación del Bootcamp

Campaña temporal de captación de emails mediante Tally, sin backend propio.

## Formulario

- Form ID: `Y56oO0`
- URL: https://tally.so/r/Y56oO0
- Hidden fields: `utm_source` y `utm_content`

## Enlaces de campaña

| Canal | URL |
| --- | --- |
| QR | https://adastrauc3m.es/?utm_source=qr |
| Instagram | https://adastrauc3m.es/?utm_source=instagram |
| Instagram · bio | https://adastrauc3m.es/?utm_source=instagram&utm_content=bio |
| Instagram · stories | https://adastrauc3m.es/?utm_source=instagram&utm_content=stories |
| Tráfico directo | https://adastrauc3m.es/ |

Para crear una variante nueva, conserva `utm_source` para el canal y usa `utm_content` para distinguir la ubicación o creatividad:

```text
https://adastrauc3m.es/?utm_source=CANAL&utm_content=VARIANTE
```

## Funcionamiento

- El tráfico con `utm_source=qr` abre el popup al entrar.
- El resto del tráfico lo abre al alcanzar el 30 % de scroll.
- `sessionStorage` conserva la atribución aunque cambie la ruta.
- El popup solo se muestra una vez por sesión, aunque se cierre.

La integración está aislada en `src/components/BootcampLeadPopup.jsx` y se monta una sola vez desde `RootLayout.jsx`.

Para retirar la campaña, elimina el componente, su importación y `<BootcampLeadPopup />` de `RootLayout.jsx`. Este README puede conservarse como referencia para futuras campañas.

Para repetir las pruebas durante el desarrollo, abre una ventana privada nueva o borra el almacenamiento de sesión del sitio.
