import Image from "next/image";

/**
 * Large cinematic hero image. Fills its parent (the parent controls size and position).
 * Without a photo it shows a clearly labelled placeholder. No image is ever generated.
 */
export default function HeroPortrait({ src, alt, focus = "50% 20%" }: { src?: string; alt: string; focus?: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 54vw, 100vw"
        quality={85}
        className="object-cover"
        style={{ objectPosition: focus }}
      />
    );
  }
  return (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_38%,#37373d_0%,#26262b_42%,#151518_100%)]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center lg:pl-[28%]">
        <svg width="96" height="96" viewBox="0 0 64 64" fill="none" stroke="currentColor" className="text-bone/15" aria-hidden>
          <circle cx="32" cy="22" r="10" />
          <path d="M10 60c2-14 10-22 22-22s20 8 22 22" />
        </svg>
        <span className="eyebrow">Placeholder</span>
        <span className="font-serif text-2xl text-mist">Primary headshot to be added</span>
        <span className="max-w-xs text-xs leading-relaxed text-ash">
          Add your photo to public/images/headshots and set it in content/headshots.ts
        </span>
      </div>
    </div>
  );
}
