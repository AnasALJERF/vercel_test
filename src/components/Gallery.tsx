"use client";

import { useMemo, useState } from "react";
import Lightbox from "./Lightbox";
import type { GalleryCat, GalleryItem } from "@/lib/gallery";

export default function Gallery({
  items,
  cats,
}: {
  items: GalleryItem[];
  cats: { id: GalleryCat; label: string }[];
}) {
  const [cat, setCat] = useState<GalleryCat>("all");
  const [active, setActive] = useState<number | null>(null);

  const shown = useMemo(() => (cat === "all" ? items : items.filter((g) => g.cat === cat)), [cat, items]);
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: items.length };
    items.forEach((g) => (c[g.cat] = (c[g.cat] ?? 0) + 1));
    return c;
  }, [items]);

  return (
    <>
      <div role="tablist" aria-label="تصنيف الصور" className="rail mx-auto mb-8 max-w-4xl gap-2 sm:mb-10 sm:flex-wrap sm:justify-center sm:gap-2.5 md:mx-auto">
        {cats
          .filter((c) => counts[c.id])
          .map((c) => {
            const on = c.id === cat;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={on}
                onClick={() => { setCat(c.id); setActive(null); }}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${
                  on ? "border-honey bg-honey/15 text-honey" : "border-bone/15 text-bone/75 hover:border-honey/50 hover:text-bone"
                }`}
              >
                {c.label}
                <span className="font-latin ms-2 text-xs opacity-70">{counts[c.id]}</span>
              </button>
            );
          })}
      </div>

      <div className="columns-2 gap-2.5 sm:gap-4 md:columns-3 lg:columns-4">
        {shown.map((g, i) => (
          <button
            key={g.src}
            onClick={() => setActive(i)}
            className="group mb-2.5 block w-full sm:mb-4 overflow-hidden rounded-xl2 border border-bone/10 transition-colors hover:border-honey/40"
            aria-label={`تكبير: ${g.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={g.thumb}
              alt={g.alt}
              width={g.w}
              height={g.h}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
          </button>
        ))}
      </div>

      <Lightbox items={shown} index={active} onChange={setActive} />
    </>
  );
}
