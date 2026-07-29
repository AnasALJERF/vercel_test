"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  /** Render as a stagger container (children should also be Reveal/motion items). */
  as?: "div" | "section" | "ul" | "li";
  amount?: number;
}

export default function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = "div",
  amount = 0.2,
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
