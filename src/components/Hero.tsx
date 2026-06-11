"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import FrameImage from "./FrameImage";
import Icon from "./Icons";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso pt-20">
      {/* ambient honey veil */}
      <div className="pointer-events-none absolute inset-0 bg-walnut-veil" />
      {/* large faint honeycomb */}
      <svg className="pointer-events-none absolute -left-24 top-1/4 h-[460px] w-[460px] opacity-[0.06]" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M50 8 L86 30 V74 L50 96 L14 74 V30 Z" stroke="#C79A3C" strokeWidth="1" fill="none" />
        <path d="M50 26 L70 38 V66 L50 78 L30 66 V38 Z" stroke="#C79A3C" strokeWidth="1" fill="none" />
      </svg>

      <div className="container-content relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: yText, opacity }} variants={stagger} initial="hidden" animate="show">
          <motion.span variants={fadeUp} className="eyebrow">
            Luxury furniture, handcrafted
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-6 text-display-xl text-bone">
            Furniture that
            <br />
            <span className="bg-honey-grad bg-clip-text text-transparent">feels like home.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-md text-lg leading-relaxed text-taupe">
            Shahd crafts bedrooms, living rooms, and majlis with honest materials and quiet
            precision — pieces built to be lived with for a lifetime.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/products" className="btn-honey">
              Explore collections <Icon name="arrow" size={18} />
            </Link>
            <Link href="/quote" className="btn-ghost">
              Request a quote
            </Link>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yImg }} className="relative h-[460px] md:h-[560px]">
          <div className="absolute inset-0 shadow-lift">
            <FrameImage alt="Shahd master bedroom collection in walnut and brass" tone={["#3A2C1E", "#7A5C3A"]} label="Amber Master Suite" />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden h-44 w-44 overflow-hidden rounded-xl2 border border-bone/15 shadow-lift md:block">
            <FrameImage alt="Detail of brushed brass inlay" tone={["#241B12", "#C79A3C"]} rounded="rounded-xl2" />
          </div>
          <div className="glass absolute -right-4 top-10 hidden rounded-2xl px-5 py-4 md:block">
            <p className="font-display text-3xl text-honey">20+</p>
            <p className="text-xs uppercase tracking-[0.2em] text-bone/70">Years of craft</p>
          </div>
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-taupe">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <div className="mx-auto mt-2 h-10 w-px animate-pulse bg-gradient-to-b from-honey to-transparent" />
      </motion.div>
    </section>
  );
}
