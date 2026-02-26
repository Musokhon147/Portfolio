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
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="pl-8"
              style={{
                borderLeft: "4px solid #f97316",
                borderImage: "linear-gradient(to bottom, #f97316, #ea580c) 1",
              }}
            >
              {/* Stars — individually staggered */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: i * 0.06,
                    }}
                    className="inline-flex"
                  >
                    <HiStar className="h-5 w-5" style={{ color: "#f97316" }} />
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl font-light italic leading-relaxed text-white sm:text-2xl">
                &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
              </p>

              {/* Author — staggered name and role */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: "#f97316" }}
                >
                  {t(`testimonials.${key}.name`).charAt(0)}
                </div>
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0 }}
                    className="font-[family-name:var(--font-bebas)] text-lg uppercase tracking-wider"
                    style={{ color: "#f97316" }}
                  >
                    {t(`testimonials.${key}.name`)}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                    className="text-sm"
                    style={{ color: "#b5b5b5" }}
                  >
                    {t(`testimonials.${key}.role`)}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar with glow */}
        <div className="mx-auto mt-8 h-[2px] max-w-xs overflow-hidden" style={{ backgroundColor: "#222" }}>
          <motion.div
            key={active}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? 0 : 1 }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full origin-left"
            style={{
              backgroundColor: "#f97316",
              boxShadow: "0 0 10px rgba(249,115,22,0.5)",
            }}
          />
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-3">
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
