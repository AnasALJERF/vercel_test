import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { services } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services",
  description: "Interior furnishing, custom manufacturing, bedroom, living, dining and office furniture, hotel furnishing, and white-glove delivery from Shahd.",
  path: "/services",
});

const process = [
  { step: "Consult", text: "We listen to your space, taste, and timeline, then propose a direction." },
  { step: "Design", text: "Sketches, materials, and finishes are refined until the vision is exact." },
  { step: "Craft", text: "Your pieces are built and finished by hand in our own workshop." },
  { step: "Install", text: "Our team delivers, assembles, and places everything, white-glove." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything a beautiful space needs"
        intro="One house, one team, the full range — from designing a single bespoke piece to furnishing an entire hotel, and everything in between."
      />

      <section className="container-content py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-walnut py-20">
        <div className="container-content">
          <SectionHeading eyebrow="How we work" title="A calm, four-step process" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08} className="relative card-surface p-7">
                <span className="font-display text-5xl text-honey/30">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-bone">{p.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Have a project in mind?" text="Whether it’s one room or a whole property, tell us what you’re imagining and we’ll take it from there." />
    </>
  );
}
