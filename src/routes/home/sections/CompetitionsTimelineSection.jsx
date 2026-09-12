import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import { Link } from "react-router";
import { Timeline } from "../../../components/ui/Timeline";

const competitions = [
  {
    id: "association-today",
    title: "Hoy",
    content: <AssociationMilestone />,
  },
  {
    id: "presentation-september-2026",
    title: "11 sept.",
    content: (
      <EventEntry
        title="Meet & Greet"
        schedule="11 de septiembre de 2026 · 13:30–15:30"
        location="Jardines Centrales · UC3M · Campus de Leganés"
      >
        Conoce a Ad Astra con diana de aviones de papel, beerpong sin alcohol y
        trivia aeroespacial. 100 hamburguesas gratis, hasta agotar existencias.
      </EventEntry>
    ),
  },
  {
    id: "bootcamps-september-2026",
    title: "15–17 sept.",
    content: (
      <EventEntry
        title="Boot camps Ad Astra"
        schedule="15–17 de septiembre de 2026 · 11:00–13:00 o 15:00–17:00"
        location="UC3M · Campus de Leganés y Getafe"
      >
        Rocket A4 el día 15, Jet Engine el 16 y Model Satellite el 17 en Leganés.
        Eventos, Media, Partners e IT el día 17 en Getafe. Elige tu bootcamp y
        turno de mañana o tarde.
      </EventEntry>
    ),
  },
  {
    id: "sigma-2026",
    title: "2026",
    content: (
      <CompetitionEntry
        project="SIGMA"
        status="En preparación"
        competition="11.ª TÜRKSAT Model Satellite Competition"
        href="https://teknofest.org/en/competitions/model-satellite-competition/"
      >
        Preparación para la competición de satélites modelo integrada en
        TEKNOFEST. La participación está pendiente de confirmación.
      </CompetitionEntry>
    ),
  },
  {
    id: "rocket-a4-2027",
    title: "2027",
    content: (
      <CompetitionEntry
        project="Rocket A4"
        status="Objetivo de competición"
        competition="TEKNOFEST Rocket Competition"
        detail="Categoría internacional A4"
        href="https://teknofest.org/en/competitions/rocket-competition/"
      >
        Proyecto orientado a competir en la categoría internacional A4. El
        calendario oficial de 2027 todavía no se ha publicado.
      </CompetitionEntry>
    ),
  },
  {
    id: "jet-engine-2027",
    title: "2027",
    content: (
      <CompetitionEntry
        project="Jet Engine"
        status="Preparación técnica"
        competition="TEKNOFEST Jet Engine Design Competition"
        href="https://www.teknofest.org/en/competitions/jet-engine-design-competition/"
      >
        Preparación para la competición de diseño de motores a reacción, a la
        espera de que se anuncie el reto técnico de 2027.
      </CompetitionEntry>
    ),
  },
];

function EventEntry({ title, schedule, location, children }) {
  return (
    <div className="max-w-2xl border-y border-brand-primary/15 py-7 md:py-9">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-brand-accent px-3 py-1 text-sm font-semibold text-brand-ink">
          Inscripciones abiertas
        </span>
        <span className="text-sm font-medium text-brand-ink/65">Ad Astra UC3M</span>
      </div>

      <h3 className="text-3xl text-brand-primary md:text-5xl">{title}</h3>

      <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-brand-ink/80 md:text-lg">
        {children}
      </p>
      <p className="mt-4 text-sm font-semibold text-brand-primary">{schedule}</p>
      <p className="mt-3 text-sm font-medium text-brand-ink/65">{location}</p>

      <Link
        className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand-primary underline decoration-brand-accent decoration-2 underline-offset-4 transition-colors hover:text-brand-ink focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
        to="/join"
        aria-label={`Apuntarme a ${title}`}
      >
        Apuntarme
        <span
          aria-hidden="true"
          className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
        >
          <ArrowUpRightIcon />
        </span>
      </Link>
    </div>
  );
}

function CompetitionEntry({
  project,
  status,
  competition,
  detail,
  href,
  children,
}) {
  return (
    <div className="max-w-2xl border-y border-brand-primary/15 py-7 md:py-9">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-brand-accent px-3 py-1 text-sm font-semibold text-brand-ink">
          {status}
        </span>
        <span className="text-sm font-medium text-brand-ink/65">TEKNOFEST</span>
      </div>

      <h3 className="text-3xl text-brand-primary md:text-5xl">
        {project}
      </h3>

      <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-brand-ink/80 md:text-lg">
        {children}
      </p>

      <a
        className="mt-6 inline-flex group items-center gap-2 font-semibold text-brand-primary underline decoration-brand-accent decoration-2 underline-offset-4 transition-colors hover:text-brand-ink focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {competition}
        {detail && <span className="font-medium text-brand-ink/65">· {detail}</span>}
        <span
          aria-hidden="true"
          className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
        >
          <ArrowUpRightIcon />
        </span>
      </a>
    </div>
  );
}

function AssociationMilestone() {
  return (
    <div className="max-w-2xl border-y border-brand-primary/15 py-7 md:py-9">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dfe9bd] px-3 py-1 text-sm font-semibold text-[#28412e]">
          <CheckIcon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={3} />
          Completado
        </span>
        <span className="text-sm font-medium text-brand-ink/65">
          ~20 miembros · 3 proyectos
        </span>
      </div>

      <h3 className="text-3xl text-brand-primary md:text-5xl">Fundación</h3>

      <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-brand-ink/80 md:text-lg">
        Hoy comienza la asociación: construimos la marca y el equipo que dará
        forma a nuestros proyectos.
      </p>
    </div>
  );
}

export default function CompetitionsTimelineSection() {
  return (
    <Timeline
      data={competitions}
      title="Eventos y competiciones en el horizonte"
      description="Conoce al equipo en la presentación y participa en nuestros bootcamps. Tres retos internacionales guían nuestra preparación técnica; las fechas de 2027 son objetivos internos hasta la publicación del calendario oficial."
      withBackground={false}
      className="font-astra-serif font-medium"
    />
  );
}
