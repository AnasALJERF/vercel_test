import { FaWhatsapp } from "react-icons/fa6";
import { waLink } from "@/lib/seo";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      title="تواصل معنا عبر واتساب"
      className="group fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-honey-grad text-[1.7rem] text-espresso shadow-lift transition-transform duration-300 hover:-translate-y-1 sm:bottom-7 sm:end-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-honey/30 [animation-duration:2.6s]" aria-hidden="true" />
      <FaWhatsapp className="relative" aria-hidden="true" />
      <span className="pointer-events-none absolute end-full me-3 hidden whitespace-nowrap rounded-full bg-walnut/95 px-4 py-2 text-sm text-bone opacity-0 shadow-lift transition-opacity duration-300 group-hover:opacity-100 sm:block">
        تواصل عبر واتساب
      </span>
    </a>
  );
}
