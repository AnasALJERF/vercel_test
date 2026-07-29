import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/collections", "/services", "/gallery", "/about", "/contact"].map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
}
