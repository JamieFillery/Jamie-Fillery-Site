"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Headshots", href: "/headshots" },
  { label: "Showreel", href: "/showreel" },
  { label: "Credits", href: "/credits" },
  { label: "Performance", href: "/performance" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-bone/10 bg-ink/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only z-50 bg-bone px-4 py-2 text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="font-serif text-lg tracking-[0.12em] text-bone sm:text-xl" aria-label="Jamie Fillery — home">
          JAMIE FILLERY
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.slice(1).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`text-[0.72rem] uppercase tracking-[0.2em] transition-colors hover:text-brass ${
                isActive(n.href) ? "text-brass" : "text-mist"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 h-px w-6 bg-bone transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-3 h-px w-6 bg-bone transition-all ${open ? "top-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-y-auto bg-ink lg:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col py-6">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`border-b border-bone/10 py-4 font-serif text-3xl font-light ${
                  isActive(n.href) ? "text-brass" : "text-bone"
                }`}
              >
                {n.label}
              </Link>
            ))}
            {site.links.spotlight && (
              <a
                href={site.links.spotlight}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-solid"
              >
                View Spotlight profile ↗
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
