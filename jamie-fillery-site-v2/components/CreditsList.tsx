"use client";

import { useMemo, useState } from "react";
import { categories, credits, type Category } from "@/content/credits";
import CreditRow from "./CreditRow";

export default function CreditsList() {
  const [filter, setFilter] = useState<Category | "All">("All");

  const visible = useMemo(() => credits.filter((c) => !c.hidden), []);
  const available = categories.filter((cat) => visible.some((c) => c.category === cat));
  const shown = filter === "All" ? visible : visible.filter((c) => c.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter credits" className="mb-8 flex flex-wrap gap-2">
        {(["All", ...available] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
            className={`border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
              filter === cat
                ? "border-bone bg-bone text-ink"
                : "border-bone/25 text-mist hover:border-bone/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <ul>
        {shown.map((c) => (
          <CreditRow key={c.id} credit={c} />
        ))}
      </ul>
    </div>
  );
}
