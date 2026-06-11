import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Request a Quote",
  description: "Request a no-obligation quotation from Shahd Furniture. Share your project details and our team will respond within one business day.",
  path: "/quote",
});

const assurances = [
  { icon: "clock", title: "One-day response", text: "We reply to every request within one business day." },
  { icon: "check", title: "No obligation", text: "A quote is just a conversation — there’s never any pressure." },
  { icon: "hammer", title: "Made to order", text: "Every piece is tailored to your space, materials, and finish." },
];

export default function QuotePage({ searchParams }: { searchParams: { product?: string } }) {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Let’s price your project, properly"
        intro="Tell us what you have in mind. The more detail you share, the more precise our team can be — and there’s no obligation to proceed."
      />
      <section className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-6">
            {assurances.map((a) => (
              <div key={a.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-honey/10 text-honey">
                  <Icon name={a.icon} size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg text-bone">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-taupe">{a.text}</p>
                </div>
              </div>
            ))}
            <div className="hairline" />
            <p className="text-sm leading-relaxed text-taupe">
              Prefer to talk? Call <span className="text-honey">+966 50 000 0000</span> or visit our
              showroom on King Fahd Road, Riyadh — open Saturday to Thursday, 10:00–22:00.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <QuoteForm initialProduct={searchParams.product ?? ""} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
