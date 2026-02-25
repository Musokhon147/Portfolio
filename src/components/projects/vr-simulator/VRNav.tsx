"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["home", "programs", "pricing", "trainers", "contact"] as const;

export default function VRNav() {
  const t = useTranslations("IronForge");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(249,115,22,0.15)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-white sm:text-3xl"
          >
            IRON<span style={{ color: "#f97316" }}>FORGE</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-[family-name:var(--font-bebas)] text-sm uppercase tracking-[0.15em] text-white/70 transition-colors duration-200 hover:text-[#f97316]"
              >
                {t(`nav.${link}`)}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="gym-btn hidden px-6 py-2.5 text-xs lg:block">
            {t("nav.cta")}
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            style={{ color: "#f97316" }}
          >
            <HiMenu className="h-7 w-7" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            style={{ backgroundColor: "#050505" }}
          >
            <button
              className="absolute top-5 right-6"
              onClick={() => setMenuOpen(false)}
              style={{ color: "#f97316" }}
            >
              <HiX className="h-8 w-8" />
            </button>
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-wider text-white transition-colors duration-200 hover:text-[#f97316]"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${link}`)}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="gym-btn mt-6 px-10 py-3"
                onClick={() => setMenuOpen(false)}
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
