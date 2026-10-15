import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { waHref } from "@/content/links";

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
}

export default function SocialIcons({ links, className = "" }: { links: SocialLinks; className?: string }) {
  const items = [
    { id: "facebook", label: "فيسبوك", href: links.facebook, I: FaFacebookF },
    { id: "instagram", label: "انستغرام", href: links.instagram, I: FaInstagram },
    { id: "whatsapp", label: "واتساب", href: links.whatsapp ? waHref(links.whatsapp) : "", I: FaWhatsapp },
  ].filter((s) => s.href);

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ id, label, href, I }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} — شهد للمفروشات`}
            title={label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-honey/40 text-[1.05rem] text-honey transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-honey-grad hover:text-espresso hover:shadow-glow"
          >
            <I aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
