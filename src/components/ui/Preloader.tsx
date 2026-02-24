"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-base"
        >
          {/* Animated orb behind logo */}
          <div
            className="absolute h-[180px] w-[180px] rounded-full opacity-40 blur-[60px] sm:h-[300px] sm:w-[300px] sm:blur-[80px]"
            style={{
              background: "var(--orb-cyan)",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="gradient-text">Port</span>
            <span className="text-text">folio</span>
          </motion.div>

          {/* Loading bar */}
          <div className="relative mt-6 h-[2px] w-36 overflow-hidden rounded-full bg-border/30 sm:mt-8 sm:w-48">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-cyan to-amber"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
