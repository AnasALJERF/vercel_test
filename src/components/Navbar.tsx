"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { waLink } from "@/lib/seo";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/collections", label: "أقسامنا" },
  { href: "/services", label: "خدماتنا" },
  { href: "/gallery", label: "أعمالنا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
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

        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey hidden lg:inline-flex">
          اطلب استشارة
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-bone/20 text-bone lg:hidden"
          aria-label="القائمة"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute inset-x-0 top-0 h-0.5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute inset-x-0 top-3 h-0.5 bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="container-content mt-3 lg:hidden">
          <div className="card-surface flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg px-4 py-3 text-bone/85 transition-colors hover:bg-bone/5 hover:text-honey">
                {l.label}
              </Link>
            ))}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey mt-2">
              اطلب استشارة
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
