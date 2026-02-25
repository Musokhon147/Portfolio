"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function SmartHomeCTA() {
  const t = useTranslations("NovaTech");

  return (
    <section className="px-6 py-24 sm:py-32" style={{ backgroundColor: "#09090b" }}>
      <div className="mx-auto max-w-3xl">
        {/* Gradient border card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="nova-gradient-border"
        >
          {/* Inner card */}
          <div
            className="rounded-[15px] px-8 py-12 text-center sm:px-10 sm:py-14"
            style={{ backgroundColor: "#09090b" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mb-4 text-xs font-medium uppercase tracking-widest"
              style={{ color: "#8b5cf6" }}
            >
              {t("brand")}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="font-[family-name:var(--font-inter)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: "#fafafa" }}
            >
              {t("cta.title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mx-auto mt-5 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "#71717a" }}
            >
              {t("cta.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
            >
              <button className="nova-btn px-8 py-3.5 text-sm font-semibold">
                {t("cta.button")}
              </button>
              <button className="nova-btn-outline px-8 py-3.5 text-sm font-semibold">
                {t("cta.buttonSecondary")}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
