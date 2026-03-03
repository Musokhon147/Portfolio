"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const fastSpring = { damping: 30, stiffness: 400, mass: 0.2 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const dotX = useSpring(0, fastSpring);
  const dotY = useSpring(0, fastSpring);
  const ringScale = useMotionValue(1);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    // Hover detection for interactive elements
    const onEnterInteractive = () => {
      setHovering(true);
      ringScale.set(1.6);
    };
    const onLeaveInteractive = () => {
      setHovering(false);
      ringScale.set(1);
    };

    const attachListeners = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterInteractive);
          el.addEventListener("mouseleave", onLeaveInteractive);
        });
    };

    // Attach initially and re-attach on DOM changes
    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      observer.disconnect();
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select")
        .forEach((el) => {
          el.removeEventListener("mouseenter", onEnterInteractive);
          el.removeEventListener("mouseleave", onLeaveInteractive);
        });
    };
  }, [x, y, dotX, dotY, visible, ringScale]);

  if (!visible) return null;

  return (
    <>
      {/* Background glow (toned down) */}
      <motion.div
        className="pointer-events-none fixed z-[9998] h-[400px] w-[400px] rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
          background:
            "radial-gradient(circle, var(--cursor-glow-inner) 0%, var(--cursor-glow-outer) 30%, transparent 70%)",
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full border border-cyan/30"
        style={{
          x,
          y,
          width: 40,
          height: 40,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          willChange: "transform",
        }}
        animate={{ borderColor: hovering ? "var(--color-cyan)" : "rgba(37,99,235,0.3)" }}
        transition={{ duration: 0.2 }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-cyan"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
