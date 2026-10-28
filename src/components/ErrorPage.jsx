import Button from "./ui/Button.jsx";
import RocketFlappyGame from "./RocketFlappyGame.jsx";
import Footer from "./layout/Footer.jsx";

const AVATAR_URL = "https://avatar.adastrauc3m.es/";

export default function ErrorPage() {
  return (
    <div className="w-full min-h-screen bg-brand-surface text-brand-ink flex flex-col justify-between relative overflow-x-hidden">
      {/* 404 Hero Viewport: 1/4 arriba, 1/2 juego horizontal completo, 1/4 botones */}
      <section className="relative w-full h-dvh min-h-[620px] flex flex-col justify-between overflow-hidden">
        {/* Textura de fondo técnica aeroespacial / blueprint */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          {/* Cuadrícula de coordenadas y malla técnica de ingeniería */}
          <div
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(76, 82, 179, 0.22) 1.2px, transparent 1.2px),
                linear-gradient(to right, rgba(76, 82, 179, 0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(76, 82, 179, 0.07) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px, 112px 112px, 112px 112px",
            }}
          />

          {/* Grano / Textura de papel técnico (SVG noise procedural) */}
          <div
            className="absolute inset-0 opacity-[0.22] mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.7'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Anillos orbitales sutiles en el fondo */}
          <div className="absolute -top-32 -right-32 size-[520px] rounded-full border border-brand-primary/15 pointer-events-none" />
          <div className="absolute -top-16 -right-16 size-[380px] rounded-full border border-dashed border-brand-accent/30 pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 size-[460px] rounded-full border border-brand-primary/15 pointer-events-none" />
        </div>

        {/* 1/4 superior: 404 con la tipografía de la asociación */}
        <header className="h-1/4 min-h-0 w-full flex flex-col items-center justify-center px-4 relative z-10 select-none">
          <h1 className="font-astra-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-primary tracking-widest leading-none drop-shadow-sm">
            404
          </h1>
          <p className="font-astra-serif italic text-xs sm:text-sm md:text-base text-brand-ink/75 mt-1 sm:mt-2 text-center">
            Trayectoria fuera de órbita
          </p>
      </header>

      {/* 1/2 central: Juego Flappy Bird con un cohete */}
      <main className="h-1/2 min-h-0 w-full flex items-center justify-center px-3 sm:px-6 py-1">
        <div className="relative w-full max-w-xl h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-primary/20 bg-slate-950">
          <RocketFlappyGame />
        </div>
      </main>

        {/* 1/4 inferior: Botones redirigiendo a home y a avatar usando el componente Button */}
        <div className="h-1/4 min-h-0 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 relative z-10">
          <Button
            to="/"
            variant="solid"
            color="brand"
            size="lg"
            className="w-full sm:w-auto min-w-[200px] text-center font-astra-display tracking-wider text-xs sm:text-sm uppercase shadow-md"
          >
            VOLVER AL INICIO
          </Button>

          <Button
            href={AVATAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            color="accent"
            size="lg"
            className="w-full sm:w-auto min-w-[200px] text-center font-astra-display tracking-wider text-xs sm:text-sm uppercase shadow-md"
          >
            ¡CREA TU AVATAR!
          </Button>
        </div>
      </section>

      {/* Footer corporativo presente en todas las páginas */}
      <Footer />
    </div>
  );
}