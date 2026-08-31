import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	MenuSeparator,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router";
import SocialIcon from "../ui/SocialIcon";

const navLinkClassName = "flex items-center gap-2 px-3 py-2 font-normal underline-offset-6 transition duration-200 hover:text-brand-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent data-focus:text-brand-accent data-focus:underline data-focus:outline-none"
export default function NavDropdown({ item }) {
	return (
		<Menu as="li" className="relative">
			<MenuButton
				className="group flex items-center text-nowrap gap-1 px-3 py-2 font-normal underline-offset-6 transition duration-200 hover:text-brand-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent data-open:text-brand-accent data-open:underline"
			>
				{item.label}
				<ChevronDown
					aria-hidden="true"
					className="size-4 transition-transform duration-150 group-data-open:rotate-180 motion-reduce:transition-none"
				/>
			</MenuButton>

			<MenuItems
				transition
				className="absolute left-0 top-full z-50 mt-2 w-56 origin-top-left rounded-lg border border-brand-soft bg-brand-surface p-2 text-brand-ink shadow-lg focus:outline-none transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] data-closed:translate-y-1 data-closed:scale-95 data-closed:opacity-0 data-leave:duration-150 motion-reduce:transform-none motion-reduce:transition-opacity"
			>
				{item.children.map((child) => (
					<Fragment key={child.to ?? child.href}>
						{child.hasDividerBefore && (
							<MenuSeparator className="my-2 border-t border-brand-soft" />
						)}

						<MenuItem>
							{child.href ? (
								<a href={child.href} className={navLinkClassName}>
									<SocialIcon className="size-4 shrink-0" platform={child.platform} />
									<span>{child.label}</span>
								</a>
							) : (
								<Link to={child.to} className={navLinkClassName}>
									{child.label}
								</Link>
							)}
						</MenuItem>
					</Fragment>
				))}
			</MenuItems>
		</Menu>
	);
}
