"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["home", "features", "pricing", "docs", "blog"] as const;
const ease = [0.16, 1, 0.3, 1] as const;

export default function SmartHomeNav() {
  const t = useTranslations("NovaTech");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className="flex w-full max-w-3xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 sm:px-6"
          style={{
            backgroundColor: scrolled
              ? "rgba(9,9,11,0.92)"
              : "rgba(9,9,11,0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(39,39,42,0.5)",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.3)"
              : "0 2px 20px rgba(0,0,0,0.15)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-inter)] text-base font-semibold text-white sm:text-lg"
          >
            Nova<span style={{ color: "#8b5cf6" }}>Tech</span>
          </a>

          {/* Desktop links — staggered entrance with animated underline */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05, ease }}
                className="nova-nav-link text-sm font-medium transition-colors duration-300 hover:text-[#8b5cf6]"
                style={{ color: "#71717a" }}
              >
                {t(`nav.${link}`)}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="nova-btn hidden rounded-full px-5 py-2 text-xs lg:block">
            {t("nav.cta")}
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            style={{ color: "#a78bfa" }}
          >
            <HiMenu className="h-5 w-5" />
          </button>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            style={{ backgroundColor: "rgba(9,9,11,0.98)" }}
          >
            <button
              className="absolute top-5 right-6"
              onClick={() => setMenuOpen(false)}
              style={{ color: "#a78bfa" }}
            >
              <HiX className="h-7 w-7" />
            </button>
            <div className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease }}
                  className="font-[family-name:var(--font-inter)] text-2xl font-semibold text-white transition-colors duration-300 hover:text-[#8b5cf6]"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${link}`)}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ease }}
                className="nova-btn mt-4 px-8 py-3 text-sm"
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
