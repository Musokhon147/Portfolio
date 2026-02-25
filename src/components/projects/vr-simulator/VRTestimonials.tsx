"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonialKeys = ["t1", "t2", "t3"] as const;

export default function VRTestimonials() {
  const t = useTranslations("IronForge");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonialKeys.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const key = testimonialKeys[active];

  return (
    <section className="px-6 py-24 sm:py-32" style={{ backgroundColor: "#050505" }}>
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-wider text-white sm:text-5xl"
        >
          {t("testimonials.title")}
        </motion.h2>

        {/* Quote carousel */}
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="pl-6"
              style={{ borderLeft: "4px solid #f97316" }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} className="h-5 w-5" style={{ color: "#f97316" }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl font-light italic leading-relaxed text-white sm:text-2xl">
                &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6">
                <p
                  className="font-[family-name:var(--font-bebas)] text-lg uppercase tracking-wider"
                  style={{ color: "#f97316" }}
                >
                  {t(`testimonials.${key}.name`)}
                </p>
                <p className="text-sm" style={{ color: "#b5b5b5" }}>
                  {t(`testimonials.${key}.role`)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonialKeys.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                setPaused(true);
                setTimeout(() => setPaused(false), 8000);
              }}
              className="h-2.5 w-2.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === active ? "#f97316" : "#333333",
                transform: i === active ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
