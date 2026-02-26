"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";

const tiers = [
  { key: "tier1", features: ["f1", "f2", "f3", "f4"], highlighted: false },
  { key: "tier2", features: ["f1", "f2", "f3", "f4", "f5"], highlighted: true },
  { key: "tier3", features: ["f1", "f2", "f3", "f4", "f5"], highlighted: false },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function VRPricing() {
  const t = useTranslations("IronForge");

  return (
    <section className="px-6 py-24 sm:py-32" style={{ backgroundColor: "#050505" }}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p
            className="mb-3 font-[family-name:var(--font-bebas)] text-sm uppercase tracking-[0.25em]"
            style={{ color: "#f97316" }}
          >
            {t("pricing.label")}
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-wider text-white sm:text-5xl md:text-6xl">
            {t("pricing.title")}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={
                tier.highlighted
                  ? { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }
                  : {
                      y: -8,
                      boxShadow: "0 0 40px rgba(249,115,22,0.25), 0 0 80px rgba(249,115,22,0.1), inset 0 1px 0 rgba(249,115,22,0.1)",
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }
              }
              className={`gym-card-premium relative flex flex-col p-8 ember-streak-hover ${tier.highlighted ? "md:scale-105 md:z-10" : ""}`}
              style={{
                backgroundColor: "#0a0a0a",
                border: tier.highlighted
                  ? "2px solid #f97316"
                  : "1px solid #1a1a1a",
                borderTop: tier.highlighted ? "4px solid #f97316" : undefined,
                boxShadow: tier.highlighted ? "0 0 50px rgba(249,115,22,0.2), 0 0 100px rgba(249,115,22,0.06)" : undefined,
              }}
            >
              {/* Badge with glow pulse */}
              {tier.highlighted && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1"
                  style={{
                    backgroundColor: "#f97316",
                    animation: "glow-pulse-orange 2s ease-in-out infinite",
                  }}
                >
                  <span className="font-[family-name:var(--font-bebas)] text-xs uppercase tracking-wider text-white">
                    {t(`pricing.${tier.key}.badge`)}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <p
                className="font-[family-name:var(--font-bebas)] text-xl uppercase tracking-wider"
                style={{ color: tier.highlighted ? "#f97316" : "#ffffff" }}
              >
                {t(`pricing.${tier.key}.name`)}
              </p>

              {/* Price — impact slam entrance */}
              <div className="mt-4 mb-6">
                <motion.span
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{
                    opacity: 1,
                    y: [null, 3, -1, 0],
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="inline-block font-[family-name:var(--font-bebas)] text-5xl tracking-wider text-white sm:text-6xl"
                >
                  {t(`pricing.${tier.key}.price`)}
                </motion.span>
                <span className="ml-2 text-sm" style={{ color: "#777" }}>
                  {t(`pricing.${tier.key}.period`)}
                </span>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px" style={{ backgroundColor: "#222222" }} />

              {/* Features — staggered list */}
              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8 flex-1 space-y-3"
              >
                {tier.features.map((f) => (
                  <motion.li
                    key={f}
                    variants={listItemVariants}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="mt-0.5 inline-flex shrink-0"
                    >
                      <HiCheck className="h-4 w-4" style={{ color: "#f97316" }} />
                    </motion.span>
                    <span className="text-sm" style={{ color: "#b5b5b5" }}>
                      {t(`pricing.${tier.key}.${f}`)}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA */}
              <button
                className={tier.highlighted ? "gym-btn w-full" : "gym-btn-outline w-full"}
              >
                {t(`pricing.${tier.key}.cta`)}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-px"
          style={{
            background: "linear-gradient(to right, transparent, #f97316 50%, transparent)",
            boxShadow: "0 0 30px rgba(249,115,22,0.2)",
          }}
        />
      </div>
    </section>
  );
}
