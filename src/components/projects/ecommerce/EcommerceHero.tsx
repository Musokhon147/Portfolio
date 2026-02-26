"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── SVG hand-drawn wavy underline ── */
function HandDrawnUnderline({ color = "#c2185b", delay = 0 }: { color?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 200 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-2 left-0 w-full"
      style={{ overflow: "visible" }}
    >
      <motion.path
        d="M0 5 C30 2, 50 8, 80 4 S130 1, 160 5 S190 7, 200 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }}
      />
    </motion.svg>
  );
}

const HERO_IMG = "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1920&q=80&auto=format&fit=crop";

export default function EcommerceHero() {
  const t = useTranslations("SweetDelights");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.97, 0.7]);

  return (
    <>
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Ken Burns cinematic zoom with parallax */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: bgY,
        }}
      />

      {/* Falling confetti / sprinkle particles */}
      {Array.from({ length: 14 }).map((_, i) => {
        const colors = ["#ec4899", "#f59e0b", "#fca5a5", "#fb923c", "#f9a8d4", "#fbbf24"];
        const size = 4 + Math.random() * 5;
        return (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${5 + (i / 14) * 90}%`,
              top: "-5%",
              backgroundColor: colors[i % colors.length],
              opacity: 0.6,
              animation: `confetti-fall ${6 + (i % 5) * 2}s linear infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        );
      })}

      {/* Cream gradient overlay from left — parallax-linked opacity */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(250,245,240,0.97) 0%, rgba(250,245,240,0.88) 35%, rgba(250,245,240,0.45) 60%, transparent 100%)",
          opacity: overlayOpacity,
        }}
      />

      {/* Bottom fade — deeper */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, #faf5f0 10%, transparent)",
        }}
      />

      {/* Text content — bottom left with parallax */}
      <motion.div
        style={{ y: textY }}
        className="relative flex min-h-screen items-end px-8 pb-20 sm:px-12 md:px-20 lg:pb-28"
      >
        <div className="max-w-xl">
          {/* Animated accent line with gradient */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="mb-3 h-[3px] w-16 rounded-full origin-left"
            style={{ background: "linear-gradient(to right, #c2185b, #ff6f00)" }}
          />

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em]"
            style={{ color: "#c2185b" }}
          >
            {t("brand")}
          </motion.p>

          {/* Soft blur reveal title */}
          <div className="relative inline-block">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-[1.08] sm:text-6xl md:text-7xl"
              style={{ color: "#2d1b14" }}
            >
              {t("hero.tagline")}
            </motion.h1>
            <HandDrawnUnderline color="#c2185b" delay={1.2} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-6 max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: "#8b7355" }}
          >
            {t("hero.description")}
          </motion.p>

          {/* Staggered buttons with premium hover */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="bakery-btn transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(194,24,91,0.4)]"
              >
                {t("hero.cta")}
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-[#c2185b]"
                style={{ color: "#8b7355" }}
              >
                {t("hero.ctaSecondary")}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>

    {/* ── Infinite Marquee Strip ── */}
    <div className="overflow-hidden border-y" style={{ backgroundColor: "#fff3e0", borderColor: "rgba(194,24,91,0.08)" }}>
      <div className="marquee-track" style={{ "--marquee-duration": "30s" } as React.CSSProperties}>
        {Array.from({ length: 2 }).map((_, setIdx) => (
          <div key={setIdx} className="flex shrink-0 items-center">
            {["Artisan Cakes", "Fresh Daily", "Custom Orders", "Since 2010", "Hand Crafted", "Premium Ingredients", "Wedding Specials", "Local Favorites"].map((text, i) => (
              <span key={i} className="marquee-item flex items-center gap-6 py-4">
                <span
                  className="font-[family-name:var(--font-playfair)] text-sm font-medium uppercase tracking-[0.2em] sm:text-base"
                  style={{ color: "#2d1b14" }}
                >
                  {text}
                </span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#c2185b" }} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
