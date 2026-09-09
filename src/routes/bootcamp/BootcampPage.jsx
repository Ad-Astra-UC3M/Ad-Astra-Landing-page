import jet from "../../assets/bootcamp/jet.png";
import satsigma from "../../assets/bootcamp/sat.png";
import rocket from "../../assets/bootcamp/rocket.png";
import calendar from "../../assets/bootcamp/calendar.png";
import operations from "../../assets/bootcamp/events-media-partners-it.png";
import bootcampVideo from "../../assets/bootcamp/background.mp4";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CalendarDays, X } from "lucide-react";
import { useState } from "react";


export default function BootcampPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  function openGoogleCalendar({ title, start, end, location, details }) {
      const url = new URL("https://calendar.google.com/calendar/render");
      url.searchParams.set("action", "TEMPLATE");
      url.searchParams.set("text", title);
      url.searchParams.set("dates", `${start}/${end}`);
      url.searchParams.set("ctz", "Europe/Madrid");
      if (location) url.searchParams.set("location", location);
      if (details) url.searchParams.set("details", details);

      window.open(url.toString(), "_blank", "noopener,noreferrer");}

  function CalendarModal({ event }) {
    if (!event) return null;
    const actionClass = "group flex min-h-32 min-w-0 items-center gap-4 rounded-lg border border-brand-soft bg-white p-5 text-left transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-soft/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent motion-reduce:transform-none motion-reduce:transition-colors";

    return (
      <Dialog open onClose={() => setSelectedEvent(null)} className="relative z-1000">
        <div className="fixed inset-0 bg-brand-ink/75" aria-hidden="true" />
        <div className="fixed inset-0 grid place-items-center p-5 sm:p-8">
          <DialogPanel className="relative w-[calc(100vw-2.5rem)] min-w-0 max-w-3xl rounded-lg bg-brand-surface p-5 text-brand-ink shadow-[0_24px_70px_rgba(20,23,64,0.32)] sm:p-8">
            <button type="button" data-autofocus onClick={() => setSelectedEvent(null)} aria-label="Cerrar opciones de calendario" className="absolute right-4 top-4 grid size-10 place-items-center rounded-lg border border-brand-soft bg-brand-surface text-brand-primary transition-colors hover:bg-brand-soft/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:right-6 sm:top-6">
              <X aria-hidden="true" className="size-5" />
            </button>
            <header className="border-b border-brand-soft pb-5 pr-12">
              <DialogTitle className="text-2xl leading-tight sm:text-4xl">Añade el evento a tu calendario</DialogTitle>
              <p className="mt-2 text-lg text-brand-primary">{event.title}</p>
            </header>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <button type="button" onClick={() => { openGoogleCalendar(event); setSelectedEvent(null); }} className={actionClass}>
                <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-brand-soft/60 bg-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7 fill-none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 7.5v10" stroke="#4285F4"/><path d="M20.5 7.5v10" stroke="#34A853"/><path d="m3.5 7.5 8.5 6.4 8.5-6.4" stroke="#EA4335"/><path d="M3.5 17.5h3" stroke="#FBBC04"/></svg>
                </span>
                <span className="min-w-0"><strong className="block text-lg text-brand-ink">Google Calendar</strong><small className="mt-1 block text-sm text-brand-ink/70">Abrir con tu cuenta de Google</small></span>
              </button>
              <a href={event.ics} onClick={() => setSelectedEvent(null)} className={actionClass}>
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-brand-accent text-brand-ink"><CalendarDays aria-hidden="true" className="size-7" /></span>
                <span className="min-w-0"><strong className="block text-lg text-brand-ink">Descargar calendario</strong><small className="mt-1 block text-sm text-brand-ink/70">Outlook, Apple Calendar y otros</small></span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    );
  }



    const diffusionEvent = { title: "Evento de presentación · Ad Astra UC3M", image: calendar, ics: "/bootcamp/calendar/evento_difusion.ics", start: "20260911", end: "20260912", schedule: "Viernes 11 de septiembre · pendiente de aprobación", summary: "Fecha y horario pendientes de aprobación por la UC3M.", details: "Evento de presentación de Ad Astra UC3M previsto para el 11 de septiembre. La fecha definitiva y el horario están pendientes de aprobación por la UC3M." };

    const morningEvents = [
        { title: "Rocket A4", image:rocket, ics: "/bootcamp/calendar/rocket_a4.ics", start: "20260915T110000", end: "20260915T140000", schedule: "Martes 15 · 11:00–14:00", location: "UC3M · Campus de Leganés", details: "Bootcamp Rocket A4 · turno de mañana." },
        { title: "Jet Engine", image:jet, ics: "/bootcamp/calendar/jet_engine.ics", start: "20260916T110000", end: "20260916T140000", schedule: "Miércoles 16 · 11:00–14:00", location: "UC3M · Campus de Leganés", details: "Bootcamp Jet Engine · turno de mañana." },
        { title: "Model Satellite", image:satsigma, ics: "/bootcamp/calendar/model_satellite.ics", start: "20260917T110000", end: "20260917T140000", schedule: "Jueves 17 · 11:00–14:00", location: "UC3M · Campus de Leganés", details: "Bootcamp Model Satellite · turno de mañana." },
        { title: "Eventos, Media, Partners + IT", image:operations, ics: "/bootcamp/calendar/eventos_media_partners_it_manana.ics", start: "20260917T110000", end: "20260917T140000", schedule: "Jueves 17 · 11:00–14:00", location: "UC3M · Campus de Getafe", details: "Bootcamp de Eventos, Media, Partners e IT · turno de mañana." },
    ];

    const afternoonEvents = [
        { title: "Rocket A4", image:rocket, ics: "/bootcamp/calendar/rocket_a4_tarde.ics", start: "20260915T150000", end: "20260915T170000", schedule: "Martes 15 · 15:00–17:00", location: "UC3M · Campus de Leganés", details: "Bootcamp Rocket A4 · turno de tarde." },
        { title: "Jet Engine", image:jet, ics: "/bootcamp/calendar/jet_engine_tarde.ics", start: "20260916T150000", end: "20260916T170000", schedule: "Miércoles 16 · 15:00–17:00", location: "UC3M · Campus de Leganés", details: "Bootcamp Jet Engine · turno de tarde." },
        { title: "Model Satellite", image:satsigma, ics: "/bootcamp/calendar/model_satellite_tarde.ics", start: "20260917T150000", end: "20260917T170000", schedule: "Jueves 17 · 15:00–17:00", location: "UC3M · Campus de Leganés", details: "Bootcamp Model Satellite · turno de tarde." },
        { title: "Eventos, Media, Partners + IT", image:operations, ics: "/bootcamp/calendar/eventos_media_partners_it.ics", start: "20260917T150000", end: "20260917T170000", schedule: "Jueves 17 · 15:00–17:00", location: "UC3M · Campus de Getafe", details: "Bootcamp de Eventos, Media, Partners e IT · turno de tarde." },
      ];


	return (
		<>
		<section
			id="about"
			className="relative flex flex-col items-center z-0 overflow-hidden bg-brand-surface py-28 px-6 sm:px-8 gap-4"
			aria-labelledby="about-us-title"
		>
    <video
        src={bootcampVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover h-full w-full -z-10"
    />
    <div className="flex flex-col bg-brand-surface w-[120%] xl:w-[110%] px-8 text-center">
      <h1 className="z-20 mx-auto font-astra-display uppercase tracking-[0.16em] text-astra-blue text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-balance pt-8">
				¡Gracias por apuntarte a las actividades de Ad Astra!
			</h1>
      <p className="mx-auto max-w-2xl py-8 text-lg leading-relaxed text-brand-ink/80">
        Hemos recibido tu respuesta. Guarda las fechas que hayas elegido y únete a la comunidad para no perderte ninguna novedad.
      </p>
      </div>

			<p className="text-xl z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-white mt-8">
				Únete a nuestra comunidad de WhatsApp para no perderte nada
			</p>

			<div className="flex flex-col items-center justify-center gap-6">
				<a
					href="https://chat.whatsapp.com/H8XD9u1zcAfFj1RWlT6kIk?s=sh&p=a&mlu=4&ilr=4"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 rounded-2xl bg-[#128c4a] px-8 py-4 transition hover:brightness-105"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" className="w-10 h-10 fill-white">
						<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
						<path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 2.114.68 4.070 1.836 5.664L2.5 22l4.462-1.316a9.94 9.94 0 0 0 5.042 1.36c5.518 0 9.994-4.476 9.994-9.994C21.998 6.476 17.522 2 12.004 2zm0 18.14a8.13 8.13 0 0 1-4.146-1.135l-.297-.176-3.09.911.925-3.008-.193-.31a8.12 8.12 0 0 1-1.246-4.428c0-4.49 3.656-8.146 8.147-8.146 4.49 0 8.147 3.656 8.147 8.146 0 4.49-3.657 8.146-8.147 8.146z" />
					</svg>
					<span className="text-xs font-astra-display uppercase text-white">
						Grupo de WhatsApp
					</span>
				</a>
      <p className="text-xl z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-white mt-8">
				Guarda tus fechas
			</p>
        </div>

        <button
          type="button"
          onClick={() => setSelectedEvent(diffusionEvent)}
          className="group flex min-h-24 w-full max-w-2xl min-w-0 items-center gap-4 rounded-lg bg-brand-accent px-5 py-4 text-left text-brand-ink shadow-[0_10px_28px_rgba(20,23,64,0.18)] transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink motion-reduce:transform-none motion-reduce:transition-none"
        >
          <img src={diffusionEvent.image} alt="" className="h-16 w-24 shrink-0 rounded-md object-contain" />
          <span className="min-w-0">
            <strong className="block font-astra-display text-xs uppercase leading-relaxed sm:text-sm">{diffusionEvent.title}</strong>
            <small className="mt-1 block text-sm font-bold leading-snug opacity-85">{diffusionEvent.schedule}</small>
            <small className="mt-2 block max-w-lg text-sm leading-relaxed opacity-80">{diffusionEvent.summary}</small>
          </span>
        </button>

        <p className="text-md z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-shadow-astra-blue-medium bg-brand-accent px-4 py-2 rounded-lg sm:px-20 mt-8">
				Mañana · 11:00–14:00
			  </p>

        <div className="grid w-full max-w-6xl gap-4 mt-4 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                {morningEvents.map((event) => (
                    <button
                        key={event.title}
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        className="group flex min-h-24 w-full min-w-0 items-center gap-4 rounded-lg bg-brand-primary px-5 py-4 text-left text-brand-surface shadow-[0_10px_28px_rgba(20,23,64,0.18)] transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink motion-reduce:transform-none motion-reduce:transition-none"
                    >
                        <img src={event.image} alt="" className="size-14 shrink-0 rounded-md bg-brand-surface/10 object-contain" />
                        <span className="min-w-0">
                          <strong className="block font-astra-display text-xs uppercase leading-relaxed sm:text-sm">{event.title}</strong>
                          <small className="mt-1 block text-sm font-bold leading-snug opacity-85">{event.schedule}</small>
                          <small className="mt-0.5 block text-sm leading-snug opacity-75">{event.location}</small>
                        </span>
                    </button>
                ))}
            </div>

  <p className="text-md z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-shadow-astra-blue-medium bg-brand-accent px-4 py-2 rounded-lg sm:px-20">
  Tarde · 15:00–17:00
  </p>
        <div className="grid w-full max-w-6xl gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
                {afternoonEvents.map((event) => (
                    <button
                        key={event.title}
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        className="group flex min-h-24 w-full min-w-0 items-center gap-4 rounded-lg bg-brand-primary px-5 py-4 text-left text-brand-surface shadow-[0_10px_28px_rgba(20,23,64,0.18)] transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink motion-reduce:transform-none motion-reduce:transition-none"
                    >
                        {event.image ? (
                          <img src={event.image} alt="" className="size-14 shrink-0 rounded-md bg-brand-surface/10 object-contain" />
                        ) : (
                          <span className="grid size-14 shrink-0 place-items-center rounded-md bg-brand-surface/15"><CalendarDays aria-hidden="true" className="size-7" /></span>
                        )}
                        <span className="min-w-0">
                          <strong className="block font-astra-display text-xs uppercase leading-relaxed sm:text-sm">{event.title}</strong>
                          <small className="mt-1 block text-sm font-bold leading-snug opacity-85">{event.schedule}</small>
                          <small className="mt-0.5 block text-sm leading-snug opacity-75">{event.location}</small>
                        </span>
                    </button>
                ))}
            </div>
		</section>
		<CalendarModal event={selectedEvent} />
		</>
	);
}
