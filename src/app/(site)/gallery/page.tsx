import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import { galleryCats, type GalleryItem } from "@/lib/gallery";
import { altOf, getDoc, imgSrc } from "@/content/get";
import { defaults } from "@/content/defaults";
import { waHref } from "@/content/links";
import type { Img } from "@/content/types";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "أعمالنا — صور مفروشات منفذة في سلمية",
  description:
    "صور حقيقية من أعمال شهد للمفروشات في سلمية: صالونات وغرف ضيوف، مجالس عربية، غرف نوم ودواليب، غرف أطفال، برادي وستائر، وصالة العرض.",
  path: "/gallery",
});

export const revalidate = 60;

const CATS = new Set(["salons", "majlis", "bedrooms", "kids", "curtains", "showroom", "pieces"]);

function toGalleryItem(g: Img): GalleryItem | null {
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

export default async function GalleryPage() {
  const [page, settings] = await Promise.all([getDoc("galleryPage"), getDoc("settings")]);
  const D = defaults.galleryPage;
  const hero = page.hero ?? D.hero;
  const items = (page.images ?? []).map((g) => toGalleryItem(g as Img)).filter(Boolean) as GalleryItem[];
  const projects = page.projects ?? [];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "أعمالنا", path: "/gallery" }])} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} image={imgSrc(hero.image, { w: 2000 }, D.hero.image)} />

      {projects.length > 0 && (
        <section className="py-20">
          <div className="container-content">
            <Reveal className="mx-auto max-w-2xl text-center">
              {page.projectsHeading?.eyebrow && <span className="eyebrow justify-center">{page.projectsHeading.eyebrow}</span>}
              {page.projectsHeading?.title && <h2 className="mt-5 text-display-md text-bone">{page.projectsHeading.title}</h2>}
            </Reveal>

            <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Reveal as="li" key={p._key} variants={fadeUp} className="card-surface overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgSrc(p.image, { w: 900, h: 675 })} alt={altOf(p.image, `${p.title} — من أعمال شهد للمفروشات`)} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-bone">{p.title}</h3>
                    {p.scope && <p className="mt-2.5 text-sm leading-relaxed text-bone/65">{p.scope}</p>}
                  </div>
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {items.length > 0 && (
        <section className="border-t border-bone/10 py-20">
          <div className="container-content">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              {page.galleryHeading?.eyebrow && <span className="eyebrow justify-center">{page.galleryHeading.eyebrow}</span>}
              {page.galleryHeading?.title && <h2 className="mt-5 text-display-md text-bone">{page.galleryHeading.title}</h2>}
              {page.galleryHeading?.text && <p className="mt-4 leading-relaxed text-bone/70">{page.galleryHeading.text}</p>}
            </Reveal>
            <Gallery items={items} cats={galleryCats} />
          </div>
        </section>
      )}

      {page.closing?.title && (
        <section className="border-t border-bone/10 bg-walnut/40 py-20">
          <div className="container-content text-center">
            <Reveal>
              <h2 className="text-display-md text-bone">{page.closing.title}</h2>
              {page.closing.text && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bone/75">{page.closing.text}</p>}
              <a href={waHref(settings.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-honey mt-8">
                {page.closing.button || "اطلب استشارة مجانية"}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
