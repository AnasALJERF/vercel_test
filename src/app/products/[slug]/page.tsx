import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/Icons";
import { collections } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = collections.find((x) => x.slug === params.slug);
  if (!c) return pageMeta({ title: "Collection" });
  return pageMeta({ title: c.name, description: c.description, path: `/products/${c.slug}` });
}

const dimensions = [
  { part: "Bed / main piece", value: "200 × 220 cm" },
  { part: "Height", value: "120 cm" },
  { part: "Side units", value: "55 × 45 cm" },
  { part: "Recommended room", value: "16 m² or larger" },
];

const care = [
  "Dust wooden surfaces with a soft, dry cloth.",
  "Treat oiled timber with our care oil twice a year.",
  "Vacuum upholstery gently; blot spills, don’t rub.",
  "Keep out of prolonged direct sunlight to preserve tone.",
];

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) notFound();

  const related = collections.filter((c) => c.slug !== collection.slug).slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: collection.name,
    description: collection.description,
    category: collection.category,
    brand: { "@type": "Brand", name: "Shahd Furniture" },
    material: collection.materials.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      <section className="container-content pb-12 pt-32 md:pt-40">
        {/* breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-taupe">
          <Link href="/products" className="hover:text-honey">Collections</Link>
          <span>/</span>
          <span className="text-bone/70">{collection.category}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Gallery */}
          <Reveal className="h-[520px]">
            <Gallery name={collection.name} tone={collection.tone} />
          </Reveal>

          {/* Overview */}
          <Reveal delay={0.1}>
            <span className="eyebrow">{collection.category} collection</span>
            <h1 className="mt-5 text-display-md text-bone">{collection.name}</h1>
            <p className="mt-3 font-display text-xl text-honey">{collection.tagline}</p>
            <p className="mt-6 leading-relaxed text-taupe">{collection.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/quote?product=${encodeURIComponent(collection.name)}`} className="btn-honey">
                Request a quote <Icon name="arrow" size={18} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Make an inquiry
              </Link>
            </div>

            <div className="mt-8 rounded-xl2 border border-bone/10 bg-walnut p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-honey">Made to order</p>
              <p className="mt-2 text-sm text-taupe">
                Crafted to your dimensions and finish. Lead time is typically 6–10 weeks. No online
                checkout — every piece begins with a conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Details grid */}
      <section className="container-content grid gap-6 py-12 lg:grid-cols-3">
        <Reveal className="card-surface p-7">
          <h3 className="eyebrow">Materials used</h3>
          <ul className="mt-5 space-y-3">
            {collection.materials.map((m) => (
              <li key={m} className="flex items-start gap-3 text-bone/85">
                <Icon name="check" size={16} className="mt-1 shrink-0 text-honey" />{m}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06} className="card-surface p-7">
          <h3 className="eyebrow">Features</h3>
          <ul className="mt-5 space-y-3">
            {collection.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-bone/85">
                <Icon name="check" size={16} className="mt-1 shrink-0 text-honey" />{f}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="card-surface p-7">
          <h3 className="eyebrow">Dimensions</h3>
          <ul className="mt-5 space-y-3">
            {dimensions.map((d) => (
              <li key={d.part} className="flex items-center justify-between gap-3 border-b border-bone/8 pb-2 text-sm">
                <span className="text-taupe">{d.part}</span>
                <span className="text-bone/90">{d.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Philosophy + manufacturing + care */}
      <section className="bg-walnut py-20">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="eyebrow">Design philosophy</h3>
            <p className="mt-5 font-display text-2xl leading-snug text-bone">
              We design for the long life of a room — pieces that settle in, age gracefully, and feel
              more like home with every year.
            </p>
            <p className="mt-5 leading-relaxed text-taupe">
              The {collection.name} is built around restraint: clean lines, honest materials, and
              proportions that flatter both the piece and the space around it. Nothing decorative for
              its own sake — only what earns its place.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="eyebrow">Manufacturing & care</h3>
            <p className="mt-5 leading-relaxed text-taupe">
              Each piece is built and finished by a single craftsperson, then inspected before it
              leaves our workshop. To keep it at its best:
            </p>
            <ul className="mt-5 space-y-3">
              {care.map((c) => (
                <li key={c} className="flex items-start gap-3 text-bone/85">
                  <Icon name="check" size={16} className="mt-1 shrink-0 text-honey" />{c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="container-content py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-display-md text-bone">Related collections</h2>
          <Link href="/products" className="hidden text-sm font-semibold uppercase tracking-wider text-honey md:inline-flex md:items-center md:gap-2">
            View all <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((c) => (
            <Reveal key={c.slug}><ProductCard collection={c} /></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
