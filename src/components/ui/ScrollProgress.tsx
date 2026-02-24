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
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #06b6d4, #22d3ee, #f59e0b)",
        boxShadow: "0 0 10px rgba(6, 182, 212, 0.5), 0 0 30px rgba(6, 182, 212, 0.2)",
      }}
    />
  );
}
