"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import { HiCheck, HiX } from "react-icons/hi";

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-3 rounded-xl border border-cyan/30 bg-surface/95 px-4 py-3 shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-lg"
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan/20">
        <HiCheck size={14} className="text-cyan" />
      </div>
      <span className="text-sm font-medium text-text">{message}</span>
      <button onClick={onClose} className="ml-2 text-text-muted hover:text-text">
        <HiX size={16} />
      </button>
    </motion.div>
  );
}

export default function Contact() {
  const t = useTranslations("Contact");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

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
        setToast(t("successTitle"));
        form.reset();
      }
    } catch {
      // Silently fail — form will stay as-is
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[200px] w-[200px] rounded-full bg-amber/5 blur-[80px] sm:h-[300px] sm:w-[300px] sm:blur-[100px]" />

      <div className="relative mx-auto max-w-2xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
          <TextReveal text={t("title")} className="gradient-text" />
        </h2>

        <ScrollReveal delay={0.1}>
          <p className="mb-4 text-center text-sm text-text-dim sm:text-base">{t("description")}</p>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber sm:mb-12" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass glow-cyan space-y-4 rounded-xl p-4 sm:space-y-5 sm:rounded-2xl sm:p-6 md:p-8"
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
              className="liquid-glass w-full rounded-2xl py-3.5 text-sm font-bold text-text transition-all disabled:opacity-60"
            >
              <span className="relative z-10">
                {submitting ? "..." : t("send")}
              </span>
            </motion.button>
          </form>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </section>
  );
}
