import { Link } from "react-router";

import HamburgerMenu from "../ui/HamburgerMenu";
import navItems from "../../data/navItems";
import FullLogo from "../../assets/full_logo.png";
import NavDropdown from "./NavDropdown";
import { useEffect, useState, useRef } from "react";
import { sectionLinks } from "../../data/siteLinks";

const navLinkClassName =
	"inline-flex items-center px-3 py-2 font-normal underline-offset-6 transition duration-200 hover:text-brand-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const preventHide = useRef(false);
	const unlockTimer = useRef(null);

	const handleNavigationClick = (event) => {
		if (!event.target.closest?.('a[href*="#"]')) return;

		preventHide.current = true;
		setHidden(false);

		clearTimeout(unlockTimer.current);
		unlockTimer.current = setTimeout(() => {
			preventHide.current = false;
		}, 2000);
	};

	const lastScrollY = useRef(0);

	useEffect(() => {
		const onScroll = () => {
			const currentY = window.scrollY;
			const delta = currentY - lastScrollY.current;

			if (preventHide.current) {
				lastScrollY.current = currentY;
				return;
			}

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
		return () => {
			clearTimeout(unlockTimer.current);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<header
			onClickCapture={handleNavigationClick}
			className={`fixed top-0 left-0 right-0 z-999 flex h-16 w-[90%] items-center m-auto bg-astra-cream text-brand-ink px-4 md:px-8 rounded-lg border my-4 
			transition-transform duration-300 ${hidden ? "-translate-y-2/1" : "translate-y-0"}`}
		>
			<div className="flex h-full flex-1 items-center justify-start">
				<Link
					to={sectionLinks.home}
					className="flex h-full flex-1 items-center justify-start"
				>
					<img
						src={FullLogo}
						alt="Ad Astra UC3M Logo"
						className="h-full w-auto"
					/>
				</Link>
			</div>
			<div className="hidden flex-1 justify-center min-[890px]:flex">
				<DesktopNavbar />
			</div>
			<div className="flex flex-1 justify-end">
				<div className="hidden min-[890px]:block">
					<JoinButton />
				</div>
				<div className="min-[890px]:hidden">
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
							<Link className={navLinkClassName} to={item.to}>
								{item.label}
							</Link>
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
		<Link
			to={sectionLinks.join}
			className={[
				navLinkClassName,
				"bg-brand-ink px-4 py-2 text-brand-surface rounded-lg",
			].join(" ")}
		>
			Únete
		</Link>
	);
}
