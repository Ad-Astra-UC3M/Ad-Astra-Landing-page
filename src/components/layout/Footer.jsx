import { Link } from "react-router";
import { Heart } from 'pixelarticons/react'


import circleLogo from "../../assets/circle_logo.png";
import recliningDoodle from "../../assets/footer/reclining-doodle.png";
import AnimatedWordmark from "../brand/AnimatedWordmark";
import { projectLinks, sectionLinks } from "../../data/siteLinks";

const footerSections = [
	{
		title: "Proyectos",
		links: [
			{ label: "SIGMA", to: projectLinks["sigma"] },
			{ label: "Rocket A4", to: projectLinks["rocket-a4"] },
			{ label: "Jet Engine", to: projectLinks["jet-engine"] },
		],
	},
	{
		title: "Asociacion",
		links: [
			{ label: "Equipo", to: sectionLinks.about },
			{ label: "Únete", to: sectionLinks.join },
		],
	},
	{
		title: "Mas",
		links: [
			{ label: "Sponsors", to: sectionLinks.sponsors },
			{ label: "Redes sociales", href: "RRSS" },
		],
	},
];

const footerLinkClass =
    "text-brand-surface/85 underline-offset-6 transition duration-200 hover:text-brand-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent";

function FooterLink({ href, label, to }) {
	if (href) {
		return (
			<a className={footerLinkClass} href={href}>
				{label}
			</a>
		);
	}

	return (
		<Link className={footerLinkClass} to={to}>
			{label}
		</Link>
	);
}

export default function Footer() {
	return (
		<footer className="relative isolate overflow-hidden border-t border-brand-accent/70 bg-brand-ink text-brand-surface">
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute left-3/4 top-1/2 size-72 -translate-1/2 opacity-70 sm:top-1/4 sm:size-96 lg:size-120">
					<img
						alt=""
						className="absolute left-1/2 top-1/2 size-44 -translate-1/2 object-contain opacity-[0.09] sm:size-64 lg:size-80"
						src={circleLogo}
					/>

					<div className="absolute inset-5 animate-[astra-footer-orbit_56s_linear_infinite] motion-reduce:animate-none">
						<div className="relative size-full rounded-full border border-brand-soft/20 transform-[rotateX(64deg)]">
							<span className="absolute left-1/2 top-0 size-1.5 -translate-1/2 rounded-full bg-brand-accent shadow-[0_0_22px_rgba(255,219,90,0.55)]" />
						</div>
					</div>

					<div className="absolute inset-12 animate-[astra-footer-orbit-reverse_72s_linear_infinite] motion-reduce:animate-none">
						<div className="relative size-full rounded-full border border-brand-secondary/20 transform-[rotateX(58deg)_rotateY(18deg)]">
							<span className="absolute bottom-0 left-1/2 size-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-soft shadow-[0_0_18px_rgba(185,190,255,0.45)]" />
						</div>
					</div>
				</div>
			</div>

			<div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-8">
				<section className="max-w-md" aria-label="AD ASTRA UC3M">
					<AnimatedWordmark as="h2" className="h-8 sm:h-10" />
					<p className="mt-4 max-w-sm text-xl leading-8 text-brand-surface/85">
						Ingeniería para llegar a las estrellas
					</p>
				</section>

				<nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:gap-16">
					{footerSections.map((section) => (
						<section key={section.title}>
							<h3 className="text-lg text-brand-surface sm:text-xl xl:text-2xl">
								{section.title}
							</h3>
							<ul className="mt-5 grid gap-3">
								{section.links.map((link) => (
									<li key={link.label}>
										<FooterLink {...link} />
									</li>
								))}
							</ul>
						</section>
					))}
				</nav>
			</div>

			<div className="relative z-10 border-t border-brand-soft/20">
				<img
					alt=""
					aria-hidden="true"
					className="pointer-events-none absolute bottom-full right-px z-10 h-auto w-24 max-w-none select-none object-contain object-bottom-right sm:w-32 lg:w-40 xl:w-44"
					decoding="async"
					draggable={false}
					loading="lazy"
					src={recliningDoodle}
				/>
				<div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-brand-surface/70 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
					<p className="lg:justify-self-start">
						Hecho con{" "}
						<Heart className="inline-block h-4 w-4 text-brand-accent" /> por
						el equipo de IT de Ad Astra
					</p>
					<p className="lg:justify-self-center lg:whitespace-nowrap">
						&copy; 2026 Ad Astra UC3M
					</p>
					<span
						className="h-px w-20 bg-brand-accent sm:h-0.5 lg:hidden"
						aria-hidden="true"
					/>
					<span
						aria-hidden="true"
						className="hidden h-0.5 w-52 bg-brand-accent lg:block lg:justify-self-end xl:w-64"
					/>
				</div>
			</div>
		</footer>
	);
}
