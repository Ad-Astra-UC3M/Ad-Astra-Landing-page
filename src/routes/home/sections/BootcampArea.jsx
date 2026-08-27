import TextSpanWrapper2 from "../../../components/ui/TextSpanWrapper2";
import Button2 from "../../../components/ui/Button2";
import brandPoster from "../../../assets/bootcamp/flyer.png";


export default function BootcampArea() {
    return (
        <section
            className=" bg-brand-ink px-6 py-6 md:px-8 md:py-22 overflow-hidden text-center flex flex-col gap-16 relative"
            aria-labelledby="bootcamp-preview-title"
        >
            <img src="https://st4.depositphotos.com/3936669/30840/v/450/depositphotos_308404320-stock-illustration-snow-seamless-pattern-white-stars.jpg" alt="Stars Texture" className="absolute inset-0 z-0 object-cover h-full w-full " />

            <img
                src={brandPoster}
                alt="Bootcamp Poster"
                className="mx-auto max-w-md h-auto -mb-8 z-10"
            />
            <TextSpanWrapper2
                            as="h2"
                            id="bootcamp-preview-title"
                            className=" text-4xl text-white text-balance max-w-3/4 mx-auto"
                        >
                            ¡Únete a nuestro Bootcamp y lleva tus habilidades al siguiente nivel!
                        </TextSpanWrapper2>
            <a href="https://forms.google.com/tu-formulario" target="_blank" rel="noopener noreferrer">
            <Button2
            label="¡Participa aquí!"
            className="w-full sm:w-auto text-white text-xs font-astra-display uppercase"
            style={{ "--bg": "#ec9e2c", "--white": "#fff8e1" }}
            />
            </a>
            
        </section>
    );
}