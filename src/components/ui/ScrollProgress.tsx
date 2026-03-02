"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] max-w-[100vw] origin-left"
      style={{
        scaleX,
        willChange: "transform",
        background:
          "linear-gradient(90deg, var(--color-cyan), var(--color-cyan-light), var(--color-amber))",
        boxShadow: "var(--progress-shadow)",
      }}
    />
  );
}
