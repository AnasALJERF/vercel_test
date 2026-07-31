import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { whyUs, IMG } from "@/lib/data";
import { SITE, pageMeta, waLink } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "من نحن — نبني مساحات تعكس ذوق أصحابها",
  description:
    "شهد للمفروشات بإدارة أحمد الجرف (أبو هادي): رؤيتنا ورسالتنا وقيمنا في تأثيث المنازل والفلل والمضافات والمحلات التجارية.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title="نبني مساحات تعكس ذوق أصحابها"
        subtitle="شهد للمفروشات — بإدارة أحمد الجرف (أبو هادي)"
        image={IMG.guestRoom}
      />

      <section className="py-20 md:py-24">
        <div className="container-content grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">قصتنا</span>
            <h2 className="mt-5 text-display-md text-bone">شغف بالجودة... واهتمام بالتفاصيل</h2>
            <p className="mt-6 leading-loose text-bone/75">
              بدأت شهد للمفروشات برؤية واضحة؛ أن يكون كل منزل نعمل عليه مساحة تعكس ذوق
              أصحابه وتمنحهم شعوراً بالفخر والراحة في كل زاوية.
            </p>
            <p className="mt-4 leading-loose text-bone/75">
              لهذا لا ننظر إلى المفروشات كمنتجات فقط، بل كعناصر تكمل شخصية المكان، لذلك
              نحرص على اختيار الخامات بعناية، والاهتمام بأدق تفاصيل التنفيذ، حتى تخرج كل
              قطعة بالمستوى الذي نستحق أن نضع اسمنا عليه.
            </p>
            <p className="mt-4 leading-loose text-bone/75">
              على مدار السنوات، اكتسبنا ثقة العديد من العملاء في تأثيث المنازل، الفلل،
              المضافات، والمحلات التجارية، لأننا نؤمن أن الجودة الحقيقية لا تظهر في
              المظهر فقط، بل في متانة التنفيذ، ودقة التشطيب، والالتزام مع العميل من بداية
              المشروع وحتى تسليمه. وثقة عملائنا ستبقى دائماً أكبر إنجاز نفخر به.
            </p>
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

      {/* رؤيتنا ورسالتنا */}
      <section className="border-y border-bone/10 bg-walnut/40 py-20">
        <div className="container-content grid gap-7 md:grid-cols-2">
          <Reveal className="card-surface p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-honey-grad text-espresso">
              <Icon name="sparkle" size={24} />
            </span>
            <h3 className="mt-6 text-2xl text-bone">رؤيتنا</h3>
            <p className="mt-2 text-sm font-semibold text-honey">أن يصبح كل منزل أكثر تميزاً</p>
            <p className="mt-4 leading-relaxed text-bone/75">
              نسعى لأن نقدم حلولاً متكاملة في عالم المفروشات والديكور، تجمع بين التصميم
              الراقي، والخامات الممتازة، والتنفيذ الاحترافي، لنساعد عملاءنا على إنشاء
              مساحات تعكس شخصيتهم وتدوم لسنوات.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="card-surface p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-honey-grad text-espresso">
              <Icon name="shield" size={24} />
            </span>
            <h3 className="mt-6 text-2xl text-bone">رسالتنا</h3>
            <p className="mt-2 text-sm font-semibold text-honey">تجربة متكاملة من الاستشارة حتى التسليم</p>
            <p className="mt-4 leading-relaxed text-bone/75">
              أن نقدم تجربة متكاملة تبدأ بالاستشارة الصادقة، مروراً باختيار أفضل الخامات،
              وتنتهي بتنفيذ يرضينا قبل أن يرضي العميل.
            </p>
          </Reveal>
        </div>
      </section>

      {/* أرقام */}
      <section className="py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">أرقام نفتخر بها</span>
          </Reveal>
          <Reveal as="ul" variants={stagger} className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-3">
            <Reveal as="li" variants={fadeUp} className="text-center">
              <div className="font-latin text-5xl font-semibold text-honey">100%</div>
              <p className="mt-2 text-sm text-taupe">خامات مختارة بعناية</p>
            </Reveal>
            <Reveal as="li" variants={fadeUp} className="text-center">
              <div className="text-4xl font-semibold text-honey">كفالة</div>
              <p className="mt-2 text-sm text-taupe">على جميع أعمالنا</p>
            </Reveal>
            <Reveal as="li" variants={fadeUp} className="text-center">
              <div className="font-latin text-5xl font-semibold text-honey">02</div>
              <p className="mt-2 text-sm text-taupe">فرعان متخصصان: CNC ليزر والمطابخ</p>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* لماذا يختارنا عملاؤنا */}
      <section className="border-t border-bone/10 bg-walnut/40 py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">لماذا يختارنا عملاؤنا؟</span>
            <h2 className="mt-5 text-display-md text-bone">جودة نعد بها... ونلتزم بها</h2>
          </Reveal>
          <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((f) => (
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

      <section className="py-20">
        <div className="container-content text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-display-md text-bone">
              نحن لا نؤثث المنازل فقط... بل نصنع أماكن تحب أن تعيش فيها
            </h2>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey mt-8">
              ابدأ رحلتك معنا
            </a>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
