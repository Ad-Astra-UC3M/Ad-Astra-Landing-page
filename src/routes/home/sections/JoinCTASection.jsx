import AnimatedGradientBackground from "../../../components/ui/AnimatedGradientBackgorund";
import Button from "../../../components/ui/Button";
import TextSpanWrapper from "../../../components/ui/TextSpanWrapper";
import { motion } from "motion/react";

export default function JoinCTASection() {


	return (
		<section
			className="relative isolate overflow-hidden px-6 py-24 sm:px-8 md:py-32"
			aria-labelledby="join-cta-title"
		>			
			<AnimatedGradientBackground/>
			<div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
				<p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-ink/70">
					De la UC3M a competiciones internacionales
				</p>

				<TextSpanWrapper
					as="h2"
					id="join-cta-title"
					className="mt-7 max-w-4xl text-[1.75rem] leading-[1.05] text-brand-ink min-[390px]:text-3xl sm:text-5xl lg:text-6xl"
				>
					Construye tecnología aeroespacial desde la UC3M
				</TextSpanWrapper>

				<div className="mt-10 flex w-full max-w-2xl flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
					<Button
						to="/join"
						size="lg"
						className="w-full active:scale-[0.98] sm:min-w-52 sm:w-auto"
					>
						Únete a nosotros
					</Button>

					<Button
						to="/sponsors"
						variant="outline"
						color="brand"
						size="lg"
						className="w-full active:scale-[0.98] sm:min-w-64 sm:w-auto"
					>
						Colabora como sponsor
					</Button>
				</div>
			</div>
		</section>
	);
}
