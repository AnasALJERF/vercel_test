import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icons";
import { SITE, waLink } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-walnut/60">
      <div className="container-content py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-taupe">
              {SITE.footerAbout}
            </p>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6 text-xs">
              صفحتنا على فيسبوك
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-bone">روابط</h4>
            <ul className="mt-4 space-y-2 text-sm text-taupe">
              <li><Link href="/collections" className="transition-colors hover:text-honey">أقسامنا</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-honey">خدماتنا</Link></li>
              <li><Link href="/gallery" className="transition-colors hover:text-honey">أعمالنا</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-honey">من نحن</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-honey">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-bone">تواصل</h4>
            <ul className="mt-4 space-y-3 text-sm text-taupe">
              <li className="flex items-start gap-3">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-honey" />
                <span>{SITE.addressLine1}<br />{SITE.addressLine2}</span>
              </li>
              {SITE.phones.slice(0, 2).map((p) => (
                <li key={p.tel} className="flex items-center gap-3">
                  <Icon name="phone" size={18} className="shrink-0 text-honey" />
                  <a href={`tel:${p.tel}`} dir="ltr" className="font-latin transition-colors hover:text-honey">{p.display}</a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Icon name="clock" size={18} className="shrink-0 text-honey" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-5 text-xs">راسلنا عبر واتساب</a>
          </div>
        </div>

        <div className="hairline my-10" />
        <p className="text-center text-xs text-taupe">
          © {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
