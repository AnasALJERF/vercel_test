import PageHero from "@/components/PageHero";
import ProductsExplorer from "@/components/ProductsExplorer";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Collections",
  description: "Browse Shahd's furniture collections — luxury bedrooms, living rooms, dining, majlis, office, and hotel furnishing. No prices, no checkout — request a quote.",
  path: "/products",
});

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="A catalogue made to be requested, not bought"
        intro="Browse our collections by category. We don’t list prices or sell online — each piece is made to order. When something speaks to you, request a quote and we’ll take it from there."
      />
      <section className="container-content py-16">
        <ProductsExplorer initialCategory={searchParams.category} />
      </section>
      <CTA />
    </>
  );
}
