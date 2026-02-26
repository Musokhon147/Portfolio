"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiHeart } from "react-icons/hi";

const images = [
  { src: "https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=600&q=80&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&q=80&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&q=80&auto=format&fit=crop" },
  { src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&q=80&auto=format&fit=crop" },
];

export default function EcommerceGallery() {
  const t = useTranslations("SweetDelights");
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Horizontal scroll driven by vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <section ref={containerRef} className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: "#fff3e0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 h-[3px] w-16 rounded-full origin-left"
            style={{ background: "linear-gradient(to right, #c2185b, #ff6f00)" }}
          />
          <h2
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "#2d1b14" }}
          >
            {t("gallery.title")}
          </h2>
          <p
            className="mt-3 font-[family-name:var(--font-playfair)] text-base italic"
            style={{ color: "#c2185b" }}
          >
            {t("gallery.subtitle")}
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery — driven by vertical scroll */}
      <motion.div
        style={{ x }}
        className="flex gap-5 px-6"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
            className="group relative shrink-0 overflow-hidden rounded-2xl"
            style={{ width: i % 3 === 0 ? 380 : 300 }}
          >
            <img
              src={img.src}
              alt={`Gallery ${i + 1}`}
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-80"
              decoding="async"
              loading="lazy"
            />
            {/* Premium hover overlay with blur */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 backdrop-blur-0 transition-all duration-500 group-hover:bg-black/40 group-hover:backdrop-blur-[2px]">
              <HiHeart className="h-8 w-8 text-white opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100" style={{ filter: "drop-shadow(0 0 8px rgba(194, 24, 91, 0.5))" }} />
            </div>
            {/* Image counter badge */}
            <div className="absolute bottom-3 right-3 rounded-full px-2.5 py-0.5 text-xs font-medium text-white/70 backdrop-blur-md" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
