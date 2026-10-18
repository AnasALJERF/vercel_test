"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Lightbox from "./Lightbox";
import type { GalleryCat, GalleryItem } from "@/lib/gallery";

const PER_VIEW = 10; // عدد الصور في الشريط
const DESKTOP = 9; // على الشاشات الكبيرة: صورة كبيرة + 8 صغيرة

/**
 * «من أعمالنا» في الصفحة الرئيسية.
 * الموبايل: شريط صور كبيرة يُسحب بالإصبع + تصنيفات + بطاقة «شاهد كل الأعمال».
 * الديسكتوب: شبكة تحريرية (صورة كبيرة + صور صغيرة).
 */
export default function HomeWorks({
  items,
  cats,
  total,
}: {
  items: GalleryItem[]; // مرتبة مسبقاً (مخلوطة من كل التصنيفات)
  cats: { id: GalleryCat; label: string }[];
  total: number;
}) {
  const [cat, setCat] = useState<GalleryCat>("all");
  const [active, setActive] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const track = useRef<HTMLUListElement>(null);

  const shown = useMemo(
    () => (cat === "all" ? items : items.filter((g) => g.cat === cat)).slice(0, PER_VIEW),
    [cat, items],
  );
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    items.forEach((g) => (c[g.cat] = (c[g.cat] ?? 0) + 1));
    return c;
  }, [items]);
  const label = useMemo(() => Object.fromEntries(cats.map((c) => [c.id, c.label])), [cats]);

  // شريط التقدّم أسفل الصور (RTL: scrollLeft سالب في المتصفحات)
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? Math.min(1, Math.abs(el.scrollLeft) / max) : 1);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [shown]);

  if (!items.length) return null;

  return (
    <>
      {/* التصنيفات */}
      <div role="tablist" aria-label="تصنيف الأعمال" className="rail mb-5 gap-2 md:mx-0 md:mb-8 md:flex-wrap md:justify-center md:px-0">
        {[{ id: "all" as GalleryCat, label: "الكل" }, ...cats.filter((c) => c.id !== "all" && counts[c.id])].map((c) => {
          const on = c.id === cat;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={on}
              onClick={() => setCat(c.id)}
              className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${
                on ? "border-honey bg-honey/15 text-honey" : "border-bone/15 text-bone/75 hover:border-honey/50 hover:text-bone"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* الصور */}
      <ul
        ref={track}
        className="rail gap-3 md:mx-0 md:grid md:auto-rows-[clamp(150px,17vw,230px)] md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0"
      >
        {shown.map((g, i) => (
          <li
            key={g.src}
            className={`w-[74vw] max-w-[340px] shrink-0 snap-start md:w-auto md:max-w-none ${
              i === 0 ? "md:col-span-2 md:row-span-2" : ""
            } ${i >= DESKTOP ? "md:hidden" : ""}`}
          >
            <button
              onClick={() => setActive(i)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-xl2 border border-bone/10 transition-colors hover:border-honey/40 md:aspect-auto md:h-full"
              aria-label={`تكبير: ${g.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.thumb}
                alt={g.alt}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 to-transparent px-4 pb-3 pt-10 text-start text-xs text-bone/90 md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                {label[g.cat]}
              </span>
            </button>
          </li>
        ))}

        {/* بطاقة «شاهد الكل» في آخر الشريط — للموبايل فقط */}
        <li className="w-[54vw] max-w-[260px] shrink-0 snap-start md:hidden">
          <Link
            href="/gallery"
            className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-xl2 border border-honey/40 bg-honey/10 p-5 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-honey-grad text-xl text-espresso">←</span>
            <span className="text-base text-bone">شاهد كل الأعمال</span>
            <span className="font-latin text-xs text-taupe">{total} صورة</span>
          </Link>
        </li>
      </ul>

      {/* مؤشّر السحب — للموبايل */}
      <div className="mt-4 flex items-center gap-3 md:hidden" aria-hidden>
        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-bone/10">
          <div className="h-full rounded-full bg-honey transition-[width] duration-150" style={{ width: `${Math.max(12, progress * 100)}%` }} />
        </div>
        <span className="shrink-0 text-xs text-taupe">اسحب للمزيد ←</span>
      </div>

      <div className="mt-8 flex justify-center md:mt-10">
        <Link href="/gallery" className="btn-ghost">
          شاهد كل الأعمال
          <span className="font-latin text-xs text-taupe">({total})</span>
        </Link>
      </div>

      <Lightbox items={shown} index={active} onChange={setActive} />
    </>
  );
}
