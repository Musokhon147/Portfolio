"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { useToast } from "@/components/ui/Toast";

const ease = [0.16, 1, 0.3, 1] as const;

const tiers = [
  { key: "tier1", features: ["f1", "f2", "f3", "f4"], highlighted: false },
  { key: "tier2", features: ["f1", "f2", "f3", "f4", "f5", "f6"], highlighted: true },
  { key: "tier3", features: ["f1", "f2", "f3", "f4", "f5", "f6"], highlighted: false },
];

const featureListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

export default function SmartHomePricing() {
  const t = useTranslations("NovaTech");
  const { showToast } = useToast();

  return (
    <section className="px-6 py-24 sm:py-32" style={{ backgroundColor: "#09090b" }}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 text-center"
        >
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest"
            style={{ color: "#8b5cf6" }}
          >
            {t("pricing.label")}
          </p>
          <h2
            className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "#fafafa" }}
          >
            {t("pricing.title")}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              whileHover={tier.highlighted ? { y: -6 } : { y: -8 }}
              className={`relative flex flex-col ${tier.highlighted ? "md:scale-105 md:z-10" : ""}`}
            >
              {/* Gradient border wrapper for Pro */}
              <div
                className={`flex flex-1 flex-col rounded-xl p-8 holographic-hover ${
                  tier.highlighted ? "nova-gradient-border" : "nova-card-premium"
                }`}
                style={
                  tier.highlighted
                    ? undefined
                    : undefined
                }
              >
                <div
                  className={tier.highlighted ? "flex flex-1 flex-col rounded-[11px] bg-[#09090b] p-8" : "flex flex-1 flex-col"}
                >
                  {/* Badge with pulse ring */}
                  {tier.highlighted && (
                    <span
                      className="relative mb-4 inline-block self-start overflow-visible rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: "rgba(139,92,246,0.15)", color: "#a78bfa" }}
                    >
                      {t(`pricing.${tier.key}.badge`)}
                      <span
                        className="pointer-events-none absolute inset-0 rounded-full"
                        style={{
                          border: "1px solid rgba(139,92,246,0.4)",
                          animation: "pulse-ring 2.5s ease-out infinite",
                        }}
                      />
                    </span>
                  )}

                  {/* Name */}
                  <p
                    className="font-[family-name:var(--font-inter)] text-lg font-semibold"
                    style={{ color: "#fafafa" }}
                  >
                    {t(`pricing.${tier.key}.name`)}
                  </p>

                  {/* Description */}
                  <p className="mt-1 text-sm" style={{ color: "#71717a" }}>
                    {t(`pricing.${tier.key}.desc`)}
                  </p>

                  {/* Price with spring entrance */}
                  <div className="mt-5 mb-6">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 + 0.2 }}
                      className="inline-block font-[family-name:var(--font-inter)] text-4xl font-bold sm:text-5xl"
                      style={{ color: "#fafafa" }}
                    >
                      {t(`pricing.${tier.key}.price`) === "Custom"
                        ? t(`pricing.${tier.key}.price`)
                        : `$${t(`pricing.${tier.key}.price`)}`}
                    </motion.span>
                    {t(`pricing.${tier.key}.period`) && (
                      <span className="text-sm" style={{ color: "#71717a" }}>
                        {t(`pricing.${tier.key}.period`)}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="mb-6 h-px" style={{ backgroundColor: "#27272a" }} />

                  {/* Features — staggered list */}
                  <motion.ul
                    variants={featureListVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 flex-1 space-y-3"
                  >
                    {tier.features.map((f) => (
                      <motion.li key={f} variants={featureItemVariants} className="flex items-start gap-3">
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className="inline-flex"
                        >
                          <HiCheck className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#8b5cf6" }} />
                        </motion.span>
                        <span className="text-sm" style={{ color: "#a1a1aa" }}>
                          {t(`pricing.${tier.key}.${f}`)}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* CTA */}
                  <button
                    onClick={() => showToast("Plan selected!", "success")}
                    className={`w-full ${tier.highlighted ? "nova-btn py-3" : "nova-btn-outline py-3"}`}
                  >
                    {t(`pricing.${tier.key}.cta`)}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
