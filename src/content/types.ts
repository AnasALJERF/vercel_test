/** صورة: إما محلية (من مجلد public) أو مرفوعة على لوحة التحكم */
export interface Img {
  local?: string;
  alt?: string;
  asset?: { _ref?: string; _id?: string };
  hotspot?: { x: number; y: number };
  crop?: unknown;
  // للمعرض
  thumb?: string;
  w?: number;
  h?: number;
  dims?: { width: number; height: number };
  category?: string;
}
