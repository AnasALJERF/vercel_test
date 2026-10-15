import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import MotionProvider from "@/components/MotionProvider";
import { getDoc } from "@/content/get";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";

export const revalidate = 60;

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getDoc("settings");
  return (
    <MotionProvider>
      <JsonLd data={[localBusinessJsonLd(settings), websiteJsonLd()]} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-honey focus:px-4 focus:py-2 focus:text-espresso">
        تخطَّ إلى المحتوى
      </a>
      <Navbar whatsapp={settings.whatsapp} />
      <main id="main">{children}</main>
      <Footer settings={settings} />
      <FloatingWhatsApp whatsapp={settings.whatsapp} />
    </MotionProvider>
  );
}
