"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const timelineKeys = ["e1", "e2", "e3", "e4"] as const;

export default function Timeline() {
  const t = useTranslations("Timeline");

  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-[250px] w-[250px] translate-x-1/2 rounded-full bg-cyan/5 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber sm:mb-12 md:mb-16" />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan/50 via-border/30 to-transparent sm:left-6 md:left-1/2 md:-translate-x-px" />

          {timelineKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`relative mb-8 flex items-start gap-4 last:mb-0 sm:mb-12 sm:gap-6 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot on line */}
              <div className="absolute left-4 top-1 z-10 -translate-x-1/2 sm:left-6 md:left-1/2">
                <div className="relative">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(6,182,212,0.5)] sm:h-3 sm:w-3" />
                  <div className="absolute inset-0 animate-ping rounded-full bg-cyan/30" />
                </div>
              </div>

              {/* Content */}
              <div className={`ml-9 sm:ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass glass-hover rounded-xl p-4 sm:rounded-2xl sm:p-6">
                  <span className="mb-2 inline-block rounded-full border border-cyan/20 bg-cyan/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan sm:px-3 sm:text-xs">
                    {t(`${key}.year`)}
                  </span>
                  <h3 className="mb-1 font-[family-name:var(--font-syne)] text-base font-bold text-text sm:text-lg">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-xs leading-relaxed text-text-muted sm:text-sm">
                    {t(`${key}.desc`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
