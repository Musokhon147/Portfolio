"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiCheck } from "react-icons/hi";

export default function Contact() {
  const t = useTranslations("Contact");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Silently fail — form will stay as-is
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-amber/5 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl px-5 pt-24 md:px-8">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mb-4 text-center text-text-dim">{t("description")}</p>
          <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass glow-cyan flex flex-col items-center rounded-2xl p-10 text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan/20">
                <HiCheck size={32} className="text-cyan" />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-syne)] text-xl font-bold text-text">
                {t("successTitle")}
              </h3>
              <p className="text-text-dim">{t("successDesc")}</p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass glow-cyan space-y-5 rounded-2xl p-6 md:p-8"
            >
              {/*
                Replace YOUR_ACCESS_KEY with your Web3Forms key.
                Get one free at: https://web3forms.com
              */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY"
              />

              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-text-dim"
                >
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t("namePlaceholder")}
                  className="w-full rounded-xl border border-border/50 bg-elevated/50 px-4 py-3 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-cyan/50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-text-dim"
                >
                  {t("emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t("emailPlaceholder")}
                  className="w-full rounded-xl border border-border/50 bg-elevated/50 px-4 py-3 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-cyan/50"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-text-dim"
                >
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t("messagePlaceholder")}
                  className="w-full resize-none rounded-xl border border-border/50 bg-elevated/50 px-4 py-3 text-sm text-text outline-none transition-all placeholder:text-text-muted focus:border-cyan/50"
                />
              </div>
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden rounded-xl bg-cyan py-3.5 text-sm font-bold text-base transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] disabled:opacity-60"
              >
                <span className="relative z-10">
                  {submitting ? "..." : t("send")}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan to-cyan-light opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
