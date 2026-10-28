import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";

const VIRTUAL_HEIGHT = 500;
const GRAVITY = 0.38;
const JUMP_FORCE = -7.2;
const MAX_FALL_SPEED = 9.5;
const FORWARD_SPEED = 2.5;
const OBSTACLE_GAP = 142;
const OBSTACLE_WIDTH = 58;
const OBSTACLE_INTERVAL = 220;
const GROUND_HEIGHT = 40;

export default function RocketFlappyGame() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [gameState, setGameState] = useState("START"); // "START" | "PLAYING" | "GAME_OVER"
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem("adastra_flappy_high") || "0", 10);
    } catch {
      return 0;
    }
  });
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      return localStorage.getItem("adastra_flappy_sound") !== "false";
    } catch {
      return true;
    }
  });

  // Audio Context Ref
  const audioCtxRef = useRef(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  }, []);

  const playJumpSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(520, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {}
  }, [getAudioContext, soundEnabled]);

  const playScoreSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [587.33, 880].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.12, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.12);
      });
    } catch {}
  }, [getAudioContext, soundEnabled]);

  const playCrashSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.28);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.28);
    } catch {}
  }, [getAudioContext, soundEnabled]);

  // Keep internal game physics variables in refs to decouple from react re-renders
  const gameRef = useRef({
    state: "START",
    score: 0,
    highScore: 0,
    time: 0,
    groundOffset: 0,
    rocket: {
      x: 90,
      y: (VIRTUAL_HEIGHT - GROUND_HEIGHT) * 0.48,
      vy: 0,
      angle: 0,
      flapping: 0,
      radius: 13,
    },
    obstacles: [],
    particles: [],
    stars: [],
    virtualWidth: 460,
  });

  // Sync state to ref
  useEffect(() => {
    gameRef.current.state = gameState;
  }, [gameState]);

  useEffect(() => {
    gameRef.current.highScore = highScore;
  }, [highScore]);

  // Toggle sound
  const toggleSound = (e) => {
    e.stopPropagation();
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("adastra_flappy_sound", String(next));
      } catch {}
      return next;
    });
  };

  // Trigger Flap
  const triggerFlap = useCallback(() => {
    const game = gameRef.current;
    if (game.state === "START") {
      game.state = "PLAYING";
      setGameState("PLAYING");
      game.rocket.vy = JUMP_FORCE;
      game.rocket.flapping = 8;
      playJumpSound();
    } else if (game.state === "PLAYING") {
      game.rocket.vy = JUMP_FORCE;
      game.rocket.flapping = 8;
      playJumpSound();
    } else if (game.state === "GAME_OVER") {
      // Reset
      game.state = "START";
      game.score = 0;
      setScore(0);
      setIsNewRecord(false);
      game.rocket.y = (VIRTUAL_HEIGHT - GROUND_HEIGHT) * 0.48;
      game.rocket.vy = 0;
      game.rocket.angle = 0;
      game.rocket.flapping = 0;
      game.obstacles = [];
      game.particles = [];
      setGameState("START");
    }
  }, [playJumpSound]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        triggerFlap();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerFlap]);

  // Main Canvas Render & Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let lastTimestamp = performance.now();

    // Initialize stars
    if (gameRef.current.stars.length === 0) {
      const stars = [];
      for (let i = 0; i < 95; i++) {
        stars.push({
          x: Math.random() * 2600,
          y: Math.random() * (VIRTUAL_HEIGHT - GROUND_HEIGHT),
          size: Math.random() * 1.8 + 0.6,
          speed: Math.random() * 0.6 + 0.2,
          alpha: Math.random() * 0.7 + 0.3,
          twinkle: Math.random() * 0.05 + 0.01,
        });
      }
      gameRef.current.stars = stars;
    }

    // Resize handling with device pixel ratio for razor sharpness
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width || 460;
      const height = rect.height || 360;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      // Virtual dimensions
      const virtualWidth = Math.max(340, Math.round(VIRTUAL_HEIGHT * (width / height)));
      gameRef.current.virtualWidth = virtualWidth;
      gameRef.current.rocket.x = Math.round(Math.min(220, Math.max(90, virtualWidth * 0.16)));
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);
    resizeCanvas();

    const loop = (currentTimestamp) => {
      const dtMs = Math.min(currentTimestamp - lastTimestamp, 40);
      lastTimestamp = currentTimestamp;
      const dtFactor = dtMs / 16.667;

      const game = gameRef.current;
      game.time += dtMs;
      const vWidth = game.virtualWidth;

      const scaleX = canvas.width / vWidth;
      const scaleY = canvas.height / VIRTUAL_HEIGHT;

      // Update state
      if (game.state === "START") {
        game.rocket.y = (VIRTUAL_HEIGHT - GROUND_HEIGHT) * 0.48 + Math.sin(game.time * 0.005) * 8;
        game.rocket.angle = 0;
        game.groundOffset = (game.groundOffset + FORWARD_SPEED * 0.6 * dtFactor) % 24;
      } else if (game.state === "PLAYING") {
        // Rocket physics
        game.rocket.vy += GRAVITY * dtFactor;
        game.rocket.vy = Math.min(game.rocket.vy, MAX_FALL_SPEED);
        game.rocket.y += game.rocket.vy * dtFactor;

        if (game.rocket.flapping > 0) {
          game.rocket.flapping -= dtFactor;
        }

        // Calculate smooth angle
        const targetAngle = game.rocket.vy < 0 ? -0.42 : Math.min(1.2, game.rocket.vy * 0.14);
        game.rocket.angle += (targetAngle - game.rocket.angle) * 0.16 * dtFactor;

        // Ground scrolling
        game.groundOffset = (game.groundOffset + FORWARD_SPEED * dtFactor) % 24;

        // Engine flame particles
        if (Math.random() < 0.85) {
          game.particles.push({
            x: game.rocket.x - Math.cos(game.rocket.angle) * 20,
            y: game.rocket.y - Math.sin(game.rocket.angle) * 20,
            vx: -FORWARD_SPEED - Math.random() * 2.2,
            vy: (Math.random() - 0.5) * 1.5,
            size: Math.random() * 3.5 + 2,
            alpha: 1,
            color: Math.random() > 0.4 ? "#ffdb5a" : "#f97316",
          });
        }

        // Spawn obstacles
        const lastObs = game.obstacles[game.obstacles.length - 1];
        if (!lastObs) {
          const firstX = Math.min(vWidth + 10, game.rocket.x + 400);
          const playableHeight = VIRTUAL_HEIGHT - GROUND_HEIGHT - OBSTACLE_GAP;
          const minHeight = 45;
          const maxHeight = playableHeight - minHeight;
          const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

          game.obstacles.push({
            x: firstX,
            width: OBSTACLE_WIDTH,
            topHeight,
            bottomY: topHeight + OBSTACLE_GAP,
            bottomHeight: VIRTUAL_HEIGHT - GROUND_HEIGHT - (topHeight + OBSTACLE_GAP),
            passed: false,
          });
        } else if (lastObs.x <= vWidth - OBSTACLE_INTERVAL) {
          const playableHeight = VIRTUAL_HEIGHT - GROUND_HEIGHT - OBSTACLE_GAP;
          const minHeight = 45;
          const maxHeight = playableHeight - minHeight;
          const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

          game.obstacles.push({
            x: vWidth + 10,
            width: OBSTACLE_WIDTH,
            topHeight,
            bottomY: topHeight + OBSTACLE_GAP,
            bottomHeight: VIRTUAL_HEIGHT - GROUND_HEIGHT - (topHeight + OBSTACLE_GAP),
            passed: false,
          });
        }

        // Update obstacles & Check Collisions
        for (let i = game.obstacles.length - 1; i >= 0; i--) {
          const obs = game.obstacles[i];
          obs.x -= FORWARD_SPEED * dtFactor;

          // Check score
          if (!obs.passed && obs.x + obs.width < game.rocket.x) {
            obs.passed = true;
            game.score += 1;
            setScore(game.score);
            playScoreSound();

            if (game.score > game.highScore) {
              game.highScore = game.score;
              setHighScore(game.score);
              setIsNewRecord(true);
              try {
                localStorage.setItem("adastra_flappy_high", String(game.score));
              } catch {}
            }
          }

          // Collision check with pipes
          // Bounding circle for rocket: center at (rocket.x, rocket.y), radius 12
          const rx = game.rocket.x;
          const ry = game.rocket.y;
          const r = game.rocket.radius;

          if (rx + r > obs.x && rx - r < obs.x + obs.width) {
            // Check top obstacle
            if (ry - r < obs.topHeight) {
              triggerCrash();
              break;
            }
            // Check bottom obstacle
            if (ry + r > obs.bottomY) {
              triggerCrash();
              break;
            }
          }

          // Remove off-screen obstacles
          if (obs.x + obs.width < -30) {
            game.obstacles.splice(i, 1);
          }
        }

        // Ceiling collision
        if (game.rocket.y - game.rocket.radius <= 0) {
          triggerCrash();
        }

        // Ground collision
        if (game.rocket.y + game.rocket.radius >= VIRTUAL_HEIGHT - GROUND_HEIGHT) {
          game.rocket.y = VIRTUAL_HEIGHT - GROUND_HEIGHT - game.rocket.radius;
          triggerCrash();
        }
      } else if (game.state === "GAME_OVER") {
        // Rocket falls to ground if in air
        if (game.rocket.y + game.rocket.radius < VIRTUAL_HEIGHT - GROUND_HEIGHT) {
          game.rocket.vy += GRAVITY * dtFactor;
          game.rocket.y += game.rocket.vy * dtFactor;
          game.rocket.angle = Math.min(1.4, game.rocket.angle + 0.1 * dtFactor);
        }
      }

      // Update particles
      for (let i = game.particles.length - 1; i >= 0; i--) {
        const p = game.particles[i];
        p.x += p.vx * dtFactor;
        p.y += p.vy * dtFactor;
        p.size *= 0.96;
        p.alpha -= 0.035 * dtFactor;
        if (p.alpha <= 0 || p.size <= 0.4) {
          game.particles.splice(i, 1);
        }
      }

      // Update stars
      game.stars.forEach((star) => {
        star.x -= star.speed * dtFactor;
        if (star.x < 0) {
          star.x = vWidth + Math.random() * 20;
          star.y = Math.random() * (VIRTUAL_HEIGHT - GROUND_HEIGHT);
        }
      });

      // ================= DRAWING =================
      ctx.save();
      ctx.scale(scaleX, scaleY);

      // 1. Background gradient (Deep space nebula)
      const bgGrad = ctx.createLinearGradient(0, 0, 0, VIRTUAL_HEIGHT);
      bgGrad.addColorStop(0, "#080914");
      bgGrad.addColorStop(0.5, "#12142d");
      bgGrad.addColorStop(1, "#1c2045");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, vWidth, VIRTUAL_HEIGHT);

      // Distant celestial planet
      const moonX = vWidth * 0.82;
      const moonY = 85;
      const moonGrad = ctx.createRadialGradient(moonX - 6, moonY - 6, 4, moonX, moonY, 32);
      moonGrad.addColorStop(0, "#feffee");
      moonGrad.addColorStop(0.7, "#b9beff");
      moonGrad.addColorStop(1, "rgba(76, 82, 179, 0)");
      ctx.fillStyle = moonGrad;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 32, 0, Math.PI * 2);
      ctx.fill();

      // Subtle planet crater details
      ctx.fillStyle = "rgba(76, 82, 179, 0.25)";
      ctx.beginPath();
      ctx.arc(moonX - 8, moonY + 4, 6, 0, Math.PI * 2);
      ctx.arc(moonX + 10, moonY - 6, 4, 0, Math.PI * 2);
      ctx.arc(moonX + 6, moonY + 12, 5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Stars
      game.stars.forEach((star) => {
        ctx.fillStyle = `rgba(254, 255, 238, ${Math.min(1, Math.max(0.2, star.alpha + Math.sin(game.time * star.twinkle) * 0.3))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Obstacles (Space Pylons)
      game.obstacles.forEach((obs) => {
        // Pylon body gradient
        const pylonGrad = ctx.createLinearGradient(obs.x, 0, obs.x + obs.width, 0);
        pylonGrad.addColorStop(0, "#191c36");
        pylonGrad.addColorStop(0.4, "#2c3260");
        pylonGrad.addColorStop(0.8, "#1e2246");
        pylonGrad.addColorStop(1, "#15172c");

        // Top Pylon
        ctx.fillStyle = pylonGrad;
        ctx.fillRect(obs.x, 0, obs.width, obs.topHeight);
        ctx.strokeStyle = "#4c52b3";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(obs.x, 0, obs.width, obs.topHeight);

        // Top collar at gap
        const collarH = 16;
        const over = 4;
        ctx.fillStyle = "#2f3367";
        ctx.fillRect(obs.x - over, obs.topHeight - collarH, obs.width + over * 2, collarH);
        ctx.strokeStyle = "#ffdb5a";
        ctx.lineWidth = 2;
        ctx.strokeRect(obs.x - over, obs.topHeight - collarH, obs.width + over * 2, collarH);

        // Top flashing beacon light
        const beaconPulse = (Math.sin(game.time * 0.008 + obs.x) + 1) / 2;
        ctx.fillStyle = beaconPulse > 0.4 ? "#ffdb5a" : "#78350f";
        ctx.beginPath();
        ctx.arc(obs.x + obs.width / 2, obs.topHeight - collarH / 2, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Bottom Pylon
        ctx.fillStyle = pylonGrad;
        ctx.fillRect(obs.x, obs.bottomY, obs.width, obs.bottomHeight);
        ctx.strokeStyle = "#4c52b3";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(obs.x, obs.bottomY, obs.width, obs.bottomHeight);

        // Bottom collar at gap
        ctx.fillStyle = "#2f3367";
        ctx.fillRect(obs.x - over, obs.bottomY, obs.width + over * 2, collarH);
        ctx.strokeStyle = "#ffdb5a";
        ctx.lineWidth = 2;
        ctx.strokeRect(obs.x - over, obs.bottomY, obs.width + over * 2, collarH);

        // Bottom flashing beacon light
        ctx.fillStyle = beaconPulse > 0.4 ? "#ffdb5a" : "#78350f";
        ctx.beginPath();
        ctx.arc(obs.x + obs.width / 2, obs.bottomY + collarH / 2, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Exhaust Particles
      game.particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // 5. Rocket
      ctx.save();
      ctx.translate(game.rocket.x, game.rocket.y);
      ctx.rotate(game.rocket.angle);

      // Rocket Thruster Flame
      if (game.state === "PLAYING" || game.state === "START") {
        const flameBoost = game.rocket.flapping > 0 ? 12 : 0;
        const flameOsc = Math.sin(game.time * 0.04) * 4;
        const flameLen = 14 + flameBoost + flameOsc;

        // Outer Orange Flame
        ctx.beginPath();
        ctx.moveTo(-18, -5);
        ctx.lineTo(-18 - flameLen, 0);
        ctx.lineTo(-18, 5);
        ctx.closePath();
        ctx.fillStyle = "#f97316";
        ctx.fill();

        // Inner Yellow Flame Core
        ctx.beginPath();
        ctx.moveTo(-18, -3);
        ctx.lineTo(-18 - flameLen * 0.65, 0);
        ctx.lineTo(-18, 3);
        ctx.closePath();
        ctx.fillStyle = "#ffdb5a";
        ctx.fill();
      }

      // Nozzle
      ctx.fillStyle = "#1e2246";
      ctx.fillRect(-20, -5, 4, 10);

      // Top Stabilizer Fin
      ctx.beginPath();
      ctx.moveTo(-6, -7);
      ctx.lineTo(-18, -16);
      ctx.lineTo(-13, -6);
      ctx.closePath();
      ctx.fillStyle = "#4c52b3";
      ctx.fill();
      ctx.strokeStyle = "#2f3367";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Bottom Stabilizer Fin
      ctx.beginPath();
      ctx.moveTo(-6, 7);
      ctx.lineTo(-18, 16);
      ctx.lineTo(-13, 6);
      ctx.closePath();
      ctx.fillStyle = "#4c52b3";
      ctx.fill();
      ctx.strokeStyle = "#2f3367";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Fuselage Body (Aerodynamic cream hull)
      ctx.beginPath();
      ctx.moveTo(-17, -8);
      ctx.lineTo(8, -8);
      ctx.quadraticCurveTo(24, 0, 8, 8);
      ctx.lineTo(-17, 8);
      ctx.closePath();
      ctx.fillStyle = "#feffee";
      ctx.fill();
      ctx.strokeStyle = "#2f3367";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Nosecone tip (Ad Astra Blue)
      ctx.beginPath();
      ctx.moveTo(14, -6);
      ctx.quadraticCurveTo(24, 0, 14, 6);
      ctx.closePath();
      ctx.fillStyle = "#4c52b3";
      ctx.fill();

      // Ad Astra Yellow accent hull band
      ctx.fillStyle = "#ffdb5a";
      ctx.fillRect(-4, -8, 4.5, 16);

      // Porthole Window
      ctx.beginPath();
      ctx.arc(3, 0, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "#8288e9";
      ctx.fill();
      ctx.strokeStyle = "#2f3367";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Window glass reflection
      ctx.beginPath();
      ctx.arc(2, -1.5, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = "#feffee";
      ctx.fill();

      ctx.restore();

      // 6. Ground Base (Lunar / Space station surface)
      const groundY = VIRTUAL_HEIGHT - GROUND_HEIGHT;
      const groundGrad = ctx.createLinearGradient(0, groundY, 0, VIRTUAL_HEIGHT);
      groundGrad.addColorStop(0, "#191d3d");
      groundGrad.addColorStop(1, "#0d0f22");
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, groundY, vWidth, GROUND_HEIGHT);

      // Glowing hazard line at the edge
      ctx.strokeStyle = "#ffdb5a";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(vWidth, groundY);
      ctx.stroke();

      // Ground diagonal hazard markings
      ctx.strokeStyle = "rgba(130, 136, 233, 0.25)";
      ctx.lineWidth = 2;
      const stripeSpacing = 24;
      const offset = game.groundOffset;
      for (let sx = -stripeSpacing + offset; sx < vWidth + stripeSpacing; sx += stripeSpacing) {
        ctx.beginPath();
        ctx.moveTo(sx, groundY + 1);
        ctx.lineTo(sx + 14, VIRTUAL_HEIGHT);
        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(loop);
    };

    function triggerCrash() {
      const game = gameRef.current;
      game.state = "GAME_OVER";
      setGameState("GAME_OVER");
      playCrashSound();

      // Burst of crash sparks
      for (let i = 0; i < 30; i++) {
        const ang = Math.random() * Math.PI * 2;
        const spd = Math.random() * 5 + 1.5;
        game.particles.push({
          x: game.rocket.x,
          y: game.rocket.y,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          size: Math.random() * 4 + 2,
          alpha: 1,
          color: ["#ffdb5a", "#f97316", "#8288e9", "#feffee"][Math.floor(Math.random() * 4)],
        });
      }
    }

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [playCrashSound, playScoreSound]);

  return (
    <div
      ref={containerRef}
      onClick={triggerFlap}
      className="relative w-full h-full cursor-pointer select-none overflow-hidden touch-none"
      role="button"
      tabIndex={0}
      aria-label="Juego Flappy Rocket. Pulsa espacio o toca para volar"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Top right sound toggle button */}
      <button
        type="button"
        onClick={toggleSound}
        className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-brand-surface hover:text-brand-accent border border-brand-primary/40 backdrop-blur-sm transition-colors z-20"
        title={soundEnabled ? "Silenciar audio" : "Activar audio"}
        aria-label={soundEnabled ? "Silenciar audio" : "Activar audio"}
      >
        {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>

      {/* In-game score display */}
      {gameState === "PLAYING" && (
        <div className="absolute top-4 inset-x-0 flex justify-center pointer-events-none z-10">
          <span className="font-astra-display text-4xl sm:text-5xl text-brand-surface drop-shadow-[0_2px_12px_rgba(255,219,90,0.5)]">
            {score}
          </span>
        </div>
      )}

      {/* Start screen overlay */}
      {gameState === "START" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-950/40 backdrop-blur-[2px] pointer-events-none z-10 transition-opacity">
          <div className="text-center space-y-2 animate-pulse">
            <h2 className="font-astra-display text-2xl sm:text-3xl tracking-wider text-brand-accent drop-shadow-md">
              FLAPPY ROCKET
            </h2>
            <p className="font-astra-serif text-sm sm:text-base text-brand-surface/90 flex items-center justify-center gap-2">
              <span>Toca la pantalla o pulsa</span>
              <kbd className="px-2 py-0.5 rounded bg-brand-primary/80 border border-brand-soft/40 text-xs font-mono text-white shadow">
                ESPACIO
              </kbd>
            </p>
          </div>
          {highScore > 0 && (
            <div className="absolute bottom-12 text-xs sm:text-sm text-brand-surface/70 font-astra-serif">
              Récord actual: <span className="font-bold text-brand-accent">{highScore}</span>
            </div>
          )}
        </div>
      )}

      {/* Game Over screen overlay */}
      {gameState === "GAME_OVER" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm z-10">
          <div className="bg-slate-900/95 border-2 border-brand-primary/50 rounded-2xl p-4 sm:p-6 text-center max-w-xs w-full shadow-2xl flex flex-col items-center gap-3">
            <h2 className="font-astra-display text-xl sm:text-2xl text-rose-400 tracking-wider">
              MISIÓN FALLIDA
            </h2>

            {isNewRecord && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-accent text-brand-ink font-astra-display tracking-wider font-bold animate-bounce">
                ¡NUEVO RÉCORD!
              </span>
            )}

            <div className="grid grid-cols-2 gap-4 w-full py-2 border-y border-brand-primary/30">
              <div className="flex flex-col items-center">
                <span className="text-xs text-brand-surface/70 font-astra-serif">PUNTOS</span>
                <span className="font-astra-display text-2xl text-brand-surface">{score}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-brand-surface/70 font-astra-serif">RÉCORD</span>
                <span className="font-astra-display text-2xl text-brand-accent">{highScore}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                triggerFlap();
              }}
              className="mt-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-primary text-brand-ink hover:text-brand-surface font-astra-display text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-md cursor-pointer"
            >
              <RotateCcw size={15} />
              <span>REINTENTAR</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
