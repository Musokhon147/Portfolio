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
            className="absolute h-[300px] w-[300px] rounded-full opacity-40 blur-[80px]"
            style={{
              background:
                "radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl"
          >
            <span className="gradient-text">Port</span>
            <span className="text-text">folio</span>
          </motion.div>

          {/* Loading bar */}
          <div className="relative mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-border/30">
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
