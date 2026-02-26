"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── Typewriter Effect ── */
function Typewriter({ text, delay = 0, speed = 40 }: { text: string; delay?: number; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <>
      {displayed}
      {displayed.length < text.length && <span className="typewriter-cursor" style={{ backgroundColor: "#8b5cf6" }} />}
    </>
  );
}

export default function SmartHomeHero() {
  const t = useTranslations("NovaTech");
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const brandText = t("brand");
  const brandChars = brandText.split("");

  return (
    <>
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden px-6">
      {/* Scan-sweep line overlay (HUD feel) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.4) 30%, rgba(6,182,212,0.5) 50%, rgba(139,92,246,0.4) 70%, transparent 100%)",
            animation: "scan-sweep 6s ease-in-out infinite",
            boxShadow: "0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(6,182,212,0.15)",
          }}
        />
      </div>

      {/* Animated dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          animation: "dot-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Mouse-following gradient orb — larger, smoother */}
      <div
        className="pointer-events-none absolute h-[700px] w-[700px] rounded-full opacity-[0.07] blur-[120px] transition-all duration-[800ms] ease-out"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #06b6d4 40%, transparent 70%)",
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Subtle gradient orbs — corner orb breathe */}
      <div
        className="pointer-events-none absolute -left-60 -top-60 h-[700px] w-[700px] rounded-full opacity-[0.06] blur-[140px]"
        style={{
          background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
          animation: "orb-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-60 -right-60 h-[700px] w-[700px] rounded-full opacity-[0.05] blur-[140px]"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          animation: "orb-breathe 8s ease-in-out infinite 2s",
        }}
      />

      {/* Centered content — NOT split layout */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center pt-32 pb-16 text-center lg:pt-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          style={{ backgroundColor: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.15)" }}
        >
          <span className="relative h-1.5 w-1.5">
            <span
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: "#8b5cf6",
              }}
            />
            <span
              className="absolute inset-0 rounded-full"
              style={{
                border: "1px solid rgba(139,92,246,0.6)",
                animation: "pulse-ring 2s ease-out infinite",
              }}
            />
          </span>
          <span className="text-xs font-medium tracking-wide" style={{ color: "#a78bfa" }}>
            Powered by AI
          </span>
        </motion.div>

        {/* Large centered brand name — character stagger with mask reveal */}
        <h1 className="font-[family-name:var(--font-inter)] text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl" style={{ color: "#fafafa" }}>
          {brandChars.map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.04, ease }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Gradient tagline with typewriter effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-6 font-[family-name:var(--font-inter)] text-xl font-semibold sm:text-2xl"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4, #8b5cf6)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 3s ease-in-out infinite",
          }}
        >
          <Typewriter text={t("hero.tagline")} delay={600} speed={35} />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: "#71717a" }}
        >
          {t("hero.description")}
        </motion.p>

        {/* Centered buttons — staggered */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
          >
            <button className="nova-btn px-8 py-3.5 text-sm font-semibold">
              {t("hero.cta")}
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            <button className="nova-btn-outline px-8 py-3.5 text-sm font-semibold">
              {t("hero.ctaSecondary")}
            </button>
          </motion.div>
        </div>

        {/* Floating product screenshot in premium glowing frame */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease }}
          className="mt-16 w-full max-w-5xl"
          style={{ perspective: 1200, animation: "float-slow 8s ease-in-out infinite" }}
        >
          {/* Gradient border wrapper */}
          <div
            className="rounded-xl p-[1px]"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(6,182,212,0.3), rgba(139,92,246,0.2))",
              backgroundSize: "200% 200%",
              animation: "nova-border-shift 4s ease infinite",
            }}
          >
            <div
              className="overflow-hidden rounded-[11px]"
              style={{
                boxShadow:
                  "0 0 120px rgba(139,92,246,0.15), 0 0 60px rgba(139,92,246,0.1), 0 25px 80px rgba(0,0,0,0.6)",
                animation: "nova-screenshot-glow-enhanced 4s ease-in-out infinite",
              }}
            >
              <div className="relative">
                {/* Fake browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ backgroundColor: "#111113" }}>
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
                  </div>
                  <div className="ml-4 flex-1 rounded-md px-3 py-1 text-center text-xs" style={{ backgroundColor: "#1a1a1f", color: "#52525b" }}>
                    app.novatech.io/dashboard
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format&fit=crop"
                  alt="NovaTech Platform Dashboard"
                  className="w-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
                {/* Bottom gradient fade */}
                <div
                  className="absolute inset-x-0 bottom-0 h-32"
                  style={{
                    background: "linear-gradient(to top, #09090b, transparent)",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Infinite Marquee Strip ── */}
    <div className="overflow-hidden border-y" style={{ backgroundColor: "#0f0f12", borderColor: "rgba(139,92,246,0.1)" }}>
      <div className="marquee-track" style={{ "--marquee-duration": "28s" } as React.CSSProperties}>
        {Array.from({ length: 2 }).map((_, setIdx) => (
          <div key={setIdx} className="flex shrink-0 items-center">
            {["AI-Powered", "Real-time Analytics", "99.9% Uptime", "Enterprise Ready", "SOC 2 Certified", "50M+ Events", "Team Collaboration", "API First"].map((text, i) => (
              <span key={i} className="marquee-item flex items-center gap-6 py-4">
                <span
                  className="font-[family-name:var(--font-inter)] text-sm font-medium uppercase tracking-[0.15em]"
                  style={{ color: "#a78bfa" }}
                >
                  {text}
                </span>
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#8b5cf6" }} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
