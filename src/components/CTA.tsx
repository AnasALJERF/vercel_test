import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icons";
import { scaleIn } from "@/lib/motion";

interface CTAProps {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}

export default function CTA({
  title = "Let’s craft something lasting",
  text = "Tell us about your space. Our team will help you shape it — from a single piece to an entire home.",
  primary = { href: "/quote", label: "Request a quote" },
  secondary = { href: "/contact", label: "Talk to us" },
}: CTAProps) {
  return (
    <section className="container-content py-24">
      <Reveal variants={scaleIn}>
        <div className="relative overflow-hidden rounded-[2rem] border border-honey/25 bg-walnut px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-walnut-veil" />
          <svg className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-10" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M50 8 L86 30 V74 L50 96 L14 74 V30 Z" stroke="#C79A3C" strokeWidth="1.5" fill="none" />
            <path d="M50 26 L70 38 V66 L50 78 L30 66 V38 Z" stroke="#C79A3C" strokeWidth="1" fill="none" />
          </svg>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-display-md text-bone">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-taupe">{text}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href={primary.href} className="btn-honey">
                {primary.label} <Icon name="arrow" size={18} />
              </Link>
              <Link href={secondary.href} className="btn-ghost">
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
