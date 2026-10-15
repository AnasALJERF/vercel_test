import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { defaults } from "@/content/defaults";

export default function NotFound() {
  const settings = defaults.settings;
  return (
    <>
      <Navbar whatsapp={settings.whatsapp} />
      <main>
        <section className="flex min-h-[80vh] items-center pt-24">
          <div className="container-content text-center">
            <div className="font-latin text-7xl font-semibold text-honey/70">404</div>
            <h1 className="mt-4 text-display-md text-bone">يبدو أنك وصلت إلى صفحة غير موجودة</h1>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-bone/70">عذراً، الصفحة التي تبحث عنها غير متوفرة أو ربما تم نقلها إلى مكان آخر. يمكنك العودة إلى الصفحة الرئيسية أو متابعة تصفح موقعنا لاكتشاف خدماتنا وأعمالنا.</p>
            <Link href="/" className="btn-honey mt-8">العودة إلى الصفحة الرئيسية</Link>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
    </>
  );
}
