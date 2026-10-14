"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((a) => (a === null ? a : (a + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // RTL: right arrow = previous, left arrow = next
      if (e.key === "ArrowLeft") step(1);
      if (e.key === "ArrowRight") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <div role="tablist" aria-label="تصنيف الصور" className="mx-auto mb-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
        {cats
          .filter((c) => counts[c.id])
          .map((c) => {
            const on = c.id === cat;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={on}
                onClick={() => setCat(c.id)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  on ? "border-honey bg-honey/15 text-honey" : "border-bone/15 text-bone/75 hover:border-honey/50 hover:text-bone"
                }`}
              >
                {c.label}
                <span className="font-latin ms-2 text-xs opacity-70">{counts[c.id]}</span>
              </button>
            );
          })}
      </div>

      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {shown.map((g, i) => (
          <button
            key={g.src}
            onClick={() => setActive(i)}
            className="group mb-4 block w-full overflow-hidden rounded-xl2 border border-bone/10 transition-colors hover:border-honey/40"
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

      <AnimatePresence>
        {active !== null && shown[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={shown[active].alt}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso/95 p-4 sm:p-8"
          >
            <motion.img
              key={shown[active].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              src={shown[active].src}
              alt={shown[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-full rounded-xl2 object-contain"
            />
            <p className="mt-4 text-center text-sm text-bone/75">
              {shown[active].alt.split(" — ")[0]}
              <span className="font-latin ms-3 text-xs text-taupe">
                {active + 1} / {shown.length}
              </span>
            </p>

            <button
              onClick={close}
              className="absolute end-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 text-bone hover:border-honey hover:text-honey"
              aria-label="إغلاق"
            >
              ✕
            </button>
            {shown.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute start-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bone/25 bg-espresso/60 text-xl text-bone hover:border-honey hover:text-honey sm:start-6"
                  aria-label="الصورة السابقة"
                >
                  ›
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute end-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bone/25 bg-espresso/60 text-xl text-bone hover:border-honey hover:text-honey sm:end-6"
                  aria-label="الصورة التالية"
                >
                  ‹
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
