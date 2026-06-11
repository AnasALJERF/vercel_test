import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  /** force a single ink color (e.g. footer) */
  mono?: boolean;
}

export default function Logo({ variant = "full", className = "", mono = false }: LogoProps) {
  const stroke = mono ? "currentColor" : "url(#logoHoney)";
  const fill = mono ? "currentColor" : "url(#logoHoney)";

  return (
    <Link href="/" aria-label="Shahd Furniture — home" className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="42" height="42" viewBox="0 0 100 100" fill="none" aria-hidden="true" className="shrink-0">
        {!mono && (
          <defs>
            <linearGradient id="logoHoney" x1="15" y1="8" x2="86" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E4BC6B" />
              <stop offset="0.5" stopColor="#C79A3C" />
              <stop offset="1" stopColor="#7A5C3A" />
            </linearGradient>
          </defs>
        )}
        <path d="M50 8 L86 30 V74 L50 96 L14 74 V30 Z" stroke={stroke} strokeWidth="4.5" fill="none" strokeLinejoin="round" />
        <path d="M50 26 L70 38 V66 L50 78 L30 66 V38 Z" stroke={stroke} strokeWidth="2" opacity="0.45" fill="none" strokeLinejoin="round" />
        <path d="M50 36 C58 50 63 58 63 65 a13 13 0 1 1 -26 0 c0 -7 5 -15 13 -29 Z" fill={fill} />
      </svg>
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-semibold tracking-wide text-bone">SHAHD</span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.42em] text-honey">Furniture</span>
        </span>
      )}
    </Link>
  );
}
