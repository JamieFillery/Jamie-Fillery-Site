import Image from "next/image";
import type { Project } from "@/content/projects";
import VideoEmbed from "./VideoEmbed";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col border border-bone/10 bg-charcoal transition-colors duration-500 hover:border-brass/50">
      <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.title} concept image`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            {project.imageNote && (
              <span className="absolute bottom-0 left-0 bg-ink/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-mist">
                {project.imageNote}
              </span>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-end bg-gradient-to-br from-graphite via-charcoal to-ink p-6">
            <span className="font-serif text-5xl font-light leading-none text-bone/15 sm:text-6xl">{project.title}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="eyebrow">
          {project.format} · {project.genre}
        </p>
        <h3 className="mt-3 font-serif text-3xl font-light">{project.title}</h3>
        <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-mist">{project.logline}</p>
        <p className="mt-6 inline-flex w-fit items-center gap-2 border border-bone/20 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-bone">
          <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
          {project.status}
        </p>
        {project.video && (
          <div className="mt-6">
            <VideoEmbed url={project.video} title={project.title} />
          </div>
        )}
      </div>
    </article>
  );
}
