"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["about", "skills", "projects", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((id) => document.getElementById(id));
      let current = "";

      for (const section of sections) {
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/30 bg-base/80 backdrop-blur-xl shadow-[var(--navbar-shadow)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-5 md:px-8">
        <a
          href="#"
          className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight sm:text-xl"
        >
          <span className="gradient-text">Port</span>
          <span className="text-text">folio</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === key
                  ? "text-cyan"
                  : "text-text-dim hover:text-text"
              }`}
            >
              {t(key)}
              <span
                className={`absolute bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-cyan to-amber transition-all duration-300 ${
                  activeSection === key
                    ? "w-3/4 shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                    : "w-0 group-hover:w-3/4"
                }`}
              />
            </a>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-dim transition-colors hover:text-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border/30 bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-4 py-2 sm:px-5 sm:py-3">
              {navLinks.map((key, i) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`block py-3 text-sm font-medium transition-colors ${
                    activeSection === key
                      ? "text-cyan"
                      : "text-text-dim hover:text-cyan"
                  }`}
                >
                  {t(key)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
