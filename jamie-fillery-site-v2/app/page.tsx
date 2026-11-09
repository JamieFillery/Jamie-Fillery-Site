import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { bio } from "@/content/bio";
import { credits } from "@/content/credits";
import { headshots } from "@/content/headshots";
import { reels } from "@/content/showreels";
import { stagePhotos } from "@/content/stage-photos";
import { projects } from "@/content/projects";
import Portrait from "@/components/Portrait";
import HeroPortrait from "@/components/HeroPortrait";
import NameMark from "@/components/NameMark";
import SectionHeading from "@/components/SectionHeading";
import VideoEmbed from "@/components/VideoEmbed";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = credits.filter((c) => c.featured && !c.hidden);
  const stage = credits.filter((c) => !c.hidden && (c.category === "Musical Theatre" || c.category === "Theatre"));
  const mainReel = reels[0];
  const hasReel = Boolean(mainReel.url);
  const heroSrc = site.hero.image || headshots.find((h) => h.group === "Primary")?.src || "";
  const preview = headshots.slice(0, 4);

  return (
    <>
      {/* HERO: large portrait on the right, fading into the page */}
      <section className="relative isolate overflow-hidden grain">
        <div className="relative h-[62svh] min-h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:min-h-0 lg:w-[54%]">
          <HeroPortrait src={heroSrc} alt={site.hero.alt} focus={site.hero.focus} />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/30 lg:to-transparent"
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 hidden h-1/4 bg-gradient-to-t from-ink to-transparent lg:block" />
        </div>

        <div className="container-x relative lg:flex lg:min-h-[calc(100svh-5rem)] lg:items-center">
          <div className="-mt-24 pb-16 lg:mt-0 lg:max-w-[52%] lg:py-24">
            <p className="eyebrow rise">{site.tagline}</p>
            <NameMark variant={site.nameStyle} />
            <p className="rise rise-3 mt-6 text-balance text-[0.68rem] uppercase tracking-[0.18em] text-ash sm:text-xs sm:tracking-[0.24em]">
              {site.disciplines.join("  ·  ")}
            </p>
            <p className="rise rise-3 mt-8 max-w-lg text-base leading-relaxed text-mist sm:text-lg">{bio.intro}</p>

            {/* One primary action. The showreel takes over as soon as a link is added in content/showreels.ts */}
            <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
              {hasReel ? (
                <>
                  <Link href="/showreel" className="btn-solid">
                    Watch showreel
                  </Link>
                  <Link href="/credits" className="btn-ghost">
                    Credits
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/credits" className="btn-solid">
                    View credits
                  </Link>
                  <Link href="/headshots" className="btn-ghost">
                    Headshots
                  </Link>
                </>
              )}
            </div>

            <p className="rise rise-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-ash">
              {site.links.spotlight ? (
                <a
                  href={site.links.spotlight}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist transition-colors hover:text-brass"
                >
                  Spotlight ↗
                </a>
              ) : site.showPlaceholders ? (
                <span className="border-b border-dashed border-bone/25">Spotlight link to be added</span>
              ) : null}
              <Link href="/contact" className="text-mist transition-colors hover:text-brass">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* SHOWREEL: appears here only once a video link exists */}
      {hasReel && (
        <section className="container-x pt-20">
          <SectionHeading eyebrow="On screen" title="Showreel" href="/showreel" linkLabel="All reels" />
          <VideoEmbed url={mainReel.url} title={mainReel.title} />
        </section>
      )}

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
            <Portrait
              key={h.id}
              src={h.src}
              alt={h.alt}
              width={h.width}
              height={h.height}
              sizes="(min-width:1024px) 25vw, 50vw"
              label="Headshot to be added"
            />
          ))}
        </div>
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
