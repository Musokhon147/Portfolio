"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      <div className="mx-auto max-w-4xl px-5 pt-24 md:px-8">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber" />
        </ScrollReveal>

        <div className="relative">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan/5 blur-[80px]" />

          <div className="relative space-y-6">
            <ScrollReveal delay={0.15}>
              <p className="text-center text-lg leading-relaxed text-text-dim md:text-xl">
                {t("p1")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-center text-lg leading-relaxed text-text-dim md:text-xl">
                {t("p2")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="glass glow-cyan mx-auto mt-10 max-w-xl rounded-2xl px-8 py-6 text-center">
                <p className="font-[family-name:var(--font-syne)] text-xl font-bold tracking-tight text-text md:text-2xl">
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
