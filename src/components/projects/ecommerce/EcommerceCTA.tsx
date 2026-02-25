"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function EcommerceCTA() {
  const t = useTranslations("SweetDelights");

  return (
    <section className="relative overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/bakery/cta-bakery.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark espresso-tinted overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(45, 27, 20, 0.78)" }}
      />

      {/* Content */}
      <div className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "#f9a8d4" }}
          >
            {t("brand")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            {t("cta.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(255,243,224,0.8)" }}
          >
            {t("cta.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button className="bakery-btn-amber">{t("cta.button")}</button>
            <button
              className="text-sm font-semibold transition-colors duration-300 hover:text-white"
              style={{ color: "rgba(255,243,224,0.7)" }}
            >
              {t("cta.buttonSecondary")} &rarr;
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
