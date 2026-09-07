import {
	CircuitBoard,
	Crosshair,
	DraftingCompass,
	Fan,
	Flame,
	Gauge,
	GraduationCap,
	Handshake,
	Move3d,
	RadioTower,
	Rocket,
	Star,
	Umbrella,
	Waves,
	Weight,
	Wind,
} from "lucide-react";

const projectIcons = {
	"circuit-board": CircuitBoard,
	crosshair: Crosshair,
	"drafting-compass": DraftingCompass,
	fan: Fan,
	flame: Flame,
	gauge: Gauge,
	"graduation-cap": GraduationCap,
	handshake: Handshake,
	"move-3d": Move3d,
	"radio-tower": RadioTower,
	rocket: Rocket,
	star: Star,
	umbrella: Umbrella,
	waves: Waves,
	weight: Weight,
	wind: Wind,
};

export default function ProjectIcon({ name, ...props }) {
	const Icon = projectIcons[name];

	if (!Icon) return null;

	return <Icon {...props} aria-hidden="true" />;
}
