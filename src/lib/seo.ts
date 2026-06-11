import type { Metadata } from "next";

export const SITE = {
  name: "Shahd Furniture",
  nameAr: "شهد للمفروشات",
  url: "https://shahd-furniture.example.com",
  description:
    "Shahd Furniture — a luxury furniture showroom crafting bespoke bedrooms, living rooms, majlis, and hospitality furniture with honest materials and lasting craftsmanship.",
  locale: "en",
  phone: "+966 50 000 0000",
  email: "hello@shahd-furniture.com",
  address: "King Fahd Road, Riyadh, Saudi Arabia",
};

export function pageMeta(opts: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = `${opts.title} — ${SITE.name}`;
  const description = opts.description ?? SITE.description;
  const url = `${SITE.url}${opts.path ?? ""}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: SITE.name,
  alternateName: SITE.nameAr,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "King Fahd Road",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  openingHours: "Sa-Th 10:00-22:00",
  priceRange: "$$$",
};
