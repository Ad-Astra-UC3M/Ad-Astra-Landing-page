import presentationVideo from "../../../assets/sponsors/ad-astra-presentation.mp4";
import presentationPoster from "../../../assets/sponsors/ad-astra-presentation-poster.webp";
import ViewportVideo from "../../../components/ui/ViewportVideo";
import TextSpanWrapper from "../../../components/ui/TextSpanWrapper";

export default function AboutUsPreviewSection() {
	return (
		<section
			id="about"
			className="relative overflow-x-clip bg-brand-surface px-6 py-20 sm:px-8 md:py-24 lg:py-28"
			aria-labelledby="about-us-title"
		>
			<div className="mx-auto grid max-w-[90rem] items-center gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
				<div className="order-2 flex min-w-0 justify-center lg:order-1">
					<ViewportVideo src={presentationVideo} poster={presentationPoster} className="aspect-video w-full" />
				</div>

				<div className="order-1 max-w-xl lg:order-2">
					<p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-ink/70">
						Sobre nosotros
					</p>

					<TextSpanWrapper
						as="h2"
						id="about-us-title"
						animateOnViewport
						className="text-3xl text-brand-ink min-[390px]:text-4xl md:text-5xl"
					>
						Un equipo que empieza desde cero
					</TextSpanWrapper>

					<div className="mt-6 space-y-4 text-lg leading-relaxed text-brand-ink/85 md:text-xl">
						<p>
							Somos estudiantes de ingeniería aeroespacial de la UC3M con
							ganas de convertir ideas en proyectos que podamos diseñar,
							construir y compartir.
						</p>
						<p>
							Ad Astra está creciendo con nosotros. Aprendemos haciendo,
							reunimos perfiles distintos y damos forma a una asociación
							abierta a quienes quieran aportar.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
