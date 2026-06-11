import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icons";
import { SITE } from "@/lib/seo";

const cols = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About us" },
      { href: "/services", label: "Services" },
      { href: "/products", label: "Collections" },
      { href: "/quote", label: "Request a quote" },
    ],
  },
  {
    title: "Collections",
    links: [
      { href: "/products?category=Bedrooms", label: "Bedrooms" },
      { href: "/products?category=Living Rooms", label: "Living rooms" },
      { href: "/products?category=Majlis", label: "Majlis" },
      { href: "/products?category=Hotel", label: "Hotel furnishing" },
    ],
  },
];

const socials = ["Instagram", "Pinterest", "WhatsApp", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-walnut">
      <div className="container-content grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-taupe">
            A luxury furniture house crafting bespoke pieces with honest materials and lasting
            care — from a single chair to an entire hotel.
          </p>
          <p className="mt-4 font-arabic text-lg text-bone/80" dir="rtl">
            شهد للمفروشات
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-honey">{col.title}</h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-bone/75 transition-colors hover:text-honey">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-honey">Visit & contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-bone/75">
            <li className="flex items-start gap-3"><Icon name="pin" size={18} className="mt-0.5 text-honey" />{SITE.address}</li>
            <li className="flex items-center gap-3"><Icon name="phone" size={18} className="text-honey" />{SITE.phone}</li>
            <li className="flex items-center gap-3"><Icon name="mail" size={18} className="text-honey" />{SITE.email}</li>
            <li className="flex items-start gap-3"><Icon name="clock" size={18} className="mt-0.5 text-honey" />Sat–Thu, 10:00 – 22:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container-content flex flex-col items-center justify-between gap-4 py-6 text-xs text-taupe md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <ul className="flex gap-5">
            {socials.map((s) => (
              <li key={s}>
                <a href="#" className="transition-colors hover:text-honey">{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
