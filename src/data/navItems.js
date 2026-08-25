import { projectLinks, sectionLinks } from "./siteLinks";

const navItems = [
	{ label: "Inicio", to: sectionLinks.home, sectionId: "home" },
	{
		label: "Proyectos",
		children: [
			{ label: "SIGMA", to: projectLinks["sigma"], projectSlug: "sigma" },
			{
				label: "Rocket A4",
				to: projectLinks["rocket-a4"],
				projectSlug: "rocket-a4",
			},
			{
				label: "Jet Engine",
				to: projectLinks["jet-engine"],
				projectSlug: "jet-engine",
			},
			{
				label: "Todos los proyectos",
				to: sectionLinks.projects,
				sectionId: "projects",
				hasDividerBefore: true,
			},
		],
	},
	{ label: "Sponsors", to: sectionLinks.sponsors, sectionId: "sponsors" },
	{ label: "Equipo", to: sectionLinks.about, sectionId: "about" },
];

export default navItems;
