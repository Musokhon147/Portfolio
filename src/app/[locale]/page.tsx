import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import TechMarquee from "@/components/ui/TechMarquee";
import Preloader from "@/components/ui/Preloader";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <BackToTop />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <TechMarquee />
        <Skills />
        <Projects />
        <Testimonials />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
