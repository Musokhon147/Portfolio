"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function SmartHomeHero() {
  const t = useTranslations("NovaTech");

  return (
    <section className="relative min-h-screen overflow-hidden px-6">
      {/* Subtle gradient orbs */}
      <div
        className="pointer-events-none absolute -left-60 -top-60 h-[600px] w-[600px] rounded-full opacity-[0.05] blur-[120px]"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-60 -right-60 h-[600px] w-[600px] rounded-full opacity-[0.04] blur-[120px]"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />

      {/* Centered content — NOT split layout */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center pt-32 pb-16 text-center lg:pt-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          style={{ backgroundColor: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.15)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#8b5cf6" }} />
          <span className="text-xs font-medium tracking-wide" style={{ color: "#a78bfa" }}>
            Powered by AI
          </span>
        </motion.div>

        {/* Large centered brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-[family-name:var(--font-inter)] text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
          style={{ color: "#fafafa" }}
        >
          {t("brand")}
        </motion.h1>

        {/* Gradient tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-6 font-[family-name:var(--font-inter)] text-xl font-semibold sm:text-2xl"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("hero.tagline")}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: "#71717a" }}
        >
          {t("hero.description")}
        </motion.p>

        {/* Centered buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <button className="nova-btn px-8 py-3.5 text-sm font-semibold">
            {t("hero.cta")}
          </button>
          <button className="nova-btn-outline px-8 py-3.5 text-sm font-semibold">
            {t("hero.ctaSecondary")}
          </button>
        </motion.div>

        {/* Floating product screenshot in glowing frame */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-16 w-full max-w-5xl"
        >
          <div
            className="overflow-hidden rounded-xl"
            style={{
              border: "1px solid rgba(139,92,246,0.15)",
              boxShadow:
                "0 0 80px rgba(139,92,246,0.12), 0 0 40px rgba(139,92,246,0.08), 0 25px 50px rgba(0,0,0,0.4)",
              animation: "nova-screenshot-glow 3s ease-in-out infinite",
            }}
          >
            <div className="relative">
              <img
                src="/images/novatech/hero-dashboard.jpg"
                alt="NovaTech Platform Dashboard"
                className="w-full object-cover"
              />
              {/* Bottom gradient fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-24"
                style={{
                  background: "linear-gradient(to top, #09090b, transparent)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
