"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

const statKeys = ["s1", "s2", "s3", "s4"] as const;

/* ── Odometer-style rolling digits ── */
function OdometerNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const chars = value.split("");

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {chars.map((char, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden"
          style={{ height: "1.15em", lineHeight: "1.15em" }}
        >
          <motion.span
            initial={{ y: "120%" }}
            animate={inView ? { y: "0%" } : { y: "120%" }}
            transition={{
              duration: 0.6,
              delay: 0.15 + i * 0.1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
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
            return (
              <div key={key} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center px-6 py-6 text-center sm:px-8"
                  style={{ borderBottom: "1px solid rgba(249,115,22,0.12)" }}
                >
                  <div className="mb-2">
                    <span
                      className="font-[family-name:var(--font-bebas)] text-7xl tracking-wider sm:text-8xl md:text-9xl"
                      style={{ color: "#f97316" }}
                    >
                      <OdometerNumber value={t(`stats.${key}.value`)} />
                    </span>
                    <span
                      className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider sm:text-4xl"
                      style={{ color: "#facc15" }}
                    >
                      {t(`stats.${key}.suffix`)}
                    </span>
                  </div>
                  {/* Stat label with delayed entrance */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.15 }}
                    className="text-xs font-bold uppercase tracking-[0.25em] text-white sm:text-sm"
                  >
                    {t(`stats.${key}.label`)}
                  </motion.p>

                  {/* Strength meter bar */}
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: "rgba(249,115,22,0.1)", maxWidth: 120 }}>
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${60 + i * 10}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                      className="relative h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #f97316, #facc15)" }}
                    >
                      <span
                        className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full"
                        style={{
                          backgroundColor: "#f97316",
                          animation: "glow-tip-pulse 1.5s ease-in-out infinite",
                        }}
                      />
                    </motion.div>
                  </div>
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
