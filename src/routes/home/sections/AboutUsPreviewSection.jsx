import brandPoster from "../../../assets/about/brand-poster.png";
import buildTogether from "../../../assets/about/build-together.png";
import carryTheRocket from "../../../assets/about/carry-the-rocket.png";
import planTheOrbit from "../../../assets/about/plan-the-orbit.png";
import sharedHorizon from "../../../assets/about/shared-horizon.png";
import ImgStack from "../../../components/ui/ImgStack";
import TextSpanWrapper from "../../../components/ui/TextSpanWrapper";

const aboutIllustrations = [
	{ src: brandPoster, surface: "light", alt: "" },
	{ src: buildTogether, surface: "light", alt: "", padded: true },
	{ src: carryTheRocket, surface: "night", alt: "", padded: true },
	{ src: planTheOrbit, surface: "night", alt: "", padded: true },
	{ src: sharedHorizon, surface: "light", alt: "", padded: true },
];

export default function AboutUsPreviewSection() {
	return (
		<section
			id="about"
			className="relative overflow-x-clip bg-brand-surface px-6 py-20 sm:px-8 md:py-24 lg:py-28"
			aria-labelledby="about-us-title"
		>
			<div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-16 xl:gap-24">
				<div className="order-2 flex min-w-0 justify-center lg:order-1">
					<ImgStack images={aboutIllustrations} />
				</div>

				<div className="order-1 max-w-xl lg:order-2">
					<p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-ink/70">
						Sobre nosotros
					</p>

					<TextSpanWrapper
						as="h2"
						id="about-us-title"
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
