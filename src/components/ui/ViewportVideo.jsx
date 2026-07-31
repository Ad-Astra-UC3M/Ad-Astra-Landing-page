import { RotateCcw } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function ViewportVideo({ src, className = "" }) {
	const containerRef = useRef(null);
	const videoRef = useRef(null);
	const hasUserStartedRef = useRef(false);
	const shouldReduceMotion = useReducedMotion();
	const [showReplay, setShowReplay] = useState(false);
	const [hasCompleted, setHasCompleted] = useState(false);

	useEffect(() => {
		const container = containerRef.current;
		const video = videoRef.current;

		if (!container || !video) return undefined;

		if (shouldReduceMotion) setShowReplay(true);

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) {
					video.pause();
					return;
				}

				const canAutoplay = !shouldReduceMotion || hasUserStartedRef.current;
				if (!canAutoplay || video.ended) return;

				video
					.play()
					.then(() => setShowReplay(false))
					.catch(() => setShowReplay(true));
			},
			{ threshold: 0.45 },
		);

		observer.observe(container);

		return () => {
			observer.disconnect();
			video.pause();
		};
	}, [shouldReduceMotion]);

	const replay = () => {
		const video = videoRef.current;
		if (!video) return;

		hasUserStartedRef.current = true;
		video.currentTime = 0;
		setHasCompleted(false);
		setShowReplay(false);

		video.play().catch(() => setShowReplay(true));
	};

	return (
		<div
			ref={containerRef}
			className={`relative overflow-hidden rounded-lg bg-[#F4F4F4] ${className}`}
		>
			<video
				ref={videoRef}
				aria-hidden="true"
				className="pointer-events-none absolute inset-0"
				src={src}
				muted
				playsInline
				loading="lazy"
				preload="metadata"
				controls={false}
				disablePictureInPicture
				disableRemotePlayback
				controlsList="nodownload noplaybackrate noremoteplayback"
				onEnded={() => {
					setHasCompleted(true);
					setShowReplay(true);
				}}
			/>

			{showReplay && (
				<button
					type="button"
					onClick={replay}
					aria-label={
						hasCompleted
							? "Volver a reproducir el vídeo"
							: "Reproducir el vídeo"
					}
					className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full border border-brand-ink/10 bg-brand-surface/90 text-brand-ink shadow-[0_8px_24px_rgba(47,51,103,0.22)] backdrop-blur-sm transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-accent active:scale-95 motion-reduce:transition-none"
				>
					<RotateCcw className="size-4" aria-hidden="true" />
				</button>
			)}
		</div>
	);
}
