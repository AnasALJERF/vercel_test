import { collectionItem, highlight, iconCard, phone, project, serviceItem, stat, step, testimonial } from "./shared";
import { aboutPage, collectionsPage, contactPage, galleryPage, home, servicesPage, settings } from "./pages";

export const schemaTypes = [
  // عناصر
  iconCard, step, testimonial, highlight, collectionItem, serviceItem, project, stat, phone,
  // صفحات
  settings, home, collectionsPage, servicesPage, galleryPage, aboutPage, contactPage,
];

// كل الصفحات مستندات مفردة (نسخة واحدة لكل صفحة)
export const SINGLETONS = [
  { id: "settings", title: "معلومات الصالة" },
  { id: "home", title: "الصفحة الرئيسية" },
  { id: "collectionsPage", title: "أقسامنا" },
  { id: "servicesPage", title: "خدماتنا" },
  { id: "galleryPage", title: "أعمالنا ومعرض الصور" },
  { id: "aboutPage", title: "من نحن" },
  { id: "contactPage", title: "تواصل معنا" },
] as const;
export type SingletonId = (typeof SINGLETONS)[number]["id"];
