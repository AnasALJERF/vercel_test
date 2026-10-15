/** منطق تحويل المحتوى الافتراضي إلى مستندات اللوحة (بدون واجهة) — قابل للاختبار */
type Json = unknown;

const randomKey = () => Math.random().toString(36).slice(2, 12);

/** عدد الصور المحلية داخل محتوى */
export function countImages(v: Json): number {
  if (Array.isArray(v)) return v.reduce((n: number, x) => n + countImages(x), 0);
  if (v && typeof v === "object") {
    if (typeof (v as { local?: unknown }).local === "string") return 1;
    return Object.values(v).reduce((n: number, x) => n + countImages(x), 0);
  }
  return 0;
}

/**
 * يحوّل المحتوى: كل صورة { local } تُرفع عبر upload() وتُستبدل بمرجع صورة في اللوحة.
 * upload() تعيد معرّف الصورة أو null عند الفشل (فيُحذف الحقل ويعرض الموقع الصورة الأصلية).
 */
export async function convertForSanity(v: Json, upload: (src: string) => Promise<string | null>): Promise<Json> {
  if (Array.isArray(v)) {
    const out: Json[] = [];
    for (const item of v) {
      const c = await convertForSanity(item, upload);
      if (c === undefined) continue;
      if (c && typeof c === "object" && !Array.isArray(c) && !("_key" in (c as object))) {
        (c as Record<string, Json>)._key = randomKey();
      }
      out.push(c);
    }
    return out;
  }
  if (v && typeof v === "object") {
    const o = v as Record<string, Json>;
    if (typeof o.local === "string") {
      const id = await upload(o.local);
      if (!id) return undefined;
      const img: Record<string, Json> = { _type: "image", asset: { _type: "reference", _ref: id } };
      if (o._key) img._key = o._key;
      if (o.alt) img.alt = o.alt;
      if (o.category) img.category = o.category;
      return img;
    }
    const out: Record<string, Json> = {};
    for (const [k, val] of Object.entries(o)) {
      const c = await convertForSanity(val, upload);
      if (c !== undefined && c !== "") out[k] = c;
    }
    return out;
  }
  return v;
}
