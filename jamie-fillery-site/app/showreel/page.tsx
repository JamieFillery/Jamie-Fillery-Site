import type { Metadata } from "next";
import { reels } from "@/content/showreels";
import { site } from "@/content/site";
import VideoEmbed from "@/components/VideoEmbed";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Showreel",
  description: "Acting showreel and performance clips from actor Jamie Fillery.",
  alternates: { canonical: "/showreel" },
};

export default function ShowreelPage() {
  const [main, ...rest] = reels;
  const extras = rest.filter((r) => r.url || site.showPlaceholders);

  return (
    <div className="container-x py-16 sm:py-24">
      <p className="eyebrow">Showreel</p>
      <h1 className="h-display mt-4 text-5xl sm:text-7xl">{main.title}</h1>
      {main.description && <p className="mt-6 max-w-xl text-mist">{main.description}</p>}

      <div className="mt-12">
        {main.url ? (
          <VideoEmbed url={main.url} title={main.title} />
        ) : (
          <div className="aspect-video">
            <Placeholder label="Main acting showreel" hint="Paste a YouTube or Vimeo link into content/showreels.ts" />
          </div>
        )}
      </div>

      {extras.length > 0 && (
        <div className="mt-24 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {extras.map((r) => (
            <section key={r.id} aria-labelledby={`reel-${r.id}`}>
              <h2 id={`reel-${r.id}`} className="font-serif text-2xl font-light sm:text-3xl">
                {r.title}
              </h2>
              {r.description && <p className="mt-2 text-sm text-ash">{r.description}</p>}
              <div className="mt-5">
                {r.url ? (
                  <VideoEmbed url={r.url} title={r.title} />
                ) : (
                  <div className="aspect-video">
                    <Placeholder label={r.title} hint="Video to be added" />
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
