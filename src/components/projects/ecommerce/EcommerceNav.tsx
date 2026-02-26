"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["home", "menu", "about", "gallery", "contact"] as const;

export default function EcommerceNav() {
  const t = useTranslations("SweetDelights");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(250,245,240,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); }}
            className="font-[family-name:var(--font-playfair)] text-xl font-bold sm:text-2xl"
            style={{ color: "#2d1b14" }}
          >
            <span style={{ color: "#c2185b" }}>.</span>
            Sweet Delights
          </a>

          {/* Desktop links — staggered entrance + bakery-nav-link class */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link}`}
                onClick={(e) => { e.preventDefault(); document.getElementById(link)?.scrollIntoView({ behavior: "smooth" }); }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                className="bakery-nav-link relative text-sm font-medium transition-colors duration-300 hover:text-[#c2185b]"
                style={{ color: "#8b7355" }}
              >
                {t(`nav.${link}`)}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden bakery-btn px-5 py-2 text-xs lg:block"
          >
            {t("nav.cta")}
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            style={{ color: "#2d1b14" }}
          >
            <HiMenu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            style={{ backgroundColor: "rgba(250,245,240,0.98)" }}
          >
            <button
              className="absolute top-5 right-6"
              onClick={() => setMenuOpen(false)}
              style={{ color: "#2d1b14" }}
            >
              <HiX className="h-7 w-7" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-[family-name:var(--font-playfair)] text-2xl font-semibold transition-colors duration-300 hover:text-[#c2185b]"
                  style={{ color: "#2d1b14" }}
                  onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById(link)?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  {t(`nav.${link}`)}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bakery-btn mt-4 px-8 py-3"
                onClick={() => { setMenuOpen(false); document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                {t("nav.cta")}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
