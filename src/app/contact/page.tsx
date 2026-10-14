import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { IMG } from "@/lib/data";
import { SITE, pageMeta, waLink, breadcrumbJsonLd, mapEmbedUrl, mapOpenUrl } from "@/lib/seo";
import SocialIcons from "@/components/SocialIcons";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "تواصل معنا — عنوان صالة شهد للمفروشات في سلمية",
  description:
    "عنوان صالة شهد للمفروشات: سوريا، حماة، سلمية، شارع حمص، غرب دوار المطاعم بـ 50 متراً. أرقام الهاتف والواتساب وأوقات الدوام والموقع على الخريطة.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "تواصل معنا", path: "/contact" }])} />
      <PageHero
        eyebrow="تواصل معنا"
        title="يسعدنا أن نكون جزءاً من مشروعك القادم"
        subtitle="إذا كنت تبحث عن الجودة، والذوق، والتنفيذ الاحترافي، فإن فريق شهد للمفروشات جاهز للإجابة عن استفساراتك ومساعدتك في اختيار الحلول المناسبة لمنزلك أو مشروعك."
        image={IMG.heroContact}
      />

      <section className="py-20 md:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">معلومات التواصل</span>
            <h2 className="mt-5 text-display-md text-bone">تفضل بزيارتنا في سلمية</h2>

            <ul className="mt-10 space-y-7">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name="pin" size={22} />
                </span>
                <address className="not-italic">
                  <h3 className="text-base text-bone">العنوان</h3>
                  <p className="mt-1.5 font-medium text-bone/90">{SITE.addressLine1}</p>
                  <p className="mt-1 text-sm leading-relaxed text-bone/70">{SITE.addressLine2}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-taupe">{SITE.addressLine3}</p>
                </address>
              </li>

              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name="phone" size={22} />
                </span>
                <div>
                  <h3 className="text-base text-bone">أرقام التواصل</h3>
                  <ul className="mt-2 space-y-1.5">
                    {SITE.phones.map((p) => (
                      <li key={p.tel}>
                        <a href={`tel:${p.tel}`} dir="ltr" className="font-latin text-sm text-bone/75 transition-colors hover:text-honey">
                          {p.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name="clock" size={22} />
                </span>
                <div>
                  <h3 className="text-base text-bone">أوقات الدوام</h3>
                  <p className="mt-1 text-sm text-bone/70">{SITE.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey">اطلب استشارة مجانية</a>
              <div className="flex items-center gap-4">
                <span className="text-sm text-bone/70">تابعنا</span>
                <SocialIcons />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl2 border border-bone/10 shadow-lift">
              <iframe
                title="موقع صالة شهد للمفروشات على الخريطة — سلمية، شارع حمص"
                src={mapEmbedUrl()}
                className="h-[460px] w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {mapOpenUrl() && (
              <a href={mapOpenUrl()} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-5">
                افتح الموقع في خرائط جوجل
              </a>
            )}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-walnut/40 py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">لماذا تتواصل معنا؟</span>
            <h2 className="mt-5 text-display-md text-bone">نحن معك في كل خطوة</h2>
          </Reveal>
          <Reveal as="ul" variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { t: "استشارة مجانية", b: "نساعدك في اختيار التصميم والخامات المناسبة قبل اتخاذ أي قرار.", i: "ruler" },
              { t: "تنفيذ حسب الطلب", b: "كل مشروع ينفذ بما يتناسب مع مساحة المكان وذوق العميل، دون الاعتماد على حلول جاهزة.", i: "layout" },
              { t: "كفالة على التنفيذ", b: "نلتزم بجودة أعمالنا ونوفر كفالة تمنحك مزيداً من الثقة والاطمئنان.", i: "shield" },
            ].map((x) => (
              <Reveal as="li" key={x.t} variants={fadeUp} className="card-surface p-7 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name={x.i} size={24} />
                </span>
                <h3 className="mt-5 text-lg text-bone">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/65">{x.b}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-content text-center">
          <Reveal>
            <h2 className="text-display-md text-bone">بانتظار زيارتك</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bone/75">
              سواء كنت ترغب في تأثيث منزل كامل أو اختيار قطعة واحدة، يسعدنا استقبالكم في
              صالة شهد للمفروشات ومساعدتكم في تحويل أفكاركم إلى واقع.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
