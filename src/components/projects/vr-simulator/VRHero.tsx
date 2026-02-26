"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

/* ── Text Scramble Effect ── */
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

function useTextScramble(text: string, delay = 300) {
  const [displayed, setDisplayed] = useState(text.split("").map(() => " "));
  const [done, setDone] = useState(false);

  const scramble = useCallback(() => {
    const chars = text.split("");
    const iterations = 8; // scramble cycles per character
    let frame = 0;
    const totalFrames = chars.length * 3 + iterations;

    const interval = setInterval(() => {
      setDisplayed(
        chars.map((char, i) => {
          if (char === " ") return " ";
          const charStart = i * 3;
          if (frame >= charStart + iterations) return char;
          if (frame >= charStart) return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          return " ";
        })
      );
      frame++;
      if (frame > totalFrames) {
        clearInterval(interval);
        setDisplayed(chars);
        setDone(true);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(scramble, delay);
    return () => clearTimeout(timer);
  }, [scramble, delay]);

  return { displayed, done };
}

export default function VRHero() {
  const t = useTranslations("IronForge");

  const brandText = t("brand");
  const brandChars = brandText.split("");
  const { displayed: scrambledChars } = useTextScramble(brandText, 400);

  // Floating ember particles — more particles, varied sizes
  const embers = [
    { top: "10%", right: "6%", size: 5, duration: 3.5 },
    { top: "20%", right: "15%", size: 3, duration: 4.8 },
    { top: "35%", right: "18%", size: 4, duration: 4.2 },
    { top: "45%", right: "10%", size: 6, duration: 5.0 },
    { top: "55%", right: "5%", size: 7, duration: 5.0 },
    { top: "60%", right: "25%", size: 3, duration: 6.2 },
    { top: "70%", right: "22%", size: 4, duration: 3.8 },
    { top: "80%", right: "8%", size: 5, duration: 5.5 },
    { top: "90%", right: "15%", size: 3, duration: 4.5 },
  ];

  return (
    <>
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Full dark overlay on mobile, diagonal clip-path on lg+ */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{ backgroundColor: "rgba(5,5,5,0.85)" }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundColor: "#050505",
          clipPath: "polygon(0 0, 62% 0, 38% 100%, 0 100%)",
        }}
      />

      {/* Subtle diagonal stripe texture on dark area — lg only */}
      <div
        className="absolute inset-0 hidden opacity-[0.05] lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(249,115,22,0.15) 10px, rgba(249,115,22,0.15) 11px)",
          clipPath: "polygon(0 0, 62% 0, 38% 100%, 0 100%)",
          animation: "stripe-scroll 15s linear infinite",
        }}
      />

      {/* Scan line texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 3px)",
          animation: "scan-lines-scroll 8s linear infinite",
        }}
      />

      {/* Floating ember particles — visible on all screens */}
      {embers.map((ember, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
          className="pointer-events-none absolute"
          style={{
            top: ember.top,
            right: ember.right,
            width: ember.size,
            height: ember.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, #f97316 0%, #facc15 60%, transparent 100%)`,
            filter: "blur(1.5px)",
            boxShadow: "0 0 8px rgba(249,115,22,0.6), 0 0 20px rgba(249,115,22,0.2)",
            animation: `glow-pulse-orange ${ember.duration}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {/* Rising heat particles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`rise-${i}`}
          className="pointer-events-none absolute hidden lg:block"
          style={{
            width: 3,
            height: 3,
            borderRadius: "50%",
            left: `${30 + i * 10}%`,
            bottom: "10%",
            backgroundColor: "#f97316",
            opacity: 0.5,
            animation: `rise-float ${8 + i * 3}s ease-in infinite`,
            animationDelay: `${i * 2}s`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Content on dark side */}
      <div className="relative flex min-h-screen items-center px-8 sm:px-12 md:px-20">
        <div className="max-w-lg">
          {/* Brand — massive, text scramble reveal */}
          <h1 className="font-[family-name:var(--font-bebas)] text-7xl uppercase leading-[0.85] tracking-wider text-white sm:text-8xl lg:text-9xl">
            {scrambledChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 + i * 0.03 }}
                className="inline-block"
                style={{
                  color: char !== brandChars[i] ? "#f97316" : "white",
                  textShadow: char !== brandChars[i] ? "0 0 10px rgba(249,115,22,0.6)" : "none",
                  transition: "color 0.15s, text-shadow 0.15s",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.25 }}
            className="mt-4 font-[family-name:var(--font-bebas)] text-xl uppercase tracking-[0.15em] sm:text-2xl"
            style={{ color: "#f97316" }}
          >
            {t("hero.tagline")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 max-w-sm text-base leading-relaxed"
            style={{ color: "#b5b5b5" }}
          >
            {t("hero.description")}
          </motion.p>

          {/* Buttons — sharp corners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button className="gym-btn">{t("hero.cta")}</button>
            <button className="gym-btn-outline">{t("hero.ctaSecondary")}</button>
          </motion.div>
        </div>
      </div>

      {/* Floating stat badge — at diagonal edge with enhanced glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.8 }}
        className="absolute bottom-16 right-8 px-8 py-5 sm:bottom-20 sm:right-16"
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
          boxShadow: "0 0 50px rgba(249,115,22,0.5), 0 0 100px rgba(249,115,22,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
          animation: "badge-pulse 3s ease-in-out infinite",
        }}
      >
        <p className="font-[family-name:var(--font-bebas)] text-4xl tracking-wider text-white sm:text-5xl" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
          5000+
        </p>
        <p className="text-xs font-bold uppercase tracking-wider text-white/80">
          Members
        </p>
      </motion.div>
    </section>

    {/* ── Infinite Marquee Strip ── */}
    <div className="overflow-hidden" style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(249,115,22,0.15)", borderBottom: "1px solid rgba(249,115,22,0.15)" }}>
      <div className="marquee-track" style={{ "--marquee-duration": "22s" } as React.CSSProperties}>
        {Array.from({ length: 2 }).map((_, setIdx) => (
          <div key={setIdx} className="flex shrink-0 items-center">
            {["No Excuses", "Train Hard", "Stay Strong", "Push Limits", "Beast Mode", "Iron Will", "Never Quit", "Go Heavy"].map((text, i) => (
              <span key={i} className="marquee-item flex items-center gap-6 py-3">
                <span
                  className="font-[family-name:var(--font-bebas)] text-base uppercase tracking-[0.25em]"
                  style={{ color: i % 2 === 0 ? "#f97316" : "rgba(255,255,255,0.5)" }}
                >
                  {text}
                </span>
                <span className="h-1 w-4" style={{ backgroundColor: "#f97316", opacity: 0.4 }} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
