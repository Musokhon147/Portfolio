"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[20%] top-[30%] h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "var(--orb-cyan)",
            animation: "float 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[20%] right-[20%] h-[300px] w-[300px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: "var(--orb-amber)",
            animation: "float-slow 15s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-[family-name:var(--font-syne)] text-[8rem] font-bold leading-none tracking-tighter md:text-[12rem]"
        >
          <span className="gradient-text">4</span>
          <span
            className="inline-block text-cyan"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            0
          </span>
          <span className="gradient-text">4</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-lg text-text-dim md:text-xl"
        >
          This page doesn&apos;t exist. Maybe it was never built... yet.
        </motion.p>

        <motion.a
          href="/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cyan px-8 py-3.5 text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        >
          <svg
            className="relative z-10 h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="relative z-10">Go Home</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan to-cyan-light opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.a>
      </div>
    </div>
  );
}
