"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);

  // Shine + glow position follows cursor
  const shineX = useTransform(mouseX, [0, 1], [0, 100]);
  const shineY = useTransform(mouseY, [0, 1], [0, 100]);

  // Opposite-direction shadow for 3D depth
  const shadowX = useSpring(useTransform(mouseX, [0, 1], [6, -6]), springConfig);
  const shadowY = useSpring(useTransform(mouseY, [0, 1], [6, -6]), springConfig);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Opposite-direction depth shadow */}
      <motion.div
        className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-cyan/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ x: shadowX, y: shadowY }}
      />
      {children}
      {/* Two-layer cursor glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [shineX, shineY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, var(--card-glow) 0%, transparent 40%), radial-gradient(circle at ${x}% ${y}%, var(--tilt-shine) 0%, transparent 70%)`
          ),
        }}
      />
    </motion.div>
  );
}
