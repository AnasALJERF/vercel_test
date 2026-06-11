"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import Icon from "./Icons";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Icon name="quote" size={48} className="mx-auto text-honey/40" />
      <div className="relative mt-6 min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-2xl leading-snug text-bone md:text-3xl">“{t.quote}”</p>
            <footer className="mt-7">
              <p className="font-medium text-honey">{t.name}</p>
              <p className="text-sm text-taupe">{t.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === i ? "w-8 bg-honey" : "w-2 bg-bone/25 hover:bg-bone/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
