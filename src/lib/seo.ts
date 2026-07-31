import type { Metadata } from "next";

// بيانات الصالة — مستخرجة من منشورات الصفحة الرسمية.
export const SITE = {
  name: "شهد للمفروشات",
  fullName: "صالة شهد للمفروشات",
  nameEn: "Shahd Furniture",
  tagline: "حيث تلتقي الفخامة بالجودة",
  footerAbout:
    "نقدم حلولاً متكاملة في عالم المفروشات والديكور، تشمل المجالس العربية والخليجية، غرف الضيوف، غرف النوم، غرف السفرة، البرادي، والأقمشة الفاخرة، مع اهتمام بالتفاصيل وجودة التنفيذ التي تستحقها.",
  manager: "أحمد الجرف — أبو هادي",
  url: "https://shahd-furniture.vercel.app",
  description:
    "شهد للمفروشات — حلول متكاملة في عالم المفروشات والديكور: مجالس عربية وخليجية، غرف ضيوف وصالونات، غرف نوم وسفرة، برادي وأقمشة فاخرة. سوريا — حماة — سلمية.",
  city: "سلمية",
  country: "سوريا",
  governorate: "حماة",
  addressLine1: "سوريا — حماة — سلمية",
  addressLine2: "شارع حمص، غرب تقاطع الصحن الذهبي بـ 50 متراً",
  addressLine3: "(غرب مطعم ريم البوادي بـ 20 متراً)",
  address: "سوريا — حماة — سلمية، شارع حمص، غرب تقاطع الصحن الذهبي بـ 50 متراً",
  hours: "يومياً من 10:00 صباحاً حتى 10:00 مساءً",
  facebook: "https://www.facebook.com/profile.php?id=100064206214776",
  phones: [
    { display: "0988 729 260", tel: "+963988729260" },
    { display: "0957 917 237", tel: "+963957917237" },
    { display: "884 0304", tel: "+9638840304" },
    { display: "884 4467", tel: "+9638844467" },
  ],
  whatsapp: "963988729260",
};

export const waLink = (msg = "السلام عليكم، أرغب بالاستفسار عن المفروشات") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export function pageMeta(opts: { title: string; description?: string; path?: string }): Metadata {
  const title = opts.title;
  const description = opts.description ?? SITE.description;
  const url = `${SITE.url}${opts.path ?? ""}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE.name, type: "website", locale: "ar_SY" },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: SITE.name,
  alternateName: SITE.nameEn,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phones[0].tel,
  sameAs: [SITE.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: "شارع حمص، غرب تقاطع الصحن الذهبي",
    addressLocality: "سلمية",
    addressRegion: "حماة",
    addressCountry: "SY",
  },
  openingHours: "Mo-Su 10:00-22:00",
  priceRange: "$$$",
};
