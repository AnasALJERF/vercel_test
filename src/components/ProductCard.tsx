import Link from "next/link";
import FrameImage from "./FrameImage";
import Icon from "./Icons";
import type { Collection } from "@/lib/data";

export default function ProductCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/products/${collection.slug}`}
      className="group relative block overflow-hidden rounded-xl2 border border-bone/8 bg-walnut"
    >
      <div className="relative h-72 overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          <FrameImage alt={collection.name} tone={collection.tone} rounded="rounded-none" />
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-bone/20 bg-espresso/50 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-bone/85 backdrop-blur-sm">
          {collection.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-bone transition-colors group-hover:text-honey">
          {collection.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-taupe">{collection.tagline}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-honey">
          View collection
          <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
