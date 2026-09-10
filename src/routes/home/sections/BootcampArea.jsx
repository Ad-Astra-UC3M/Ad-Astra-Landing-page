import { useEffect, useRef, useState } from "react";

import TextSpanWrapper2 from "../../../components/ui/TextSpanWrapper2";
import Button2 from "../../../components/ui/Button2";
import flyer480 from "../../../assets/bootcamp/flyer-480.webp";
import flyer768 from "../../../assets/bootcamp/flyer-768.webp";
import flyer960 from "../../../assets/bootcamp/flyer-960.webp";
import bootcampVideo from "../../../assets/bootcamp/background.mp4";

const VIDEO_LOAD_MARGIN = "256px 0px";

function useDeferredVideo() {
    const sectionRef = useRef(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return undefined;

        if (!("IntersectionObserver" in window)) {
            setShouldLoadVideo(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                setShouldLoadVideo(true);
                observer.disconnect();
            },
            { rootMargin: VIDEO_LOAD_MARGIN },
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return { sectionRef, shouldLoadVideo };
}

export default function BootcampArea() {
    const { sectionRef, shouldLoadVideo } = useDeferredVideo();

    return (
        <section
            ref={sectionRef}
            className="relative z-0 bg-brand-ink px-6 py-6 md:px-8 md:py-22 overflow-hidden text-center"
            aria-labelledby="bootcamp-preview-title"
        >
            {shouldLoadVideo && (
                <video
                    aria-hidden="true"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    src={bootcampVideo}
                    className="absolute inset-0 h-full w-full -z-10 object-cover"
                />
            )}

            <img
                src={flyer768}
                srcSet={`${flyer480} 480w, ${flyer768} 768w, ${flyer960} 960w`}
                sizes="(min-width: 768px) 448px, calc(100vw - 3rem)"
                width="1672"
                height="941"
                loading="lazy"
                decoding="async"
                alt="Ilustración del Bootcamp de Ad Astra"
                className="mx-auto -mt-4 mb-4 h-auto w-full max-w-md"
            />
            <TextSpanWrapper2
                            as="h1"
                            id="bootcamp-preview-title"
                            className="relative z-10 mx-auto max-w-2xl text-2xl text-white md:text-3xl"
                        >
                            ¡Apúntate al evento Ad Astra en el Meet &amp; Greet del viernes 11 de septiembre y únete a nuestros Bootcamps para llevar tus habilidades al siguiente nivel!
                        </TextSpanWrapper2>
            <p className="relative z-10 mx-auto mt-4 max-w-2xl text-white">Diana con aviones de papel, beerpong, trivia y más. Además, hamburguesas gratis, hasta agotar existencias.</p>
            <a href="/join" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-8 inline-block">
            <Button2
            label="¡PARTICIPA AQUÍ!"
            className="w-full sm:w-auto text-white text-xs font-astra-display"
            style={{ "--bg": "#f59e0b", "--white": "#fff8e1" }}
            />
            </a>
            
        </section>
    );
}
