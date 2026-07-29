import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-content text-center">
        <div className="font-latin text-7xl font-semibold text-honey/70">404</div>
        <h1 className="mt-4 text-display-md text-bone">الصفحة غير موجودة</h1>
        <p className="mt-3 text-bone/70">عذرا، لم نتمكن من العثور على ما تبحث عنه.</p>
        <Link href="/" className="btn-honey mt-8">العودة للرئيسية</Link>
      </div>
    </section>
  );
}
