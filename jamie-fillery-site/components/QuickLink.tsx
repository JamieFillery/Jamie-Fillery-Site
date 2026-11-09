"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

/** Persistent but unobtrusive Spotlight / Contact shortcut. */
export default function QuickLink() {
  const pathname = usePathname();
  const spot = site.links.spotlight;
  if (pathname.startsWith("/contact") && !spot) return null;

  const cls =
    "fixed bottom-4 right-4 z-30 border border-bone/25 bg-ink/90 px-4 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-bone backdrop-blur transition-colors hover:border-brass hover:text-brass sm:bottom-6 sm:right-6";

  return spot ? (
    <a href={spot} target="_blank" rel="noopener noreferrer" className={cls}>
      Spotlight ↗
    </a>
  ) : (
    <Link href="/contact" className={cls}>
      Contact
    </Link>
  );
}
