"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlinePencil,
  HiOutlineTruck,
  HiOutlineHeart,
} from "react-icons/hi";

function HandDrawnUnderline({ color = "#c2185b" }: { color?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-2 left-0 w-full"
      style={{ overflow: "visible" }}
    >
      <motion.path
        d="M0 5 C30 2, 50 8, 80 4 S130 1, 160 5 S190 7, 200 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      />
    </motion.svg>
  );
}

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
      staggerChildren: 0,
    },
  },
};

/* Diagonal wave stagger — delay based on grid position (row + col) */
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (waveDelay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: waveDelay, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
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
          <div className="relative inline-block">
            <h2
              className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "#2d1b14" }}
            >
              {t("features.title")}
            </h2>
            <HandDrawnUnderline />
          </div>
        </motion.div>

        {/* Numbered feature cards — 2 column with horizontal slide-in */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2"
        >
          {features.map((feature, index) => {
            const row = Math.floor(index / 2);
            const col = index % 2;
            const waveDelay = (row + col) * 0.15;
            return (
            <motion.div
              key={feature.key}
              variants={itemVariants}
              custom={waveDelay}
              className="bakery-card-premium group relative overflow-hidden p-7 warm-shimmer-hover sm:p-8"
              style={{
                borderLeft: "4px solid transparent",
                borderImage: "linear-gradient(to bottom, #c2185b, #ff6f00) 1",
              }}
            >
              {/* Animated left accent bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full w-1 origin-top"
                style={{ background: "linear-gradient(to bottom, #c2185b, #ff6f00)" }}
              />

              {/* Oversized number watermark */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 font-[family-name:var(--font-playfair)] text-[7rem] font-bold leading-none select-none"
                style={{ color: "rgba(194,24,91,0.10)" }}
              >
                {feature.num}
              </span>

              {/* Icon with rotate+scale on hover */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300"
                style={{ backgroundColor: "rgba(194, 24, 91, 0.12)" }}
              >
                <feature.Icon className="h-6 w-6" style={{ color: "#c2185b" }} />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative font-[family-name:var(--font-playfair)] text-lg font-semibold"
                style={{ color: "#2d1b14" }}
              >
                {t(`features.${feature.key}.title`)}
              </motion.h3>

              {/* Description — staggered 100ms after title */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative mt-2 text-sm leading-relaxed sm:text-base"
                style={{ color: "#8b7355" }}
              >
                {t(`features.${feature.key}.desc`)}
              </motion.p>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
