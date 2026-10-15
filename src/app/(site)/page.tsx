import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { altOf, getDoc, imgSrc } from "@/content/get";
import { defaults } from "@/content/defaults";
import { waHref } from "@/content/links";
import { stagger, fadeUp } from "@/lib/motion";

export const revalidate = 60;

const pad = (n: number) => String(n).padStart(2, "0");

export default async function Home() {
  const [home, cols, settings] = await Promise.all([getDoc("home"), getDoc("collectionsPage"), getDoc("settings")]);
  const D = defaults.home;
  const hero = home.hero ?? D.hero;
  const intro = home.intro ?? D.intro;
  const highlights = home.highlights ?? [];
  const collections = cols.items ?? [];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[94vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc(hero.image, { w: 2200 }, D.hero.image)} alt="" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-espresso via-espresso/85 to-espresso/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/50" />
        </div>

        <div className="container-content relative z-10 pt-24">
          <Reveal className="max-w-2xl">
            {hero.eyebrow && <span className="eyebrow">{hero.eyebrow}</span>}
            <h1 className="mt-6 text-display-lg text-bone">
              {hero.title}
              {hero.titleAccent && (
                <>
                  <br />
                  <span className="bg-honey-grad bg-clip-text text-transparent">{hero.titleAccent}</span>
                </>
              )}
            </h1>
            {hero.text && <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">{hero.text}</p>}
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={waHref(settings.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-honey">اطلب استشارة مجانية</a>
              <Link href="/collections" className="btn-ghost">اكتشف مجموعاتنا</Link>
            </div>
            {hero.byline && <p className="mt-8 text-sm text-taupe">{hero.byline}</p>}
          </Reveal>
        </div>
      </section>

      {/* Features strip */}
      {!!home.features?.length && (
        <section className="border-b border-bone/10 bg-walnut/40 py-14">
          <div className="container-content">
            <Reveal as="ul" variants={stagger} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {home.features.map((f) => (
                <Reveal as="li" key={f._key} variants={fadeUp} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-base text-bone">{f.title}</h3>
                    {f.body && <p className="mt-1 text-sm leading-relaxed text-bone/65">{f.body}</p>}
                  </div>
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Intro */}
      <section className="bg-walnut-veil py-24 md:py-28">
        <div className="container-content grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            {intro.eyebrow && <span className="eyebrow">{intro.eyebrow}</span>}
            {intro.title && <h2 className="mt-5 text-display-md text-bone">{intro.title}</h2>}
            {(intro.paragraphs ?? []).map((p, i) => (
              <p key={i} className={`${i ? "mt-4" : "mt-6"} leading-loose text-bone/75`}>{p}</p>
            ))}
            <Link href="/about" className="btn-ghost mt-8">اكتشف قصة شهد للمفروشات</Link>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc(intro.image1, { w: 800, h: 1067 }, D.intro.image1)} alt={altOf(intro.image1, "من أعمال شهد للمفروشات")} loading="lazy" decoding="async" className="aspect-[3/4] w-full rounded-xl2 border border-bone/10 object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc(intro.image2, { w: 800, h: 1067 }, D.intro.image2)} alt={altOf(intro.image2, "من أعمال شهد للمفروشات في سلمية")} loading="lazy" decoding="async" className="mt-8 aspect-[3/4] w-full rounded-xl2 border border-bone/10 object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Editorial showcase */}
      {highlights.length > 0 && (
        <section className="pb-4 pt-20">
          <div className="container-content">
            <div className="grid gap-4 md:grid-cols-12 md:gap-5">
              <Reveal className={highlights.length > 1 ? "md:col-span-7" : "md:col-span-12"}>
                <div className="relative h-full overflow-hidden rounded-xl2 border border-bone/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgSrc(highlights[0].image, { w: 1600 })} alt={altOf(highlights[0].image, `${highlights[0].title} — شهد للمفروشات في سلمية`)} loading="lazy" decoding="async" className="h-full min-h-[280px] w-full object-cover md:min-h-[430px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/15 to-transparent" />
                  <div className="absolute bottom-7 start-7 end-7">
                    {highlights[0].label && <p className="font-latin text-xs tracking-[0.3em] text-honey">{highlights[0].label}</p>}
                    <h3 className="mt-2 text-2xl text-bone">{highlights[0].title}</h3>
                    {highlights[0].line && <p className="mt-1.5 text-sm text-bone/75">{highlights[0].line}</p>}
                  </div>
                </div>
              </Reveal>

              {highlights.length > 1 && (
                <div className="grid gap-4 md:col-span-5 md:gap-5">
                  {highlights.slice(1).map((h, i) => (
                    <Reveal key={h._key} delay={0.1 + i * 0.08}>
                      <div className="relative overflow-hidden rounded-xl2 border border-bone/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imgSrc(h.image, { w: 1000, h: 460 })} alt={altOf(h.image, `${h.title} — شهد للمفروشات في سلمية`)} loading="lazy" decoding="async" className="h-[205px] w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 to-transparent" />
                        <div className="absolute bottom-5 start-6 end-6">
                          {h.label && <p className="font-latin text-xs tracking-[0.3em] text-honey">{h.label}</p>}
                          <h3 className="mt-1 text-xl text-bone">{h.title}</h3>
                          {h.line && <p className="mt-1 text-sm text-bone/75">{h.line}</p>}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Collections */}
      {collections.length > 0 && (
        <section className="py-24 md:py-28">
          <div className="container-content">
            <Reveal className="mx-auto max-w-2xl text-center">
              {home.collectionsHeading?.eyebrow && <span className="eyebrow justify-center">{home.collectionsHeading.eyebrow}</span>}
              {home.collectionsHeading?.title && <h2 className="mt-5 text-display-md text-bone">{home.collectionsHeading.title}</h2>}
              {home.collectionsHeading?.text && <p className="mt-4 text-bone/70">{home.collectionsHeading.text}</p>}
            </Reveal>

            <Reveal as="ul" variants={stagger} className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {collections.map((c) => (
                <Reveal as="li" key={c._key} variants={fadeUp}>
                  <Link href={`/collections#${c._key}`} className="group block card-surface overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={imgSrc(c.image, { w: 900, h: 675 })} alt={altOf(c.image, `${c.title} — شهد للمفروشات في سلمية`)} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/30 to-transparent" />
                      <span className="absolute bottom-4 start-5 flex h-11 w-11 items-center justify-center rounded-full bg-honey-grad text-espresso">
                        <Icon name={c.icon} size={22} />
                      </span>
                    </div>
                    <div className="p-6">
                      {c.tagline && <p className="text-xs font-semibold text-honey">{c.tagline}</p>}
                      <h3 className="mt-2 text-xl text-bone">{c.title}</h3>
                      {c.description && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-bone/65">{c.description}</p>}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Steps */}
      {!!home.steps?.length && (
        <section className="border-y border-bone/10 bg-walnut/40 py-24">
          <div className="container-content">
            <Reveal className="mx-auto max-w-2xl text-center">
              {home.stepsHeading?.eyebrow && <span className="eyebrow justify-center">{home.stepsHeading.eyebrow}</span>}
              {home.stepsHeading?.title && <h2 className="mt-5 text-display-md text-bone">{home.stepsHeading.title}</h2>}
            </Reveal>
            <Reveal as="ul" variants={stagger} className={`mt-14 grid gap-7 ${home.steps.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
              {home.steps.map((s, i) => (
                <Reveal as="li" key={s._key} variants={fadeUp} className="card-surface p-7">
                  <div className="num text-4xl font-semibold text-honey/85">{pad(i + 1)}</div>
                  <h3 className="mt-4 text-lg text-bone">{s.title}</h3>
                  {s.body && <p className="mt-2 text-sm leading-relaxed text-bone/65">{s.body}</p>}
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {!!home.testimonials?.length && (
        <section className="py-24">
          <div className="container-content">
            <Reveal className="mx-auto max-w-2xl text-center">
              {home.testimonialsHeading?.eyebrow && <span className="eyebrow justify-center">{home.testimonialsHeading.eyebrow}</span>}
              {home.testimonialsHeading?.title && <h2 className="mt-5 text-display-md text-bone">{home.testimonialsHeading.title}</h2>}
            </Reveal>
            <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 md:grid-cols-3">
              {home.testimonials.map((t) => (
                <Reveal as="li" key={t._key} variants={fadeUp} className="card-surface p-8">
                  <Icon name="quote" size={28} className="text-honey/70" />
                  <p className="mt-4 leading-relaxed text-bone/85">{t.text}</p>
                  {t.name && <p className="mt-5 text-sm text-taupe">— {t.name}</p>}
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Brand band */}
      <section className="border-y border-bone/10 bg-walnut/50 py-20">
        <div className="container-content flex flex-col items-center text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/logo-mark.png" alt="شعار شهد للمفروشات" className="mx-auto h-20 w-auto md:h-28" />
            {home.brandLine && <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-bone/75">{home.brandLine}</p>}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
