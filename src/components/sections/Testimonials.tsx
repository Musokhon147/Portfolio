"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonialKeys = ["t1", "t2", "t3"] as const;

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonialKeys.length) % testimonialKeys.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonialKeys.length);

  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/5 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber sm:mb-12 md:mb-16" />
        </ScrollReveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass glow-cyan rounded-2xl p-5 sm:p-8 md:p-10"
            >
              {/* Quote mark */}
              <div className="mb-3 font-[family-name:var(--font-syne)] text-4xl leading-none text-cyan/30 sm:mb-6 sm:text-5xl">
                &ldquo;
              </div>

              <p className="mb-5 text-base leading-relaxed text-text-dim sm:mb-8 sm:text-lg md:text-xl">
                {t(`${testimonialKeys[current]}.quote`)}
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan/20 to-amber/20 font-[family-name:var(--font-syne)] text-base font-bold text-cyan sm:h-12 sm:w-12 sm:text-lg">
                  {t(`${testimonialKeys[current]}.name`).charAt(0)}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-syne)] text-sm font-bold text-text sm:text-base">
                    {t(`${testimonialKeys[current]}.name`)}
                  </p>
                  <p className="text-xs text-text-muted sm:text-sm">
                    {t(`${testimonialKeys[current]}.role`)}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="rounded-full border border-border/30 bg-surface/50 p-2.5 text-text-muted transition-all hover:border-cyan/30 hover:text-cyan"
            >
              <HiChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonialKeys.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-cyan shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                      : "w-2 bg-border hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="rounded-full border border-border/30 bg-surface/50 p-2.5 text-text-muted transition-all hover:border-cyan/30 hover:text-cyan"
            >
              <HiChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
