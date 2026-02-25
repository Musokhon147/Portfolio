"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonialKeys = ["t1", "t2", "t3"] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function EcommerceTestimonials() {
  const t = useTranslations("SweetDelights");

  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: "#faf5f0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <h2
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "#2d1b14" }}
          >
            {t("testimonials.title")}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonialKeys.map((key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Quote watermark */}
              <span
                className="pointer-events-none absolute -left-2 -top-4 font-[family-name:var(--font-playfair)] text-[8rem] leading-none select-none"
                style={{ color: "rgba(194,24,91,0.06)" }}
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="relative mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} className="h-5 w-5" style={{ color: "#ff6f00" }} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="relative font-[family-name:var(--font-playfair)] text-base italic leading-relaxed"
                style={{ color: "#5a4a3a" }}
              >
                &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="relative mt-6 border-t pt-4" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <p className="text-sm font-bold" style={{ color: "#2d1b14" }}>
                  {t(`testimonials.${key}.name`)}
                </p>
                <p className="text-xs" style={{ color: "#8b7355" }}>
                  {t(`testimonials.${key}.role`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
