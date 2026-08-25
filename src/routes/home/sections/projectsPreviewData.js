import jetEngineImage from "../../../assets/projects/jet-engine-concept-blueprint.png";
import rocketA4Image from "../../../assets/projects/rocket-a4-concept-blueprint.png";
import sigmaImage from "../../../assets/projects/sigma-concept-blueprint.png";

export const projectsPreviewData = [
	{
		image: { route: sigmaImage, alt: "Concepto visual de SIGMA" },
		topHeading: "01 · SISTEMAS DE VUELO",
		projectName: "SAT SIGMA",
		longName: "Modelo de satélite con guiado activo",
		slogan: "UNA MISIÓN NO TERMINA HASTA RECUPERAR SUS DATOS.",
		description:
			"SIGMA explora un sistema de descenso activo que combina guiado, telemetría y recuperación para convertir una misión compleja en aprendizaje real.",
		mission:
			"Alcanzar la altura prevista es solo la mitad del reto. SIGMA explora cómo mantener el control durante el descenso, transmitir información útil y facilitar la recuperación del sistema.",
		whyItMatters:
			"Conecta control, software, electrónica y mecánica alrededor de un único reto: descender, comunicar y recuperar.",
		metrics: [
			{
				icon: "gauge",
				value: "7 m/s",
				label: "Velocidad controlada",
				status: "Simulado",
			},
			{
				icon: "weight",
				value: "1.800 ± 90 g",
				label: "Masa del minisatélite",
				status: "Diseñado / modelado",
			},
		],
		keywords: ["Control", "Telemetría", "Recuperación"],
		fronts: [
			{ label: "Control", icon: "crosshair" },
			{ label: "Telemetría", icon: "radio-tower" },
			{ label: "Recuperación", icon: "umbrella" },
		],
		audiences: [
			{
				title: "Si eres estudiante",
				icon: "graduation-cap",
				description:
					"Participa en modelado y control en Simulink, telemetría, lógica de emergencia, integración y futuros ensayos.",
			},
			{
				title: "Si quieres colaborar",
				icon: "handshake",
				description:
					"El acceso a herramientas de simulación y medios de ensayo puede convertir la documentación preliminar en modelos contrastables.",
			},
		],
		route: "/projects/sigma",
	},
	{
		image: { route: rocketA4Image, alt: "Concepto visual de Rocket A4" },
		topHeading: "02 · COHETERÍA",
		projectName: "ROCKET A4",
		longName: "Cohete universitario de competición",
		slogan: "UNA MISIÓN COMPLETA EXIGE QUE CADA SISTEMA FUNCIONE COMO UNO.",
		description:
			"Rocket A4 integra estructura, aviónica, recuperación del vehículo y carga útil independiente para preparar una misión de competición por encima de 2.400 metros.",
		mission:
			"ROCKET A4 convierte un objetivo de vuelo en un ejercicio de integración: estructura, aviónica, recuperación y carga útil deben responder como un solo sistema. El concepto se orienta al reto A4 International de TEKNOFEST 2027; el motor lo aporta la organización.",
		whyItMatters:
			"Integra estructura, aviónica, recuperación del vehículo y carga útil independiente en un reto de ingeniería de extremo a extremo.",
		metrics: [
			{
				icon: "rocket",
				value: ">2.400 m",
				label: "Apogeo mínimo",
				status: "Requisito de competición",
			},
			{
				icon: "move-3d",
				value: "2,85 m",
				label: "Geometría",
				status: "Diseñado / modelado",
			},
		],
		keywords: ["Aerodinámica", "Aviónica propia", "Recuperación"],
		fronts: [
			{ label: "Aerodinámica", icon: "wind" },
			{ label: "Aviónica", icon: "circuit-board" },
			{ label: "Recuperación", icon: "umbrella" },
		],
		audiences: [
			{
				title: "Si eres estudiante",
				icon: "graduation-cap",
				description:
					"Participa en aerodinámica y estructuras, simulación de trayectoria, electrónica embarcada, software, recuperación o carga útil. Cada decisión se conecta con el comportamiento de toda la misión.",
			},
			{
				title: "Si quieres colaborar",
				icon: "handshake",
				description:
					"Una alianza en herramientas de simulación y análisis puede convertir el CAD, los cálculos y el código preliminares en decisiones verificadas antes de fabricar y ensayar.",
			},
		],
		route: "/projects/rocket-a4",
	},
	{
		image: { route: jetEngineImage, alt: "Concepto visual de Jet Engine" },
		topHeading: "03 · PROPULSIÓN",
		projectName: "JET ENGINE",
		longName: "Diseño y simulación de componentes de turbojet",
		slogan: "LA PROPULSIÓN EMPIEZA MUCHO ANTES DEL ENCENDIDO.",
		description:
			"Un laboratorio de propulsión donde cálculo, CAD y simulación CFD/FEM preparan al equipo para diseñar y justificar componentes de turbojet.",
		mission:
			"Los componentes de un motor a reacción se deciden con cálculo, simulación y criterio mucho antes de llegar al taller. Jet Engine desarrolla esa capacidad para responder al reto de componente que anuncie TEKNOFEST 2027.",
		whyItMatters:
			"Une termodinámica, CAD y CFD/FEM en un itinerario práctico para aprender a justificar decisiones de diseño, no solo a dibujarlas.",
		metrics: [
			{
				icon: "fan",
				value: "WREN MW54",
				label: "Ciclo preliminar",
				status: "Diseñado / modelado",
			},
			{
				icon: "wind",
				value: "Tobera C-D",
				label: "Simulación formativa",
				status: "Simulado",
			},
		],
		keywords: ["Termodinámica", "CAD", "CFD / FEM"],
		fronts: [
			{ label: "Termodinámica", icon: "flame" },
			{ label: "CAD", icon: "drafting-compass" },
			{ label: "CFD / FEM", icon: "waves" },
		],
		audiences: [
			{
				title: "Si eres estudiante",
				icon: "graduation-cap",
				description:
					"Avanza desde cálculos de ciclo y dimensionado 1D hasta CAD, mallado, CFD, FEM y comparación con modelos analíticos. Es un camino práctico hacia herramientas habituales en ingeniería de propulsión.",
			},
			{
				title: "Si quieres colaborar",
				icon: "handshake",
				description:
					"Una colaboración en licencias CAE y capacidad de cómputo puede permitir mallas, barridos y estudios más exigentes, elevando el rigor del trabajo que el equipo puede abordar.",
			},
		],
		route: "/projects/jet-engine",
	},
];
