import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { SITE } from "@/lib/seo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description: "Visit the Shahd Furniture showroom in Riyadh, or reach us by phone, email, or message. Open Saturday to Thursday.",
  path: "/contact",
});

const details = [
  { icon: "phone", label: "Phone", value: SITE.phone },
  { icon: "mail", label: "Email", value: SITE.email },
  { icon: "pin", label: "Showroom", value: SITE.address },
  { icon: "clock", label: "Hours", value: "Sat – Thu, 10:00 – 22:00" },
];

const socials = ["Instagram", "Pinterest", "WhatsApp", "LinkedIn"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Come sit with us a while"
        intro="Visit the showroom to feel the materials in person, or send a message and we’ll get straight back to you."
      />

      <section className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="card-surface p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-honey/10 text-honey">
                    <Icon name={d.icon} size={20} />
                  </span>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-taupe">{d.label}</p>
                  <p className="mt-1 text-bone/90">{d.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-honey">Follow the work</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a key={s} href="#" className="rounded-full border border-bone/15 px-4 py-2 text-sm text-bone/80 transition hover:border-honey hover:text-honey">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="mt-12 overflow-hidden rounded-xl2 border border-bone/10">
          <iframe
            title="Shahd Furniture showroom location"
            src="https://www.google.com/maps?q=Riyadh%20King%20Fahd%20Road&output=embed"
            className="h-[420px] w-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
