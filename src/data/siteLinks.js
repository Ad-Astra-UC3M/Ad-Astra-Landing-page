export const sectionLinks = {
	home: "/#home",
	projects: "/#projects",
	sponsors: "/#sponsors",
	about: "/#about",
	join: "/#join",
};

export const projectLinks = {
	sigma: "/?project=sigma#projects",
	"rocket-a4": "/?project=rocket-a4#projects",
	"jet-engine": "/?project=jet-engine#projects",
};

export function isNavigationTargetActive(location, item) {
	if (location.pathname !== "/") return false;

	if (item.projectSlug) {
		return (
			location.hash === "#projects" &&
			new URLSearchParams(location.search).get("project") === item.projectSlug
		);
	}

	if (item.sectionId === "home") {
		return location.hash === "" || location.hash === "#home";
	}

	return location.hash === `#${item.sectionId}`;
}

const SPONSOR_EMAIL = "sponsors@adastra.com";

export function getSponsorEmailLink(projectName) {
	const subject = projectName
		? `Colaboración como sponsor · ${projectName}`
		: "Colaboración como sponsor · Ad Astra UC3M";
	const body = projectName
		? `Hola, me gustaría conocer las opciones para colaborar con el proyecto ${projectName}.`
		: "Hola, me gustaría conocer las opciones para colaborar como sponsor de Ad Astra UC3M.";

	return `mailto:${SPONSOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
