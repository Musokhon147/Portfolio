"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const products = [
  { key: "p1", img: "/images/bakery/strawberry-cake.jpg", featured: true },
  { key: "p2", img: "/images/bakery/chocolate-cake.jpg" },
  { key: "p3", img: "/images/bakery/cupcakes.jpg" },
  { key: "p4", img: "/images/bakery/red-velvet.jpg" },
  { key: "p5", img: "/images/bakery/lemon-tart.jpg" },
  { key: "p6", img: "/images/bakery/macarons.jpg", horizontal: true },
];

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
          className="mb-12"
        >
          <div
            className="mb-4 h-[3px] w-12 rounded-full"
            style={{ backgroundColor: "#c2185b" }}
          />
          <h2
            className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "#2d1b14" }}
          >
            {t("products.title")}
          </h2>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-8">
          {/* Product 1 — Featured large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:col-span-7"
          >
            <div className="overflow-hidden">
              <img
                src={products[0].img}
                alt={t("products.p1.name")}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              />
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
                <button className="bakery-btn px-5 py-2 text-xs">
                  {t("products.addToCart")}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg sm:col-span-5"
          >
            <div className="overflow-hidden">
              <img
                src={products[1].img}
                alt={t("products.p2.name")}
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56"
                loading="lazy"
              />
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
                <button className="bakery-btn px-5 py-2 text-xs">
                  {t("products.addToCart")}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Products 3, 4, 5 — Standard row */}
          {[products[2], products[3], products[4]].map((product, i) => (
            <motion.div
              key={product.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg sm:col-span-4"
            >
              <div className="overflow-hidden">
                <img
                  src={product.img}
                  alt={t(`products.${product.key}.name`)}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-48"
                  loading="lazy"
                />
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
                  <button className="bakery-btn px-5 py-2 text-xs">
                    {t("products.addToCart")}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Product 6 — Full-width horizontal card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg sm:col-span-12 sm:flex-row"
          >
            <div className="overflow-hidden sm:w-1/3">
              <img
                src={products[5].img}
                alt={t("products.p6.name")}
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full sm:min-h-[200px]"
                loading="lazy"
              />
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
                <button className="bakery-btn px-6 py-2.5 text-sm">
                  {t("products.addToCart")}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
