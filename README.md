# شهد للمفروشات — Shahd Furniture

موقع تعريفي لصالة شهد للمفروشات (سوريا — حماة — سلمية)، بالعربية بالكامل ومن اليمين لليسار (RTL).
Next.js 14 + TypeScript + Tailwind CSS + Framer Motion.

## الصفحات
- `/` الرئيسية
- `/collections` أقسامنا
- `/services` خدماتنا
- `/gallery` أعمالنا
- `/about` من نحن
- `/contact` تواصل معنا

## التشغيل محليا
```bash
npm install
npm run dev
```

## الرفع على GitHub + Vercel
1. أنشئ مستودعا جديدا على GitHub وارفع كل ملفات هذا المجلد (بدون node_modules و .next — ملف .gitignore يتكفل بذلك).
2. في Vercel اضغط New Project واختر المستودع.
3. لا تغير أي إعداد: Framework = Next.js، Build Command = next build، Install = npm install.
4. اضغط Deploy.

بعد النشر، عدل `SITE.url` في `src/lib/seo.ts` ليطابق رابط الموقع الحقيقي.

## أين تعدل المحتوى
- `src/lib/data.ts` — الأقسام، الخدمات، المميزات، خطوات العمل، المشاريع، صور المعرض.
- `src/lib/seo.ts` — الاسم، أرقام الهاتف، الواتساب، العنوان، أوقات الدوام، رابط فيسبوك.
- `public/logos/` — الشعار (logo-mark.png بخلفية شفافة، logo.png بخلفية بنية).

## الصور
الصور الحالية من Unsplash (ترخيص حر للاستخدام التجاري) وهي مؤقتة.
لاستبدالها بصور الصالة: ضع الصور في `public/photos/` ثم غير الروابط في كائن `IMG`
أعلى ملف `src/lib/data.ts` إلى مسارات مثل `/photos/majlis-1.jpg`.
