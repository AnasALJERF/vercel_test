import { defineArrayMember, defineField, defineType } from "sanity";

/* ---------- قائمة الأيقونات المتاحة ---------- */
export const ICON_OPTIONS = [
  { title: "كنبة", value: "sofa" },
  { title: "سرير", value: "bed" },
  { title: "طاولة", value: "table" },
  { title: "برادي / تصميم", value: "layout" },
  { title: "قماش", value: "fabric" },
  { title: "خشب", value: "wood" },
  { title: "درع (كفالة)", value: "shield" },
  { title: "يد (حرفية)", value: "hand" },
  { title: "مقص (قص وحفر)", value: "scissors" },
  { title: "مبنى", value: "building" },
  { title: "مطبخ / مكتب", value: "desk" },
  { title: "مسطرة (قياس وتصميم)", value: "ruler" },
  { title: "لمعة", value: "sparkle" },
  { title: "علامة صح", value: "check" },
  { title: "مطرقة", value: "hammer" },
  { title: "شاحنة (توصيل)", value: "truck" },
];

export const iconField = (title = "الأيقونة") =>
  defineField({ name: "icon", title, type: "string", options: { list: ICON_OPTIONS }, initialValue: "sofa" });

/* ---------- صورة مع وصف ---------- */
export const imageField = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    description,
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", title: "وصف الصورة (لمحركات البحث)", type: "string" })],
  });

/* ---------- كتل مشتركة ---------- */
export const heroField = (title = "رأس الصفحة") =>
  defineField({
    name: "hero",
    title,
    type: "object",
    options: { collapsible: true, collapsed: false },
    fields: [
      defineField({ name: "eyebrow", title: "العنوان الصغير", type: "string" }),
      defineField({ name: "title", title: "العنوان الرئيسي", type: "string" }),
      defineField({ name: "subtitle", title: "النص التعريفي", type: "text", rows: 3 }),
      imageField("image", "صورة الخلفية"),
    ],
  });

export const headingField = (name: string, title: string, withText = false) =>
  defineField({
    name,
    title,
    type: "object",
    options: { collapsible: true },
    fields: [
      defineField({ name: "eyebrow", title: "العنوان الصغير", type: "string" }),
      defineField({ name: "title", title: "العنوان", type: "string" }),
      ...(withText ? [defineField({ name: "text", title: "النص", type: "text", rows: 3 })] : []),
    ],
  });

export const closingField = (title = "القسم الختامي") =>
  defineField({
    name: "closing",
    title,
    type: "object",
    options: { collapsible: true },
    fields: [
      defineField({ name: "title", title: "العنوان", type: "string" }),
      defineField({ name: "text", title: "النص", type: "text", rows: 3 }),
      defineField({ name: "button", title: "نص الزر", type: "string" }),
    ],
  });

/* ---------- عناصر القوائم (يمكن إضافتها وحذفها وترتيبها) ---------- */
export const iconCard = defineType({
  name: "iconCard",
  title: "بطاقة",
  type: "object",
  fields: [
    defineField({ name: "title", title: "العنوان", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", title: "النص", type: "text", rows: 3 }),
    iconField(),
  ],
  preview: { select: { title: "title", subtitle: "body" } },
});

export const step = defineType({
  name: "step",
  title: "مرحلة",
  type: "object",
  fields: [
    defineField({ name: "title", title: "العنوان", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", title: "النص", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "title", subtitle: "body" } },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "رأي عميل",
  type: "object",
  fields: [
    defineField({ name: "text", title: "النص", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "name", title: "الاسم أو الوصف", type: "string", initialValue: "من عملائنا" }),
  ],
  preview: { select: { title: "text", subtitle: "name" } },
});

export const highlight = defineType({
  name: "highlight",
  title: "صورة بارزة",
  type: "object",
  fields: [
    defineField({ name: "label", title: "كلمة إنجليزية صغيرة", type: "string", description: "مثال: CURTAINS" }),
    defineField({ name: "title", title: "العنوان", type: "string" }),
    defineField({ name: "line", title: "السطر التعريفي", type: "string" }),
    imageField("image", "الصورة"),
  ],
  preview: { select: { title: "title", subtitle: "line", media: "image" } },
});

export const collectionItem = defineType({
  name: "collectionItem",
  title: "قسم",
  type: "object",
  fields: [
    defineField({ name: "title", title: "اسم القسم", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "العبارة التسويقية", type: "string" }),
    defineField({ name: "description", title: "الوصف", type: "text", rows: 5 }),
    defineField({ name: "includes", title: "يشمل", type: "array", of: [defineArrayMember({ type: "string" })] }),
    imageField("image", "صورة القسم"),
    iconField(),
  ],
  preview: { select: { title: "title", subtitle: "tagline", media: "image" } },
});

export const serviceItem = defineType({
  name: "serviceItem",
  title: "خدمة",
  type: "object",
  fields: [
    defineField({ name: "title", title: "اسم الخدمة", type: "string", validation: (r) => r.required() }),
    defineField({ name: "headline", title: "العنوان الفرعي", type: "string" }),
    defineField({ name: "body", title: "الوصف", type: "text", rows: 4 }),
    defineField({ name: "points", title: "النقاط", type: "array", of: [defineArrayMember({ type: "string" })] }),
    iconField(),
  ],
  preview: { select: { title: "title", subtitle: "headline" } },
});

export const project = defineType({
  name: "project",
  title: "مشروع",
  type: "object",
  fields: [
    defineField({ name: "title", title: "اسم المشروع", type: "string", validation: (r) => r.required() }),
    defineField({ name: "scope", title: "الوصف", type: "text", rows: 3 }),
    imageField("image", "صورة المشروع"),
  ],
  preview: { select: { title: "title", subtitle: "scope", media: "image" } },
});

export const stat = defineType({
  name: "stat",
  title: "رقم",
  type: "object",
  fields: [
    defineField({ name: "value", title: "الرقم أو الكلمة", type: "string", description: "مثال: 100% أو كفالة" }),
    defineField({ name: "label", title: "الوصف", type: "string" }),
  ],
  preview: { select: { title: "value", subtitle: "label" } },
});

export const phone = defineType({
  name: "phone",
  title: "رقم هاتف",
  type: "object",
  fields: [
    defineField({ name: "display", title: "الرقم كما يظهر", type: "string", description: "مثال: 0988 729 260" }),
    defineField({ name: "tel", title: "الرقم الدولي للاتصال", type: "string", description: "مثال: +963988729260" }),
  ],
  preview: { select: { title: "display" } },
});

export const GALLERY_CATEGORIES = [
  { title: "غرف الضيوف والصالونات", value: "salons" },
  { title: "المجالس العربية", value: "majlis" },
  { title: "غرف النوم والدواليب", value: "bedrooms" },
  { title: "غرف الأطفال", value: "kids" },
  { title: "البرادي والستائر", value: "curtains" },
  { title: "الصالة والأقمشة", value: "showroom" },
  { title: "قطع وطاولات", value: "pieces" },
];
