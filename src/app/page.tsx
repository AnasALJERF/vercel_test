import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import CTA from "@/components/CTA";
import { collections, features, steps, testimonials, IMG } from "@/lib/data";
import { SITE, waLink } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[94vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.heroSofa} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-espresso via-espresso/85 to-espresso/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/50" />
        </div>

        <div className="container-content relative z-10 pt-24">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">فن الفرش الفاخر</span>
            <h1 className="mt-6 text-display-lg text-bone">
              عنوانك للفخامة
              <br />
              <span className="bg-honey-grad bg-clip-text text-transparent">والرقي</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">
              في صالة شهد للمفروشات الراقية، تجتمع الخامة الفاخرة باليد الماهرة —
              مجالس خليجية، صالونات، غرف نوم وسفرة، وبرادي بأنواعها. أعمالنا لوحة
              فنية تزين منازلكم.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey">تواصل معنا</a>
              <Link href="/collections" className="btn-ghost">تصفح أقسامنا</Link>
            </div>
            <p className="mt-8 text-sm text-taupe">بإدارة: {SITE.manager}</p>
          </Reveal>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-b border-bone/10 bg-walnut/40 py-14">
        <div className="container-content">
          <Reveal as="ul" variants={stagger} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Reveal as="li" key={f.title} variants={fadeUp} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bone/5 text-honey">
                  <Icon name={f.icon} size={22} />
                </span>
                <div>
                  <h3 className="text-base text-bone">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bone/65">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-walnut-veil py-24 md:py-28">
        <div className="container-content grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">من نحن</span>
            <h2 className="mt-5 text-display-md text-bone">هل تريد منزلك لوحة فنية؟</h2>
            <p className="mt-6 leading-loose text-bone/75">
              صالة شهد للمفروشات الراقية بإدارة {SITE.manager} — نقدم لك مجموعة من
              المفروشات الفاخرة بأقمشة مميزة وعصرية، لتضفي لمسة من الفخامة على كل
              زاوية في منزلك.
            </p>
            <p className="mt-4 leading-loose text-bone/75">
              نعمل بكادر فني محترف يقدم لك الاستشارة التي تحتاجها، ونلتزم بخشب
              نوع أول وإسفنج إكسترا مكفول ومخامل أجنبية مستوردة — لأن الجودة عندنا
              ليست وعدا تسويقيا، بل تفصيل نراه في كل قطعة.
            </p>
            <Link href="/about" className="btn-ghost mt-8">تعرف علينا أكثر</Link>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.majlis} alt="جلسة خليجية" className="aspect-[3/4] w-full rounded-xl2 border border-bone/10 object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.velvet} alt="مخمل فاخر" className="mt-8 aspect-[3/4] w-full rounded-xl2 border border-bone/10 object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Editorial showcase */}
      <section className="pb-4 pt-20">
        <div className="container-content">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <Reveal className="md:col-span-7">
              <div className="relative h-full overflow-hidden rounded-xl2 border border-bone/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.curtainFloral} alt="برادي وستائر" className="h-full min-h-[280px] w-full object-cover md:min-h-[420px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
                <div className="absolute bottom-6 start-7">
                  <p className="num text-xs tracking-[0.3em] text-honey">CURTAINS</p>
                  <h3 className="mt-2 text-2xl text-bone">برادي بكل الأنواع</h3>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 md:col-span-5 md:gap-5">
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-xl2 border border-bone/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG.bedroom} alt="غرف نوم" className="h-[200px] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 to-transparent" />
                  <div className="absolute bottom-5 start-6">
                    <p className="num text-xs tracking-[0.3em] text-honey">BEDROOMS</p>
                    <h3 className="mt-1 text-xl text-bone">غرف نوم</h3>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="relative overflow-hidden rounded-xl2 border border-bone/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG.velvet} alt="أقمشة مخمل" className="h-[200px] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 to-transparent" />
                  <div className="absolute bottom-5 start-6">
                    <p className="num text-xs tracking-[0.3em] text-honey">FABRICS</p>
                    <h3 className="mt-1 text-xl text-bone">مخمل مستورد</h3>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 md:py-28">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">أقسامنا</span>
            <h2 className="mt-5 text-display-md text-bone">كل ما يزين منزلك</h2>
            <p className="mt-4 text-bone/70">تشكيلة تجمع الأصالة والحداثة، بخامات مختارة وتنفيذ متقن.</p>
          </Reveal>

          <Reveal as="ul" variants={stagger} className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((c) => (
              <Reveal as="li" key={c.slug} variants={fadeUp}>
                <Link href={`/collections#${c.slug}`} className="group block card-surface overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/30 to-transparent" />
                    <span className="absolute bottom-4 start-5 flex h-11 w-11 items-center justify-center rounded-full bg-honey-grad text-espresso">
                      <Icon name={c.icon} size={22} />
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-honey">{c.tagline}</p>
                    <h3 className="mt-2 text-xl text-bone">{c.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-bone/65">{c.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="border-y border-bone/10 bg-walnut/40 py-24">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">كيف نعمل</span>
            <h2 className="mt-5 text-display-md text-bone">من الفكرة إلى التسليم</h2>
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

      {/* Testimonials */}
      <section className="py-24">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">آراء عملائنا</span>
            <h2 className="mt-5 text-display-md text-bone">ثقة نعتز بها</h2>
          </Reveal>
          <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={i} variants={fadeUp} className="card-surface p-8">
                <Icon name="quote" size={28} className="text-honey/70" />
                <p className="mt-4 leading-relaxed text-bone/85">{t.text}</p>
                <p className="mt-5 text-sm text-taupe">— {t.name}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Brand band */}
      <section className="border-y border-bone/10 bg-walnut/50 py-20">
        <div className="container-content flex flex-col items-center text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/logo-mark.png"
              alt="شعار شهد للمفروشات"
              className="mx-auto h-20 w-auto md:h-28"
            />
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-bone/75">
              {SITE.tagline} — نصنع لبيتك تفاصيل تبقى.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
