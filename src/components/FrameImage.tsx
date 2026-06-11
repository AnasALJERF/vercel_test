import type { CSSProperties } from "react";

interface FrameImageProps {
  /** Optional real image path under /public. When omitted, a branded placeholder renders. */
  src?: string;
  alt: string;
  tone?: [string, string];
  label?: string;
  className?: string;
  rounded?: string;
}

/**
 * A presentational image frame. Drop real photography into /public and pass `src`
 * to replace the branded gradient placeholder used throughout the showroom.
 */
export default function FrameImage({
  src,
  alt,
  tone = ["#3A2C1E", "#7A5C3A"],
  label,
  className = "",
  rounded = "rounded-xl2",
}: FrameImageProps) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${rounded} ${className}`}
      />
    );
  }

  const style: CSSProperties = {
    backgroundImage: `linear-gradient(150deg, ${tone[0]} 0%, ${tone[1]} 100%)`,
  };

  return (
    <div
      role="img"
      aria-label={alt}
      style={style}
      className={`relative flex h-full w-full items-end overflow-hidden ${rounded} ${className}`}
    >
      {/* honeycomb motif */}
      <svg
        className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-20"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path d="M50 8 L86 30 V74 L50 96 L14 74 V30 Z" stroke="#EFE8DA" strokeWidth="2" fill="none" />
        <path d="M50 26 L70 38 V66 L50 78 L30 66 V38 Z" stroke="#EFE8DA" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
      {label && (
        <span className="relative z-10 m-5 text-xs font-medium uppercase tracking-[0.28em] text-bone/85">
          {label}
        </span>
      )}
    </div>
  );
}
