import Link from "next/link";
import Reveal from "./Reveal";
import { IMG } from "@/lib/data";
import { waLink } from "@/lib/seo";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.workshop} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-espresso/85" />
      </div>
      <div className="container-content text-center">
        <Reveal>
          <span className="eyebrow justify-center">نتشرف بزيارتكم</span>
          <h2 className="mt-5 text-display-md text-bone">اجعل منزلك لوحة فنية</h2>
          <p className="mx-auto mt-4 max-w-xl text-bone/75">
            تفضل بزيارة صالتنا أو راسلنا، وسيسعد كادرنا الفني بمساعدتك في اختيار
            الأنسب لذوقك ومساحتك.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey">راسلنا على واتساب</a>
            <Link href="/contact" className="btn-ghost">معلومات التواصل</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
