# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

La web se dirige a empresas y posibles patrocinadores del sector aeroespacial, colaboradores, estudiantes de la UC3M y personas interesadas en conocer o incorporarse a Ad Astra.

La estrategia documentada sitúa primero la captación de sponsors y colaboradores y, después, la incorporación de miembros. La interfaz actual da mayor prominencia visual a «Únete a nosotros» en varios puntos; confirmar si esto representa un cambio de prioridad antes de modificar la estrategia o la jerarquía de llamadas a la acción.

## Product Purpose

Presentar públicamente a Ad Astra UC3M, una asociación estudiantil de ingeniería aeroespacial fundada en 2026. La web debe generar credibilidad, proyectar el trabajo de la asociación desde la UC3M hacia la industria y posibles colaboradores, y ofrecer vías claras para colaborar o incorporarse.

El éxito consiste en que una persona pueda entender en pocos segundos qué es Ad Astra, qué tipo de trabajo desarrolla y cuál es la siguiente acción adecuada para su relación con la asociación, sin confundir objetivos o trabajo en preparación con resultados demostrados.

## Positioning

Es la web institucional de una asociación universitaria que combina aprendizaje práctico, colaboración entre disciplinas y proyectos aeroespaciales como vehículo para aprender haciendo. Su propuesta se apoya en mostrar trabajo técnico concreto y oportunidades reales de participación o colaboración, no en presentarse como un portfolio personal ni en recurrir a promesas tecnológicas genéricas.

## Operating Context

- La experiencia principal es una landing pública en español para personas que evalúan la asociación desde fuera: industria, posibles colaboradores, alumnado y futuros miembros.
- La página de inicio reúne la presentación institucional, los proyectos, las áreas técnicas, el equipo, la colaboración con sponsors y la incorporación de miembros.
- Los tres proyectos principales documentados son SIGMA, Rocket A4 y Jet Engine. En la implementación actual se resumen mediante tarjetas y se amplían en un diálogo controlado por la URL.
- La colaboración con sponsors se inicia actualmente mediante correo electrónico a `sponsors@adastrauc3m.es`.
- La asociación utiliza formularios externos como capa ligera de recogida de información. La web todavía no dispone de un flujo propio de formularios, backend, API, CMS ni panel de administración.
- La iniciativa Bootcamp aparece en la página de inicio y dispone de rutas reservadas, pero su página está vacía y el enlace de inscripción sigue siendo un placeholder; no debe presentarse como operativa hasta completar y validar el flujo.

## Capabilities and Constraints

- La implementación actual es una SPA en React y Vite. `RootLayout` coordina SEO, navegación, pie, contenido enrutado y restauración del scroll.
- El hero incorpora una Tierra interactiva con Three.js y Motion. Deben conservarse el estado de carga, el fallback cuando WebGL no está disponible, la respuesta a `prefers-reduced-motion` y la atención al rendimiento en dispositivos móviles.
- Las rutas independientes de proyectos, equipo, incorporación y sponsors redirigen actualmente a secciones o diálogos de la landing; no son páginas de contenido completas.
- El dominio canónico declarado en el código es `https://adastrauc3m.es`. El proveedor de hosting de producción no está confirmado; la existencia de configuración de reescritura para Vercel no demuestra por sí sola dónde está desplegada la web.
- Toda afirmación técnica pública debe distinguir entre requisito de competición, objetivo interno, diseñado o modelado, simulado, prototipado, probado y logrado en competición. El código demuestra qué texto se muestra, no que la afirmación haya sido validada.
- Las métricas, fechas de competición, estado de participación, imágenes y resultados de proyecto requieren evidencia, validación técnica y autorización de publicación vigentes antes de presentarse como hechos.
- Decisión abierta: confirmar si la prioridad de producto sigue siendo sponsors y colaboradores antes que incorporación de miembros, o si debe alinearse con la jerarquía visual actual centrada en «Únete».

## Brand Commitments

- Nombre público: Ad Astra UC3M.
- Identidad: asociación estudiantil de ingeniería aeroespacial de la Universidad Carlos III de Madrid, fundada en 2026.
- Personalidad: ambiciosa, cercana y rigurosa.
- Marco cultural: aprender haciendo, combinar disciplinas y permanecer abierta a quienes quieran aportar.
- La comunicación debe transmitir ilusión por construir proyectos aeroespaciales reales sin convertir requisitos, objetivos o trabajo en preparación en logros no demostrados.
- El manual de identidad visual y los recursos oficiales del repositorio son vinculantes para el uso de la marca; `DESIGN.md` documenta su adaptación a interfaces digitales.
- «Ingeniería para llegar a las estrellas» y «Dreaming is Looking» son textos utilizados actualmente en la web, pero no constituyen un lema oficial resuelto. Decisión abierta: confirmar cuál es la línea canónica, si debe existir una sola.

## Evidence on Hand

- `src/assets/Manual_identidad_visual_AD_ASTRA.pdf`: manual de identidad visual, versión 1.0.
- `src/assets/full_logo.png`, `src/assets/logo_no_text.svg`, `src/assets/logo_no_text.png` y `src/assets/circle_logo.png`: recursos de marca disponibles en el repositorio.
- `src/assets/projects/`: imágenes conceptuales de SIGMA, Rocket A4 y Jet Engine; la interfaz las etiqueta como «VISUAL CONCEPTUAL» y no deben presentarse como prototipos o sistemas construidos.
- `src/assets/about/` y `src/assets/sponsors/`: recursos gráficos y audiovisuales utilizados para explicar la asociación y la colaboración.
- `public/textures/solar-system-scope/ATTRIBUTION.md`: procedencia y condiciones de atribución de las texturas del hero.
- El repositorio contiene copy y métricas de proyecto visibles, pero no contiene por sí solo la cadena completa de evidencia, validación técnica y autorización pública necesaria para tratarlas como logros confirmados.
- No hay testimonios, casos de éxito, cobertura de prensa ni resultados de competición verificados en el repositorio que puedan añadirse como prueba social sin una fuente nueva.

## Product Principles

- Priorizar la credibilidad técnica y la proyección externa de la asociación.
- Explicar cada proyecto con rapidez, manteniendo clara la diferencia entre intención, requisito, trabajo realizado y resultado demostrado.
- Dar a cada audiencia una siguiente acción comprensible sin ocultar la prioridad estratégica que se acuerde.
- Mantener una voz ambiciosa y accesible para públicos técnicos y no técnicos.
- Reservar el detalle de subsistemas y métricas para contextos donde pueda acompañarse de estado, evidencia y aprobación.

## Accessibility & Inclusion

Mantener como referencia WCAG 2.2 nivel AA, navegación por teclado, contraste legible, estructura semántica, objetivos táctiles adecuados y respeto por la preferencia de movimiento reducido.
