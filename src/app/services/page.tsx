import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { services, steps, IMG } from "@/lib/data";
import { pageMeta, waLink } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "خدماتنا — حلول متكاملة لكل تفاصيل منزلك",
  description:
    "خدمات شهد للمفروشات: فرش المنازل والفلل، القص والحفر بتقنية CNC ليزر، المطابخ والأبواب، البدائل الخشبية والرخامية، فرش المحلات والمكاتب، والاستشارة والتصميم.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="خدماتنا"
        title="حلول متكاملة... لكل تفاصيل منزلك"
        subtitle="في شهد للمفروشات لا نقدم منتجات منفصلة، بل نرافقك في رحلة تأثيث متكاملة تبدأ من الفكرة الأولى، مروراً بالتصميم واختيار الخامات، وحتى التنفيذ والتركيب النهائي."
        image={IMG.workshop}
      />

      <section className="py-20 md:py-24">
        <div className="container-content">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="leading-relaxed text-bone/75">
              بفضل فروعنا المتخصصة وفريقنا الفني، تستطيع إنجاز مختلف تفاصيل منزلك أو
              مشروعك من خلال جهة واحدة تهتم بكل تفصيلة.
            </p>
          </Reveal>

          <Reveal as="ul" variants={stagger} className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Reveal as="li" key={s.title} variants={fadeUp} className="card-surface flex flex-col p-8 transition-colors hover:border-honey/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="mt-5 text-xl text-bone">{s.title}</h3>
                <p className="mt-1.5 text-sm font-semibold text-honey">{s.headline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/70">{s.body}</p>
                <ul className="mt-6 space-y-2 border-t border-bone/10 pt-5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm text-bone/80">
                      <Icon name="check" size={16} className="shrink-0 text-honey" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-walnut/40 py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">كيف نعمل</span>
            <h2 className="mt-5 text-display-md text-bone">رحلة واضحة... ونتيجة تستحق الانتظار</h2>
          </Reveal>
          <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 md:grid-cols-4">
            {steps.map((s) => (
              <Reveal as="li" key={s.n} variants={fadeUp} className="card-surface p-7">
                <div className="font-latin text-4xl font-semibold text-honey/85">{s.n}</div>
                <h3 className="mt-4 text-lg text-bone">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/65">{s.body}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-content text-center">
          <Reveal>
            <h2 className="text-display-md text-bone">هل لديك مشروع جديد؟</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bone/75">
              دع فريق شهد للمفروشات يساعدك في تنفيذ مساحة تعكس ذوقك، بخامات عالية الجودة
              وتنفيذ احترافي من البداية وحتى التسليم.
            </p>
            <a
              href={waLink("السلام عليكم، لدي مشروع جديد وأرغب باستشارة")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-honey mt-8"
            >
              ابدأ مشروعك معنا
            </a>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
