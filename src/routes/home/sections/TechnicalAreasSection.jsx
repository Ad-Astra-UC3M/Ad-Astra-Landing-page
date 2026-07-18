import avionicsControlImage from "../../../assets/technical-areas/avionics-control.png";
import designSimulationImage from "../../../assets/technical-areas/design-simulation.png";
import propulsionImage from "../../../assets/technical-areas/propulsion.png";
import recoveryMissionImage from "../../../assets/technical-areas/recovery-mission.png";
import softwareDataImage from "../../../assets/technical-areas/software-data.png";
import structuresMechanismsImage from "../../../assets/technical-areas/structures-mechanisms.png";

const technicalAreas = [
	{
		title: "Diseño y simulación",
		description:
			"Convertimos ideas en sistemas evaluables con CAD, CFD, análisis estructural y herramientas de misión.",
		image: designSimulationImage,
	},
	{
		title: "Aviónica y control",
		description:
			"Electrónica, telemetría y software de control para medir, comunicar y tomar decisiones en vuelo.",
		image: avionicsControlImage,
	},
	{
		title: "Estructuras y mecanismos",
		description:
			"Sistemas ligeros, mecanismos de separación y soluciones preparadas para las exigencias de cada misión.",
		image: structuresMechanismsImage,
	},
	{
		title: "Propulsión",
		description:
			"Estudiamos los componentes que convierten energía en empuje: admisión, compresión, combustión, turbina y tobera.",
		image: propulsionImage,
	},
	{
		title: "Recuperación y misión",
		description:
			"Arquitecturas de recuperación, despliegue y seguimiento para que cada misión complete su ciclo con control.",
		image: recoveryMissionImage,
	},
	{
		title: "Software y datos",
		description:
			"Herramientas de simulación, visualización y automatización que conectan equipos, sistemas de tierra y misiones.",
		image: softwareDataImage,
	},
];

export default function TechnicalAreasSection() {
	return (
		<section
			className="relative overflow-hidden bg-brand-surface px-5 py-20 sm:px-8 md:py-28"
			aria-labelledby="technical-areas-title"
		>
			<div
				className="pointer-events-none absolute -left-40 top-28 h-96 w-96 rounded-full bg-brand-soft/25 blur-3xl"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-7xl">
				<header className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
					<h2 className="mb-4 max-w-4xl text-3xl text-brand-primary md:text-5xl">
						Ingeniería que conecta disciplinas
					</h2>

					<p className="max-w-2xl text-base font-medium leading-relaxed text-brand-ink/80 md:text-lg">
						Cada proyecto reúne especialidades distintas para convertir retos
						aeroespaciales en trabajo técnico con propósito.
					</p>
				</header>

				<div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
					{technicalAreas.map((area) => (
						<TechnicalAreaEntry key={area.title} {...area} />
					))}
				</div>
			</div>
		</section>
	);
}

function TechnicalAreaEntry({ title, description, image }) {
	return (
		<article
			className="group relative grid min-h-72 grid-cols-[minmax(8rem,0.8fr)_minmax(0,1fr)] items-center gap-4 overflow-hidden rounded-2xl border border-brand-primary/15 bg-brand-surface/80 p-5 shadow-[0_18px_44px_rgba(47,51,103,0.07)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-primary/45 hover:shadow-[0_24px_50px_rgba(47,51,103,0.13)] sm:gap-6 sm:p-7 motion-reduce:transform-none motion-reduce:transition-none"
		>
			<div
				className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-accent/0 transition-colors duration-300 group-hover:bg-brand-accent/25 motion-reduce:transition-none"
				aria-hidden="true"
			/>

			<img
				className="relative h-36 w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
				src={image}
				alt={`Ilustración 3D de ${title.toLowerCase()}`}
				loading="lazy"
				decoding="async"
			/>

			<div className="relative">
				<h4 className="leading-none text-brand-primary">
					{title}
				</h4>
				<p className="mt-4 max-w-md text-base leading-relaxed text-brand-ink">
					{description}
				</p>
			</div>
		</article>
	);
}
