import { defineArrayMember, defineField, defineType } from "sanity";
import {
  GALLERY_CATEGORIES,
  closingField,
  headingField,
  heroField,
  imageField,
} from "./shared";

/* =========================== الإعدادات العامة =========================== */
export const settings = defineType({
  name: "settings",
  title: "معلومات الصالة",
  type: "document",
  groups: [
    { name: "main", title: "الأساسية", default: true },
    { name: "contact", title: "التواصل والعنوان" },
    { name: "social", title: "التواصل الاجتماعي والخريطة" },
  ],
  fields: [
    defineField({ name: "siteName", title: "اسم الصالة", type: "string", group: "main" }),
    defineField({ name: "tagline", title: "الشعار التسويقي", type: "string", group: "main" }),
    defineField({ name: "manager", title: "الإدارة", type: "string", group: "main" }),
    defineField({ name: "footerAbout", title: "نص التعريف في أسفل الموقع", type: "text", rows: 4, group: "main" }),

    defineField({ name: "addressLine1", title: "العنوان — السطر الأول", type: "string", group: "contact", description: "مثال: سوريا — حماة — سلمية" }),
    defineField({ name: "addressLine2", title: "العنوان — السطر الثاني", type: "string", group: "contact" }),
    defineField({ name: "addressLine3", title: "العنوان — علامة مميزة", type: "string", group: "contact" }),
    defineField({ name: "hours", title: "أوقات الدوام", type: "string", group: "contact" }),
    defineField({ name: "phones", title: "أرقام الهاتف", type: "array", of: [defineArrayMember({ type: "phone" })], group: "contact" }),
    defineField({ name: "whatsapp", title: "رقم واتساب (دولي بدون +)", type: "string", description: "مثال: 963988729260", group: "contact" }),

    defineField({ name: "facebook", title: "رابط فيسبوك", type: "url", group: "social" }),
    defineField({ name: "instagram", title: "رابط انستغرام", type: "url", group: "social" }),
    defineField({ name: "mapEmbed", title: "رابط الخريطة المضمّنة (src من كود التضمين)", type: "url", group: "social" }),
    defineField({ name: "mapsUrl", title: "رابط الصالة في خرائط جوجل", type: "url", group: "social" }),
  ],
  preview: { prepare: () => ({ title: "معلومات الصالة" }) },
});

