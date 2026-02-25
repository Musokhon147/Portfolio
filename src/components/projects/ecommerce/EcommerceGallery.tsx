"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiHeart } from "react-icons/hi";

const images = [
  { src: "/images/bakery/gallery-1.jpg", tall: true },
  { src: "/images/bakery/gallery-2.jpg", tall: false },
  { src: "/images/bakery/gallery-3.jpg", tall: false },
  { src: "/images/bakery/gallery-4.jpg", tall: true },
  { src: "/images/bakery/gallery-5.jpg", tall: false },
  { src: "/images/bakery/gallery-6.jpg", tall: true },
  { src: "/images/bakery/gallery-7.jpg", tall: false },
  { src: "/images/bakery/gallery-8.jpg", tall: false },
];

export default function EcommerceGallery() {
  const t = useTranslations("SweetDelights");

  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: "#fff3e0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
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
            {t("gallery.title")}
          </h2>
          <p
            className="mt-3 font-[family-name:var(--font-playfair)] text-base italic"
            style={{ color: "#c2185b" }}
          >
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl ${
                img.tall ? "row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={`Gallery ${i + 1}`}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  img.tall ? "h-64 sm:h-full" : "h-40 sm:h-48 lg:h-52"
                }`}
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                <HiHeart className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
