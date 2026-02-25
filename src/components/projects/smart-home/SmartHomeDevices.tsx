"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
  HiOutlineChartBar,
} from "react-icons/hi";
import type { IconType } from "react-icons";

interface Feature {
  key: string;
  icon: IconType;
}

const features: Feature[] = [
  { key: "f1", icon: HiOutlineLightningBolt },
  { key: "f2", icon: HiOutlineUserGroup },
  { key: "f3", icon: HiOutlineChartBar },
];

const statKeys = ["s1", "s2", "s3", "s4"] as const;

const ease = [0.16, 1, 0.3, 1] as const;

function AnimatedNumber({
  value,
  duration = 1500,
}: {
  value: number;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.round(eased * value * 10) / 10);
            if (progress < 1) requestAnimationFrame(tick);
            else setCurrent(value);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const display = Number.isInteger(value) ? Math.round(current) : current.toFixed(1);
  return <span ref={ref}>{display}</span>;
}

export default function SmartHomeDevices() {
  const t = useTranslations("NovaTech");

  return (
    <>
      {/* ===== FEATURES — Bento Grid ===== */}
      <section className="px-6 py-24 sm:py-32" style={{ backgroundColor: "#09090b" }}>
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="mb-14 text-center"
          >
            <p
              className="mb-3 text-xs font-medium uppercase tracking-widest"
              style={{ color: "#8b5cf6" }}
            >
              {t("brand")}
            </p>
            <h2
              className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "#fafafa" }}
            >
              {t("features.title")}
            </h2>
          </motion.div>

          {/* Bento grid — mixed sizes */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-6 sm:gap-6">
            {/* Feature 1 — Large cell (4 cols) with image */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="group overflow-hidden rounded-xl transition-all duration-400 hover:border-violet-500/30 sm:col-span-4"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <div className="p-7 sm:p-8">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(139,92,246,0.08)" }}
                >
                  <HiOutlineLightningBolt className="h-5 w-5" style={{ color: "#8b5cf6" }} />
                </div>
                <h3
                  className="mb-2 font-[family-name:var(--font-inter)] text-lg font-semibold"
                  style={{ color: "#fafafa" }}
                >
                  {t("features.f1.title")}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#71717a" }}>
                  {t("features.f1.desc")}
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/novatech/analytics.jpg"
                  alt="NovaTech Analytics"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                  style={{ border: "1px solid rgba(139,92,246,0.08)" }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #18181b 0%, transparent 40%)" }}
                />
              </div>
            </motion.div>

            {/* Feature 2 — Tall narrow cell (2 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="group flex flex-col justify-between rounded-xl p-7 transition-all duration-400 hover:border-violet-500/30 sm:col-span-2 sm:p-8"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <div>
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(139,92,246,0.08)" }}
                >
                  <HiOutlineUserGroup className="h-5 w-5" style={{ color: "#8b5cf6" }} />
                </div>
                <h3
                  className="mb-2 font-[family-name:var(--font-inter)] text-lg font-semibold"
                  style={{ color: "#fafafa" }}
                >
                  {t("features.f2.title")}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#71717a" }}>
                  {t("features.f2.desc")}
                </p>
              </div>
              {/* Decorative metric */}
              <div className="mt-8 text-center">
                <span
                  className="font-[family-name:var(--font-inter)] text-4xl font-bold"
                  style={{ color: "rgba(139,92,246,0.2)" }}
                >
                  99.9%
                </span>
              </div>
            </motion.div>

            {/* Feature 3 — Small cell (2 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="group rounded-xl p-7 transition-all duration-400 hover:border-violet-500/30 sm:col-span-2 sm:p-8"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: "rgba(139,92,246,0.08)" }}
              >
                <HiOutlineChartBar className="h-5 w-5" style={{ color: "#8b5cf6" }} />
              </div>
              <h3
                className="mb-2 font-[family-name:var(--font-inter)] text-lg font-semibold"
                style={{ color: "#fafafa" }}
              >
                {t("features.f3.title")}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#71717a" }}>
                {t("features.f3.desc")}
              </p>
            </motion.div>

            {/* Decorative metrics cell (4 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="flex items-center justify-center rounded-xl p-8 sm:col-span-4"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <div className="flex items-baseline gap-3 font-[family-name:var(--font-inter)]">
                <span className="text-5xl font-bold sm:text-6xl" style={{ color: "#8b5cf6" }}>
                  10K+
                </span>
                <span className="text-lg font-medium" style={{ color: "#71717a" }}>
                  {t("stats.s1.label")}
                </span>
                <span className="mx-4 text-2xl" style={{ color: "#27272a" }}>|</span>
                <span className="text-5xl font-bold sm:text-6xl" style={{ color: "#06b6d4" }}>
                  50M+
                </span>
                <span className="text-lg font-medium" style={{ color: "#71717a" }}>
                  {t("stats.s3.label")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS — Horizontal Metrics Bar ===== */}
      <section className="px-6 py-24 sm:py-32" style={{ backgroundColor: "#0f0f12" }}>
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="mb-12 text-center"
          >
            <h2
              className="font-[family-name:var(--font-inter)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: "#fafafa" }}
            >
              {t("stats.title")}
            </h2>
          </motion.div>

          {/* Single horizontal bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="flex flex-col overflow-hidden rounded-2xl sm:flex-row"
            style={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              borderTop: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            {statKeys.map((key, i) => {
              const numericValue = parseFloat(t(`stats.${key}.value`));
              return (
                <div
                  key={key}
                  className="flex flex-1 flex-col items-center justify-center px-6 py-8 text-center"
                  style={{
                    borderRight: i < statKeys.length - 1 ? "1px solid #27272a" : "none",
                  }}
                >
                  <div className="mb-2">
                    <span
                      className="font-[family-name:var(--font-inter)] text-3xl font-bold sm:text-4xl"
                      style={{ color: "#8b5cf6" }}
                    >
                      <AnimatedNumber value={numericValue} />
                    </span>
                    <span
                      className="font-[family-name:var(--font-inter)] text-lg font-bold sm:text-xl"
                      style={{ color: "#a78bfa" }}
                    >
                      {t(`stats.${key}.suffix`)}
                    </span>
                  </div>
                  <p className="text-xs font-medium sm:text-sm" style={{ color: "#71717a" }}>
                    {t(`stats.${key}.label`)}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
