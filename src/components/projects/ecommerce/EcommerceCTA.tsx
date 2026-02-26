"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EcommerceCTA() {
  const t = useTranslations("SweetDelights");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax background image with scale */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale: bgScale,
        }}
      />

      {/* Static warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(45, 27, 20, 0.92) 0%, rgba(194, 24, 91, 0.15) 40%, rgba(255, 111, 0, 0.1) 60%, rgba(45, 27, 20, 0.92) 100%)",
        }}
      />

      {/* Dark espresso overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(45, 27, 20, 0.65)" }}
      />

      {/* Falling confetti particles */}
      {Array.from({ length: 10 }).map((_, i) => {
        const colors = ["#ec4899", "#f59e0b", "#fca5a5", "#fb923c", "#f9a8d4"];
        const size = 3 + (i % 4) * 1.5;
        return (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${8 + (i / 10) * 84}%`,
              top: "-5%",
              backgroundColor: colors[i % colors.length],
              opacity: 0.5,
              animation: `confetti-fall ${7 + (i % 4) * 2}s linear infinite`,
              animationDelay: `${i * 1.1}s`,
            }}
          />
        );
      })}

      {/* Content with parallax */}
      <motion.div style={{ y: contentY }} className="relative px-6 py-28 sm:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.35em]"
            style={{ color: "#f9a8d4" }}
          >
            {t("brand")}
          </motion.p>

          {/* Soft blur reveal title */}
          <motion.h2
            initial={{ opacity: 0, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            {t("cta.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(255,243,224,0.8)" }}
          >
            {t("cta.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="bakery-btn-amber"
            >
              {t("cta.button")}
            </motion.button>
            <motion.button
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-white"
              style={{ color: "rgba(255,243,224,0.7)" }}
            >
              {t("cta.buttonSecondary")}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
