import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { getDoc, imgSrc } from "@/content/get";
import { defaults } from "@/content/defaults";
import { waHref } from "@/content/links";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "فرش المنازل والفلل وحفر CNC ليزر في سلمية",
  description:
    "خدمات شهد للمفروشات في سلمية وحماة: فرش المنازل والفلل والمضافات، قص وحفر CNC ليزر، مطابخ وأبواب، بديل خشب ورخام، وفرش المحلات والمكاتب مع استشارة مجانية.",
  path: "/services",
});

export const revalidate = 60;

const pad = (n: number) => String(n).padStart(2, "0");

export default async function ServicesPage() {
  const [page, home, settings] = await Promise.all([getDoc("servicesPage"), getDoc("home"), getDoc("settings")]);
  const D = defaults.servicesPage;
  const hero = page.hero ?? D.hero;
  const items = page.items ?? [];
  const steps = home.steps ?? [];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "خدماتنا", path: "/services" }])} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} image={imgSrc(hero.image, { w: 2000 }, D.hero.image)} />

      <section className="py-20 md:py-24">
        <div className="container-content">
          {page.intro && (
            <Reveal className="mx-auto mb-14 max-w-2xl text-center">
              <p className="leading-relaxed text-bone/75">{page.intro}</p>
            </Reveal>
          )}

          <Reveal as="ul" variants={stagger} className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <Reveal as="li" key={s._key} variants={fadeUp} className="card-surface flex flex-col p-8 transition-colors hover:border-honey/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="mt-5 text-xl text-bone">{s.title}</h3>
                {s.headline && <p className="mt-1.5 text-sm font-semibold text-honey">{s.headline}</p>}
                {s.body && <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/70">{s.body}</p>}
                {!!s.points?.length && (
                  <ul className="mt-6 space-y-2 border-t border-bone/10 pt-5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-bone/80">
                        <Icon name="check" size={16} className="shrink-0 text-honey" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {steps.length > 0 && (
        <section className="border-t border-bone/10 bg-walnut/40 py-20">
          <div className="container-content">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">{home.stepsHeading?.eyebrow || "كيف نعمل"}</span>
              {page.stepsTitle && <h2 className="mt-5 text-display-md text-bone">{page.stepsTitle}</h2>}
            </Reveal>
            <Reveal as="ul" variants={stagger} className={`mt-14 grid gap-7 ${steps.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
              {steps.map((s, i) => (
                <Reveal as="li" key={s._key} variants={fadeUp} className="card-surface p-7">
                  <div className="font-latin text-4xl font-semibold text-honey/85">{pad(i + 1)}</div>
                  <h3 className="mt-4 text-lg text-bone">{s.title}</h3>
                  {s.body && <p className="mt-2 text-sm leading-relaxed text-bone/65">{s.body}</p>}
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {page.closing?.title && (
        <section className="py-20">
          <div className="container-content text-center">
            <Reveal>
              <h2 className="text-display-md text-bone">{page.closing.title}</h2>
              {page.closing.text && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bone/75">{page.closing.text}</p>}
              <a
                href={waHref(settings.whatsapp, "السلام عليكم، لدي مشروع جديد وأرغب باستشارة")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-honey mt-8"
              >
                {page.closing.button || "ابدأ مشروعك معنا"}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
