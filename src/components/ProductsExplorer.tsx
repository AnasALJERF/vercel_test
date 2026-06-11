"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import Icon from "./Icons";
import { collections, categories, type Category } from "@/lib/data";

export default function ProductsExplorer({ initialCategory }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category | "All">(
    (categories as string[]).includes(initialCategory ?? "") ? (initialCategory as Category) : "All"
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return collections.filter((c) => {
      const matchCat = active === "All" || c.category === active;
      const matchQ =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
    <div>
      {/* controls */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-sm">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-taupe">
            <Icon name="layout" size={18} />
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search collections…"
            aria-label="Search collections"
            className="w-full rounded-full border border-bone/15 bg-walnut/70 py-3 pl-11 pr-4 text-bone placeholder:text-taupe outline-none transition focus:border-honey focus:ring-2 focus:ring-honey/25"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as (Category | "All")[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "border-honey bg-honey text-espresso"
                  : "border-bone/15 text-bone/75 hover:border-honey/50 hover:text-honey"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className="mt-12">
        {filtered.length === 0 ? (
          <div className="rounded-xl2 border border-bone/10 bg-walnut py-20 text-center">
            <p className="font-display text-xl text-bone">No collections match that yet.</p>
            <p className="mt-2 text-taupe">Try another search, or request a custom piece.</p>
          </div>
        ) : (
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((c) => (
                <motion.div
                  key={c.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductCard collection={c} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
