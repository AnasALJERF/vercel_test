import Link from "next/link";

export default function Logo({
  className = "",
  height = 40,
  withWordmark = true,
}: {
  className?: string;
  height?: number;
  withWordmark?: boolean;
}) {
  return (
    <Link href="/" aria-label="شهد للمفروشات — الرئيسية" className={`inline-flex items-center gap-4 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/logo-mark.png"
        alt="شعار شهد للمفروشات"
        style={{ height }}
        className="w-auto shrink-0"
      />
      {withWordmark && (
        <span className="hidden border-s border-bone/20 ps-4 text-lg font-semibold text-bone sm:inline-block">
          شهد للمفروشات
        </span>
      )}
    </Link>
  );
}
