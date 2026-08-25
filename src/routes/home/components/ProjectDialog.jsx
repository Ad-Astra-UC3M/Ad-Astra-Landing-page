import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import Button from "../../../components/ui/Button";

const easing = [0.22, 1, 0.36, 1];
const detailSections = [
	{ key: "mission", title: "La misión", icon: "crosshair" },
	{ key: "whyItMatters", title: "Por qué importa", icon: "star" },
];

export default function ProjectDialog({ project, onClose }) {
	const isOpen = Boolean(project);
	const shouldReduceMotion = useReducedMotion();
	const duration = shouldReduceMotion ? 0 : 0.24;

	return (
		<AnimatePresence>
			{isOpen && (
				<Dialog
					static
					open={isOpen}
					onClose={onClose}
					className="relative z-1000"
				>
					<motion.div
						aria-hidden="true"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration }}
						className="fixed inset-0 bg-brand-ink/70"
					/>

					<div className="fixed inset-0 w-screen overflow-y-auto p-4 sm:p-6">
						<div className="flex min-h-full items-center justify-center">
							<DialogPanel
								as={motion.div}
								initial={
									shouldReduceMotion
										? { opacity: 0 }
										: {
												opacity: 0,
												transform: "translateY(20px) scale(0.98)",
											}
								}
								animate={{
									opacity: 1,
									transform: "translateY(0px) scale(1)",
									transition: { duration, ease: easing },
								}}
								exit={
									shouldReduceMotion
										? { opacity: 0, transition: { duration } }
										: {
												opacity: 0,
												transform: "translateY(12px) scale(0.98)",
												transition: { duration, ease: easing },
											}
								}
								className="relative w-full max-w-5xl rounded-lg bg-brand-surface p-4 text-brand-ink md:p-6"
							>
								<button
									type="button"
									onClick={onClose}
									data-autofocus
									aria-label="Cerrar detalle del proyecto"
									className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-lg border border-brand-soft bg-brand-surface text-brand-primary hover:bg-brand-soft/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
								>
									<X aria-hidden="true" className="size-5" />
								</button>

								<div className="grid gap-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
									<figure className="relative overflow-hidden rounded-lg md:h-full">
										<img
											src={project.image.route}
											alt={project.image.alt}
											className="h-64 w-full object-cover md:h-full md:min-h-112"
										/>
										<figcaption className="absolute bottom-3 left-3 font-mono text-[9px] tracking-wide text-brand-surface/70">
											VISUAL CONCEPTUAL
										</figcaption>
									</figure>

									<div className="flex flex-col gap-4">
										<header className="border-b border-brand-soft pb-4 pr-12">
											<DialogTitle className="text-4xl md:text-5xl">
												{project.projectName}
											</DialogTitle>
											<Description className="text-brand-primary">
												{project.longName}
											</Description>
										</header>

										<p className="text-lg font-bold leading-tight text-brand-primary">
											{project.slogan}
										</p>

										<div className="grid gap-4">
											{detailSections.map(({ key, title, icon }) => (
												<section key={key} className="flex gap-3">
													<DynamicIcon
														name={icon}
														aria-hidden="true"
														className="mt-0.5 size-5 shrink-0 text-brand-primary"
													/>
													<div>
														<h3 className="mb-1 text-sm text-brand-primary">
															{title}
														</h3>
														<p className="leading-relaxed">{project[key]}</p>
													</div>
												</section>
											))}
										</div>

										<div className="mt-auto border-t border-brand-soft pt-4">
											<h3 className="mb-3 text-sm text-brand-ink">
												Frentes de trabajo
											</h3>
											<ul className="grid grid-cols-3 divide-x divide-brand-soft">
												{project.fronts.map((front) => (
													<li key={front.label} className="grid justify-items-center gap-2 px-2 text-center text-sm">
														<DynamicIcon
															name={front.icon}
															aria-hidden="true"
															className="size-6 text-brand-primary"
														/>
														{front.label}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								<div className="mt-5 grid gap-4 rounded-lg bg-brand-accent/10 p-4 sm:grid-cols-2 sm:divide-x sm:divide-brand-soft">
									{project.audiences.map((audience) => (
										<section key={audience.title} className="flex gap-3 sm:px-4 sm:first:pl-0">
											<DynamicIcon
												name={audience.icon}
												aria-hidden="true"
												className="size-6 shrink-0 text-brand-primary"
											/>
											<div>
												<h3 className="mb-1 text-sm text-brand-primary">
													{audience.title}
												</h3>
												<p className="text-sm leading-relaxed">
													{audience.description}
												</p>
											</div>
										</section>
									))}
								</div>

								<div className="mt-3 grid gap-3 sm:grid-cols-2">
									<Button to="/sponsors" color="accent">
										Impulsa {project.projectName}
									</Button>
									<Button to="/join" variant="outline">
										Únete al equipo
									</Button>
								</div>
							</DialogPanel>
						</div>
					</div>
				</Dialog>
			)}
		</AnimatePresence>
	);
}
