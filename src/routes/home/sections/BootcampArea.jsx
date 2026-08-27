import TextSpanWrapper2 from "../../../components/ui/TextSpanWrapper";
import Button2 from "../../../components/ui/Button2";
import brandPoster from "../../../assets/bootcamp/flyer.png";


export default function BootcampArea() {
    return (
        <section
            className="relative bg-brand-ink px-6 py-6 md:px-8 md:py-22 overflow-hidden text-center"
            aria-labelledby="bootcamp-preview-title"
        >
            <img
                src={brandPoster}
                alt="Bootcamp Poster"
                className="mx-auto mb-4 max-w-md h-auto"
            />
            <TextSpanWrapper2
                            as="h2"
                            id="bootcamp-preview-title"
                            className=" text-xs text-white md:text-xs "
                        >
                            ¡Únete a nuestro Bootcamp y lleva tus habilidades al siguiente nivel!
                        </TextSpanWrapper2>
            <a href="https://forms.google.com/tu-formulario" target="_blank" rel="noopener noreferrer">
            <Button2
            label="¡Participa aquí!"
            className="w-full sm:w-auto text-white text-xs "
            style={{ "--bg": "#f59e0b", "--white": "#fff8e1" }}
            />
            </a>
            
        </section>
    );
}