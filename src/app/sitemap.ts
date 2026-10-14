import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

const ROUTES: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, freq: "weekly" },
  { path: "/collections", priority: 0.9, freq: "monthly" },
  { path: "/gallery", priority: 0.9, freq: "weekly" },
  { path: "/services", priority: 0.8, freq: "monthly" },
  { path: "/contact", priority: 0.8, freq: "monthly" },
  { path: "/about", priority: 0.7, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path || "/"}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
