"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28">
      <div className="section-divider mx-auto max-w-4xl" />

      <div className="mx-auto max-w-4xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber md:mb-12" />
        </ScrollReveal>

        <div className="relative">
          <div className="pointer-events-none absolute -left-20 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-cyan/5 blur-[80px] md:block" />

          <div className="relative space-y-4 sm:space-y-6">
            <ScrollReveal delay={0.15}>
              <p className="text-center text-base leading-relaxed text-text-dim sm:text-lg md:text-xl">
                {t("p1")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-center text-base leading-relaxed text-text-dim sm:text-lg md:text-xl">
                {t("p2")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="glass glow-cyan mx-auto mt-6 max-w-xl rounded-2xl px-4 py-4 text-center sm:mt-8 sm:px-6 sm:py-5 md:mt-10 md:px-8 md:py-6">
                <p className="font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-text sm:text-xl md:text-2xl">
                  &ldquo;{t("p3")}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
