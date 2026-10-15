import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icons";
import SocialIcons from "./SocialIcons";
import type { Defaults } from "@/content/defaults";

export default function Footer({ settings }: { settings: Partial<Defaults["settings"]> }) {
  const phones = settings.phones ?? [];
  return (
    <footer className="border-t border-bone/10 bg-walnut/60">
      <div className="container-content py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            {settings.footerAbout && <p className="mt-5 max-w-sm text-sm leading-relaxed text-taupe">{settings.footerAbout}</p>}
            <p className="mt-7 text-xs font-semibold text-bone/80">تابعنا وتواصل معنا</p>
            <SocialIcons className="mt-3" links={settings} />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-bone">روابط</h2>
            <ul className="mt-4 space-y-2 text-sm text-taupe">
              <li><Link href="/" className="transition-colors hover:text-honey">الرئيسية</Link></li>
              <li><Link href="/collections" className="transition-colors hover:text-honey">أقسامنا</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-honey">خدماتنا</Link></li>
              <li><Link href="/gallery" className="transition-colors hover:text-honey">أعمالنا</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-honey">من نحن</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-honey">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-bone">تواصل</h2>
            <ul className="mt-4 space-y-3 text-sm text-taupe">
              {(settings.addressLine1 || settings.addressLine2) && (
                <li className="flex items-start gap-3">
                  <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-honey" />
                  <span>
                    {settings.addressLine1}
                    {settings.addressLine2 && <><br />{settings.addressLine2}</>}
                  </span>
                </li>
              )}
              {phones.slice(0, 2).map((p) => (
                <li key={p.tel || p.display} className="flex items-center gap-3">
                  <Icon name="phone" size={18} className="shrink-0 text-honey" />
                  <a href={`tel:${p.tel}`} dir="ltr" className="font-latin transition-colors hover:text-honey">{p.display}</a>
                </li>
              ))}
              {settings.hours && (
                <li className="flex items-center gap-3">
                  <Icon name="clock" size={18} className="shrink-0 text-honey" />
                  <span>{settings.hours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />
        <p className="text-center text-xs text-taupe">
          © {new Date().getFullYear()} {settings.siteName || "شهد للمفروشات"}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
