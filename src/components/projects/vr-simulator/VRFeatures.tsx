"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const featureRows = [
  { key: "f1", num: "01", img: "/images/gym/gym-lifting.jpg", reverse: false },
  { key: "f2", num: "02", img: "/images/gym/gym-boxing.jpg", reverse: true },
  { key: "f3", num: "03", img: "/images/gym/gym-stretching.jpg", reverse: false },
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
              initial={{ opacity: 0, x: row.reverse ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="group w-full lg:w-1/2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={row.img}
                  alt={t(`features.${row.key}.title`)}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80 lg:h-96"
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
              {/* Large number watermark */}
              <span
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] text-[10rem] leading-none select-none lg:text-[14rem]"
                style={{ color: "rgba(249,115,22,0.04)" }}
              >
                {row.num}
              </span>

              <div className="relative">
                <h3
                  className="mb-3 font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wider text-white sm:text-4xl"
                >
                  {t(`features.${row.key}.title`)}
                </h3>
                {/* Orange underline bar */}
                <div
                  className="mb-5 h-1 w-16"
                  style={{ backgroundColor: "#f97316" }}
                />
                <p
                  className="max-w-sm text-base leading-relaxed"
                  style={{ color: "#b5b5b5" }}
                >
                  {t(`features.${row.key}.desc`)}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider between rows */}
          {i < featureRows.length - 1 && (
            <div className="mx-auto max-w-5xl px-8">
              <div
                className="h-px"
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
