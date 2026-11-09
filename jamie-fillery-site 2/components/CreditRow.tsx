import type { Credit } from "@/content/credits";

/** One credit line. Only fields that have a value are displayed. */
export default function CreditRow({ credit }: { credit: Credit }) {
  const meta = [credit.company, credit.director && `Dir. ${credit.director}`, credit.venue].filter(Boolean).join(" · ");
  return (
    <li className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-bone/10 py-5 sm:grid-cols-[4rem_1fr_12rem_auto] sm:items-baseline">
      <span className="hidden text-sm text-ash sm:block">{credit.year ?? ""}</span>
      <div className="col-span-2 sm:col-span-1">
        <p className="font-serif text-xl text-bone sm:text-2xl">{credit.title}</p>
        {meta && <p className="mt-1 text-sm text-ash">{meta}</p>}
        {credit.note && <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brass">{credit.note}</p>}
      </div>
      <p className="col-start-1 text-sm text-mist sm:col-start-auto">{credit.role ?? ""}</p>
      <span className="text-right text-xs uppercase tracking-[0.16em] text-ash sm:text-left">
        <span className="sm:hidden">{credit.year ? `${credit.year} · ` : ""}</span>
        {credit.category}
      </span>
    </li>
  );
}
