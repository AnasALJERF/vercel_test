import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { socials } from "@/lib/seo";

const ICONS = { facebook: FaFacebookF, instagram: FaInstagram, whatsapp: FaWhatsapp } as const;

export default function SocialIcons({ className = "", size = "md" }: { className?: string; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-12 w-12 text-[1.2rem]" : "h-11 w-11 text-[1.05rem]";
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials().map((s) => {
        const I = ICONS[s.id as keyof typeof ICONS];
        return (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} — شهد للمفروشات`}
              title={s.label}
              className={`flex ${box} items-center justify-center rounded-full border border-honey/40 text-honey transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-honey-grad hover:text-espresso hover:shadow-glow`}
            >
              <I aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
