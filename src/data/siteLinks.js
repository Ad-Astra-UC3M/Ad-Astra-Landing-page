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

const SPONSOR_EMAIL = "sponsors@adastrauc3m.es";

export function getSponsorEmailLink(projectName) {
	const subject = projectName
		? `Colaboración como sponsor · ${projectName}`
		: "Colaboración como sponsor · Ad Astra UC3M";
	const body = projectName
		? `Hola, me gustaría conocer las opciones para colaborar con el proyecto ${projectName}.`
		: "Hola, me gustaría conocer las opciones para colaborar como sponsor de Ad Astra UC3M.";

	return `mailto:${SPONSOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
