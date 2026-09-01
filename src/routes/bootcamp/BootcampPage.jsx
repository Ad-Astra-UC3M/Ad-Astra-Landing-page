import jet from "../../assets/bootcamp/jet.png";
import satsigma from "../../assets/bootcamp/sat.png";
import rocket from "../../assets/bootcamp/rocket.png";
import { RocketIcon } from "lucide-react";


export default function BootcampPage() {

  function openGoogleCalendar({ title, start, end, location, details }) {
      const url = new URL("https://calendar.google.com/calendar/render");
      url.searchParams.set("action", "TEMPLATE");
      url.searchParams.set("text", title);
      url.searchParams.set("dates", `${start}/${end}`);
      if (location) url.searchParams.set("location", location);
      if (details) url.searchParams.set("details", details);

      window.open(url.toString(), "_blank", "noopener,noreferrer");}


    const morningEvents = [
        { title: "Jet Engine", image:jet,  start: "20261015T090000Z", end: "20261015T110000Z", location: "UC3M, Madrid" },
        { title: "Rocket A4", image:rocket, start: "20261015T110000Z", end: "20261015T130000Z", location: "UC3M, Madrid" },
        { title: "Model Satellite", image:satsigma, start: "20261015T130000Z", end: "20261015T140000Z", location: "UC3M, Madrid" },
    ];

    const afternoonEvents = [
        { title: "Jet Engine", image:jet, start: "20261015T150000Z", end: "20261015T170000Z", location: "UC3M, Madrid" },
        { title: "Rocket A4", image:rocket, start: "20261015T170000Z", end: "20261015T190000Z", location: "UC3M, Madrid" },
        { title: "Model Satellite", image:satsigma, start: "20261015T190000Z", end: "20261015T200000Z", location: "UC3M, Madrid" },
      ];

  

	return (
		<section
			id="about"
			className="relative overflow-hidden bg-brand-surface px-6 py-40 sm:px-8 md:py-40 lg:py-40"
			aria-labelledby="about-us-title"
		>
{/*		<div
				className="absolute z-10 rounded-full border-2 border-brand-accent/70 top-1/5 left-1/6 aspect-square w-[120%] -rotate-64 pointer-events-none motion-reduce:animate-none animate-[astra-footer-orbit_128s_linear_infinite]"
				aria-hidden="true"
			>
				<RocketIcon
					className="absolute left-1/2 top-0 size-5 -translate-1/2 rotate-45"
					aria-hidden="true"
				/>
			</div>
*/}
			<p className="text-xl z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-brand-ink/95">
				Unéte a nuestra comunidad de Whatsapp para no perderte nada
			</p>

			<div className="flex flex-col items-center justify-center gap-6 mt-8">
				<a
					href="https://chat.whatsapp.com/tu-enlace-de-invitacion"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 transition hover:brightness-105"
				>
					<svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
						<path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 2.114.68 4.070 1.836 5.664L2.5 22l4.462-1.316a9.94 9.94 0 0 0 5.042 1.36c5.518 0 9.994-4.476 9.994-9.994C21.998 6.476 17.522 2 12.004 2zm0 18.14a8.13 8.13 0 0 1-4.146-1.135l-.297-.176-3.09.911.925-3.008-.193-.31a8.12 8.12 0 0 1-1.246-4.428c0-4.49 3.656-8.146 8.147-8.146 4.49 0 8.147 3.656 8.147 8.146 0 4.49-3.657 8.146-8.147 8.146z" />
					</svg>
					<span className="text-xs font-astra-display uppercase text-white">
						Grupo de Whatsapp
					</span>
				</a>
      <p className="text-xl z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-brand-ink/95">
				Añade tus eventos a tu calendario
			</p>
        <p className="text-md z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-brand-ink/95">
				Turno de mañana
			  </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-6 mt-8">
                {morningEvents.map((event) => (
                    <button
                        key={event.title}
                        onClick={() => openGoogleCalendar(event)}
                        className="flex items-center gap-3 rounded-2xl bg-[#2c2fa4] px-8 py-4 transition hover:brightness-105 cursor-pointer"
                    >
                        <img src={event.image} alt={event.title} className="w-10 h-10" />
                        <span className="text-xs font-astra-display uppercase text-white">
                            {event.title}
                        </span>
                    </button>
                ))}
            </div>
        
      
  <p className="text-md mt-8 z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-brand-ink/95">
  Turno de tarde
  </p>
        <div className="flex flex-row items-center justify-center gap-6 mt-8">
                {afternoonEvents.map((event) => (
                    <button
                        key={event.title}
                        onClick={() => openGoogleCalendar(event)}
                        className="flex items-center gap-3 rounded-2xl bg-[#2c2fa4] px-8 py-4 transition hover:brightness-105 cursor-pointer"
                    >
                        <img src={event.image} alt={event.title} className="w-10 h-10" />
                        <span className="text-xs font-astra-display uppercase text-white">
                            {event.title}
                        </span>
                    </button>
                ))}
            </div>
		</section>
	);
}
