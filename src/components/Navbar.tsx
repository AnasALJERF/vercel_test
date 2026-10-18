"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { waHref } from "@/content/links";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/collections", label: "أقسامنا" },
  { href: "/services", label: "خدماتنا" },
  { href: "/gallery", label: "أعمالنا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar({ whatsapp }: { whatsapp?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3 shadow-lift" : "py-5"}`}>
      <nav className="container-content flex items-center justify-between gap-4">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${active ? "text-honey" : "text-bone/80 hover:text-honey"}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a href={waHref(whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-honey hidden lg:inline-flex">
          اطلب استشارة
        </a>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/gallery"
            className={`flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-bold transition-colors ${
              pathname === "/gallery" ? "border-honey bg-honey text-espresso" : "border-honey/60 bg-honey/10 text-honey"
            }`}
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            أعمالنا
          </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-bone/20 text-bone"
          aria-label="القائمة"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute inset-x-0 top-0 h-0.5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute inset-x-0 top-3 h-0.5 bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
        </div>
      </nav>

      {open && (
        <div className="container-content mt-3 lg:hidden">
          <div className="card-surface flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg px-4 py-3 text-bone/85 transition-colors hover:bg-bone/5 hover:text-honey">
                {l.label}
              </Link>
            ))}
            <a href={waHref(whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-honey mt-2">
              اطلب استشارة
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
