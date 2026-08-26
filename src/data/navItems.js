import { projectLinks, sectionLinks } from "./siteLinks";

const navItems = [
	{ label: "Inicio", to: sectionLinks.home },
	{
		label: "Proyectos",
		children: [
			{ 
				label: "SIGMA", 
				to: projectLinks["sigma"] 
			},
			{
				label: "Rocket A4",
				to: projectLinks["rocket-a4"],
			},
			{
				label: "Jet Engine",
				to: projectLinks["jet-engine"],
			},
			{
				label: "Todos los proyectos",
				to: sectionLinks.projects,
				hasDividerBefore: true,
			},
		],
	},
	{ label: "Sponsors", to: sectionLinks.sponsors },
	{ label: "Equipo", to: sectionLinks.about },
];

export default navItems;
