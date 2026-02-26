"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

function HandDrawnUnderline({ color = "#c2185b" }: { color?: string }) {
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
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      />
    </motion.svg>
  );
}

/* ── Animated number counter (VRStats pattern) ── */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  const animate = useCallback(() => {
    const duration = 1200; // ms
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    if (isInView) {
      animate();
    }
  }, [isInView, animate]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* Parse a stat value string like "7", "50K+", "100+" into { num, suffix } */
function parseStat(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+)/);
  if (!match) return { num: 0, suffix: raw };
  const num = parseInt(match[1], 10);
  const suffix = raw.slice(match[0].length);
  return { num, suffix };
}

export default function EcommerceStory() {
  const t = useTranslations("SweetDelights");

  const stats = [
    { value: t("story.stat1Value"), label: t("story.stat1Label") },
    { value: t("story.stat2Value"), label: t("story.stat2Label") },
    { value: t("story.stat3Value"), label: t("story.stat3Label") },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: "#faf5f0" }}>
      {/* Morphing blob background */}
      <div
        className="pointer-events-none absolute opacity-[0.05]"
        style={{
          width: 600,
          height: 600,
          right: "-8%",
          top: "10%",
          background: "radial-gradient(circle, #c2185b, #ff6f00)",
          filter: "blur(100px)",
          animation: "blob-morph 18s ease-in-out infinite",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1556217477-d325251ece38?w=1200&q=80&auto=format&fit=crop"
                alt="Baker at work"
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-96 lg:h-[500px]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-7/12"
          >
            {/* Accent bar draw-in */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 h-[3px] w-12 rounded-full origin-left"
              style={{ backgroundColor: "#c2185b" }}
            />
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "#c2185b" }}
            >
              {t("story.label")}
            </p>
            <div className="relative inline-block">
              <h2
                className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                style={{ color: "#2d1b14" }}
              >
                {t("story.title")}
              </h2>
              <HandDrawnUnderline />
            </div>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "#8b7355" }}
            >
              {t("story.p1")}
            </motion.p>

            {/* Paragraph 2 — 200ms after p1 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-base leading-relaxed sm:text-lg"
              style={{ color: "#8b7355" }}
            >
              {t("story.p2")}
            </motion.p>

            {/* Mini stats with animated counters */}
            <div className="mt-10 flex gap-8 sm:gap-12">
              {stats.map((stat, i) => {
                const { num, suffix } = parseStat(stat.value);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <p
                      className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl"
                      style={{ color: "#c2185b" }}
                    >
                      <AnimatedNumber value={num} suffix={suffix} />
                    </p>
                    <p
                      className="mt-1 text-xs font-medium uppercase tracking-wider sm:text-sm"
                      style={{ color: "#8b7355" }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
