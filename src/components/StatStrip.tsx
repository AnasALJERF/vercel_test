"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import { stats } from "@/lib/data";

export default function StatStrip() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-bone/10 bg-bone/10 md:grid-cols-4"
    >
      {stats.map((s) => (
        <motion.div key={s.label} variants={fadeUp} className="bg-walnut px-6 py-9 text-center">
          <p className="font-display text-4xl text-honey md:text-5xl">{s.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-taupe">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
