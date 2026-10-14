import type { Metadata } from "next";

/* =====================================================================
   بيانات الصالة — المكان الوحيد الذي تعدّل فيه معلومات النشاط
   ===================================================================== */
export const SITE = {
  name: "شهد للمفروشات",
  fullName: "صالة شهد للمفروشات",
  nameEn: "Shahed Furniture",
  tagline: "حيث تلتقي الفخامة بالجودة",
  footerAbout:
    "صالة شهد للمفروشات في سلمية — نقدم حلولاً متكاملة في عالم المفروشات والديكور، تشمل المجالس العربية والخليجية، غرف الضيوف، غرف النوم، غرف السفرة، البرادي، والأقمشة الفاخرة، مع اهتمام بالتفاصيل وجودة التنفيذ التي تستحقها.",
  manager: "أحمد الجرف — أبو هادي",

  // ⚠️ عدّله إلى رابط موقعك الفعلي على Vercel (أو الدومين الخاص لاحقاً)
  url: "https://shahd-furniture.vercel.app",

  description:
    "صالة شهد للمفروشات في سلمية، حماة: مجالس عربية وخليجية، غرف ضيوف وصالونات، غرف نوم وسفرة، برادي وستائر، وأقمشة مفروشات مستوردة. تفصيل حسب الطلب مع كفالة. زورونا في شارع حمص، غرب دوار المطاعم.",

  // العنوان — مرتب من العام إلى الخاص
  country: "سوريا",
  governorate: "حماة",
  city: "سلمية",
  addressLine1: "سوريا — حماة — سلمية",
  addressLine2: "شارع حمص، غرب دوار المطاعم بـ 50 متراً",
  addressLine3: "(غرب مطعم ريم البوادي بـ 20 متراً)",
  address: "سوريا — حماة — سلمية، شارع حمص، غرب دوار المطاعم بـ 50 متراً",
  streetAddress: "شارع حمص، غرب دوار المطاعم بـ 50 متراً",

  // ⚠️ موقع الصالة على الخريطة: ضع الإحداثيات الدقيقة هنا (من خرائط جوجل: اضغط مطولاً على الصالة ← انسخ الرقمين)
  geo: { lat: 35.0080653, lng: 37.0532363 } as null | { lat: number; lng: number },
  // خريطة جوجل المضمّنة لصالة شهد للمفروشات (من «مشاركة ← تضمين خريطة»)
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204.24660397614653!2d37.053236293783016!3d35.00806527967319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152359216bfdd1f9%3A0xa75f523c9d5d04f1!2z2LXYp9mE2Kkg2LTZh9ivINmE2YTZhdmB2LHZiNi02KfYqg!5e0!3m2!1sar!2sus!4v1792009201251!5m2!1sar!2sus",
  // اختياري: رابط الصالة في خرائط جوجل (يظهر زر «افتح في خرائط جوجل»)
  mapsUrl: "https://www.google.com/maps?cid=12060448747413112049",

  hours: "يومياً من 10:00 صباحاً حتى 10:00 مساءً",
  openingHoursSchema: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "22:00" },

  // الأرقام — الأرضيان بمفتاح حماة 033
  phones: [
    { display: "0988 729 260", tel: "+963988729260" },
    { display: "0957 917 237", tel: "+963957917237" },
    { display: "033 884 0304", tel: "+963338840304" },
    { display: "033 884 4467", tel: "+963338844467" },
  ],
  whatsapp: "963988729260",

  // روابط التواصل الاجتماعي — ضع رابط انستغرام هنا وسيظهر تلقائياً في الفوتر وصفحة التواصل
  facebook: "https://www.facebook.com/profile.php?id=100064206214776",
  instagram: "https://www.instagram.com/shahd_furniture_company/",

  // ⚠️ بعد إضافة الموقع إلى Google Search Console ضع رمز التحقق هنا
  googleVerification: "",
};

