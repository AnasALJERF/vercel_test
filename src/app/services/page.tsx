import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { services, steps, IMG } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "خدماتنا — فرش المنازل والقص على الليزر والمطابخ",
  description: "خدمات صالة شهد: فرش المنازل والفلل، القص والحفر على الليزر CNC، المطابخ والأبواب، البدائل الخشبية والرخامية، وفرش المحلات والمكاتب.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="خدماتنا"
        title="أكثر من مجرد مفروشات"
        subtitle="نرافقك من الاستشارة الأولى حتى التركيب النهائي، بفروع متخصصة تغطي كل تفاصيل المكان."
        image={IMG.workshop}
      />

      <section className="py-20 md:py-24">
        <div className="container-content">
          <Reveal as="ul" variants={stagger} className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Reveal as="li" key={s.title} variants={fadeUp} className="card-surface p-8 transition-colors hover:border-honey/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="mt-5 text-xl text-bone">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-bone/70">{s.body}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-walnut/40 py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">آلية العمل</span>
            <h2 className="mt-5 text-display-md text-bone">خطوات واضحة، نتيجة مضمونة</h2>
          </Reveal>
          <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 md:grid-cols-4">
            {steps.map((s) => (
              <Reveal as="li" key={s.n} variants={fadeUp} className="card-surface p-7">
                <div className="num text-4xl font-semibold text-honey/85">{s.n}</div>
                <h3 className="mt-4 text-lg text-bone">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/65">{s.body}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
