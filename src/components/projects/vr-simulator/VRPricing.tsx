"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";

const tiers = [
  { key: "tier1", features: ["f1", "f2", "f3", "f4"], highlighted: false },
  { key: "tier2", features: ["f1", "f2", "f3", "f4", "f5"], highlighted: true },
  { key: "tier3", features: ["f1", "f2", "f3", "f4", "f5"], highlighted: false },
];

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
              className={`relative flex flex-col p-8 ${tier.highlighted ? "md:scale-105 md:z-10" : ""}`}
              style={{
                backgroundColor: "#111111",
                border: tier.highlighted
                  ? "2px solid #f97316"
                  : "1px solid #222222",
                borderTop: tier.highlighted ? "4px solid #f97316" : undefined,
              }}
            >
              {/* Badge */}
              {tier.highlighted && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1"
                  style={{ backgroundColor: "#f97316" }}
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

              {/* Price */}
              <div className="mt-4 mb-6">
                <span className="font-[family-name:var(--font-bebas)] text-5xl tracking-wider text-white sm:text-6xl">
                  {t(`pricing.${tier.key}.price`)}
                </span>
                <span className="ml-2 text-sm" style={{ color: "#777" }}>
                  {t(`pricing.${tier.key}.period`)}
                </span>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px" style={{ backgroundColor: "#222222" }} />

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <HiCheck className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f97316" }} />
                    <span className="text-sm" style={{ color: "#b5b5b5" }}>
                      {t(`pricing.${tier.key}.${f}`)}
                    </span>
                  </li>
                ))}
              </ul>

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
