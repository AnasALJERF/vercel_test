import { cache } from "react";
import { client, urlFor } from "@/sanity/client";
import { defaults, type Defaults, type DocId } from "./defaults";
import type { Img } from "./types";

// يُحدَّث المحتوى من لوحة التحكم كل دقيقة على الأكثر
export const REVALIDATE = 60;

const QUERIES: Partial<Record<DocId, string>> = {
  galleryPage: `*[_id == $id][0]{..., images[]{..., "dims": asset->metadata.dimensions}}`,
};

/**
 * يجلب صفحة من لوحة التحكم. إذا لم تكن الصفحة موجودة في اللوحة بعد،
 * أو تعذّر الاتصال، يعيد المحتوى الافتراضي — فلا يتعطل الموقع أبداً.
 */
export const getDoc = cache(async <K extends DocId>(id: K): Promise<Defaults[K]> => {
  try {
    const query: string = QUERIES[id] ?? `*[_id == $id][0]`;
    const params: Record<string, string> = { id };
    const doc = await client.fetch<Record<string, unknown> | null>(query, params, { next: { revalidate: REVALIDATE, tags: [id] } });
    if (doc && typeof doc === "object" && Object.keys(doc).some((k) => !k.startsWith("_"))) {
      return doc as Defaults[K];
    }
  } catch {
    /* نستخدم المحتوى الافتراضي */
  }
  return defaults[id];
});

/** رابط صورة جاهز للعرض، مع صورة احتياطية */
export function imgSrc(image: Img | undefined | null, opts: { w: number; h?: number }, fallback?: Img | string): string {
  if (image?.asset?._ref || image?.asset?._id) {
    let b = urlFor(image).width(opts.w).auto("format").quality(80);
    if (opts.h) b = b.height(opts.h).fit("crop");
    return b.url();
  }
  if (image?.local) return image.local;
  if (typeof fallback === "string") return fallback;
  if (fallback) return imgSrc(fallback, opts);
  return "";
}

export const altOf = (image: Img | undefined | null, fallback = "") => image?.alt || fallback;

export { waHref } from "./links";
