import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatStrip from "@/components/StatStrip";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import FrameImage from "@/components/FrameImage";
import CTA from "@/components/CTA";
import Icon from "@/components/Icons";
import { collections, services, values } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Introduction + stats */}
      <section className="container-content py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The house of Shahd"
            title="A quiet kind of luxury, built by hand"
            intro="Shahd — meaning honey — is a furniture house devoted to craft. For two decades we have shaped solid hardwoods, natural textiles, and brushed metals into pieces that bring warmth and permanence to a room. We don’t sell online; we build relationships, and furniture made to last."
          />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-taupe">
              Every collection begins in our own workshop, where a single craftsperson sees a piece
              from raw timber to final finish. The result is furniture with the kind of integrity you
              can feel — in the weight of a drawer, the seam of an upholstered panel, the grain of a
              well-chosen board.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-honey">
              Our story <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-16">
          <StatStrip />
        </div>
      </section>

      {/* Featured collections */}
      <section className="container-content py-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured collections" title="Pieces worth gathering around" />
          <Reveal delay={0.1}>
            <Link href="/products" className="btn-ghost">View all collections</Link>
          </Reveal>
        </div>
        <Reveal as="div" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collections.slice(0, 3).map((c) => (
            <ProductCard key={c.slug} collection={c} />
          ))}
        </Reveal>
      </section>

      {/* Why choose us */}
      <section className="container-content py-24">
        <SectionHeading eyebrow="Why Shahd" title="Reasons our clients return" align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="card-surface p-7">
              <span className="font-display text-3xl text-honey/50">0{i + 1}</span>
              <h3 className="mt-4 font-display text-lg text-bone">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="container-content py-12">
        <SectionHeading
          eyebrow="What we do"
          title="From a single chair to an entire hotel"
          intro="A complete range of furnishing services, all delivered by one in-house team."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Link href="/services" className="btn-ghost">Explore all services</Link>
        </Reveal>
      </section>

      {/* Craftsmanship feature */}
      <section className="relative mt-12 overflow-hidden bg-walnut py-24">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative h-[420px]">
            <FrameImage alt="A craftsperson hand-finishing a walnut panel" tone={["#3A2C1E", "#C79A3C"]} label="In the workshop" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The craft"
              title="Made by hand, finished with patience"
              intro="We still believe the best furniture is built slowly. Joints are cut to fit, surfaces are hand-rubbed with oil, and every piece is inspected before it earns the Shahd mark."
            />
            <ul className="mt-8 space-y-4">
              {["Solid, responsibly sourced hardwoods", "Hand-cut joinery and soft-close hardware", "Natural oils, leathers, and linens", "Final inspection on every piece"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-bone/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-honey/15 text-honey">
                    <Icon name="check" size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-content py-24">
        <Testimonials />
      </section>

      {/* Quote request */}
      <section className="container-content pb-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Start a project"
            title="Request a quote"
            intro="Share a few details and our team will get back to you within one business day. No obligation — just a conversation about what you’d like to create."
          />
          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
