"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function EcommerceHero() {
  const t = useTranslations("SweetDelights");

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/bakery/hero-editorial.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Ken Burns subtle zoom */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/bakery/hero-editorial.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Cream gradient overlay from left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(250,245,240,0.97) 0%, rgba(250,245,240,0.85) 40%, rgba(250,245,240,0.4) 65%, transparent 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(to top, #faf5f0, transparent)",
        }}
      />

      {/* Text content — bottom left */}
      <div className="relative flex min-h-screen items-end px-8 pb-20 sm:px-12 md:px-20 lg:pb-28">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "#c2185b" }}
          >
            {t("brand")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-[1.1] sm:text-6xl md:text-7xl"
            style={{ color: "#2d1b14" }}
          >
            {t("hero.tagline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: "#8b7355" }}
          >
            {t("hero.description")}
          </motion.p>

          {/* Vertically stacked buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <button className="bakery-btn">{t("hero.cta")}</button>
            <button
              className="text-sm font-semibold transition-colors duration-300 hover:text-[#c2185b]"
              style={{ color: "#8b7355" }}
            >
              {t("hero.ctaSecondary")} &rarr;
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
