import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import { gallery, projects, galleryScope, IMG } from "@/lib/data";
import { pageMeta, waLink } from "@/lib/seo";
import { stagger, fadeUp } from "@/lib/motion";

export const metadata = pageMeta({
  title: "أعمالنا — مشاريع نفخر بها وثقة نعتز بها",
  description:
    "معرض أعمال شهد للمفروشات: فرش منازل وفلل ومضافات، مجالس خليجية، برادي، وتجهيز محلات ومشاريع تجارية.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="أعمالنا"
        title="مشاريع نفخر بها... وثقة نعتز بها"
        subtitle="كل مشروع ننفذه هو انعكاس لاهتمامنا بالتفاصيل، وجودة الخامات، ودقة التنفيذ. استعرض مجموعة من أعمالنا التي شملت المنازل، الفلل، المضافات، المحلات التجارية، والمشاريع الخاصة."
        image={IMG.armchair}
      />

      <section className="py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">المشاريع المنجزة</span>
            <h2 className="mt-5 text-display-md text-bone">كل مشروع يحكي قصة نجاح</h2>
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
                  <p className="mt-2.5 text-sm leading-relaxed text-bone/65">{p.scope}</p>
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-bone/10 py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">معرض الصور</span>
            <h2 className="mt-5 text-display-md text-bone">شاهد أعمالنا على أرض الواقع</h2>
            <p className="mt-4 leading-relaxed text-bone/70">
              كل صورة في هذا المعرض توثق مشروعاً نفذه فريق شهد للمفروشات، لتتعرف عن قرب
              على جودة التنفيذ، ودقة التشطيب، والاهتمام بأدق التفاصيل.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {galleryScope.map((g) => (
              <span key={g} className="rounded-full border border-bone/15 px-4 py-1.5 text-xs text-bone/75">
                {g}
              </span>
            ))}
          </Reveal>

          <div className="mt-12">
            <Gallery items={gallery} />
          </div>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-walnut/40 py-20">
        <div className="container-content text-center">
          <Reveal>
            <h2 className="text-display-md text-bone">قد يكون مشروعك هو عملنا القادم</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bone/75">
              سواء كنت ترغب في تأثيث منزل جديد، أو تجديد مساحة قائمة، أو تجهيز مشروع
              تجاري، يسعد فريق شهد للمفروشات بتحويل أفكارك إلى واقع، بجودة تنفيذ واهتمام
              بالتفاصيل يليق بثقتك.
            </p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey mt-8">
              اطلب استشارة مجانية
            </a>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
