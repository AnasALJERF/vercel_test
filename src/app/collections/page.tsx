import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { collections, IMG } from "@/lib/data";
import { pageMeta, waLink } from "@/lib/seo";

export const metadata = pageMeta({
  title: "أقسامنا — كل ما تحتاجه لتأثيث منزل يعكس ذوقك",
  description: "تصفح أقسام صالة شهد للمفروشات: مجالس عربية وخليجية، غرف ضيوف وصالونات، غرف نوم وسفرة، برادي بأنواعها، وأقمشة مخمل أجنبي مستورد.",
  path: "/collections",
});

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="أقسامنا"
        title="كل ما تحتاجه لتأثيث منزل يعكس ذوقك"
        subtitle="في شهد للمفروشات نؤمن أن كل قطعة تختارها تضيف لمسة خاصة إلى منزلك، لذلك نقدم تشكيلة متكاملة من المفروشات والبرادي والأقمشة، بخامات مختارة بعناية وتنفيذ احترافي يجمع بين الجمال، الراحة، والمتانة، لتستمتع بمنزل يليق بك لسنوات طويلة."
        image={IMG.salon}
      />

      <section className="py-20 md:py-24">
        <div className="container-content space-y-20">
          {collections.map((c, i) => (
            <div key={c.slug} id={c.slug} className="scroll-mt-28">
              <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[direction:ltr]" : ""}`}>
                <Reveal className={i % 2 ? "lg:[direction:rtl]" : ""}>
                  <div className="overflow-hidden rounded-xl2 border border-bone/10 shadow-lift">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt={c.title} className="aspect-[4/3] w-full object-cover" />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={i % 2 ? "lg:[direction:rtl]" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-honey-grad text-espresso">
                    <Icon name={c.icon} size={24} />
                  </span>
                  <p className="mt-5 text-xs font-semibold text-honey">{c.tagline}</p>
                  <h2 className="mt-2 text-display-md text-bone">{c.title}</h2>
                  <p className="mt-4 leading-loose text-bone/75">{c.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm text-bone/80">
                        <Icon name="check" size={17} className="shrink-0 text-honey" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`السلام عليكم، أرغب باستشارة بخصوص ${c.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-8"
                  >
                    اطلب استشارة لهذا القسم
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-bone/10 bg-walnut/40 py-20">
        <div className="container-content text-center">
          <Reveal>
            <h2 className="text-display-md text-bone">لم تجد ما تبحث عنه؟</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bone/75">
              إذا كانت لديك فكرة خاصة أو ترغب بتفصيل قطعة تناسب مساحة منزلك، يسعد فريق
              شهد للمفروشات بمساعدتك في اختيار التصميم والخامات المناسبة، مع تنفيذ
              احترافي يراعي أدق التفاصيل.
            </p>
            <a
              href={waLink("السلام عليكم، لدي فكرة خاصة وأرغب باستشارة")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-honey mt-8"
            >
              تواصل معنا عبر واتساب
            </a>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
