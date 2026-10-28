import { useEffect, useRef } from "react";

import useReducedMotion from "./useReducedMotion";

const REFERENCE_AREA = 1280 * 720;
const REFERENCE_STAR_COUNT = 250;
const MIN_STAR_COUNT = 140;
const MAX_STAR_COUNT = 320;
const STARFIELD_SEED = 20260906;
const TARGET_FRAME_INTERVAL = 1000 / 24;
const TWO_PI = Math.PI * 2;
const STAR_TINTS = [
  [240, 246, 255],
  [232, 240, 255],
  [244, 238, 255],
  [255, 246, 235],
];

function createRandom(seed) {
  let state = seed;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function getStarCount(width, height) {
  const scaledCount = Math.round(
    REFERENCE_STAR_COUNT * Math.sqrt((width * height) / REFERENCE_AREA),
  );

  return Math.min(MAX_STAR_COUNT, Math.max(MIN_STAR_COUNT, scaledCount));
}

function createStarSprite([red, green, blue]) {
  const sprite = document.createElement("canvas");
  const size = 18;
  const center = size / 2;
  const context = sprite.getContext("2d");

  sprite.width = size;
  sprite.height = size;

  if (!context) return sprite;

  const glow = context.createRadialGradient(
    center,
    center,
    0,
    center,
    center,
    center,
  );
  glow.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 1)`);
  glow.addColorStop(0.18, `rgba(${red}, ${green}, ${blue}, 0.92)`);
  glow.addColorStop(0.48, `rgba(${red}, ${green}, ${blue}, 0.22)`);
  glow.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);

  context.fillStyle = glow;
  context.fillRect(0, 0, size, size);

  return sprite;
}

function createStarfield(canvas) {
  const bounds = canvas.getBoundingClientRect();
  const width = Math.round(bounds.width);
  const height = Math.round(bounds.height);

  if (!width || !height) return null;

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
  const nextCanvasWidth = Math.round(width * pixelRatio);
  const nextCanvasHeight = Math.round(height * pixelRatio);

  if (canvas.width !== nextCanvasWidth) canvas.width = nextCanvasWidth;
  if (canvas.height !== nextCanvasHeight) canvas.height = nextCanvasHeight;

  const context = canvas.getContext("2d");
  if (!context) return null;

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const random = createRandom(STARFIELD_SEED + width + height * 31);
  const starCount = getStarCount(width, height);
  const sprites = STAR_TINTS.map(createStarSprite);
  const stars = new Array(starCount);

  for (let index = 0; index < starCount; index += 1) {
    const brightStar = random() < 0.13;
    const radius = brightStar ? 1.35 + random() * 0.75 : 0.7 + random() * 0.55;
    const tintIndex = Math.floor(random() * sprites.length);

    stars[index] = {
      x: random() * width,
      y: random() * height,
      size: radius * (brightStar ? 5.4 : 4.6),
      opacity: brightStar ? 0.68 + random() * 0.16 : 0.34 + random() * 0.28,
      twinkleDepth: 0.1 + random() * 0.18,
      twinklePhase: random() * TWO_PI,
      twinkleSpeed: TWO_PI / (4500 + random() * 6500),
      colorPhase: random() * TWO_PI,
      colorSpeed: TWO_PI / (11000 + random() * 9000),
      primarySprite: sprites[tintIndex],
      secondarySprite:
        sprites[(tintIndex + 1 + Math.floor(random() * 2)) % sprites.length],
    };
  }

  return { context, height, stars, width };
}

function paintStarfield(starfield, elapsedTime) {
  const { context, height, stars, width } = starfield;

  context.clearRect(0, 0, width, height);

  for (let index = 0; index < stars.length; index += 1) {
    const star = stars[index];
    const intensity = Math.min(
      1,
      star.opacity *
        (1 +
          Math.sin(elapsedTime * star.twinkleSpeed + star.twinklePhase) *
            star.twinkleDepth),
    );
    const colorMix =
      0.025 +
      (Math.sin(elapsedTime * star.colorSpeed + star.colorPhase) * 0.5 + 0.5) *
        0.055;
    const offset = star.size / 2;

    context.globalAlpha = intensity * (1 - colorMix);
    context.drawImage(
      star.primarySprite,
      star.x - offset,
      star.y - offset,
      star.size,
      star.size,
    );

    context.globalAlpha = intensity * colorMix;
    context.drawImage(
      star.secondarySprite,
      star.x - offset,
      star.y - offset,
      star.size,
      star.size,
    );
  }

  context.globalAlpha = 1;
}

/**
 * Campo estelar 2D con un pulso individual lento. Los halos se precalculan y
 * el repintado se limita a 24 FPS para mantener bajo el coste del efecto.
 */
export default function StarfieldCanvas() {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let animationFrame;
    let animationStart = performance.now();
    let lastPaintTime = 0;
    let starfield;

    const repaint = () => {
      starfield = createStarfield(canvas);
      animationStart = performance.now();

      if (starfield) paintStarfield(starfield, 0);
    };

    const animate = (timestamp) => {
      if (
        starfield &&
        timestamp - lastPaintTime >= TARGET_FRAME_INTERVAL
      ) {
        paintStarfield(starfield, timestamp - animationStart);
        lastPaintTime = timestamp;
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    repaint();

    if (!reducedMotion) {
      animationFrame = window.requestAnimationFrame(animate);
    }

    const observer = new ResizeObserver(repaint);
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
