"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FrameImage from "./FrameImage";

interface GalleryProps {
  name: string;
  tone: [string, string];
}

export default function Gallery({ name, tone }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  // Six framed views derived from the collection's tone (replace with real photos).
  const shades: [string, string][] = [
    tone,
    [tone[1], tone[0]],
    ["#241B12", tone[1]],
    [tone[0], "#15100A"],
    ["#3A2C1E", tone[1]],
    [tone[1], "#7A5C3A"],
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {shades.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`group relative overflow-hidden rounded-2xl ${idx === 0 ? "col-span-2 row-span-2 md:h-full" : "h-44"}`}
          >
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
              <FrameImage alt={`${name} view ${idx + 1}`} tone={s} rounded="rounded-2xl" />
            </div>
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[70vh] w-full max-w-4xl"
            >
              <FrameImage alt={`${name} enlarged view`} tone={shades[active]} label={name} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
