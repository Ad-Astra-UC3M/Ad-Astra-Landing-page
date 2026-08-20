import { RocketIcon } from "lucide-react";
import sponsorCollaborationVideo from "../../../assets/sponsors/sponsor-collaboration.webm";
import Button from "../../../components/ui/Button";
import CursorBlob from "../../../components/ui/CursorBlob";
import TextSpanWrapper from "../../../components/ui/TextSpanWrapper";
import ViewportVideo from "../../../components/ui/ViewportVideo";

export default function SponsorsPreviewSection() {
	return (
		<section
			className="relative bg-brand-soft px-6 py-20 md:px-8 md:py-24 overflow-hidden"
			aria-labelledby="sponsors-preview-title"
		>
			<div
				className="absolute rounded-full border-2 border-brand-accent/70 top-1/5 left-1/6 aspect-square w-[120%] -rotate-64 pointer-events-none motion-reduce:animate-none animate-[astra-footer-orbit_128s_linear_infinite]"
				aria-hidden="true"
			>
				<RocketIcon
					className="absolute left-1/2 top-0 size-5 -translate-1/2 rotate-45"
					aria-hidden="true"
				/>
			</div>
			<CursorBlob>
				<div className=" z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] md:items-center lg:gap-16">
					<div className="flex flex-col justify-center">
						<p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-ink/70">
							Sponsors
						</p>

						<TextSpanWrapper
							as="h2"
							id="sponsors-preview-title"
							className="max-w-xl text-4xl text-brand-ink md:text-5xl"
						>
							Haz posible el siguiente hito.
						</TextSpanWrapper>

						<p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-ink/85 md:text-xl">
							Tu apoyo convierte diseño, cálculo y prototipos en sistemas que
							podemos construir, probar y llevar a competición.
						</p>

						<div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
							<Button
								to="/sponsors"
								color="amber"
								size="lg"
								className="w-full sm:w-auto"
							>
								Conviértete en sponsor
							</Button>

							<Button
								to="/projects"
								variant="outline"
								color="brand"
								size="lg"
								className="w-full sm:w-auto"
							>
								Conocer proyectos
							</Button>
						</div>
					</div>

					<ViewportVideo
						src={sponsorCollaborationVideo}
						className="aspect-video"
					/>
				</div>
			</CursorBlob>
		</section>
	);
}
