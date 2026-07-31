import { motion, useReducedMotion } from "motion/react";
import React, { useEffect, useRef } from "react";

/**
 * @typedef {Object} AnimatedGradientBackgroundProps
 * @property {number} [startingGap]
 * @property {boolean} [Breathing]
 * @property {string[]} [gradientColors]
 * @property {number[]} [gradientStops]
 * @property {number} [animationSpeed]
 * @property {number} [breathingRange]
 * @property {React.CSSProperties} [containerStyle]
 * @property {string} [containerClassName]
 * @property {number} [topOffset]
 */

/**
 * AnimatedGradientBackground
 *
 * This component renders a customizable animated radial gradient background with a subtle breathing effect.
 * It uses Motion for an entrance animation and raw CSS gradients for the dynamic background.
 *
 *
 * @param {AnimatedGradientBackgroundProps} props - Props for configuring the gradient animation.
 * @returns JSX.Element
 */
const AnimatedGradientBackground = ({
	startingGap = 200,
	Breathing = true,
	gradientColors = [
		"var(--color-astra-cream)",
		"var(--color-astra-blue-light)",
		"var(--color-astra-blue-medium)",
		"var(--color-astra-yellow)",
		"var(--color-astra-blue)",
		"var(--color-astra-navy)",
	],
	gradientStops = [35, 50, 60, 70, 85, 100],
	animationSpeed = 0.02,
	breathingRange = 5,
	containerStyle = {},
	topOffset = -90,
	containerClassName = "",
}) => {
	const shouldReduceMotion = useReducedMotion();

	// Validation: Ensure gradientStops and gradientColors lengths match
	if (gradientColors.length !== gradientStops.length) {
		throw new Error(
			`GradientColors and GradientStops must have the same length.
     Received gradientColors length: ${gradientColors.length},
     gradientStops length: ${gradientStops.length}`,
		);
	}

	const containerRef = useRef(null);

	useEffect(() => {
		let animationFrame;
		let width = startingGap;
		let directionWidth = 1;

		const updateGradient = (gradientWidth) => {
			const gradientStopsString = gradientStops
				.map((stop, index) => `${gradientColors[index]} ${stop}%`)
				.join(", ");

			const gradient = `radial-gradient(${gradientWidth}% ${gradientWidth + topOffset}% at 50% 20%, ${gradientStopsString})`;

			if (containerRef.current) {
				containerRef.current.style.background = gradient;
			}
		};

		if (shouldReduceMotion || !Breathing) {
			updateGradient(startingGap);
			return undefined;
		}

		const animateGradient = () => {
			if (width >= startingGap + breathingRange) directionWidth = -1;
			if (width <= startingGap - breathingRange) directionWidth = 1;

			width += directionWidth * animationSpeed;
			updateGradient(width);

			animationFrame = requestAnimationFrame(animateGradient);
		};

		animationFrame = requestAnimationFrame(animateGradient);

		return () => cancelAnimationFrame(animationFrame); // Cleanup animation
	}, [
		startingGap,
		Breathing,
		gradientColors,
		gradientStops,
		animationSpeed,
		breathingRange,
		topOffset,
		shouldReduceMotion,
	]);

	return (
		<motion.div
			key="animated-gradient-background"
			aria-hidden="true"
			initial={
				shouldReduceMotion
					? { opacity: 1, scale: 1 }
					: { opacity: 0, scale: 1.5 }
			}
			whileInView={{
				opacity: 1,
				scale: 1,
				transition: {
					duration: shouldReduceMotion ? 0 : 2,
					ease: [0.25, 0.1, 0.25, 1],
					delay: 0.3,
				},
			}}
			
			className={`pointer-events-none absolute inset-0 overflow-hidden ${containerClassName}`}
		>
			<div
				ref={containerRef}
				style={containerStyle}
				className="absolute inset-0 transition-transform"
			/>
		</motion.div>
	);
};

export default AnimatedGradientBackground;
