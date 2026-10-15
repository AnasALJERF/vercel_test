import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE, KEYWORDS, OG_IMAGE } from "@/lib/seo";

const DEFAULT_TITLE = "شهد للمفروشات | مفروشات في سلمية — مجالس، غرف نوم، برادي";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.fullName }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  category: "furniture",
  alternates: { canonical: "/" },
  openGraph: {
    title: DEFAULT_TITLE,
    description: SITE.description,
    url: "/",
    siteName: SITE.name,
    type: "website",
    locale: "ar_SY",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: DEFAULT_TITLE, description: SITE.description, images: [OG_IMAGE.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, address: true },
  ...(SITE.googleVerification ? { verification: { google: SITE.googleVerification } } : {}),
  other: { "geo.region": "SY-HM", "geo.placename": "سلمية" },
};

export const viewport: Viewport = {
  themeColor: "#15100A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap"
          rel="stylesheet"
        />
        {/* بدون جافاسكربت: أظهر كل المحتوى المخفي بانتظار حركة الظهور */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
