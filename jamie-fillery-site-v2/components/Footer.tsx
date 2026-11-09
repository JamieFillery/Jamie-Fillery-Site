import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  const socials = [
    ["Spotlight", site.links.spotlight],
    ["IMDb", site.links.imdb],
    ["Instagram", site.links.instagram],
    ["X", site.links.x],
    ["LinkedIn", site.links.linkedin],
    ["YouTube", site.links.youtube],
  ].filter(([, url]) => url);

  return (
    <footer className="mt-24 border-t border-bone/10 pb-24 pt-14 sm:pb-16">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl tracking-[0.1em]">JAMIE FILLERY</p>
          <p className="mt-2 text-sm text-ash">{site.tagline}</p>
          <p className="text-sm text-ash">{site.location}</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm text-mist">
          {["about", "headshots", "showreel", "credits", "performance", "writing", "contact"].map((p) => (
            <Link key={p} href={`/${p}`} className="capitalize hover:text-brass">
              {p}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap content-start gap-x-5 gap-y-2 text-sm text-mist">
          {socials.map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-brass">
              {label} ↗
            </a>
          ))}
          {site.contact.email && (
            <a href={`mailto:${site.contact.email}`} className="hover:text-brass">
              {site.contact.email}
            </a>
          )}
        </div>
      </div>
      <p className="container-x mt-12 text-xs text-ash">
        © {new Date().getFullYear()} Jamie Fillery. All rights reserved.
      </p>
    </footer>
  );
}
