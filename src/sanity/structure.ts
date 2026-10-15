import type { StructureResolver } from "sanity/structure";
import { CogIcon, EnvelopeIcon, HomeIcon, ImagesIcon, ThListIcon, UsersIcon, WrenchIcon } from "@sanity/icons";

const ICONS = {
  settings: CogIcon,
  home: HomeIcon,
  collectionsPage: ThListIcon,
  servicesPage: WrenchIcon,
  galleryPage: ImagesIcon,
  aboutPage: UsersIcon,
  contactPage: EnvelopeIcon,
} as const;

const ITEMS: { id: keyof typeof ICONS; title: string }[] = [
  { id: "home", title: "الصفحة الرئيسية" },
  { id: "collectionsPage", title: "أقسامنا" },
  { id: "galleryPage", title: "أعمالنا ومعرض الصور" },
  { id: "servicesPage", title: "خدماتنا" },
  { id: "aboutPage", title: "من نحن" },
  { id: "contactPage", title: "تواصل معنا" },
  { id: "settings", title: "معلومات الصالة (هاتف، عنوان، روابط)" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("محتوى الموقع")
    .items(
      ITEMS.flatMap(({ id, title }, i) => {
        const item = S.listItem()
          .title(title)
          .id(id)
          .icon(ICONS[id])
          .child(S.document().schemaType(id).documentId(id).title(title));
        return i === ITEMS.length - 1 ? [S.divider(), item] : [item];
      }),
    );
