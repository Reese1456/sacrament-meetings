"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "All Meetings" },
  { href: "/meetings/current", label: "This Sunday" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex flex-wrap gap-1">
        {links.map((link) => {
          // "All Meetings" stays active on detail pages; "Home" only matches exactly.
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : link.href === "/meetings"
                ? pathname.startsWith("/meetings")
                : pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isActive ? "bg-white text-slate-900" : "text-slate-100 hover:bg-slate-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
