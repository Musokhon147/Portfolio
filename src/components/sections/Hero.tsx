"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Particles from "@/components/ui/Particles";
import FloatingShapes from "@/components/ui/FloatingShapes";
import MagneticButton from "@/components/ui/MagneticButton";
import Typewriter from "@/components/ui/Typewriter";

const Scene3D = dynamic(() => import("@/components/ui/Scene3D"), {
  ssr: false,
  loading: () => null,
});

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
      {/* 3D wireframe background */}
      <Scene3D />
      {/* Particles background */}
      <Particles count={70} />
      <FloatingShapes count={12} />

      {/* Central cosmic nebula glow */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary top-center blue glow — the hero's "light source" */}
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-[120px] sm:h-[600px] sm:w-[1100px] sm:blur-[150px] md:h-[700px] md:w-[1400px]"
          style={{
            background: "radial-gradient(ellipse, rgba(37,99,235,0.55) 0%, rgba(59,130,246,0.3) 35%, rgba(99,102,241,0.15) 60%, transparent 80%)",
          }}
        />
        {/* Cyan accent — left side */}
        <div
          className="absolute left-[5%] top-[30%] h-[300px] w-[300px] rounded-full opacity-35 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] md:h-[500px] md:w-[500px]"
          style={{
            background: "var(--orb-cyan)",
            animation: "float 14s ease-in-out infinite",
          }}
        />
        {/* Purple accent — right side */}
        <div
          className="absolute bottom-[15%] right-[5%] h-[250px] w-[250px] rounded-full opacity-30 blur-[80px] sm:h-[350px] sm:w-[350px] sm:blur-[100px] md:h-[450px] md:w-[450px]"
          style={{
            background: "var(--orb-purple)",
            animation: "float-slow 16s ease-in-out infinite",
          }}
        />
        {/* Deep blue fill — center-bottom */}
        <div
          className="absolute left-[40%] top-[55%] hidden h-[350px] w-[350px] rounded-full opacity-25 blur-[100px] sm:block"
          style={{
            background: "radial-gradient(circle, rgba(30,64,175,0.4) 0%, transparent 70%)",
            animation: "float 20s ease-in-out infinite reverse",
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
            className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(37,99,235,0.6)] sm:h-2 sm:w-2"
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
          <MagneticButton>
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
          </MagneticButton>
          <MagneticButton>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="liquid-glass-subtle inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-text-dim transition-all sm:px-8 sm:py-3.5 sm:text-sm"
            >
              {t("greeting")}
            </motion.a>
          </MagneticButton>
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
