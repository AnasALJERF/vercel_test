import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FrameImage from "@/components/FrameImage";
import StatStrip from "@/components/StatStrip";
import CTA from "@/components/CTA";
import { values, timeline } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description: "The story of Shahd Furniture — two decades of handcrafted luxury furniture, our mission, values, and the workshop behind the work.",
  path: "/about",
});

const team = [
  { name: "Yousef Al-Harbi", role: "Founder & Master Craftsman", tone: ["#3A2C1E", "#7A5C3A"] as [string, string] },
  { name: "Sara Nabil", role: "Head of Design", tone: ["#241B12", "#C79A3C"] as [string, string] },
  { name: "Khalid Mansour", role: "Workshop Director", tone: ["#15100A", "#7A5C3A"] as [string, string] },
  { name: "Mona Aziz", role: "Client Projects Lead", tone: ["#3A2C1E", "#E4BC6B"] as [string, string] },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Shahd"
        title="A family of craftspeople, devoted to comfort"
        intro="What began as a single workshop is now a furniture house trusted to shape homes, villas, and hotels across the region — without ever losing the feel of something made by hand."
      />

      {/* Story */}
      <section className="container-content py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative h-[440px]">
            <FrameImage alt="The original Shahd workshop" tone={["#3A2C1E", "#C79A3C"]} label="Est. 2004" />
          </Reveal>
          <SectionHeading
            eyebrow="Our story"
            title="From one bench to a furniture house"
            intro="Shahd started in 2004 as a small atelier crafting bespoke bedrooms for a handful of families. Word travelled the way it does for honest work — quietly, and then everywhere. Two decades on, we furnish entire properties, yet every piece still passes through the same patient hands."
          />
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-walnut py-20">
        <div className="container-content grid gap-6 md:grid-cols-2">
          <Reveal className="card-surface p-9">
            <h3 className="eyebrow">Our mission</h3>
            <p className="mt-5 font-display text-2xl leading-snug text-bone">
              To craft furniture of lasting quality that makes everyday life feel considered, warm, and unmistakably yours.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="card-surface p-9">
            <h3 className="eyebrow">Our vision</h3>
            <p className="mt-5 font-display text-2xl leading-snug text-bone">
              To be the region’s most trusted name in handcrafted furniture — where heritage craft meets modern living.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-content py-20">
        <SectionHeading eyebrow="What we stand for" title="Values built into every joint" align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="card-surface p-7">
              <h3 className="font-display text-lg text-honey">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quality + stats */}
      <section className="container-content pb-20">
        <SectionHeading
          eyebrow="Manufacturing quality"
          title="Standards we don’t compromise"
          intro="Materials are selected by hand, frames are kiln-dried and stress-tested, finishes are applied in controlled conditions, and every piece is inspected before delivery."
        />
        <div className="mt-12"><StatStrip /></div>
      </section>

      {/* Team */}
      <section className="bg-walnut py-20">
        <div className="container-content">
          <SectionHeading eyebrow="The people" title="Hands behind the house" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="overflow-hidden rounded-xl2 border border-bone/8">
                  <div className="h-64"><FrameImage alt={m.name} tone={m.tone} rounded="rounded-none" /></div>
                  <div className="bg-bark p-5">
                    <p className="font-display text-lg text-bone">{m.name}</p>
                    <p className="mt-1 text-sm text-honey">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-content py-20">
        <SectionHeading eyebrow="Milestones" title="A timeline of the work" />
        <div className="mt-12 space-y-px">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr] gap-6 border-l border-bone/15 py-6 pl-8 md:grid-cols-[120px_1fr] md:gap-10">
                <div className="relative">
                  <span className="absolute -left-[2.6rem] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-honey ring-4 ring-espresso md:-left-[3.1rem]" />
                  <span className="font-display text-2xl text-honey">{t.year}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-bone">{t.title}</h3>
                  <p className="mt-2 max-w-xl text-taupe">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
