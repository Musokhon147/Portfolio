"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonialKeys = ["t1", "t2", "t3"] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
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
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="bakery-card-premium relative overflow-hidden p-8 warm-shimmer-hover"
              style={{ borderTop: "3px solid transparent", borderImage: "linear-gradient(to right, #c2185b, #ff6f00) 1" }}
            >
              {/* Quote watermark */}
              <span
                className="pointer-events-none absolute -left-2 -top-4 font-[family-name:var(--font-playfair)] text-[8rem] leading-none select-none"
                style={{ color: "rgba(194,24,91,0.06)" }}
              >
                &ldquo;
              </span>

              {/* Stars — staggered spring scale-in */}
              <div className="relative mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: i * 0.08,
                    }}
                  >
                    <HiStar className="h-5 w-5" style={{ color: "#ff6f00" }} />
                  </motion.span>
                ))}
              </div>

              {/* Quote text — fades in with 200ms delay after card */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative font-[family-name:var(--font-playfair)] text-base italic leading-relaxed"
                style={{ color: "#5a4a3a" }}
              >
                &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
              </motion.p>

              {/* Author */}
              <div className="relative mt-6 flex items-center gap-3 border-t pt-4" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                {/* Avatar scale-in with spring */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.15 }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #c2185b, #ff6f00)" }}
                  >
                    {t(`testimonials.${key}.name`).charAt(0)}
                  </div>
                </motion.div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#2d1b14" }}>
                    {t(`testimonials.${key}.name`)}
                  </p>
                  <p className="text-xs" style={{ color: "#8b7355" }}>
                    {t(`testimonials.${key}.role`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
