import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import TextSpanWrapper from "./TextSpanWrapper";

function TimelineDebugger({ progress }) {
  const [value, setValue] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    setValue(latest);
  });

  return (
    <output className="fixed bottom-4 right-4 z-50 rounded-lg bg-black px-4 py-2 font-mono text-sm text-white shadow-lg">
      Scroll: {Math.round(value * 100)}%
    </output>
  );
}

export function Timeline({
  data = [],
  title = "Próximas competiciones",
  description = "Los retos que orientan el desarrollo de nuestros proyectos.",
  debug = false,
  withBackground = true,
  className = "",
}) {
  const timelineRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 10%", "end 50%"],
    trackContentSize: true,
  });

  const lineOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, 1]
  );

  return (
    <section
      className={`w-full md:px-10 ${
        withBackground ? "bg-white" : ""
      } ${className}`}
    >
      <header className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <TextSpanWrapper
          as="h2"
          className="mb-4 max-w-4xl text-3xl text-brand-primary md:text-5xl"
        >
          {title}
        </TextSpanWrapper>

        <p className="max-w-2xl text-base font-medium leading-relaxed text-brand-ink/80 md:text-lg">
          {description}
        </p>
      </header>

      <div
        ref={timelineRef}
        className="relative mx-auto max-w-7xl pb-20"
      >
        {data.map((item, index) => (
          <article
            key={item.id ?? `${item.title}-${index}`}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs self-start flex-col items-center md:w-full md:max-w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-astra-blue-light">
                <div className="h-4 w-4 rounded-full border border-astra-blue bg-astra-blue" />
              </div>

              <h3 className="hidden text-xl font-bold text-astra-navy md:block md:pl-20 md:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-astra-navy md:hidden">
                {item.title}
              </h3>

              {item.content}
            </div>
          </article>
        ))}

        <div
          aria-hidden="true"
          className="
            absolute bottom-0 left-8 top-0
            w-0.5 overflow-hidden
            bg-linear-to-b
            from-transparent
            via-neutral-200
            to-transparent
            mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
          "
        >
          <motion.div
            style={{
              scaleY: shouldReduceMotion ? 1 : scrollYProgress,
              opacity: shouldReduceMotion ? 1 : lineOpacity,
              transformOrigin: "top",
            }}
            className="
              absolute inset-0
              w-0.5
              rounded-full
              bg-linear-to-t
              from-brand-accent
              via-brand-primary
              to-transparent
            "
          />
        </div>
      </div>

      {debug && <TimelineDebugger progress={scrollYProgress} />}
    </section>
  );
}
