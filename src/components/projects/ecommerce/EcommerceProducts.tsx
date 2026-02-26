"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const products = [
  { key: "p1", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80&auto=format&fit=crop", featured: true },
  { key: "p2", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&auto=format&fit=crop" },
  { key: "p3", img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=80&auto=format&fit=crop" },
  { key: "p4", img: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=800&q=80&auto=format&fit=crop" },
  { key: "p5", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80&auto=format&fit=crop" },
  { key: "p6", img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80&auto=format&fit=crop", horizontal: true },
];

/* 3D tilt card hook */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg)", transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)" });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    });
  };

  return { ref, style, onMouseMove, onMouseLeave };
}

function ProductCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const tilt = useTilt();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={tilt.style}
        className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl warm-shimmer-hover"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function EcommerceProducts() {
  const t = useTranslations("SweetDelights");

  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: "#fff3e0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Left-aligned title with rose accent line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
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
            {t("products.title")}
          </h2>
        </motion.div>

        {/* Asymmetric editorial grid with 3D tilt cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-8">
          {/* Product 1 — Featured large */}
          <ProductCard className="sm:col-span-7" delay={0}>
            <div className="relative overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <img
                  src={products[0].img}
                  alt={t("products.p1.name")}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-96"
                  decoding="async"
                  fetchPriority="high"
                />
              </motion.div>
              {/* Premium overlay with blur */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                <motion.span
                  initial={false}
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  View Details
                </motion.span>
              </div>
            </div>
            <div className="p-6">
              <h3
                className="font-[family-name:var(--font-playfair)] text-xl font-semibold"
                style={{ color: "#2d1b14" }}
              >
                {t("products.p1.name")}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-lg font-bold" style={{ color: "#c2185b" }}>
                  {t("products.p1.price")}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bakery-btn px-5 py-2 text-xs"
                >
                  {t("products.addToCart")}
                </motion.button>
              </div>
            </div>
          </ProductCard>

          {/* Product 2 */}
          <ProductCard className="sm:col-span-5" delay={0.12}>
            <div className="relative overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.12 }}
              >
                <img
                  src={products[1].img}
                  alt={t("products.p2.name")}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-64"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Details
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3
                className="font-[family-name:var(--font-playfair)] text-lg font-semibold"
                style={{ color: "#2d1b14" }}
              >
                {t("products.p2.name")}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-lg font-bold" style={{ color: "#c2185b" }}>
                  {t("products.p2.price")}
                </p>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bakery-btn px-5 py-2 text-xs">
                  {t("products.addToCart")}
                </motion.button>
              </div>
            </div>
          </ProductCard>

          {/* Products 3, 4, 5 — Standard row with tilt */}
          {[products[2], products[3], products[4]].map((product, i) => (
            <ProductCard key={product.key} className="sm:col-span-4" delay={0.1 * i}>
              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 * i }}
                >
                  <img
                    src={product.img}
                    alt={t(`products.${product.key}.name`)}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-56"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="font-[family-name:var(--font-playfair)] text-lg font-semibold"
                  style={{ color: "#2d1b14" }}
                >
                  {t(`products.${product.key}.name`)}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-bold" style={{ color: "#c2185b" }}>
                    {t(`products.${product.key}.price`)}
                  </p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bakery-btn px-5 py-2 text-xs">
                    {t("products.addToCart")}
                  </motion.button>
                </div>
              </div>
            </ProductCard>
          ))}

          {/* Product 6 — Full-width horizontal card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="sm:col-span-12"
          >
            <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-2xl sm:flex-row warm-shimmer-hover">
              <div className="relative overflow-hidden sm:w-1/3">
                <motion.div
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="h-full"
                >
                  <img
                    src={products[5].img}
                    alt={t("products.p6.name")}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-full sm:min-h-[200px]"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm">
                    View Details
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                <h3
                  className="font-[family-name:var(--font-playfair)] text-xl font-semibold"
                  style={{ color: "#2d1b14" }}
                >
                  {t("products.p6.name")}
                </h3>
                <div className="mt-4 flex items-center gap-6">
                  <p className="text-xl font-bold" style={{ color: "#c2185b" }}>
                    {t("products.p6.price")}
                  </p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bakery-btn px-6 py-2.5 text-sm">
                    {t("products.addToCart")}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
