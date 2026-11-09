import Link from "next/link";

export default function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow?: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
      <div>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="h-section">{title}</h2>
      </div>
      {href && (
        <Link href={href} className="link-underline text-xs uppercase tracking-[0.2em] text-mist">
          {linkLabel ?? "View all"} →
        </Link>
      )}
    </div>
  );
}