/* =========================== الصفحة الرئيسية =========================== */
export const home = defineType({
  name: "home",
  title: "الصفحة الرئيسية",
  type: "document",
  groups: [
    { name: "hero", title: "الواجهة", default: true },
    { name: "sections", title: "الأقسام" },
    { name: "more", title: "آراء العملاء والختام" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "الواجهة الأولى",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "eyebrow", title: "العنوان الصغير", type: "string" }),
        defineField({ name: "title", title: "العنوان — السطر الأول", type: "string" }),
        defineField({ name: "titleAccent", title: "العنوان — السطر الذهبي", type: "string" }),
        defineField({ name: "text", title: "الفقرة", type: "text", rows: 5 }),
        defineField({ name: "byline", title: "السطر الصغير أسفل الأزرار", type: "string" }),
        imageField("image", "صورة الخلفية"),
      ],
    }),
    defineField({ name: "features", title: "شريط المميزات", type: "array", of: [defineArrayMember({ type: "iconCard" })], group: "hero" }),

    {
      ...headingField("worksHeading", "عنوان قسم «من أعمالنا» (الصور تُؤخذ تلقائياً من صفحة أعمالنا)", true),
      group: "sections",
    },
    defineField({
      name: "intro",
      title: "تعريف مختصر (من نحن)",
      type: "object",
      group: "sections",
      fields: [
        defineField({ name: "eyebrow", title: "العنوان الصغير", type: "string" }),
        defineField({ name: "title", title: "العنوان", type: "string" }),
        defineField({ name: "paragraphs", title: "الفقرات", type: "array", of: [defineArrayMember({ type: "text", rows: 4 })] }),
        imageField("image1", "الصورة الأولى"),
        imageField("image2", "الصورة الثانية"),
      ],
    }),
    defineField({ name: "highlights", title: "الصور البارزة (الأولى تظهر كبيرة)", type: "array", of: [defineArrayMember({ type: "highlight" })], group: "sections" }),
    { ...headingField("collectionsHeading", "عنوان قسم «أقسامنا»", true), group: "sections" },
    defineField({ name: "stepsHeading", title: "عنوان «كيف نعمل»", type: "object", group: "sections", fields: [
      defineField({ name: "eyebrow", title: "العنوان الصغير", type: "string" }),
      defineField({ name: "title", title: "العنوان", type: "string" }),
    ] }),
    defineField({ name: "steps", title: "مراحل العمل (تُرقّم تلقائياً)", type: "array", of: [defineArrayMember({ type: "step" })], group: "sections" }),

    defineField({ name: "testimonialsHeading", title: "عنوان آراء العملاء", type: "object", group: "more", fields: [
      defineField({ name: "eyebrow", title: "العنوان الصغير", type: "string" }),
      defineField({ name: "title", title: "العنوان", type: "string" }),
    ] }),
    defineField({ name: "testimonials", title: "آراء العملاء", type: "array", of: [defineArrayMember({ type: "testimonial" })], group: "more" }),
    defineField({ name: "brandLine", title: "عبارة شريط الشعار", type: "string", group: "more" }),
    defineField({
      name: "cta",
      title: "الدعوة للتواصل (تظهر أسفل كل الصفحات)",
      type: "object",
      group: "more",
      fields: [
        defineField({ name: "eyebrow", title: "العنوان الصغير", type: "string" }),
        defineField({ name: "title", title: "العنوان", type: "string" }),
        defineField({ name: "text", title: "النص", type: "text", rows: 3 }),
        imageField("image", "صورة الخلفية الخافتة"),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "الصفحة الرئيسية" }) },
});

/* =========================== أقسامنا =========================== */
export const collectionsPage = defineType({
  name: "collectionsPage",
  title: "صفحة أقسامنا",
  type: "document",
  fields: [
    heroField(),
    defineField({
      name: "items",
      title: "الأقسام",
      description: "اسحب لإعادة الترتيب، أو احذف قسماً، أو أضف قسماً جديداً. تظهر أيضاً في الصفحة الرئيسية.",
      type: "array",
      of: [defineArrayMember({ type: "collectionItem" })],
    }),
    closingField("القسم الختامي «لم تجد ما تبحث عنه؟»"),
  ],
  preview: { prepare: () => ({ title: "صفحة أقسامنا" }) },
});

/* =========================== خدماتنا =========================== */
export const servicesPage = defineType({
  name: "servicesPage",
  title: "صفحة خدماتنا",
  type: "document",
  fields: [
    heroField(),
    defineField({ name: "intro", title: "النص التمهيدي", type: "text", rows: 3 }),
    defineField({ name: "items", title: "الخدمات", type: "array", of: [defineArrayMember({ type: "serviceItem" })] }),
    defineField({ name: "stepsTitle", title: "عنوان «كيف نعمل» في هذه الصفحة", type: "string", description: "المراحل نفسها تُعدّل من الصفحة الرئيسية" }),
    closingField("القسم الختامي «هل لديك مشروع جديد؟»"),
  ],
  preview: { prepare: () => ({ title: "صفحة خدماتنا" }) },
});

