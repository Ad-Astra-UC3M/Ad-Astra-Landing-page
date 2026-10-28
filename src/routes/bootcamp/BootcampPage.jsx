import jet from "../../assets/bootcamp/jet.png";
import satsigma from "../../assets/bootcamp/sat.png";
import rocket from "../../assets/bootcamp/rocket.png";
import operations from "../../assets/bootcamp/events-media-partners-it.png";
import bootcampVideo from "../../assets/bootcamp/background.mp4";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CalendarDays, X } from "lucide-react";
import { useState } from "react";
import WhatsAppGroupButton from "../../components/WhatsAppGroupButton.jsx";


export default function BootcampPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  function openGoogleCalendar({ title, calendarTitle, start, end, location, details }) {
      const url = new URL("https://calendar.google.com/calendar/render");
      url.searchParams.set("action", "TEMPLATE");
      url.searchParams.set("text", calendarTitle ?? title);
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




    const morningEvents = [
        { title: "Rocket A4", calendarTitle: "Bootcamp Rocket A4 · turno de mañana", image:rocket, ics: "/bootcamp/calendar/rocket_a4.ics", start: "20260915T110000", end: "20260915T130000", schedule: "Martes 15 · 11:00–13:00", location: "UC3M · Campus de Leganés · Aula 7.1.J05", details: "Bootcamp Rocket A4 · turno de mañana. Martes 15 de septiembre de 2026, 11:00–13:00. Campus de Leganés · Aula 7.1.J05. Esta sesión repite la actividad del turno de tarde; elige un único turno." },
        { title: "Jet Engine", calendarTitle: "Bootcamp Jet Engine · turno de mañana", image:jet, ics: "/bootcamp/calendar/jet_engine.ics", start: "20260916T110000", end: "20260916T130000", schedule: "Miércoles 16 · 11:00–13:00", location: "UC3M · Campus de Leganés · Aula 7.0.J03", details: "Bootcamp Jet Engine · turno de mañana. Miércoles 16 de septiembre de 2026, 11:00–13:00. Campus de Leganés · Aula 7.0.J03. Esta sesión repite la actividad del turno de tarde; elige un único turno." },
        { title: "Model Satellite", calendarTitle: "Bootcamp Model Satellite · turno de mañana", image:satsigma, ics: "/bootcamp/calendar/model_satellite.ics", start: "20260917T110000", end: "20260917T130000", schedule: "Jueves 17 · 11:00–13:00", location: "UC3M · Campus de Leganés · Aula 7.1.J08", details: "Bootcamp Model Satellite · turno de mañana. Jueves 17 de septiembre de 2026, 11:00–13:00. Campus de Leganés · Aula 7.1.J08. Esta sesión repite la actividad del turno de tarde; elige un único turno." },
        { title: "Eventos, Media, Partners e IT", calendarTitle: "Bootcamp Eventos, Media, Partners e IT · turno de mañana", image:operations, ics: "/bootcamp/calendar/eventos_media_partners_it_manana.ics", start: "20260917T110000", end: "20260917T130000", schedule: "Jueves 17 · 11:00–13:00", location: "UC3M · Campus de Getafe · Aula 18.0.A14", details: "Bootcamp Eventos, Media, Partners e IT · turno de mañana. Jueves 17 de septiembre de 2026, 11:00–13:00. Campus de Getafe · Aula 18.0.A14. Esta sesión repite la actividad del turno de tarde; elige un único turno." },
    ];

    const afternoonEvents = [
        { title: "Rocket A4", calendarTitle: "Bootcamp Rocket A4 · turno de tarde", image:rocket, ics: "/bootcamp/calendar/rocket_a4_tarde.ics", start: "20260915T150000", end: "20260915T170000", schedule: "Martes 15 · 15:00–17:00", location: "UC3M · Campus de Leganés · Aula 7.1.J05", details: "Bootcamp Rocket A4 · turno de tarde. Martes 15 de septiembre de 2026, 15:00–17:00. Campus de Leganés · Aula 7.1.J05. Esta sesión repite la actividad del turno de mañana; elige un único turno." },
        { title: "Jet Engine", calendarTitle: "Bootcamp Jet Engine · turno de tarde", image:jet, ics: "/bootcamp/calendar/jet_engine_tarde.ics", start: "20260916T150000", end: "20260916T170000", schedule: "Miércoles 16 · 15:00–17:00", location: "UC3M · Campus de Leganés · Aula 7.0.J02", details: "Bootcamp Jet Engine · turno de tarde. Miércoles 16 de septiembre de 2026, 15:00–17:00. Campus de Leganés · Aula 7.0.J02. Esta sesión repite la actividad del turno de mañana; elige un único turno." },
        { title: "Model Satellite", calendarTitle: "Bootcamp Model Satellite · turno de tarde", image:satsigma, ics: "/bootcamp/calendar/model_satellite_tarde.ics", start: "20260917T150000", end: "20260917T170000", schedule: "Jueves 17 · 15:00–17:00", location: "UC3M · Campus de Leganés · Aula 7.1.J08", details: "Bootcamp Model Satellite · turno de tarde. Jueves 17 de septiembre de 2026, 15:00–17:00. Campus de Leganés · Aula 7.1.J08. Esta sesión repite la actividad del turno de mañana; elige un único turno." },
        { title: "Eventos, Media, Partners e IT", calendarTitle: "Bootcamp Eventos, Media, Partners e IT · turno de tarde", image:operations, ics: "/bootcamp/calendar/eventos_media_partners_it.ics", start: "20260917T150000", end: "20260917T170000", schedule: "Jueves 17 · 15:00–17:00", location: "UC3M · Campus de Getafe · Aula 18.0.A11", details: "Bootcamp Eventos, Media, Partners e IT · turno de tarde. Jueves 17 de septiembre de 2026, 15:00–17:00. Campus de Getafe · Aula 18.0.A11. Esta sesión repite la actividad del turno de mañana; elige un único turno." },
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
				<WhatsAppGroupButton />
      <p className="text-xl z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-white mt-8">
				Guarda tus fechas
			</p>
        </div>

        <p className="text-md z-20 mx-auto text-center font-astra-display uppercase tracking-[0.16em] text-shadow-astra-blue-medium bg-brand-accent px-4 py-2 rounded-lg sm:px-20 mt-8">
				Mañana · 11:00–13:00
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
