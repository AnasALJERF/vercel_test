import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { altOf, getDoc, imgSrc } from "@/content/get";
import { defaults } from "@/content/defaults";
import { waHref } from "@/content/links";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "من نحن — صالة شهد للمفروشات في سلمية",
  description:
    "تعرف على صالة شهد للمفروشات في سلمية بإدارة أحمد الجرف (أبو هادي): خامات مختارة، خشب نوع أول، تنفيذ متقن وكفالة على جميع الأعمال.",
  path: "/about",
});

export const revalidate = 60;

const STAT_COLS = ["", "sm:grid-cols-1", "sm:grid-cols-2", "sm:grid-cols-3", "sm:grid-cols-4"];
const isLatin = (v: string) => /^[\d%+.,\s]+$/.test(v);

export default async function AboutPage() {
  const [page, settings] = await Promise.all([getDoc("aboutPage"), getDoc("settings")]);
  const D = defaults.aboutPage;
  const hero = page.hero ?? D.hero;
  const story = page.story ?? D.story;
  const images = (story.images ?? []).slice(0, 4);
  const cards = [
    { ...page.vision, icon: "sparkle" },
    { ...page.mission, icon: "shield" },
  ].filter((c) => c.title);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "من نحن", path: "/about" }])} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} image={imgSrc(hero.image, { w: 2000 }, D.hero.image)} />

      <section className="py-20 md:py-24">
        <div className={`container-content grid items-start gap-14 ${images.length ? "lg:grid-cols-2" : ""}`}>
          <Reveal>
            {story.eyebrow && <span className="eyebrow">{story.eyebrow}</span>}
            {story.title && <h2 className="mt-5 text-display-md text-bone">{story.title}</h2>}
            {(story.paragraphs ?? []).map((p, i) => (
              <p key={i} className={`${i ? "mt-4" : "mt-6"} leading-loose text-bone/75`}>{p}</p>
            ))}
          </Reveal>

          {images.length > 0 && (
            <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
              {images.map((im, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={im._key || i}
                  src={imgSrc(im, { w: 700, h: 700 })}
                  alt={altOf(im, "من أعمال شهد للمفروشات")}
                  loading="lazy"
                  decoding="async"
                  className={`${i % 2 ? "mt-8 " : ""}aspect-square w-full rounded-xl2 border border-bone/10 object-cover`}
                />
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {cards.length > 0 && (
        <section className="border-y border-bone/10 bg-walnut/40 py-20">
          <div className={`container-content grid gap-7 ${cards.length > 1 ? "md:grid-cols-2" : ""}`}>
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12} className="card-surface p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-honey-grad text-espresso">
                  <Icon name={c.icon} size={24} />
                </span>
                <h3 className="mt-6 text-2xl text-bone">{c.title}</h3>
                {c.subtitle && <p className="mt-2 text-sm font-semibold text-honey">{c.subtitle}</p>}
                {c.body && <p className="mt-4 leading-relaxed text-bone/75">{c.body}</p>}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {!!page.stats?.length && (
        <section className="py-20">
          <div className="container-content">
            {page.statsTitle && (
              <Reveal className="mx-auto max-w-2xl text-center">
                <span className="eyebrow justify-center">{page.statsTitle}</span>
              </Reveal>
            )}
            <Reveal as="ul" variants={stagger} className={`mx-auto mt-10 grid max-w-4xl gap-8 ${STAT_COLS[Math.min(page.stats.length, 4)]}`}>
              {page.stats.map((st) => (
                <Reveal as="li" key={st._key} variants={fadeUp} className="text-center">
                  <div className={isLatin(st.value || "") ? "font-latin text-5xl font-semibold text-honey" : "text-4xl font-semibold text-honey"}>{st.value}</div>
                  {st.label && <p className="mt-2 text-sm text-taupe">{st.label}</p>}
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {!!page.whyUs?.length && (
        <section className="border-t border-bone/10 bg-walnut/40 py-20">
          <div className="container-content">
            <Reveal className="mx-auto max-w-2xl text-center">
              {page.whyHeading?.eyebrow && <span className="eyebrow justify-center">{page.whyHeading.eyebrow}</span>}
              {page.whyHeading?.title && <h2 className="mt-5 text-display-md text-bone">{page.whyHeading.title}</h2>}
            </Reveal>
            <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {page.whyUs.map((f) => (
                <Reveal as="li" key={f._key} variants={fadeUp} className="card-surface p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bone/5 text-honey">
                    <Icon name={f.icon} size={24} />
                  </span>
                  <h3 className="mt-5 text-lg text-bone">{f.title}</h3>
                  {f.body && <p className="mt-2 text-sm leading-relaxed text-bone/65">{f.body}</p>}
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {page.closingLine && (
        <section className="py-20">
          <div className="container-content text-center">
            <Reveal>
              <h2 className="mx-auto max-w-3xl text-display-md text-bone">{page.closingLine}</h2>
              <a href={waHref(settings.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-honey mt-8">
                ابدأ رحلتك معنا
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
