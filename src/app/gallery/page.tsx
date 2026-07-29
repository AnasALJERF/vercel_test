import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import { gallery, projects, IMG } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "أعمالنا — معرض صور المفروشات والمشاريع المنجزة",
  description: "معرض أعمال صالة شهد للمفروشات: فرش منازل وفلل ومضافات، جلسات خليجية، برادي، وتجهيز محلات تجارية.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="أعمالنا"
        title="أعمالنا لوحة فنية"
        subtitle="مشاريع نفذناها بأيد ماهرة وذوق رفيع — من فرش المنازل الكاملة إلى المضافات والمحلات."
        image={IMG.armchair}
      />

      <section className="py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">مشاريع منجزة</span>
            <h2 className="mt-5 text-display-md text-bone">ثقة تترجم إلى أعمال</h2>
          </Reveal>

          <Reveal as="ul" variants={stagger} className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Reveal as="li" key={p.title} variants={fadeUp} className="card-surface overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-bone">{p.title}</h3>
                  <p className="mt-2 text-sm text-bone/65">{p.scope}</p>
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10 py-20">
        <div className="container-content">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center">معرض الصور</span>
            <h2 className="mt-5 text-display-md text-bone">من أعمالنا</h2>
          </Reveal>
          <Gallery items={gallery} />
        </div>
      </section>

      <CTA />
    </>
  );
}
