"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const featureRows = [
  { key: "f1", num: "01", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80&auto=format&fit=crop", reverse: false },
  { key: "f2", num: "02", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&q=80&auto=format&fit=crop", reverse: true },
  { key: "f3", num: "03", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format&fit=crop", reverse: false },
];

export default function VRFeatures() {
  const t = useTranslations("IronForge");

  return (
    <section style={{ backgroundColor: "#050505" }}>
      {featureRows.map((row, i) => (
        <div key={row.key}>
          {/* Feature row */}
          <div
            className={`flex flex-col items-center lg:flex-row ${row.reverse ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: row.reverse ? 80 : -80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="group w-full lg:w-1/2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={row.img}
                  alt={t(`features.${row.key}.title`)}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-96 lg:h-[480px]"
                  decoding="async"
                  style={{ border: "1px solid rgba(249,115,22,0.08)" }}
                  loading="lazy"
                />
                {/* Orange gradient fade toward text side */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: row.reverse
                      ? "linear-gradient(to left, transparent 60%, rgba(5,5,5,0.6) 100%)"
                      : "linear-gradient(to right, transparent 60%, rgba(5,5,5,0.6) 100%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: row.reverse ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
              className="relative flex w-full items-center px-8 py-12 sm:px-12 lg:w-1/2 lg:px-16 lg:py-0"
            >
              {/* Large number watermark — animated */}
              <motion.span
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] text-[10rem] leading-none select-none lg:text-[14rem]"
                style={{ color: "rgba(249,115,22,0.04)" }}
              >
                {row.num}
              </motion.span>

              <div className="relative">
                {/* Title — impact slam entrance */}
                <motion.h3
                  initial={{ opacity: 0, y: -60 }}
                  whileInView={{
                    opacity: 1,
                    y: [null, 4, -2, 1, 0],
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                  className="mb-3 font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wider text-white sm:text-4xl"
                >
                  {t(`features.${row.key}.title`)}
                </motion.h3>
                {/* Orange underline bar — animated on scroll with stagger delay 0.1s */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-5 h-1 w-16 origin-left"
                  style={{ backgroundColor: "#f97316" }}
                />
                {/* Description with stagger delay 0.2s */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-sm text-base leading-relaxed"
                  style={{ color: "#b5b5b5" }}
                >
                  {t(`features.${row.key}.desc`)}
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Divider between rows — animated glow */}
          {i < featureRows.length - 1 && (
            <div className="mx-auto max-w-5xl px-8">
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px origin-left"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(249,115,22,0.3) 50%, transparent)",
                  boxShadow: "0 0 15px rgba(249,115,22,0.15)",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
