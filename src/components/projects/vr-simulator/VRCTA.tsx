"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VRCTA() {
  const t = useTranslations("IronForge");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Split the CTA title for typography effect
  const ctaTitle = t("cta.title");
  const words = ctaTitle.split(" ");
  const lastWord = words.pop() || "";
  const firstWords = words.join(" ");
  const firstWordsArray = firstWords ? firstWords.split(" ") : [];

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1920&q=80&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: bgY,
        }}
      />

      {/* Static dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5, 5, 5, 0.95) 0%, rgba(249, 115, 22, 0.08) 40%, rgba(234, 88, 12, 0.05) 60%, rgba(5, 5, 5, 0.95) 100%)",
        }}
      />

      {/* Heavy dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5, 5, 5, 0.7)" }}
      />

      {/* Rising ember particles (exclusive to IronForge) */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 3 + i,
            height: 3 + i,
            left: `${10 + i * 18}%`,
            bottom: "-5%",
            backgroundColor: i % 2 === 0 ? "#f97316" : "#facc15",
            animation: `rise-float ${7 + i * 2}s ease-in infinite`,
            animationDelay: `${i * 1.5}s`,
            filter: "blur(1px)",
            opacity: 0.5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Split typography — first words staggered, last word huge orange */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {firstWordsArray.length > 0 && (
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{
                  opacity: 1,
                  y: [null, 4, -2, 0],
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-wider text-white sm:text-5xl"
              >
                {firstWords}
              </motion.p>
            )}
            <motion.p
              initial={{ opacity: 0, y: -70 }}
              whileInView={{
                opacity: 1,
                y: [null, 5, -3, 1, 0],
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-[family-name:var(--font-bebas)] text-6xl uppercase tracking-wider sm:text-7xl md:text-8xl"
              style={{ color: "#f97316" }}
            >
              {lastWord}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: "#b5b5b5" }}
          >
            {t("cta.description")}
          </motion.p>

          {/* Buttons — sharp corners with hover scale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="gym-btn"
            >
              {t("cta.button")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
              className="gym-btn-outline"
            >
              {t("cta.buttonSecondary")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
