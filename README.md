# شهد للمفروشات — Shahed Furniture

موقع صالة شهد للمفروشات (سوريا — حماة — سلمية). عربي بالكامل RTL.
Next.js 14 + TypeScript + Tailwind CSS + Framer Motion.

## الصفحات
`/` الرئيسية · `/collections` أقسامنا · `/services` خدماتنا · `/gallery` أعمالنا · `/about` من نحن · `/contact` تواصل معنا

## لوحة التحكم (Sanity)
- تفتح على: `https://shahed-furniture.com/studio` (مشروع Sanity: `ocelrulk` / `production`).
- كل نصوص الموقع وصوره تُعدَّل من اللوحة، والتعديل يظهر على الموقع خلال دقيقة تقريباً بعد الضغط على **Publish**.
- أول مرة فقط: افتح أداة **«استيراد المحتوى»** في أعلى اللوحة واضغط «ابدأ الاستيراد» لنقل المحتوى الحالي.
- إذا لم تكن صفحة ما موجودة في اللوحة، أو تعذّر الاتصال بها، يعرض الموقع المحتوى الافتراضي من `src/content/defaults.ts` — فلا يتعطل أبداً.
- مخطط اللوحة: `src/sanity/schemaTypes/` · الهيكل: `src/sanity/structure.ts` · الإعداد: `sanity.config.ts`

### إعدادات مطلوبة مرة واحدة في sanity.io/manage
- **API ← CORS origins**: أضف عناوين الموقع مع تفعيل **Allow credentials**:
  `https://shahed-furniture.com` · `https://www.shahed-furniture.com` · رابط vercel.app · `http://localhost:3000`
- **Members**: ادعُ العميل بصلاحية **Administrator**.

## إعدادات تبقى في الكود (`src/lib/seo.ts`)
الدومين `url`، الإحداثيات `geo`، الكلمات المفتاحية، عناوين الصفحات لمحركات البحث، ورمز `googleVerification`.

## الصور
- صور الأعمال الحقيقية في `public/photos/` (WebP محسّنة).
- قائمة معرض «أعمالنا» في `src/lib/gallery.ts` — لإضافة صورة: ضعها في `public/photos/gallery/` و`public/photos/thumbs/` وأضف سطراً بنفس الصيغة.
- صور الأقسام ورؤوس الصفحات في كائن `IMG` أعلى `src/lib/data.ts`.

## الشعار
`public/logos/logo-mark.png` (شفاف) · `public/logos/logo.png` · `public/logos/logo-square.jpg`
أيقونة المتصفح: `src/app/icon.png` و `src/app/apple-icon.png`

## SEO
- عنوان ووصف خاص لكل صفحة + Open Graph + صورة مشاركة `public/og.jpg`
- بيانات منظمة: FurnitureStore (نشاط محلي) + WebSite + BreadcrumbList
- `sitemap.xml` و `robots.txt` و `manifest.webmanifest` تُولَّد تلقائياً

## التشغيل
```bash
npm install
npm run dev
```

## النشر
ارفع محتويات المجلد إلى GitHub ثم اربطه بـ Vercel (بدون أي إعداد إضافي).