/* =========================== أعمالنا =========================== */
export const galleryPage = defineType({
  name: "galleryPage",
  title: "صفحة أعمالنا والمعرض",
  type: "document",
  groups: [
    { name: "gallery", title: "معرض الصور", default: true },
    { name: "projects", title: "المشاريع المنجزة" },
    { name: "texts", title: "النصوص" },
  ],
  fields: [
    defineField({
      name: "images",
      title: "صور المعرض",
      description: "يمكنك سحب عدة صور دفعة واحدة إلى هنا. اختر لكل صورة تصنيفها.",
      type: "array",
      group: "gallery",
      options: { layout: "grid" },
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "وصف الصورة", type: "string" }),
            defineField({ name: "category", title: "التصنيف", type: "string", options: { list: GALLERY_CATEGORIES }, initialValue: "salons" }),
          ],
        }),
      ],
    }),
    defineField({ name: "projects", title: "المشاريع المنجزة", type: "array", of: [defineArrayMember({ type: "project" })], group: "projects" }),
    { ...heroField(), group: "texts" },
    { ...headingField("projectsHeading", "عنوان المشاريع"), group: "texts" },
    { ...headingField("galleryHeading", "عنوان المعرض", true), group: "texts" },
    { ...closingField("القسم الختامي"), group: "texts" },
  ],
  preview: { prepare: () => ({ title: "صفحة أعمالنا والمعرض" }) },
});

/* =========================== من نحن =========================== */
export const aboutPage = defineType({
  name: "aboutPage",
  title: "صفحة من نحن",
  type: "document",
  fields: [
    heroField(),
    defineField({
      name: "story",
      title: "قصتنا",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "العنوان الصغير", type: "string" }),
        defineField({ name: "title", title: "العنوان", type: "string" }),
        defineField({ name: "paragraphs", title: "الفقرات", type: "array", of: [defineArrayMember({ type: "text", rows: 4 })] }),
        defineField({
          name: "images",
          title: "الصور (4 صور)",
          type: "array",
          options: { layout: "grid" },
          of: [defineArrayMember({ type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "وصف الصورة", type: "string" })] })],
          validation: (r) => r.max(4),
        }),
      ],
    }),
    defineField({ name: "vision", title: "رؤيتنا", type: "object", fields: [
      defineField({ name: "title", title: "العنوان", type: "string" }),
      defineField({ name: "subtitle", title: "العنوان الفرعي", type: "string" }),
      defineField({ name: "body", title: "النص", type: "text", rows: 4 }),
    ] }),
    defineField({ name: "mission", title: "رسالتنا", type: "object", fields: [
      defineField({ name: "title", title: "العنوان", type: "string" }),
      defineField({ name: "subtitle", title: "العنوان الفرعي", type: "string" }),
      defineField({ name: "body", title: "النص", type: "text", rows: 4 }),
    ] }),
    defineField({ name: "statsTitle", title: "عنوان الأرقام", type: "string" }),
    defineField({ name: "stats", title: "الأرقام", type: "array", of: [defineArrayMember({ type: "stat" })] }),
    headingField("whyHeading", "عنوان «لماذا يختارنا عملاؤنا»"),
    defineField({ name: "whyUs", title: "لماذا يختارنا عملاؤنا", type: "array", of: [defineArrayMember({ type: "iconCard" })] }),
    defineField({ name: "closingLine", title: "العبارة الختامية", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "صفحة من نحن" }) },
});

/* =========================== تواصل معنا =========================== */
export const contactPage = defineType({
  name: "contactPage",
  title: "صفحة تواصل معنا",
  type: "document",
  fields: [
    heroField(),
    headingField("infoHeading", "عنوان معلومات التواصل"),
    headingField("reasonsHeading", "عنوان «لماذا تتواصل معنا؟»"),
    defineField({ name: "reasons", title: "البطاقات", type: "array", of: [defineArrayMember({ type: "iconCard" })] }),
    defineField({ name: "visit", title: "القسم الختامي", type: "object", fields: [
      defineField({ name: "title", title: "العنوان", type: "string" }),
      defineField({ name: "text", title: "النص", type: "text", rows: 3 }),
    ] }),
  ],
  preview: { prepare: () => ({ title: "صفحة تواصل معنا" }) },
});
