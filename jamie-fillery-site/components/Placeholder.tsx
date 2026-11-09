import { site } from "@/content/site";

/** A clearly labelled placeholder. Renders nothing once site.showPlaceholders is false. */
export default function Placeholder({
  label,
  hint,
  className = "",
}: {
  label: string;
  hint?: string;
  className?: string;
}) {
  if (!site.showPlaceholders) return null;
  return (
    <div
      role="note"
      className={`flex h-full min-h-[10rem] w-full flex-col items-center justify-center gap-1 border border-dashed border-bone/20 bg-graphite/40 p-6 text-center ${className}`}
    >
      <span className="text-[0.65rem] uppercase tracking-wider2 text-brass">Placeholder</span>
      <span className="font-serif text-lg text-mist">{label}</span>
      {hint && <span className="max-w-xs text-xs text-ash">{hint}</span>}
    </div>
  );
}
