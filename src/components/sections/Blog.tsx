"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import { HiOutlineArrowRight, HiOutlineClock } from "react-icons/hi";

const articleKeys = ["a1", "a2", "a3"] as const;

const categoryColors: Record<string, string> = {
  "Web Dev": "text-cyan border-cyan/30 bg-cyan/10",
  "Game Dev": "text-amber border-amber/30 bg-amber/10",
  AI: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
};

export default function Blog() {
  const t = useTranslations("Blog");

  return (
    <section id="blog" className="relative py-16 sm:py-20 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      <div className="pointer-events-none absolute right-0 top-1/4 h-[250px] w-[250px] translate-x-1/3 rounded-full bg-cyan/5 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
          <TextReveal text={t("title")} className="gradient-text" />
        </h2>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mb-4 max-w-xl text-center text-sm text-text-dim sm:text-base">
            {t("subtitle")}
          </p>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber sm:mb-12 md:mb-16" />
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {articleKeys.map((key, i) => {
            const category = t(`${key}.category`);
            const colorClass =
              categoryColors[category] ||
              "text-text-muted border-border/50 bg-elevated/50";

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: [0.25, 0.4, 0.25, 1] as const,
                }}
                className="group/card glass glass-hover overflow-hidden rounded-2xl border border-border/50 transition-all duration-500 hover:border-cyan/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.08)]"
              >
                {/* Category + date header */}
                <div className="flex items-center justify-between border-b border-border/30 px-5 py-3 sm:px-6">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold sm:text-xs ${colorClass}`}
                  >
                    {category}
                  </span>
                  <span className="text-[10px] text-text-muted sm:text-xs">
                    {t(`${key}.date`)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="mb-2 font-[family-name:var(--font-syne)] text-base font-bold text-text transition-colors group-hover/card:text-cyan sm:text-lg">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-text-dim sm:text-sm">
                    {t(`${key}.excerpt`)}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] text-text-muted sm:text-xs">
                      <HiOutlineClock size={12} />
                      {t(`${key}.readTime`)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan opacity-0 transition-all duration-300 group-hover/card:opacity-100 sm:text-sm">
                      {t("readMore")}
                      <HiOutlineArrowRight
                        size={14}
                        className="transition-transform group-hover/card:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
