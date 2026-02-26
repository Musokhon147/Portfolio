"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── Magnetic cursor button wrapper ── */
function MagneticWrap({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * strength,
          y: (e.clientY - rect.top - rect.height / 2) * strength,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function SmartHomeCTA() {
  const t = useTranslations("NovaTech");

  const titleText = t("cta.title");
  const titleWords = titleText.split(" ");

  return (
    <section className="px-6 py-24 sm:py-36" style={{ backgroundColor: "#09090b" }}>
      <div className="mx-auto max-w-3xl">
        {/* Gradient border card — smoother animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="nova-gradient-border"
          style={{ animationDuration: "3s" }}
        >
          {/* Inner card */}
          <div
            className="relative overflow-hidden rounded-[15px] px-8 py-14 text-center sm:px-12 sm:py-16"
            style={{ backgroundColor: "#09090b" }}
          >
            {/* Scan-sweep line */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[15px]">
              <div
                className="absolute left-0 h-[1px] w-full"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.3) 30%, rgba(6,182,212,0.4) 50%, rgba(139,92,246,0.3) 70%, transparent 100%)",
                  animation: "scan-sweep 5s ease-in-out infinite",
                  boxShadow: "0 0 15px rgba(139,92,246,0.2), 0 0 40px rgba(6,182,212,0.1)",
                }}
              />
            </div>
            {/* Pulse-ring ripple — replaces blob-morph */}
            <div className="pointer-events-none absolute opacity-[0.06]" style={{ right: "10%", top: "20%" }}>
              {[0, 1, 2].map((ring) => (
                <div
                  key={ring}
                  className="absolute rounded-full"
                  style={{
                    width: 120,
                    height: 120,
                    border: "1px solid rgba(139,92,246,0.4)",
                    animation: `pulse-ring ${2 + ring * 0.5}s ease-out infinite`,
                    animationDelay: `${ring * 0.6}s`,
                  }}
                />
              ))}
            </div>
            {/* Subtle dot pattern — animated pulse */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                animation: "dot-pulse 4s ease-in-out infinite",
              }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="relative mb-4 text-xs font-medium uppercase tracking-widest"
              style={{ color: "#8b5cf6" }}
            >
              {t("brand")}
            </motion.p>

            {/* Title — word stagger */}
            <h2
              className="relative font-[family-name:var(--font-inter)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: "#fafafa" }}
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease }}
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="relative mx-auto mt-5 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "#71717a" }}
            >
              {t("cta.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="relative mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
            >
              <MagneticWrap strength={0.3}>
                <motion.button
                  whileHover={{ boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  className="nova-btn px-8 py-3.5 text-sm font-semibold"
                >
                  {t("cta.button")}
                </motion.button>
              </MagneticWrap>
              <MagneticWrap strength={0.25}>
                <motion.button
                  whileHover={{ boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="nova-btn-outline px-8 py-3.5 text-sm font-semibold"
                >
                  {t("cta.buttonSecondary")}
                </motion.button>
              </MagneticWrap>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="relative mt-5 text-xs"
              style={{ color: "#52525b" }}
            >
              No credit card required &middot; 14-day free trial
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
