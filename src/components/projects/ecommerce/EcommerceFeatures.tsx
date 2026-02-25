"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlinePencil,
  HiOutlineTruck,
  HiOutlineHeart,
} from "react-icons/hi";

const features = [
  { key: "f1", Icon: HiOutlineSparkles, num: "01" },
  { key: "f2", Icon: HiOutlinePencil, num: "02" },
  { key: "f3", Icon: HiOutlineTruck, num: "03" },
  { key: "f4", Icon: HiOutlineHeart, num: "04" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function EcommerceFeatures() {
  const t = useTranslations("SweetDelights");

  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: "#faf5f0" }}>
      <div className="mx-auto max-w-5xl px-6">
        {/* Left-aligned title with rose accent line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div
            className="mb-4 h-[3px] w-12 rounded-full"
            style={{ backgroundColor: "#c2185b" }}
          />
          <h2
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "#2d1b14" }}
          >
            {t("features.title")}
          </h2>
        </motion.div>

        {/* Numbered feature cards — 2 column with horizontal slide-in */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.key}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-7 transition-shadow duration-300 hover:shadow-lg sm:p-8"
              style={{
                borderLeft: "4px solid transparent",
                borderImage: "linear-gradient(to bottom, #c2185b, #ff6f00) 1",
              }}
            >
              {/* Oversized number watermark */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 font-[family-name:var(--font-playfair)] text-[7rem] font-bold leading-none select-none"
                style={{ color: "rgba(194,24,91,0.10)" }}
              >
                {feature.num}
              </span>

              {/* Icon */}
              <div
                className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "rgba(194, 24, 91, 0.12)" }}
              >
                <feature.Icon className="h-6 w-6" style={{ color: "#c2185b" }} />
              </div>

              {/* Text */}
              <h3
                className="relative font-[family-name:var(--font-playfair)] text-lg font-semibold"
                style={{ color: "#2d1b14" }}
              >
                {t(`features.${feature.key}.title`)}
              </h3>
              <p
                className="relative mt-2 text-sm leading-relaxed sm:text-base"
                style={{ color: "#8b7355" }}
              >
                {t(`features.${feature.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
