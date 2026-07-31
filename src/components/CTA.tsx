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
          <span className="eyebrow justify-center">ابدأ رحلتك معنا</span>
          <h2 className="mt-5 text-display-md text-bone">لنصمم معاً منزلاً يعكس ذوقك</h2>
          <p className="mx-auto mt-4 max-w-xl text-bone/75">
            سواء كنت تؤثث منزلاً جديداً أو ترغب في تجديد مساحة تحبها، يسعد فريق شهد
            للمفروشات بمساعدتك في اختيار الحلول التي تناسب ذوقك وميزانيتك، مع تنفيذ
            احترافي يهتم بكل تفصيلة.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-honey">اطلب استشارة مجانية</a>
            <Link href="/contact" className="btn-ghost">معلومات التواصل</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