export const waLink = (msg = "السلام عليكم، أرغب بالاستفسار عن المفروشات") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const socials = () =>
  [
    { id: "facebook", label: "فيسبوك", href: SITE.facebook },
    { id: "instagram", label: "انستغرام", href: SITE.instagram },
    { id: "whatsapp", label: "واتساب", href: waLink() },
  ].filter((s) => s.href);

export const mapEmbedUrl = () =>
  SITE.mapEmbed ||
  (SITE.geo
    ? `https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&z=17&hl=ar&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent("سلمية، حماة، سوريا")}&z=14&hl=ar&output=embed`);

export const mapOpenUrl = () =>
  SITE.mapsUrl ||
  (SITE.geo ? `https://www.google.com/maps/search/?api=1&query=${SITE.geo.lat},${SITE.geo.lng}` : "");

/* =====================================================================
   SEO
   ===================================================================== */
export const KEYWORDS = [
  "شهد للمفروشات",
  "مفروشات شهد",
  "صالة شهد للمفروشات",
  "مفروشات سلمية",
  "مفروشات في سلمية",
  "معرض مفروشات سلمية",
  "مفروشات حماة",
  "مجالس عربية سلمية",
  "جلسات خليجية",
  "غرف نوم سلمية",
  "غرف ضيوف وصالونات",
  "برادي سلمية",
  "ستائر",
  "أقمشة مفروشات",
  "تنجيد",
  "Shahed Furniture",
  "Salamiyah furniture",
];

export const OG_IMAGE = { url: "/og.jpg", width: 1200, height: 630, alt: "شهد للمفروشات — سلمية" };

export function pageMeta(opts: { title: string; description?: string; path?: string }): Metadata {
  const description = opts.description ?? SITE.description;
  const path = opts.path ?? "/";
  return {
    title: opts.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${opts.title} | ${SITE.name}`,
      description,
      url: path,
      siteName: SITE.name,
      type: "website",
      locale: "ar_SY",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: `${opts.title} | ${SITE.name}`, description, images: [OG_IMAGE.url] },
  };
}

/* ---------- Structured data (JSON-LD) ---------- */
const abs = (p: string) => `${SITE.url}${p}`;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "@id": abs("/#store"),
    name: SITE.fullName,
    alternateName: [SITE.name, "مفروشات شهد", SITE.nameEn, "Shahed Luxury Furniture"],
    description: SITE.description,
    url: SITE.url,
    logo: abs("/logos/logo-square.jpg"),
    image: [abs("/og.jpg"), abs("/photos/site/hero-contact.webp"), abs("/photos/site/collection-salons.webp")],
    telephone: SITE.phones[0].tel,
    contactPoint: SITE.phones.map((p) => ({ "@type": "ContactPoint", telephone: p.tel, contactType: "customer service", areaServed: "SY", availableLanguage: "ar" })),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.streetAddress,
      addressLocality: "سلمية",
      addressRegion: "حماة",
      addressCountry: "SY",
    },
    ...(SITE.geo ? { geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng } } : {}),
    ...(mapOpenUrl() ? { hasMap: mapOpenUrl() } : {}),
    areaServed: [
      { "@type": "City", name: "سلمية" },
      { "@type": "AdministrativeArea", name: "محافظة حماة" },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: SITE.openingHoursSchema.days, opens: SITE.openingHoursSchema.opens, closes: SITE.openingHoursSchema.closes },
    ],
    priceRange: "$$",
    currenciesAccepted: "SYP",
    sameAs: [SITE.facebook, SITE.instagram].filter((u) => u && !/instagram\.com\/?$/.test(u)),
    makesOffer: [
      "مجالس عربية وخليجية",
      "غرف ضيوف وصالونات",
      "غرف نوم وغرف أطفال",
      "غرف سفرة وطاولات",
      "برادي وستائر",
      "أقمشة مفروشات",
      "قص وحفر CNC ليزر",
      "مطابخ وأبواب",
    ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: SITE.url,
    name: SITE.name,
    alternateName: ["مفروشات شهد", SITE.nameEn],
    inLanguage: "ar",
    publisher: { "@id": abs("/#store") },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "الرئيسية", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
