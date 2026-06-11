import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-5 ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <span className={`eyebrow ${align === "center" ? "mx-auto" : ""}`}>{eyebrow}</span>
      <h2 className="text-display-md text-bone">{title}</h2>
      {intro && <p className="text-base leading-relaxed text-taupe md:text-lg">{intro}</p>}
    </Reveal>
  );
}
