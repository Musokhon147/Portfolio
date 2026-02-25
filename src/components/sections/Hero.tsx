"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Particles from "@/components/ui/Particles";
import Typewriter from "@/components/ui/Typewriter";

export default function Hero() {
  const t = useTranslations("Hero");

  const typewriterWords = [
    t("typewriter1"),
    t("typewriter2"),
    t("typewriter3"),
    t("typewriter4"),
    t("typewriter5"),
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-x-clip px-4">
      {/* Particles background */}
      <Particles count={70} />

      {/* Animated gradient orbs - responsive sizes */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[10%] top-[20%] h-[250px] w-[250px] rounded-full opacity-30 blur-[80px] sm:h-[350px] sm:w-[350px] sm:blur-[100px] md:h-[500px] md:w-[500px] md:blur-[120px]"
          style={{
            background: "var(--orb-cyan)",
            animation: "float 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] h-[200px] w-[200px] rounded-full opacity-25 blur-[60px] sm:h-[300px] sm:w-[300px] sm:blur-[80px] md:h-[400px] md:w-[400px] md:blur-[100px]"
          style={{
            background: "var(--orb-amber)",
            animation: "float-slow 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-[60%] top-[60%] hidden h-[300px] w-[300px] rounded-full opacity-20 blur-[80px] sm:block"
          style={{
            background: "var(--orb-purple)",
            animation: "float 18s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan-glow px-3 py-1 sm:mb-6 sm:px-4 sm:py-1.5"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(6,182,212,0.6)] sm:h-2 sm:w-2"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          />
          <span className="text-xs font-medium text-cyan-light sm:text-sm">
            {t("greeting")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-6 overflow-visible font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:mb-8 md:text-5xl lg:text-7xl"
          style={{ overflow: "visible", lineHeight: 1.3 }}
        >
          <span className="text-text">
            {t("tagline").split(",")[0]},
          </span>
          <br />
          <span className="gradient-text">
            <Typewriter words={typewriterWords} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-20 mx-auto mb-8 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg md:mb-12 md:text-xl"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="liquid-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold text-text transition-all sm:px-8 sm:py-3.5 sm:text-sm"
          >
            <span className="relative z-10">{t("cta")}</span>
            <svg
              className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="liquid-glass-subtle inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-text-dim transition-all sm:px-8 sm:py-3.5 sm:text-sm"
          >
            {t("greeting")}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-8 w-5 rounded-full border-2 border-text-muted/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-cyan"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent" />
    </section>
  );
}
