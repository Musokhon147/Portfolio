"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function EcommerceStory() {
  const t = useTranslations("SweetDelights");

  const stats = [
    { value: t("story.stat1Value"), label: t("story.stat1Label") },
    { value: t("story.stat2Value"), label: t("story.stat2Label") },
    { value: t("story.stat3Value"), label: t("story.stat3Label") },
  ];

  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: "#faf5f0" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/bakery/story-bakery.jpg"
                alt="Baker at work"
                className="h-72 w-full object-cover sm:h-96 lg:h-[500px]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-7/12"
          >
            <div
              className="mb-4 h-[3px] w-12 rounded-full"
              style={{ backgroundColor: "#c2185b" }}
            />
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "#c2185b" }}
            >
              {t("story.label")}
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{ color: "#2d1b14" }}
            >
              {t("story.title")}
            </h2>
            <p
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "#8b7355" }}
            >
              {t("story.p1")}
            </p>
            <p
              className="mt-4 text-base leading-relaxed sm:text-lg"
              style={{ color: "#8b7355" }}
            >
              {t("story.p2")}
            </p>

            {/* Mini stats */}
            <div className="mt-10 flex gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <p
                    className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl"
                    style={{ color: "#c2185b" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 text-xs font-medium uppercase tracking-wider sm:text-sm"
                    style={{ color: "#8b7355" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
