import Link from "next/link";
import Reveal from "./Reveal";
import { getDoc, imgSrc } from "@/content/get";
import { defaults } from "@/content/defaults";
import { waHref } from "@/content/links";

// الدعوة للتواصل — نصوصها من «الصفحة الرئيسية» في لوحة التحكم
export default async function CTA() {
  const [home, settings] = await Promise.all([getDoc("home"), getDoc("settings")]);
  const cta = home.cta ?? defaults.home.cta;
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgSrc(cta.image, { w: 1800 }, defaults.home.cta.image)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-espresso/85" />
      </div>
      <div className="container-content text-center">
        <Reveal>
          {cta.eyebrow && <span className="eyebrow justify-center">{cta.eyebrow}</span>}
          {cta.title && <h2 className="mt-5 text-display-md text-bone">{cta.title}</h2>}
          {cta.text && <p className="mx-auto mt-4 max-w-xl text-bone/75">{cta.text}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={waHref(settings.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-honey">اطلب استشارة مجانية</a>
            <Link href="/contact" className="btn-ghost">معلومات التواصل</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
