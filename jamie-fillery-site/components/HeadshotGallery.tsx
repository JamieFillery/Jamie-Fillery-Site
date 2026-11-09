"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { groupLabels, headshots, type Headshot } from "@/content/headshots";
import Portrait from "./Portrait";

const groupOrder: Headshot["group"][] = ["Primary", "Warm", "Dramatic", "Characterful", "Portrait"];

export default function HeadshotGallery() {
  const real = headshots.filter((h) => h.src);
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + real.length) % real.length)),
    [real.length]
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index !== null ? real[index] : null;

  return (
    <>
      <div className="space-y-20">
        {groupOrder.map((group) => {
          const items = headshots.filter((h) => h.group === group);
          if (!items.length) return null;
          return (
            <section key={group} aria-labelledby={`g-${group}`}>
              <h2 id={`g-${group}`} className="eyebrow mb-6">
                {groupLabels[group]}
              </h2>
              <div
                className={`grid gap-4 ${
                  group === "Primary" ? "max-w-md" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                }`}
              >
                {items.map((h) => {
                  const i = real.findIndex((r) => r.id === h.id);
                  return h.src ? (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`View full screen: ${h.alt}`}
                      className="group relative block w-full cursor-zoom-in overflow-hidden"
                    >
                      <Portrait
                        src={h.src}
                        alt={h.alt}
                        width={h.width}
                        height={h.height}
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        className="transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </button>
                  ) : (
                    <Portrait key={h.id} alt={h.alt} label={`${groupLabels[h.group]} to be added`} />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close full screen view"
            className="absolute right-4 top-4 z-10 h-11 w-11 border border-bone/30 text-xl text-bone hover:border-brass"
          >
            ×
          </button>
          {real.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-2 top-1/2 z-10 h-12 w-12 -translate-y-1/2 border border-bone/30 bg-ink/60 text-bone hover:border-brass sm:left-6"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-2 top-1/2 z-10 h-12 w-12 -translate-y-1/2 border border-bone/30 bg-ink/60 text-bone hover:border-brass sm:right-6"
              >
                →
              </button>
            </>
          )}
          <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              quality={90}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
