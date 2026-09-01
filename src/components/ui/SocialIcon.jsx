function LinkedInIcon({ className }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
			<path d="M2 9h4v12H2z" />
			<path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
		</svg>
	);
}

function InstagramIcon({ className }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<rect height="20" rx="5" width="20" x="2" y="2" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
			<path d="M17.5 6.5h.01" />
		</svg>
	);
}

const socialIcons = {
	instagram: InstagramIcon,
	linkedin: LinkedInIcon,
};

export default function SocialIcon({ className, platform }) {
	const Icon = socialIcons[platform];
	return Icon ? <Icon className={className} /> : null;
}
