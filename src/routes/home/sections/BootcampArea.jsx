import TextSpanWrapper2 from "../../../components/ui/TextSpanWrapper2";
import Button2 from "../../../components/ui/Button2";
import brandPoster from "../../../assets/bootcamp/flyer.png";
import bootcampVideo from "../../../assets/bootcamp/background.mp4";


export default function BootcampArea() {
    return (
        <section
            className="relative z-0 bg-brand-ink px-6 py-6 md:px-8 md:py-22 overflow-hidden text-center"
            aria-labelledby="bootcamp-preview-title"
        >
            <video
                src={bootcampVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 object-cover h-full w-full -z-10"
            />

            <img
                src={brandPoster}
                alt="Bootcamp Poster"
                className="mx-auto -mt-4 mb-4 max-w-md h-auto"
            />
            <TextSpanWrapper2
                            as="h1"
                            id="bootcamp-preview-title"
                            className="relative z-10 mx-auto max-w-2xl text-2xl text-white md:text-3xl"
                        >
                            ¡Únete a nuestro Bootcamp y lleva tus habilidades al siguiente nivel!
                        </TextSpanWrapper2>
            <a href="https://forms.google.com/tu-formulario" target="_blank" rel="noopener noreferrer" className="relative z-10 mt-8 inline-block">
            <Button2
            label="¡PARTICIPA AQUÍ!"
            className="w-full sm:w-auto text-white text-xs font-astra-display"
            style={{ "--bg": "#f59e0b", "--white": "#fff8e1" }}
            />
            </a>
            
        </section>
    );
}