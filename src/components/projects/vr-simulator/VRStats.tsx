"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

const statKeys = ["s1", "s2", "s3", "s4"] as const;

function AnimatedNumber({
  value,
  duration = 1200,
}: {
  value: number;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return <span ref={ref}>{current}</span>;
}

export default function VRStats() {
  const t = useTranslations("IronForge");

  return (
    <section className="px-6 py-24 sm:py-32" style={{ backgroundColor: "#050505" }}>
      <div className="mx-auto max-w-5xl">
        {/* Large typographic stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center sm:flex-row sm:justify-between"
        >
          {statKeys.map((key, i) => {
            const numericValue = parseFloat(t(`stats.${key}.value`));
            return (
              <div key={key} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center px-6 py-6 text-center sm:px-8"
                  style={{ borderBottom: "1px solid rgba(249,115,22,0.08)" }}
                >
                  <div className="mb-2">
                    <span
                      className="font-[family-name:var(--font-bebas)] text-6xl tracking-wider sm:text-7xl md:text-8xl"
                      style={{ color: "#f97316" }}
                    >
                      <AnimatedNumber value={numericValue} />
                    </span>
                    <span
                      className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider sm:text-4xl"
                      style={{ color: "#facc15" }}
                    >
                      {t(`stats.${key}.suffix`)}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white sm:text-sm">
                    {t(`stats.${key}.label`)}
                  </p>
                </motion.div>

                {/* Vertical orange divider */}
                {i < statKeys.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="hidden h-20 origin-top sm:block"
                    style={{
                      width: "1px",
                      backgroundColor: "rgba(249,115,22,0.3)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Orange glow separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, #f97316 50%, transparent)",
            boxShadow: "0 0 30px rgba(249,115,22,0.3)",
          }}
        />
      </div>
    </section>
  );
}
