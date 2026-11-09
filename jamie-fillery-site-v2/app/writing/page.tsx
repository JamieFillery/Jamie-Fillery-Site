import type { Metadata } from "next";
import { projects, writingInterests } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Writing & Original Projects",
  description: "Original short film and screenplay projects in development by Jamie Fillery.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  return (
    <div className="container-x py-16 sm:py-24">
      <p className="eyebrow">Screenwriting</p>
      <h1 className="h-display mt-4 text-5xl sm:text-7xl">
        Original projects <span className="italic text-mist">in development</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
        Alongside acting, Jamie develops original short films and screenplays. All projects shown here are in
        development.
      </p>

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Writing interests">
        {writingInterests.map((w) => (
          <li key={w} className="border border-bone/20 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-mist">
            {w}
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <p className="mt-12 max-w-2xl text-sm text-ash">
        Screenplays are not published online. For script or project enquiries, please get in touch via the contact page.
      </p>
    </div>
  );
}
