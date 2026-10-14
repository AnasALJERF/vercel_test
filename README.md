# شهد للمفروشات — Shahed Furniture

موقع صالة شهد للمفروشات (سوريا — حماة — سلمية). عربي بالكامل RTL.
Next.js 14 + TypeScript + Tailwind CSS + Framer Motion.

## الصفحات
`/` الرئيسية · `/collections` أقسامنا · `/services` خدماتنا · `/gallery` أعمالنا · `/about` من نحن · `/contact` تواصل معنا

## ما تبقى عليك تعبئته (كله في ملف واحد: `src/lib/seo.ts`)
| الحقل | ماذا تضع |
|---|---|
| `url` | رابط موقعك الفعلي على Vercel أو الدومين |
| `instagram` | رابط حساب الصالة على انستغرام |
| `geo` | إحداثيات الصالة، مثال: `{ lat: 35.0113, lng: 37.0533 }` |
| `mapsUrl` | (اختياري) رابط الصالة في خرائط جوجل |
| `googleVerification` | رمز التحقق من Google Search Console |

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
