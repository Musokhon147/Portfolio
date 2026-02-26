"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const ease = [0.16, 1, 0.3, 1] as const;
const testimonialKeys = ["t1", "t2", "t3"] as const;
const avatarColors = ["#8b5cf6", "#06b6d4", "#a78bfa"];
const avatarPhotos = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop&crop=face",
];

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

const starContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const starVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
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
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="nova-card-premium p-8 holographic-hover"
              >
                {/* Stars — staggered sequence */}
                <motion.div
                  variants={starContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-4 flex gap-1"
                >
                  {Array.from({ length: 5 }).map((_, j) => (
                    <motion.span key={j} variants={starVariants} className="inline-flex">
                      <HiStar className="h-4 w-4" style={{ color: "#8b5cf6" }} />
                    </motion.span>
                  ))}
                </motion.div>

                {/* Quote — delayed after stars */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15, ease }}
                  className="text-base leading-relaxed"
                  style={{ color: "#a1a1aa" }}
                >
                  &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
                </motion.p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  {/* Avatar photo — spring entrance with glow */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    whileHover={{ boxShadow: `0 0 15px ${avatarColors[i]}40` }}
                    className="shrink-0"
                  >
                    <img
                      src={avatarPhotos[i]}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                      style={{ border: `2px solid ${avatarColors[i]}` }}
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
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
