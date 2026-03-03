import { setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Portfolio",
      url: "https://example.com",
      description:
        "Full-spectrum developers building apps, websites, games, VR experiences, and hardware projects.",
      knowsAbout: [
        "Web Development",
        "Game Development",
        "VR Development",
        "Mobile Apps",
        "IoT",
      ],
    },
    {
      "@type": "WebSite",
      name: "Portfolio — Full-Spectrum Developer",
      url: "https://example.com",
    },
  ],
};
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import Preloader from "@/components/ui/Preloader";

const TechMarquee = dynamic(() => import("@/components/ui/TechMarquee"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Timeline = dynamic(() => import("@/components/sections/Timeline"));
const Blog = dynamic(() => import("@/components/sections/Blog"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <BackToTop />
      <main id="main">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <TechMarquee />
        <Skills />
        <Projects />
        <Testimonials />
        <Timeline />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
