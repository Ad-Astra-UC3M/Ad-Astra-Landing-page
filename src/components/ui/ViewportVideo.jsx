import { Maximize, Minimize, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { useInView, usePageInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const controlClassName = "inline-flex size-11 items-center justify-center rounded-full border border-brand-ink/10 bg-brand-surface/90 text-brand-ink shadow-[0_8px_24px_rgba(47,51,103,0.22)] backdrop-blur-sm transition-transform duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-accent active:scale-95 motion-reduce:transition-none";

export default function ViewportVideo({ src, poster, className = "" }) {
	const containerRef = useRef(null);
	const videoRef = useRef(null);
	const userPausedRef = useRef(false);
	const shouldReduceMotion = useReducedMotion();
	const isInView = useInView(containerRef, { amount: 0.45 });
	const isPageVisible = usePageInView();
	const [hasCompleted, setHasCompleted] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [isMuted, setIsMuted] = useState(true);

	useEffect(() => {
		const video = videoRef.current;
		if (!video || !isInView || !isPageVisible) return;
		let timer;
		const cancelAutoplay = () => clearTimeout(timer);

		if (!shouldReduceMotion && !userPausedRef.current && !video.ended) {
			// Manual playback bypasses and cancels this one-second delay.
			timer = setTimeout(() => {
				video.play().catch(() => setIsPlaying(false));
			}, 1000);
		}
		video.addEventListener("play", cancelAutoplay);

		return () => {
			video.removeEventListener("play", cancelAutoplay);
			cancelAutoplay();
			video.pause();
		};
	}, [src, isInView, isPageVisible, shouldReduceMotion]);

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

		userPausedRef.current = !video.paused && !video.ended;

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

	const toggleMute = () => {
		const video = videoRef.current;
		if (video) video.muted = !video.muted;
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
			className={`relative overflow-hidden rounded-lg bg-black [&:fullscreen]:h-full [&:fullscreen]:w-full [&:fullscreen]:max-w-none [&:fullscreen]:aspect-auto [&:fullscreen]:rounded-none ${className}`}
		>
			<video
				ref={videoRef}
				aria-label="Vídeo de Ad Astra UC3M"
				className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center"
				src={src}
				poster={poster}
				muted={isMuted}
				playsInline
				loading="lazy"
				preload="metadata"
				controls={false}
				disablePictureInPicture
				disableRemotePlayback
				controlsList="nodownload noplaybackrate noremoteplayback"
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
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
					className={controlClassName}
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
					onClick={toggleMute}
					aria-label={isMuted ? "Activar el sonido del vídeo" : "Silenciar el vídeo"}
					className={controlClassName}
				>
					{isMuted ? (
						<VolumeX className="size-4" aria-hidden="true" />
					) : (
						<Volume2 className="size-4" aria-hidden="true" />
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
					className={controlClassName}
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
