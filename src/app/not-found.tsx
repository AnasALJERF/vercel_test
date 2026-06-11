import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow">Lost a piece</span>
      <h1 className="mt-5 text-display-lg text-bone">404</h1>
      <p className="mt-3 max-w-sm text-taupe">
        This page has wandered off. Let’s get you back to the showroom.
      </p>
      <Link href="/" className="btn-honey mt-8">Back home</Link>
    </section>
  );
}
