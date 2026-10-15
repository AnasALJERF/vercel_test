import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { getDoc, imgSrc } from "@/content/get";
import { defaults } from "@/content/defaults";
import { waHref } from "@/content/links";
import { pageMeta, breadcrumbJsonLd, mapEmbedUrl, mapOpenUrl } from "@/lib/seo";
import SocialIcons from "@/components/SocialIcons";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "تواصل معنا — عنوان صالة شهد للمفروشات في سلمية",
  description:
    "عنوان صالة شهد للمفروشات: سوريا، حماة، سلمية، شارع حمص، غرب دوار المطاعم بـ 50 متراً. أرقام الهاتف والواتساب وأوقات الدوام والموقع على الخريطة.",
  path: "/contact",
});

export const revalidate = 60;

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getDoc("contactPage"), getDoc("settings")]);
  const D = defaults.contactPage;
  const hero = page.hero ?? D.hero;
  const phones = settings.phones ?? [];
  const openUrl = mapOpenUrl(settings);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "تواصل معنا", path: "/contact" }])} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} image={imgSrc(hero.image, { w: 2000 }, D.hero.image)} />

      <section className="py-20 md:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <Reveal>
            {page.infoHeading?.eyebrow && <span className="eyebrow">{page.infoHeading.eyebrow}</span>}
            {page.infoHeading?.title && <h2 className="mt-5 text-display-md text-bone">{page.infoHeading.title}</h2>}

            <ul className="mt-10 space-y-7">
              {(settings.addressLine1 || settings.addressLine2) && (
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                    <Icon name="pin" size={22} />
                  </span>
                  <address className="not-italic">
                    <h3 className="text-base text-bone">العنوان</h3>
                    {settings.addressLine1 && <p className="mt-1.5 font-medium text-bone/90">{settings.addressLine1}</p>}
                    {settings.addressLine2 && <p className="mt-1 text-sm leading-relaxed text-bone/70">{settings.addressLine2}</p>}
                    {settings.addressLine3 && <p className="mt-0.5 text-sm leading-relaxed text-taupe">{settings.addressLine3}</p>}
                  </address>
                </li>
              )}

              {phones.length > 0 && (
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                    <Icon name="phone" size={22} />
                  </span>
                  <div>
                    <h3 className="text-base text-bone">أرقام التواصل</h3>
                    <ul className="mt-2 space-y-1.5">
                      {phones.map((p) => (
                        <li key={p._key || p.tel}>
                          <a href={`tel:${p.tel}`} dir="ltr" className="font-latin text-sm text-bone/75 transition-colors hover:text-honey">
                            {p.display}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )}

              {settings.hours && (
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                    <Icon name="clock" size={22} />
                  </span>
                  <div>
                    <h3 className="text-base text-bone">أوقات الدوام</h3>
                    <p className="mt-1 text-sm text-bone/70">{settings.hours}</p>
                  </div>
                </li>
              )}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={waHref(settings.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-honey">اطلب استشارة مجانية</a>
              <div className="flex items-center gap-4">
                <span className="text-sm text-bone/70">تابعنا</span>
                <SocialIcons links={settings} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl2 border border-bone/10 shadow-lift">
              <iframe
                title="موقع صالة شهد للمفروشات على الخريطة — سلمية، شارع حمص"
                src={mapEmbedUrl(settings)}
                className="h-[460px] w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {openUrl && (
              <a href={openUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-5">
                افتح الموقع في خرائط جوجل
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {!!page.reasons?.length && (
        <section className="border-t border-bone/10 bg-walnut/40 py-20">
          <div className="container-content">
            <Reveal className="mx-auto max-w-2xl text-center">
              {page.reasonsHeading?.eyebrow && <span className="eyebrow justify-center">{page.reasonsHeading.eyebrow}</span>}
              {page.reasonsHeading?.title && <h2 className="mt-5 text-display-md text-bone">{page.reasonsHeading.title}</h2>}
            </Reveal>
            <Reveal as="ul" variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-3">
              {page.reasons.map((x) => (
                <Reveal as="li" key={x._key} variants={fadeUp} className="card-surface p-7 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-bone/5 text-honey">
                    <Icon name={x.icon} size={24} />
                  </span>
                  <h3 className="mt-5 text-lg text-bone">{x.title}</h3>
                  {x.body && <p className="mt-2 text-sm leading-relaxed text-bone/65">{x.body}</p>}
                </Reveal>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {page.visit?.title && (
        <section className="py-20">
          <div className="container-content text-center">
            <Reveal>
              <h2 className="text-display-md text-bone">{page.visit.title}</h2>
              {page.visit.text && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bone/75">{page.visit.text}</p>}
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
