"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const ease = [0.16, 1, 0.3, 1] as const;
const testimonialKeys = ["t1", "t2", "t3"] as const;
const avatarColors = ["#8b5cf6", "#06b6d4", "#a78bfa"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export default function SmartHomeTestimonials() {
  const t = useTranslations("NovaTech");

  return (
    <section className="px-6 py-24 sm:py-32" style={{ backgroundColor: "#0f0f12" }}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 text-center"
        >
          <h2
            className="font-[family-name:var(--font-inter)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
            style={{ color: "#fafafa" }}
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
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonialKeys.map((key, i) => {
            const name = t(`testimonials.${key}.name`);
            const initials = name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2);

            return (
              <motion.div
                key={key}
                variants={cardVariants}
                className="rounded-xl p-8 transition-all duration-400 hover:border-violet-500/30"
                style={{
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                }}
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <HiStar key={j} className="h-4 w-4" style={{ color: "#8b5cf6" }} />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#a1a1aa" }}
                >
                  &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  {/* Avatar circle with initials */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: avatarColors[i] }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#fafafa" }}>
                      {name}
                    </p>
                    <p className="text-xs" style={{ color: "#71717a" }}>
                      {t(`testimonials.${key}.role`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
