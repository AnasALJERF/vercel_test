import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { altOf, getDoc, imgSrc } from "@/content/get";
import { defaults } from "@/content/defaults";
import { waHref } from "@/content/links";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "مفروشات في سلمية: مجالس، صالونات، غرف نوم وبرادي",
  description:
    "أقسام صالة شهد للمفروشات في سلمية: مجالس عربية وخليجية، غرف ضيوف وصالونات، غرف نوم وأطفال، غرف سفرة وطاولات، برادي وستائر، وأقمشة مفروشات مستوردة.",
  path: "/collections",
});

export const revalidate = 60;

export default async function CollectionsPage() {
  const [page, settings] = await Promise.all([getDoc("collectionsPage"), getDoc("settings")]);
  const D = defaults.collectionsPage;
  const hero = page.hero ?? D.hero;
  const items = page.items ?? [];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "أقسامنا", path: "/collections" }])} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} image={imgSrc(hero.image, { w: 2000 }, D.hero.image)} />

      <section className="py-20 md:py-24">
        <div className="container-content space-y-20">
          {items.map((c, i) => (
            <div key={c._key} id={c._key} className="scroll-mt-28">
              <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[direction:ltr]" : ""}`}>
                <Reveal className={i % 2 ? "lg:[direction:rtl]" : ""}>
                  <div className="overflow-hidden rounded-xl2 border border-bone/10 shadow-lift">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgSrc(c.image, { w: 1200, h: 900 })} alt={altOf(c.image, `${c.title} من صالة شهد للمفروشات في سلمية`)} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={i % 2 ? "lg:[direction:rtl]" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-honey-grad text-espresso">
                    <Icon name={c.icon} size={24} />
                  </span>
                  {c.tagline && <p className="mt-5 text-xs font-semibold text-honey">{c.tagline}</p>}
                  <h2 className="mt-2 text-display-md text-bone">{c.title}</h2>
                  {c.description && <p className="mt-4 leading-loose text-bone/75">{c.description}</p>}
                  {!!c.includes?.length && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {c.includes.map((it) => (
                        <li key={it} className="flex items-center gap-3 text-sm text-bone/80">
                          <Icon name="check" size={17} className="shrink-0 text-honey" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={waHref(settings.whatsapp, `السلام عليكم، أريد أن أستفسر عن ${c.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-8"
                  >
                    اسأل ما تريد عن {c.title}
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {page.closing?.title && (
        <section className="border-t border-bone/10 bg-walnut/40 py-20">
          <div className="container-content text-center">
            <Reveal>
              <h2 className="text-display-md text-bone">{page.closing.title}</h2>
              {page.closing.text && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bone/75">{page.closing.text}</p>}
              <a
                href={waHref(settings.whatsapp, "السلام عليكم، لدي فكرة خاصة وأرغب باستشارة")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-honey mt-8"
              >
                {page.closing.button || "تواصل معنا عبر واتساب"}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
