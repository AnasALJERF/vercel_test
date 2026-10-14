"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// احترام إعداد «تقليل الحركة» في جهاز الزائر
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
