"use client";

import Reveal from "./Reveal";
import { fadeUp, stagger } from "@/lib/motion";
import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-espresso pb-12 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-walnut-veil" />
      <svg className="pointer-events-none absolute -right-20 top-10 h-80 w-80 opacity-[0.06]" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M50 8 L86 30 V74 L50 96 L14 74 V30 Z" stroke="#C79A3C" strokeWidth="1" fill="none" />
        <path d="M50 26 L70 38 V66 L50 78 L30 66 V38 Z" stroke="#C79A3C" strokeWidth="1" fill="none" />
      </svg>
      <Reveal className="container-content relative" variants={stagger}>
        <motion.span variants={fadeUp} className="eyebrow">{eyebrow}</motion.span>
        <motion.h1 variants={fadeUp} className="mt-5 max-w-3xl text-display-lg text-bone">{title}</motion.h1>
        {intro && (
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-taupe">
            {intro}
          </motion.p>
        )}
      </Reveal>
    </section>
  );
}
