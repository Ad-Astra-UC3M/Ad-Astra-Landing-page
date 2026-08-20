import { NavLink } from "react-router";

import HamburgerMenu from "../ui/HamburgerMenu";
import navItems from "../../data/navItems";
import FullLogo from "../../assets/full_logo.png";
import NavDropdown from "../navbar_components/NavDropdown";
import { useEffect, useState, useRef } from "react";

const navLinkClassName = ({ isActive }) =>
	[
		"inline-flex items-center px-3 py-2 font-normal underline-offset-6 transition duration-200 hover:text-brand-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
		isActive ? "text-brand-ink underline" : "",
	].join(" ");

export default function Navbar() {
	const [hidden, setHidden] = useState(false);

	const lastScrollY = useRef(0);

	useEffect(() => {
		const onScroll = () => {
			const currentY = window.scrollY;
			const delta = currentY - lastScrollY.current;

			if (currentY < 100) {
				setHidden(false);
			} else if (delta > 4) {
				setHidden(true);
			} else if (delta < -4) {
				setHidden(false);
			}

			lastScrollY.current = currentY;
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-999 flex h-16 w-[90%] items-center m-auto bg-astra-cream text-brand-ink px-4 md:px-8 rounded-lg border my-4 
			transition-transform duration-300 ${hidden ? "-translate-y-2/1" : "translate-y-0"}`}
		>
			<div className="flex h-full flex-1 items-center justify-start">
				<NavLink to="/" className="flex h-full items-center justify-start">
					<img
						src={FullLogo}
						alt="Ad Astra UC3M Logo"
						className="h-full w-auto"
					/>
				</NavLink>
			</div>
			<div className="hidden flex-1 justify-center md:flex">
				<DesktopNavbar />
			</div>
			<div className="flex flex-1 justify-end">
				<div className="hidden md:block">
					<JoinButton />
				</div>
				<div className="md:hidden">
					<MobileNavbar />
				</div>
			</div>
		</header>
	);
}

export function DesktopNavbar() {
	return (
		<nav>
			<ul className="flex flex-row items-center gap-4">
				{navItems.map((item) => {
					if (item.children) {
						return <NavDropdown key={item.label} item={item} />;
					}

					return (
						<li key={item.to}>
							<NavLink className={navLinkClassName} to={item.to}>
								{item.label}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export function MobileNavbar() {
	return (
		<div className="flex items-center gap-4">
			<JoinButton />
			<HamburgerMenu links={navItems} />
		</div>
	);
}

function JoinButton() {
	return (
		<NavLink
			to="/join"
			className={({ isActive }) =>
				[
					navLinkClassName({ isActive }),
					"bg-brand-ink px-4 py-2 text-brand-surface rounded-lg",
				].join(" ")
			}
		>
			Join
		</NavLink>
	);
}
