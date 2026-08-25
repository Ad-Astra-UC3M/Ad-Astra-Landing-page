import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button";
import { DynamicIcon } from "lucide-react/dynamic";
import TextSpanWrapper from "../../../components/ui/TextSpanWrapper";
import ProjectDialog from "../components/ProjectDialog";
import { projectsPreviewData } from "./projectsPreviewData";
import { motion, stagger } from "motion/react";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: stagger(0.15),
		},
	},
};

const cardVariants = {
	hidden: {
		opacity: 0,
		transform: "translateY(100px)",
	},
	visible: {
		opacity: 1,
		transform: "translateY(0px)",
		transition: {
			duration: 0.5,
		},
	},
};

export default function ProjectsPreviewSection() {
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<>
			<section
				id="projects"
				className="relative overflow-hidden bg-brand-ink px-5 py-20 sm:px-8 md:py-28"
				aria-labelledby="projects-cards-title"
			>
				<div className="relative mx-auto max-w-7xl">
					<header className="mx-auto max-w-7xl px-4 pb-12 md:px-8 lg:px-10">
						<TextSpanWrapper
							as="h2"
							id="projects-cards-title"
							className="mb-4 max-w-4xl text-3xl text-brand-surface md:text-5xl"
						>
							Proyectos que nos elevan al espacio
						</TextSpanWrapper>

						<p className="max-w-2xl text-base font-medium leading-relaxed text-brand-surface/80 md:text-lg">
							En Ad Astra, cada proyecto es un reto de ingeniería que nos permite
							aprender haciendo y avanzar hacia la órbita. Desde el diseño hasta
							la recuperación, cada misión es una oportunidad para crecer como
							equipo y como ingenieros.
						</p>
					</header>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid gap-6 lg:grid-cols-3"
					>
						{projectsPreviewData.map((project) => (
							<ProjectCard
								key={project.projectName}
								projectData={project}
								onOpen={setSelectedProject}
							/>
						))}
					</motion.div>
				</div>
			</section>

			<ProjectDialog
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</>
	);
}

function ProjectCard({ projectData, onOpen }) {
	return (
		<motion.article
			variants={cardVariants}
			className="flex h-full flex-col  gap-6 rounded-lg border border-brand-soft/45 bg-brand-surface p-4 text-brand-ink sm:p-6"
		>
			<figure className="relative overflow-hidden rounded-lg">
				<img
					src={projectData.image.route}
					alt={projectData.image.alt}
					className="aspect-16/10 w-full object-cover"
					loading="lazy"
				/>
				<figcaption className="absolute bottom-3 left-3 font-mono text-[9px] tracking-wide text-brand-surface/70">
					VISUAL CONCEPTUAL
				</figcaption>
			</figure>
			<div className="flex flex-col gap-2">
				<p className="font-astra-display text-xs text-brand-primary">
					{projectData.topHeading}
				</p>
				<h3 className="text-4xl md:text-5xl">{projectData.projectName}</h3>
				<p className="text-lg leading-snug">{projectData.slogan}</p>
				<p className="leading-relaxed text-brand-ink/85">
					{projectData.description}
				</p>
			</div>

			<div className="divide-y divide-brand-ink/15 my-auto">
				{projectData.metrics.map((metric) => (
					<div key={metric.label} className="flex gap-3 py-3 first:pt-0">
						<span className="h-fit rounded-full bg-brand-soft/50 p-2">
							<DynamicIcon name={metric.icon} size={22} />
						</span>
						<div>
							<p className="flex flex-wrap items-baseline gap-x-2">
								<strong className="text-lg">{metric.value}</strong>
								<span>{metric.label}</span>
							</p>
							<p className="text-xs font-bold uppercase text-brand-primary">
								{metric.status}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className=" flex flex-col gap-2">
				<p className="text-center text-sm uppercase">
					{projectData.keywords.join(" · ")}
				</p>
				<Button
					onClick={(event) => {
						event.stopPropagation();
						onOpen(projectData);
					}}
					aria-haspopup="dialog"
					size="lg"
					color="accent"
					className="mt-4 gap-2"
				>
					Descubre
					<span className="font-astra-display xl:text-lg text-sm">
						{projectData.projectName}
					</span>
					<ArrowRight aria-hidden="true" className="size-4" />
				</Button>
			</div>
		</motion.article>
	);
}
