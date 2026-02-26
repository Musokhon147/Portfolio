import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import BackToPortfolio from "@/components/projects/BackToPortfolio";
import { ToastProvider } from "@/components/ui/Toast";
import EcommerceNav from "@/components/projects/ecommerce/EcommerceNav";
import EcommerceHero from "@/components/projects/ecommerce/EcommerceHero";
import EcommerceProducts from "@/components/projects/ecommerce/EcommerceProducts";
import EcommerceFeatures from "@/components/projects/ecommerce/EcommerceFeatures";
import EcommerceStory from "@/components/projects/ecommerce/EcommerceStory";
import EcommerceGallery from "@/components/projects/ecommerce/EcommerceGallery";
import EcommerceTestimonials from "@/components/projects/ecommerce/EcommerceTestimonials";
import EcommerceCTA from "@/components/projects/ecommerce/EcommerceCTA";
import EcommerceFooter from "@/components/projects/ecommerce/EcommerceFooter";

export const metadata: Metadata = {
  title: "Sweet Delights — Bakery & Cake Shop",
};

export default async function EcommercePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ToastProvider>
      <div data-accent="pink" className="min-h-screen" style={{ backgroundColor: '#faf5f0', color: '#8b7355' }}>
        <EcommerceNav />
        <main>
          <div id="home"><EcommerceHero /></div>
          <div id="menu"><EcommerceProducts /></div>
          <EcommerceFeatures />
          <div id="about"><EcommerceStory /></div>
          <div id="gallery"><EcommerceGallery /></div>
          <EcommerceTestimonials />
          <div id="contact"><EcommerceCTA /></div>
        </main>
        <EcommerceFooter />
        <BackToPortfolio />
      </div>
    </ToastProvider>
  );
}
