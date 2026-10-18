"use client";

import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "@/lib/gallery";

/** عارض الصور بملء الشاشة — يدعم الأسهم ومفتاح Esc والسحب بالإصبع على الموبايل. */
export default function Lightbox({
  items,
  index,
  onChange,
}: {
  items: GalleryItem[];
  index: number | null;
  onChange: (i: number | null) => void;
}) {
  const close = useCallback(() => onChange(null), [onChange]);
  const step = useCallback(
    (d: number) => index !== null && onChange((index + d + items.length) % items.length),
    [index, items.length, onChange],
  );
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // RTL: السهم الأيسر = التالي، الأيمن = السابق
      if (e.key === "ArrowLeft") step(1);
      if (e.key === "ArrowRight") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso/95 p-4 sm:p-8"
        >
          <motion.img
            key={item.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            src={item.src}
            alt={item.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-xl2 object-contain"
          />
          <p className="mt-4 text-center text-sm text-bone/75">
            {item.alt.split(" — ")[0]}
            <span className="font-latin ms-3 text-xs text-taupe">
              {index + 1} / {items.length}
            </span>
          </p>
          {items.length > 1 && <p className="mt-1 text-xs text-taupe sm:hidden">اسحب يميناً أو يساراً للتنقل</p>}

          <button
            onClick={close}
            className="absolute end-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 text-bone hover:border-honey hover:text-honey"
            aria-label="إغلاق"
          >
            ✕
          </button>
          {items.length > 1 && (
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
  );
}
