"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Gallery({ items }: { items: { src: string; alt: string }[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
        {items.map((g, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="group mb-4 block w-full overflow-hidden rounded-xl2 border border-bone/10 transition-colors hover:border-honey/40"
            aria-label={g.alt}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.src} alt={g.alt} className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 p-6"
          >
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[85vh] max-w-full rounded-xl2 object-contain"
            />
            <button
              onClick={() => setActive(null)}
              className="absolute end-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 text-bone"
              aria-label="إغلاق"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
