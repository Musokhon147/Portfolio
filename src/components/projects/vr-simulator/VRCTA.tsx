"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function VRCTA() {
  const t = useTranslations("IronForge");

  // Split the CTA title for typography effect
  const ctaTitle = t("cta.title");
  const words = ctaTitle.split(" ");
  const lastWord = words.pop() || "";
  const firstWords = words.join(" ");

  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image with hover scale */}
      <div
        className="absolute inset-0 transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: "url(/images/gym/gym-cta-intense.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Heavy dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5, 5, 5, 0.82)" }}
      />

      {/* Content */}
      <div className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Split typography — first words smaller, last word huge orange */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {firstWords && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-wider text-white sm:text-5xl"
              >
                {firstWords}
              </motion.p>
            )}
            <motion.p
              initial={{ opacity: 0, scale: 1.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="font-[family-name:var(--font-bebas)] text-6xl uppercase tracking-wider sm:text-7xl md:text-8xl"
              style={{ color: "#f97316" }}
            >
              {lastWord}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: "#b5b5b5" }}
          >
            {t("cta.description")}
          </motion.p>

          {/* Buttons — sharp corners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="gym-btn">{t("cta.button")}</button>
            <button className="gym-btn-outline">{t("cta.buttonSecondary")}</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
