import Link from "next/link";
import { site } from "@/content/site";
import { bio } from "@/content/bio";
import { credits } from "@/content/credits";
import { headshots } from "@/content/headshots";
import { reels } from "@/content/showreels";
import { stagePhotos } from "@/content/stage-photos";
import { projects } from "@/content/projects";
import Portrait from "@/components/Portrait";
import SectionHeading from "@/components/SectionHeading";
import VideoEmbed from "@/components/VideoEmbed";
import Placeholder from "@/components/Placeholder";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  const featured = credits.filter((c) => c.featured && !c.hidden);
  const stage = credits.filter((c) => !c.hidden && (c.category === "Musical Theatre" || c.category === "Theatre"));
  const mainReel = reels[0];
  const heroSrc = site.hero.image || headshots.find((h) => h.group === "Primary")?.src || "";
  const preview = headshots.slice(0, 4);

  const quick = [
    { label: "Showreel", href: "/showreel" },
    { label: "Credits", href: "/credits" },
    { label: "Headshots", href: "/headshots" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div className="container-x grid min-h-[calc(100svh-4rem)] items-center gap-10 py-10 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-16">
          <div className="order-2 lg:order-1">
            <p className="eyebrow rise">{site.tagline}</p>
            <h1 className="h-display rise rise-2 mt-5 text-[3.4rem] sm:text-7xl lg:text-[7.5rem]">
              Jamie
              <br />
              <span className="italic text-mist">Fillery</span>
            </h1>
            <p className="rise rise-3 mt-6 text-xs uppercase tracking-[0.24em] text-ash">
              {site.disciplines.join("  |  ")}
            </p>
            <p className="rise rise-3 mt-8 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{bio.intro}</p>
            <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
              <Link href="/showreel" className="btn-solid">
                Watch showreel
              </Link>
              <Link href="/credits" className="btn-ghost">
                Credits
              </Link>
              <Link href="/headshots" className="btn-ghost">
                Headshots
              </Link>
              {site.links.spotlight ? (
                <a href={site.links.spotlight} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Spotlight ↗
                </a>
              ) : null}
              <Link href="/contact" className="btn-ghost">
                Contact
              </Link>
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
            <Portrait
              src={heroSrc}
              alt={site.hero.alt}
              label="Primary headshot to be added"
              priority
              className="lg:aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <nav aria-label="Quick links" className="border-y border-bone/10">
        <ul className="container-x grid grid-cols-2 sm:grid-cols-4">
          {quick.map((q) => (
            <li key={q.href} className="border-bone/10 [&:nth-child(odd)]:border-r sm:border-r sm:last:border-r-0">
              <Link
                href={q.href}
                className="flex items-center justify-between px-2 py-5 text-xs uppercase tracking-[0.22em] text-mist transition-colors hover:text-brass sm:px-6"
              >
                {q.label} <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* SELECTED CREDITS */}
      <section className="container-x pt-24">
        <SectionHeading eyebrow="Selected work" title="Credits" href="/credits" linkLabel="Full credits" />
        <ul className="grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <li key={c.id} className="bg-ink p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-ash">
                {c.category}
                {c.year ? ` · ${c.year}` : ""}
              </p>
              <p className="mt-3 font-serif text-3xl font-light">{c.title}</p>
              {c.role && <p className="mt-1 text-mist">{c.role}</p>}
              {c.note && <p className="mt-3 text-xs uppercase tracking-[0.16em] text-brass">{c.note}</p>}
            </li>
          ))}
        </ul>
      </section>

      {/* HEADSHOTS PREVIEW */}
      <section className="container-x pt-24">
        <SectionHeading eyebrow="Faces" title="Headshots" href="/headshots" linkLabel="Gallery" />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {preview.map((h) => (
            <Portrait key={h.id} src={h.src} alt={h.alt} width={h.width} height={h.height} sizes="(min-width:1024px) 25vw, 50vw" label="Headshot to be added" />
          ))}
        </div>
      </section>

      {/* SHOWREEL */}
      <section className="container-x pt-24">
        <SectionHeading eyebrow="On screen" title="Showreel" href="/showreel" linkLabel="All reels" />
        {mainReel.url ? (
          <VideoEmbed url={mainReel.url} title={mainReel.title} />
        ) : (
          <div className="aspect-video">
            <Placeholder label="Acting showreel" hint="Add a YouTube or Vimeo link in content/showreels.ts" />
          </div>
        )}
      </section>

      {/* STAGE */}
      <section className="container-x pt-24">
        <SectionHeading eyebrow="On stage" title="Theatre & Musical Theatre" href="/credits" linkLabel="Credits" />
        {stagePhotos.length > 0 && (
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {stagePhotos.slice(0, 3).map((p) => (
              <figure key={p.id} className="relative aspect-[3/2] overflow-hidden bg-graphite">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:640px) 33vw, 100vw" className="object-cover" />
              </figure>
            ))}
          </div>
        )}
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {stage.map((c) => (
            <li key={c.id} className="flex items-baseline justify-between gap-4 border-b border-bone/10 py-4">
              <span className="font-serif text-xl">{c.title}</span>
              <span className="text-right text-sm text-ash">{c.role}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* WRITING */}
      <section className="container-x pt-24">
        <SectionHeading eyebrow="Alongside acting" title="Original projects in development" href="/writing" linkLabel="Writing" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-x pt-24">
        <div className="border border-bone/10 bg-charcoal px-6 py-14 text-center sm:px-12 sm:py-20">
          <p className="eyebrow">Enquiries</p>
          <h2 className="h-section mx-auto mt-4 max-w-2xl">For casting, representation and collaboration</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-solid">
              Get in touch
            </Link>
            {site.links.spotlight && (
              <a href={site.links.spotlight} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Spotlight ↗
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
