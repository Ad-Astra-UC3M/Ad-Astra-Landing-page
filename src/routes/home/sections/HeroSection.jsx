import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import TextSpanWrapper from "../../../components/ui/TextSpanWrapper";
import Button from "../../../components/ui/Button";
import InteractiveModel, { SpaceBackground } from "../components/InteractiveModel";

// Controles visuales del hero. Estos valores sobreescriben los defaults de
// earthConfig.js sin necesidad de tocar los shaders GLSL.
const EARTH_APPEARANCE = {
  sunlight: 0.98,
  terminatorSoftness: 0.4,
  cityBrightness: 1.32,
  oceanGlint: 0.13,
  cloudOpacity: 0.68,
  atmosphereStrength: 0.24,
  scale: 1.45,
};

const SPACE_APPEARANCE = {
  panoramaIntensity: 0.72,
  starCount: 5200,
  starSize: 2.5,
};

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          fallback={<div className="absolute inset-0 bg-black" />}
          gl={{
            alpha: false,
            antialias: true,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.92,
          }}
        >
          <Suspense fallback={null}>
            <SpaceBackground appearance={SPACE_APPEARANCE} />
            <InteractiveModel appearance={EARTH_APPEARANCE} />
          </Suspense>
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,8,0.42)_100%)]" />

      <div className="pointer-events-none relative z-10 flex min-h-dvh w-full items-end px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20">
        <div className="grid w-full items-start gap-8 md:grid-cols-[minmax(0,1fr)_auto] lg:justify-normal justify-around md:gap-10 xl:gap-12">
          <div className="text-left">
            <TextSpanWrapper
              animateOnLoad
              className="text-brand-surface drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)]"
            >
              AD ASTRA
            </TextSpanWrapper>
            <p className="mt-3 text-lg font-medium text-brand-surface drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)] sm:text-2xl">
              Ingeniería para llegar a las estrellas
            </p>
          </div>

          <div className="pointer-events-auto flex w-full max-w-72 flex-col items-stretch gap-3 md:w-auto md:max-w-none md:justify-self-end xl:flex-row xl:items-center xl:justify-end xl:gap-4">
            <Button
              to="/join"
              size="md"
              className="w-full md:w-auto md:min-w-60"
            >
              Únete a nosotros
            </Button>
            <Button
              to="/sponsors"
              variant="outline"
              color="surface"
              size="md"
              className="w-full md:w-auto md:min-w-76"
            >
              Colabora como sponsor
            </Button>
            <Button
              to="/projects"
              variant="ghost"
              color="surface"
              size="md"
              className="w-full md:w-auto"
            >
              Ver proyectos →
            </Button>
          </div>
        </div>
      </div>

      <p className="absolute bottom-3 right-4 z-10 text-[10px] text-white/45">
        Earth imagery: NASA · Space textures:{" "}
        <a
          className="pointer-events-auto underline hover:text-white/80"
          href="https://www.solarsystemscope.com/textures/"
          target="_blank"
          rel="noreferrer"
        >
          Solar System Scope (CC BY 4.0)
        </a>
      </p>
    </section>
  );
}
