import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-content text-center">
        <div className="font-latin text-7xl font-semibold text-honey/70">404</div>
        <h1 className="mt-4 text-display-md text-bone">يبدو أنك وصلت إلى صفحة غير موجودة</h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-bone/70">عذراً، الصفحة التي تبحث عنها غير متوفرة أو ربما تم نقلها إلى مكان آخر. يمكنك العودة إلى الصفحة الرئيسية أو متابعة تصفح موقعنا لاكتشاف خدماتنا وأعمالنا.</p>
        <Link href="/" className="btn-honey mt-8">العودة إلى الصفحة الرئيسية</Link>
      </div>
    </section>
  );
}
