import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import BackToPortfolio from "@/components/projects/BackToPortfolio";
import { ToastProvider } from "@/components/ui/Toast";
import SmartHomeNav from "@/components/projects/smart-home/SmartHomeNav";
import SmartHomeHero from "@/components/projects/smart-home/SmartHomeHero";
import SmartHomeDevices from "@/components/projects/smart-home/SmartHomeDevices";
import SmartHomePricing from "@/components/projects/smart-home/SmartHomePricing";
import SmartHomeTestimonials from "@/components/projects/smart-home/SmartHomeTestimonials";
import SmartHomeCTA from "@/components/projects/smart-home/SmartHomeCTA";
import SmartHomeFooter from "@/components/projects/smart-home/SmartHomeFooter";

export const metadata: Metadata = {
  title: "NovaTech — Ship Products Faster",
};

export default async function SmartHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ToastProvider>
      <div data-accent="violet" className="min-h-screen" style={{ backgroundColor: '#09090b', color: '#a1a1aa' }}>
        <SmartHomeNav />
        <main>
          <div id="home"><SmartHomeHero /></div>
          <div id="features"><SmartHomeDevices /></div>
          <div id="pricing"><SmartHomePricing /></div>
          <SmartHomeTestimonials />
          <SmartHomeCTA />
        </main>
        <SmartHomeFooter />
        <BackToPortfolio />
      </div>
    </ToastProvider>
  );
}
