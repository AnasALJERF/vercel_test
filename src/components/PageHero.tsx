import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pb-14 pt-36">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/80 to-espresso/40" />
      </div>
      <div className="container-content relative z-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-display-md text-bone">{title}</h1>
          {subtitle && <p className="mt-4 max-w-xl leading-relaxed text-bone/75">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
