import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { features, IMG } from "@/lib/data";
import { SITE, pageMeta } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "من نحن — صالة شهد للمفروشات الراقية",
  description: "تعرف على صالة شهد للمفروشات الراقية في سلمية بإدارة أحمد الجرف: كادر فني محترف، خامات مستوردة، وكفالة على المنتج.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title="حيث تلتقي الفخامة بالجودة"
        subtitle={`صالة شهد للمفروشات الراقية — بإدارة ${SITE.manager}`}
        image={IMG.guestRoom}
      />

      <section className="py-20 md:py-24">
        <div className="container-content grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">قصتنا</span>
            <h2 className="mt-5 text-display-md text-bone">ذوق راق ولمسات فنية</h2>
            <p className="mt-6 leading-loose text-bone/75">
              في مدينة {SITE.city}، بدأت صالة شهد للمفروشات الراقية برؤية بسيطة وواضحة:
              أن يكون المنزل لوحة فنية. ومنذ ذلك الحين، ونحن نختار الخامة قبل أن نختار
              التصميم، ونصر أن يكون ما نسلمه للعميل قطعة نفخر بتوقيعنا عليها.
            </p>
            <p className="mt-4 leading-loose text-bone/75">
              عندما يجتمع الذوق الراقي لرواد صالتنا مع اللمسات الفنية لكادرنا، ترسم
              هذه اللوحات بأيد ماهرة. لذلك اختارنا الكثيرون لفرش منازلهم وفللهم
              ومضافاتهم ومحلاتهم — وهذه الثقة هي أثمن ما نملك.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <div className="num text-4xl font-semibold text-honey">100%</div>
                <p className="mt-1 text-sm text-taupe">خامات مختارة</p>
              </div>
              <div>
                <div className="text-3xl font-semibold text-honey">كفالة</div>
                <p className="mt-1 text-sm text-taupe">على كل منتج</p>
              </div>
              <div>
                <div className="num text-4xl font-semibold text-honey">02</div>
                <p className="mt-1 text-sm text-taupe">فرعان: ليزر CNC ومطابخ</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.fabricDetail} alt="تفاصيل التنجيد" className="aspect-square w-full rounded-xl2 border border-bone/10 object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.curtainDrape} alt="برادي" className="mt-8 aspect-square w-full rounded-xl2 border border-bone/10 object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.bedroomWarm} alt="غرفة نوم" className="aspect-square w-full rounded-xl2 border border-bone/10 object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.tufted} alt="كرسي منجد" className="mt-8 aspect-square w-full rounded-xl2 border border-bone/10 object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-bone/10 bg-walnut/40 py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">لماذا شهد</span>
            <h2 className="mt-5 text-display-md text-bone">وعد نلتزم به</h2>
          </Reveal>
          <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Reveal as="li" key={f.title} variants={fadeUp} className="card-surface p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name={f.icon} size={24} />
                </span>
                <h3 className="mt-5 text-lg text-bone">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/65">{f.body}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
