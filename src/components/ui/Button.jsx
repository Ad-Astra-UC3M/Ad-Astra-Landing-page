import { Link } from "react-router";

import { buttonClassName } from "./buttonStyles";

/**
 * Boton reutilizable para acciones, rutas internas y enlaces externos.
 *
 * Uso basico:
 *   <Button>Guardar cambios</Button>
 *   <Button to="/projects">Ver proyectos</Button>
 *   <Button href="https://example.com">Visitar web</Button>
 *
 * Que renderiza:
 * - `to` crea un Link de React Router para rutas internas.
 * - `href` crea un enlace HTML para paginas externas.
 * - Sin ambos crea un boton HTML para usar con `onClick` o formularios.
 *
 * Opciones de estilo:
 * - variant: solid, soft, outline o ghost.
 * - color: brand, surface o una paleta de Tailwind.
 * - size: sm, md o lg.
 *
 * Los valores por defecto son `solid`, `brand`, `md` y `type="button"`.
 * Consulta Button.md para ver ejemplos y reglas de uso.
 */
export default function Button({
	to,
	href,
	variant = "solid",
	color = "brand",
	size = "md",
	className,
	type,
	...props
}) {
	const buttonClasses = buttonClassName({ variant, color, size, className });

	if (to) {
		return <Link to={to} className={buttonClasses} {...props} />;
	}

	if (href) {
		return <a href={href} className={buttonClasses} {...props} />;
	}

	return (
		<button type={type ?? "button"} className={buttonClasses} {...props} />
	);
}
