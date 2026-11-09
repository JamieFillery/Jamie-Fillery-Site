import type { Metadata } from "next";
import Link from "next/link";
import { bio } from "@/content/bio";
import { site } from "@/content/site";
import { headshots } from "@/content/headshots";
import Portrait from "@/components/Portrait";

export const metadata: Metadata = {
  title: "About",
  description: bio.short,
  alternates: { canonical: "/about" },
};

export default function About() {
  const portrait = headshots.find((h) => h.group === "Warm") ?? headshots[0];
  return (
    <div className="container-x py-16 sm:py-24">
      <p className="eyebrow">About</p>
      <h1 className="h-display mt-4 text-5xl sm:text-7xl">Jamie Fillery</h1>

      <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <Portrait src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} label="Portrait to be added" />
          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between border-b border-bone/10 pb-3">
              <dt className="text-ash">Based in</dt>
              <dd className="text-right text-mist">{site.location}</dd>
            </div>
            <div className="flex justify-between border-b border-bone/10 pb-3">
              <dt className="text-ash">Training</dt>
              <dd className="text-right text-mist">Arden School of Theatre, Manchester (Musical Theatre)</dd>
            </div>
            <div className="flex justify-between border-b border-bone/10 pb-3">
              <dt className="text-ash">Focus</dt>
              <dd className="text-right text-mist">Film · Television · Theatre</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-6 text-lg leading-[1.75] text-mist">
          {bio.long.map((p, i) => (
            <p key={i} className={i === 0 ? "font-serif text-2xl leading-snug text-bone sm:text-3xl" : ""}>
              {p}
            </p>
          ))}

          {bio.extended.length > 0 && (
            <details className="group border-t border-bone/10 pt-6">
              <summary className="cursor-pointer text-xs uppercase tracking-[0.2em] text-brass">Read more</summary>
              <div className="mt-6 space-y-6">
                {bio.extended.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          )}

          <div className="flex flex-wrap gap-3 pt-6">
            {bio.cvUrl ? (
              <a href={bio.cvUrl} download className="btn-solid">
                Download acting CV (PDF)
              </a>
            ) : site.showPlaceholders ? (
              <span className="btn border-dashed border-bone/25 text-ash">CV download to be added</span>
            ) : null}
            <Link href="/credits" className="btn-ghost">
              View credits
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
