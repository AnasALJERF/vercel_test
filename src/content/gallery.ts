import type { GalleryItem } from "@/lib/gallery";
import type { Img } from "./types";
import { imgSrc } from "./get";

const CATS = new Set(["salons", "majlis", "bedrooms", "kids", "curtains", "showroom", "pieces"]);

/** تحويل صورة من لوحة التحكم (أو من المحتوى الافتراضي) إلى عنصر معرض. */
export function toGalleryItem(g: Img): GalleryItem | null {
  const cat = (CATS.has(g.category ?? "") ? g.category : "salons") as GalleryItem["cat"];
  const alt = `${g.alt || "من أعمال شهد للمفروشات"} — شهد للمفروشات في سلمية`;
  if (g.asset?._ref || g.asset?._id) {
    const dims = g.dims ?? { width: 4, height: 3 };
    return {
      src: imgSrc(g, { w: 1800 }),
      thumb: imgSrc(g, { w: 720 }),
      w: 720,
      h: Math.round((720 * dims.height) / dims.width),
      cat,
      alt,
    };
  }
  if (g.local) return { src: g.local, thumb: g.thumb || g.local, w: g.w || 720, h: g.h || 540, cat, alt };
  return null;
}

export const toGalleryItems = (images?: unknown[]) =>
  (images ?? []).map((g) => toGalleryItem(g as Img)).filter(Boolean) as GalleryItem[];

/**
 * ترتيب صور الصفحة الرئيسية: صورة من كل تصنيف بالتناوب، مع الحفاظ على ترتيب
 * الصور داخل كل تصنيف كما رتّبها العميل في اللوحة (الأولى في كل تصنيف تظهر أولاً).
 */
export function mixByCategory(items: GalleryItem[]): GalleryItem[] {
  const groups = new Map<string, GalleryItem[]>();
  items.forEach((g) => {
    if (!groups.has(g.cat)) groups.set(g.cat, []);
    groups.get(g.cat)!.push(g);
  });
  const lists = Array.from(groups.values());
  const out: GalleryItem[] = [];
  for (let i = 0; out.length < items.length; i++) lists.forEach((l) => l[i] && out.push(l[i]));
  return out;
}
