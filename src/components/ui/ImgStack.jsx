import { motion } from "motion/react";
import { useRef, useState } from "react";

const CARD_SURFACE_CLASSES = {
	light: "border-brand-primary/15 bg-brand-surface",
	night: "border-brand-soft/35 bg-brand-ink",
};

function createCard(image, index) {
	const config = typeof image === "string" ? { src: image } : image;

	return {
		id: index,
		src: config.src,
		alt: config.alt ?? "",
		surface: config.surface === "night" ? "night" : "light",
		padded: config.padded === true,
		zIndex: 50 - index * 10,
	};
}

export default function ImgStack({ images }) {
	const [cards, setCards] = useState(() => images.map(createCard));
	const [isAnimating, setIsAnimating] = useState(false);
	const dragStartPos = useRef({ x: 0, y: 0 });
	const minDragDistance = 50;

	const getCardStyles = (index) => {
		// Always return tiled state - no initial animation to prevent jumping
		const baseRotation = 2;
		const rotationIncrement = 3;
		const offsetIncrement = -12;
		const verticalOffset = -8;

		return {
			x: index * offsetIncrement,
			y: index * verticalOffset,
			rotate: index === 0 ? 0 : -(baseRotation + index * rotationIncrement),
			scale: 1,
			transition: { duration: 0.5 },
		};
	};

	const handleDragStart = (_, info) => {
		dragStartPos.current = { x: info.point.x, y: info.point.y };
	};

	const handleDragEnd = (_, info) => {
		const dragDistance = Math.sqrt(
			Math.pow(info.point.x - dragStartPos.current.x, 2) +
				Math.pow(info.point.y - dragStartPos.current.y, 2),
		);

		if (isAnimating) return;

		if (dragDistance < minDragDistance) {
			return;
		}

		setIsAnimating(true);

		setCards((previousCards) => {
			const newCards = [...previousCards];
			const cardToMove = newCards.shift();
			newCards.push(cardToMove);

			return newCards.map((card, index) => ({
				...card,
				zIndex: 50 - index * 10,
			}));
		});

		setTimeout(() => {
			setIsAnimating(false);
		}, 300);
	};

	return (
		<div className="relative my-8 flex h-[21rem] w-full max-w-96 items-center justify-center sm:my-12 sm:h-96 lg:h-[27rem] lg:max-w-[28rem] xl:h-[30rem] xl:max-w-[31rem]">
			{cards.map((card, index) => {
				const isTopCard = index === 0;
				const cardStyles = getCardStyles(index);
				const canDrag = isTopCard && !isAnimating;

				return (
					<motion.div
						key={card.id}
						className={`absolute w-56 origin-bottom cursor-grab overflow-hidden rounded-xl border shadow-xl active:cursor-grabbing sm:w-64 lg:w-72 xl:w-80 ${CARD_SURFACE_CLASSES[card.surface]}`}
						style={{
							zIndex: card.zIndex,
							aspectRatio: "5/7",
						}}
						animate={cardStyles}
						drag={canDrag}
						dragElastic={0.2}
						dragConstraints={{
							left: -150,
							right: 150,
							top: -150,
							bottom: 150,
						}}
						dragSnapToOrigin
						dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
						onDragStart={handleDragStart}
						onDragEnd={handleDragEnd}
						whileHover={
							isTopCard
								? {
										scale: 1.05,
										transition: { duration: 0.2 },
									}
								: {}
						}
						whileDrag={{
							scale: 1.1,
							rotate: 0,
							zIndex: 100,
							boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
							transition: { duration: 0.1 },
						}}
					>
						<img
							src={card.src}
							alt={card.alt}
							className={`pointer-events-none absolute inset-0 h-full w-full rounded-lg object-contain ${card.padded ? "p-3 sm:p-4 lg:p-5" : ""}`}
							loading="lazy"
							decoding="async"
							draggable={false}
						/>
					</motion.div>
				);
			})}
		</div>
	);
}
