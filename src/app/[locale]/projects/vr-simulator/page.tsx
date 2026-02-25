import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import BackToPortfolio from "@/components/projects/BackToPortfolio";
import VRNav from "@/components/projects/vr-simulator/VRNav";
import VRHero from "@/components/projects/vr-simulator/VRHero";
import VRFeatures from "@/components/projects/vr-simulator/VRFeatures";
import VRStats from "@/components/projects/vr-simulator/VRStats";
import VRPricing from "@/components/projects/vr-simulator/VRPricing";
import VRTestimonials from "@/components/projects/vr-simulator/VRTestimonials";
import VRCTA from "@/components/projects/vr-simulator/VRCTA";
import VRFooter from "@/components/projects/vr-simulator/VRFooter";

export const metadata: Metadata = {
  title: "IronForge — Premium Fitness & Gym",
};

export default async function VRSimulatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div data-accent="orange" className="min-h-screen" style={{ backgroundColor: '#050505', color: '#a0a0a0' }}>
      <VRNav />
      <main>
        <VRHero />
        <VRFeatures />
        <VRStats />
        <VRPricing />
        <VRTestimonials />
        <VRCTA />
      </main>
      <VRFooter />
      <BackToPortfolio />
    </div>
  );
}
