const cx = (...classes) => classes.filter(Boolean).join(" ");

const baseClasses =
	"inline-flex items-center justify-center whitespace-nowrap rounded-lg font-astra-serif font-normal underline-offset-6 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 motion-reduce:transition-none";

const sizeClasses = {
	sm: "px-2 py-2 text-base",
	md: "px-2.5 py-2.5 text-lg",
	lg: "px-4 py-3 text-xl",
};

const colorClasses = {
	accent: {
		solid:
			"bg-brand-accent text-brand-ink hover:bg-brand-primary hover:text-brand-surface",
		soft: "bg-brand-accent/35 text-brand-ink hover:bg-brand-accent/55",
		outline:
			"border border-brand-accent text-brand-ink hover:bg-brand-accent",
		ghost: "text-brand-ink hover:bg-brand-accent/30 hover:underline",
	},
	brand: {
		solid:
			"bg-brand-ink text-brand-surface hover:text-brand-accent hover:underline",
		soft: "bg-brand-soft text-brand-ink hover:bg-brand-secondary",
		outline:
			"border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-brand-surface",
		ghost: "text-brand-ink hover:text-brand-primary hover:underline",
	},
	surface: {
		solid:
			"bg-brand-surface text-brand-ink hover:text-brand-primary hover:underline",
		soft: "bg-white/15 text-brand-surface hover:bg-white/25",
		outline:
			"border border-brand-surface/70 bg-brand-surface text-brand-ink hover:bg-transparent hover:text-brand-surface",
		ghost:
			"text-brand-surface hover:text-brand-accent hover:underline",
	},
	indigo: {
		solid: "bg-indigo-900 text-indigo-50 hover:text-yellow-300 hover:underline",
		soft: "bg-indigo-100 text-indigo-950 hover:bg-indigo-200",
		outline:
			"border border-indigo-800 text-indigo-900 hover:bg-indigo-900 hover:text-indigo-50",
		ghost: "text-indigo-900 hover:text-indigo-700 hover:underline",
	},
	sky: {
		solid: "bg-sky-700 text-sky-50 hover:text-yellow-300 hover:underline",
		soft: "bg-sky-100 text-sky-950 hover:bg-sky-200",
		outline:
			"border border-sky-700 text-sky-800 hover:bg-sky-700 hover:text-sky-50",
		ghost: "text-sky-900 hover:text-sky-700 hover:underline",
	},
	emerald: {
		solid:
			"bg-emerald-700 text-emerald-50 hover:text-amber-200 hover:underline",
		soft: "bg-emerald-100 text-emerald-950 hover:bg-emerald-200",
		outline:
			"border border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-emerald-50",
		ghost: "text-emerald-900 hover:text-emerald-700 hover:underline",
	},
	rose: {
		solid: "bg-rose-700 text-rose-50 hover:text-yellow-300 hover:underline",
		soft: "bg-rose-100 text-rose-950 hover:bg-rose-200",
		outline:
			"border border-rose-700 text-rose-800 hover:bg-rose-700 hover:text-rose-50",
		ghost: "text-rose-900 hover:text-rose-700 hover:underline",
	},
	amber: {
		solid: "bg-amber-300 text-slate-950 hover:underline",
		soft: "bg-amber-100 text-amber-950 hover:bg-amber-200",
		outline:
			"border border-amber-400 text-amber-950 hover:bg-amber-300",
		ghost: "text-amber-950 hover:text-amber-800 hover:underline",
	},
	slate: {
		solid: "bg-slate-900 text-slate-50 hover:text-yellow-300 hover:underline",
		soft: "bg-slate-100 text-slate-950 hover:bg-slate-200",
		outline:
			"border border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-slate-50",
		ghost: "text-slate-900 hover:text-slate-700 hover:underline",
	},
};

export function buttonClassName({
	variant = "solid",
	color = "brand",
	size = "md",
	className,
} = {}) {
	const palette = colorClasses[color] ?? colorClasses.brand;

	return cx(
		baseClasses,
		sizeClasses[size] ?? sizeClasses.md,
		palette[variant] ?? palette.solid,
		className,
	);
}
