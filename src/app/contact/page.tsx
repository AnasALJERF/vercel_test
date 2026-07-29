import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { IMG } from "@/lib/data";
import { SITE, pageMeta, waLink } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "تواصل معنا — سلمية، شارع حمص",
  description: "زوروا صالة شهد للمفروشات الراقية في سلمية — شارع حمص، غرب تقاطع الصحن الذهبي. أرقام التواصل وأوقات الدوام.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تواصل معنا"
        title="نتشرف بزيارتكم"
        subtitle="ندعو أصحاب الذوق الراقي والرفيع لزيارة صالتنا التي تتشرف بكم."
        image={IMG.curtainSheer}
      />

      <section className="py-20 md:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">معلومات التواصل</span>
            <h2 className="mt-5 text-display-md text-bone">تفضل بزيارتنا</h2>

            <ul className="mt-10 space-y-7">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name="pin" size={22} />
                </span>
                <div>
                  <h3 className="text-base text-bone">العنوان</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bone/70">{SITE.address}</p>
                  <p className="mt-1 text-sm leading-relaxed text-taupe">({SITE.addressAlt})</p>
                </div>
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
                        <a href={`tel:${p.tel}`} dir="ltr" className="text-sm text-bone/75 transition-colors hover:text-honey">
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

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey">راسلنا على واتساب</a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost">صفحتنا على فيسبوك</a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl2 border border-bone/10">
              <iframe
                title="موقع صالة شهد للمفروشات"
                src="https://www.google.com/maps?q=Salamiyah,+Hama,+Syria&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-taupe">
              الخريطة تشير إلى مدينة {SITE.city} بشكل عام. لتحديد موقع الصالة بدقة على
              الخريطة، يمكن إضافة الموقع لاحقا عبر خرائط جوجل.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-walnut/40 py-16">
        <div className="container-content">
          <Reveal as="ul" variants={stagger} className="grid gap-6 sm:grid-cols-3">
            {[
              { t: "استشارة مجانية", b: "كادرنا الفني يساعدك في الاختيار الأنسب.", i: "quote" },
              { t: "تفصيل حسب المقاس", b: "ننفذ وفق مساحتك وذوقك دون قوالب جاهزة.", i: "layout" },
              { t: "كفالة على المنتج", b: "نقف خلف ما ننفذه بكفالة واضحة.", i: "check" },
            ].map((x) => (
              <Reveal as="li" key={x.t} variants={fadeUp} className="card-surface p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name={x.i} size={22} />
                </span>
                <h3 className="mt-4 text-base text-bone">{x.t}</h3>
                <p className="mt-2 text-sm text-bone/65">{x.b}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
