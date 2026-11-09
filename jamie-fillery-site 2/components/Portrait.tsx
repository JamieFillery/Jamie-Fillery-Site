import Image from "next/image";

/** Portrait frame: shows the image if provided, otherwise a tasteful labelled placeholder. */
export default function Portrait({
  src,
  alt,
  label = "Headshot to be added",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  className = "",
  width,
  height,
}: {
  src?: string;
  alt: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={`relative aspect-[4/5] w-full overflow-hidden bg-graphite ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill={!(width && height)}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-graphite to-charcoal text-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" className="text-bone/20" aria-hidden>
            <circle cx="32" cy="24" r="10" />
            <path d="M12 56c2-12 10-18 20-18s18 6 20 18" />
          </svg>
          <span className="text-[0.65rem] uppercase tracking-wider2 text-brass">Placeholder</span>
          <span className="px-6 font-serif text-lg text-mist">{label}</span>
        </div>
      )}
    </div>
  );
}
