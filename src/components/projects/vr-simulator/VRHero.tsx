"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function VRHero() {
  const t = useTranslations("IronForge");

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/gym/gym-hero-wide.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Full dark overlay on mobile, diagonal clip-path on lg+ */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{ backgroundColor: "rgba(5,5,5,0.85)" }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundColor: "#050505",
          clipPath: "polygon(0 0, 62% 0, 38% 100%, 0 100%)",
        }}
      />

      {/* Subtle diagonal stripe texture on dark area — lg only */}
      <div
        className="absolute inset-0 hidden opacity-[0.03] lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(249,115,22,0.15) 10px, rgba(249,115,22,0.15) 11px)",
          clipPath: "polygon(0 0, 62% 0, 38% 100%, 0 100%)",
        }}
      />

      {/* Content on dark side */}
      <div className="relative flex min-h-screen items-center px-8 sm:px-12 md:px-20">
        <div className="max-w-lg">
          {/* Brand — massive */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
            className="font-[family-name:var(--font-bebas)] text-7xl uppercase leading-[0.85] tracking-wider text-white sm:text-8xl lg:text-9xl"
          >
            {t("brand")}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.25 }}
            className="mt-4 font-[family-name:var(--font-bebas)] text-xl uppercase tracking-[0.15em] sm:text-2xl"
            style={{ color: "#f97316" }}
          >
            {t("hero.tagline")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 max-w-sm text-base leading-relaxed"
            style={{ color: "#b5b5b5" }}
          >
            {t("hero.description")}
          </motion.p>

          {/* Buttons — sharp corners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button className="gym-btn">{t("hero.cta")}</button>
            <button className="gym-btn-outline">{t("hero.ctaSecondary")}</button>
          </motion.div>
        </div>
      </div>

      {/* Floating stat badge — at diagonal edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.7 }}
        className="absolute bottom-16 right-8 px-6 py-4 sm:bottom-20 sm:right-16"
        style={{ backgroundColor: "#f97316" }}
      >
        <p className="font-[family-name:var(--font-bebas)] text-4xl tracking-wider text-white sm:text-5xl">
          5000+
        </p>
        <p className="text-xs font-bold uppercase tracking-wider text-white/80">
          Members
        </p>
      </motion.div>
    </section>
  );
}
