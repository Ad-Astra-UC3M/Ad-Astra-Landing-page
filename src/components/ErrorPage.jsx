import boyImage from "../assets/error/niño.png"; // ← ajusta el nombre/extensión
import girlImage from "../assets/error/niña.png"; // ← ajusta el nombre/extensión
import error404 from "../assets/error/404.PNG";
import Button2 from "../components/ui/Button2.jsx";

const AVATAR_URL = "https://avatar.adastrauc3m.es/";

export default function ErrorPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-4 md:gap-10 px-4 py-10">
      {/* Niño (izquierda) */}
      <img
        src={boyImage}
        alt=""
        className="w-1/4 max-w-xs max-h-[70vh] object-contain"
      />

      {/* Centro: 404 + botones */}
      <div className="flex flex-col items-center gap-8 w-1/2 max-w-md">
        <img
          src={error404}
          alt="Page not found"
          className="w-full max-w-xs max-h-[35vh] object-contain"
        />

        <div className="flex flex-col items-center gap-4 w-full">
          <a
            href={AVATAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block w-full sm:w-auto"
          >
            <Button2
              label="¡CREA TU AVATAR!"
              className="w-full sm:w-auto text-white text-xs font-astra-display"
              style={{ "--bg": "#f59e0b", "--white": "#fff8e1" }}
            />
          </a>

          <a href="/" className="relative z-10 inline-block w-full sm:w-auto">
            <Button2
              label="VOLVER AL INICIO"
              className="w-full sm:w-auto text-white text-xs font-astra-display"
              style={{ "--bg": "#f59e0b", "--white": "#fff8e1" }}
            />
          </a>
        </div>
      </div>

      {/* Niña (derecha) */}
      <img
        src={girlImage}
        alt=""
        className="w-1/4 max-w-xs max-h-[70vh] object-contain"
      />
    </div>
  );
}