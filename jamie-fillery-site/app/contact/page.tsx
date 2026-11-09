import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Representation",
  description: "Contact Jamie Fillery for casting, representation, production and collaboration enquiries.",
  alternates: { canonical: "/contact" },
};

const audiences = [
  "Casting directors",
  "Acting agents",
  "Producers",
  "Directors",
  "Theatre companies",
  "Filmmakers",
  "Creative collaborators",
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-bone/10 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
      <dt className="text-xs uppercase tracking-[0.2em] text-ash">{label}</dt>
      <dd className="text-lg text-bone">{children}</dd>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return site.showPlaceholders ? <span className="text-sm text-ash">{text}</span> : null;
}

export default function ContactPage() {
  const { links, contact, representation: rep } = site;
  const socials = [
    ["Instagram", links.instagram],
    ["X", links.x],
    ["LinkedIn", links.linkedin],
    ["YouTube", links.youtube],
  ].filter(([, u]) => u);

  return (
    <div className="container-x py-16 sm:py-24">
      <p className="eyebrow">Contact</p>
      <h1 className="h-display mt-4 text-5xl sm:text-7xl">Get in touch</h1>
      <p className="mt-6 max-w-2xl text-lg text-mist">
        Enquiries are welcome from {audiences.join(", ").toLowerCase().replace(/, ([^,]*)$/, " and $1")}.
      </p>

      <dl className="mt-14 border-t border-bone/10">
        <Row label="Email">
          {contact.email ? (
            <a className="link-underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          ) : (
            <Empty text="Professional email to be added (content/site.ts)" />
          )}
        </Row>
        <Row label="Spotlight">
          {links.spotlight ? (
            <a className="link-underline" href={links.spotlight} target="_blank" rel="noopener noreferrer">
              View Spotlight profile ↗
            </a>
          ) : (
            <Empty text="Spotlight URL to be added" />
          )}
        </Row>
        <Row label="IMDb">
          {links.imdb ? (
            <a className="link-underline" href={links.imdb} target="_blank" rel="noopener noreferrer">
              View IMDb profile ↗
            </a>
          ) : (
            <Empty text="IMDb URL to be added" />
          )}
        </Row>
        <Row label="Representation">
          {rep.published && rep.agency ? (
            <div className="space-y-1">
              <p>{rep.agency}</p>
              {rep.agent && <p className="text-mist">{rep.agent}</p>}
              {rep.email && (
                <p>
                  <a className="link-underline" href={`mailto:${rep.email}`}>
                    {rep.email}
                  </a>
                </p>
              )}
              {rep.phone && <p className="text-mist">{rep.phone}</p>}
              {rep.website && (
                <p>
                  <a className="link-underline" href={rep.website} target="_blank" rel="noopener noreferrer">
                    Agency website ↗
                  </a>
                </p>
              )}
            </div>
          ) : (
            <Empty text="Representation under review. Unpublished until confirmed." />
          )}
        </Row>
        {socials.length > 0 && (
          <Row label="Social">
            <span className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map(([l, u]) => (
                <a key={l} className="link-underline" href={u} target="_blank" rel="noopener noreferrer">
                  {l} ↗
                </a>
              ))}
            </span>
          </Row>
        )}
        <Row label="Based in">{site.location}</Row>
      </dl>

      {contact.email && (
        <a href={`mailto:${contact.email}`} className="btn-solid mt-12">
          Send an email
        </a>
      )}
    </div>
  );
}
