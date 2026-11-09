import type { Metadata } from "next";
import Link from "next/link";
import { demonstrated, developing, pending } from "@/content/skills";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Performance & Skills",
  description: "Performance disciplines and skills: screen, dramatic theatre, musical theatre, comedy, singing and writing.",
  alternates: { canonical: "/performance" },
};

export default function PerformancePage() {
  return (
    <div className="container-x py-16 sm:py-24">
      <p className="eyebrow">Range</p>
      <h1 className="h-display mt-4 text-5xl sm:text-7xl">Performance</h1>
      <p className="mt-6 max-w-xl text-mist">
        Experience across screen and stage, from intimate drama to large-scale musical comedy.
      </p>

      <section className="mt-16" aria-labelledby="demo">
        <h2 id="demo" className="eyebrow mb-6">
          Experience
        </h2>
        <ul className="grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {demonstrated.map((s, i) => (
            <li key={s.id} className="bg-ink p-7">
              <span className="font-serif text-sm text-brass">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-2xl font-light">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-mist">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {developing.length > 0 && (
        <section className="mt-20" aria-labelledby="dev">
          <h2 id="dev" className="eyebrow mb-6">
            Areas of interest
          </h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {developing.map((s) => (
              <li key={s.id} className="border border-dashed border-bone/25 p-7">
                <h3 className="font-serif text-2xl font-light">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-mist">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {site.showPlaceholders && pending.length > 0 && (
        <section className="mt-20" aria-labelledby="soon">
          <h2 id="soon" className="eyebrow mb-6">
            Placeholders: to be added when confirmed
          </h2>
          <ul className="flex flex-wrap gap-3">
            {pending.map((p) => (
              <li key={p} className="border border-dashed border-bone/20 px-4 py-2 text-sm text-ash">
                {p}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-20 flex flex-wrap gap-3">
        <Link href="/showreel" className="btn-solid">
          Watch showreel
        </Link>
        <Link href="/writing" className="btn-ghost">
          Original writing
        </Link>
      </div>
    </div>
  );
}
