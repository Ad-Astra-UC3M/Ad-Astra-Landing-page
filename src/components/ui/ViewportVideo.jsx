import { Maximize, Minimize, Pause, Play, RotateCcw } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function ViewportVideo({ src, className = "" }) {
	const containerRef = useRef(null);
	const videoRef = useRef(null);
	const hasUserStartedRef = useRef(false);
	const shouldReduceMotion = useReducedMotion();
	const [hasCompleted, setHasCompleted] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		const container = containerRef.current;
		const video = videoRef.current;

		if (!container || !video) return undefined;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) {
					video.pause();
					return;
				}

				const canAutoplay = !shouldReduceMotion || hasUserStartedRef.current;
				if (!canAutoplay || video.ended) return;

				video.play().catch(() => setIsPlaying(false));
			},
			{ threshold: 0.45 },
		);

		observer.observe(container);

		return () => {
			observer.disconnect();
			video.pause();
		};
	}, [shouldReduceMotion]);

	useEffect(() => {
		const updateFullscreenState = () => {
			setIsFullscreen(document.fullscreenElement === containerRef.current);
		};

		document.addEventListener("fullscreenchange", updateFullscreenState);
		return () => document.removeEventListener("fullscreenchange", updateFullscreenState);
	}, []);

	const togglePlayback = () => {
		const video = videoRef.current;
		if (!video) return;

		hasUserStartedRef.current = true;

		if (!video.paused && !video.ended) {
			video.pause();
			return;
		}

		if (video.ended) {
			video.currentTime = 0;
			setHasCompleted(false);
		}

		video.play().catch(() => setIsPlaying(false));
	};

	const toggleFullscreen = async () => {
		const container = containerRef.current;
		const video = videoRef.current;
		if (!container || !video) return;

		try {
			if (document.fullscreenElement) {
				await document.exitFullscreen();
				return;
			}

			if (container.requestFullscreen) {
				await container.requestFullscreen();
				return;
			}

			if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
		} catch {
			setIsFullscreen(false);
		}
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
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onEnded={() => {
					setHasCompleted(true);
					setIsPlaying(false);
				}}
			/>

			<div
				className="absolute bottom-4 right-4 flex gap-2"
				role="group"
				aria-label="Controles del vídeo"
			>
				<button
					type="button"
					onClick={togglePlayback}
					aria-label={
						isPlaying
							? "Pausar el vídeo"
							: hasCompleted
								? "Volver a reproducir el vídeo"
								: "Reproducir el vídeo"
					}
					className="inline-flex size-11 items-center justify-center rounded-full border border-brand-ink/10 bg-brand-surface/90 text-brand-ink shadow-[0_8px_24px_rgba(47,51,103,0.22)] backdrop-blur-sm transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-accent active:scale-95 motion-reduce:transition-none"
				>
					{isPlaying ? (
						<Pause className="size-4" aria-hidden="true" />
					) : hasCompleted ? (
						<RotateCcw className="size-4" aria-hidden="true" />
					) : (
						<Play className="size-4" aria-hidden="true" />
					)}
				</button>

				<button
					type="button"
					onClick={toggleFullscreen}
					aria-label={
						isFullscreen
							? "Salir de pantalla completa"
							: "Ver el vídeo a pantalla completa"
					}
					className="inline-flex size-11 items-center justify-center rounded-full border border-brand-ink/10 bg-brand-surface/90 text-brand-ink shadow-[0_8px_24px_rgba(47,51,103,0.22)] backdrop-blur-sm transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-accent active:scale-95 motion-reduce:transition-none"
				>
					{isFullscreen ? (
						<Minimize className="size-4" aria-hidden="true" />
					) : (
						<Maximize className="size-4" aria-hidden="true" />
					)}
				</button>
			</div>
		</div>
	);
}
