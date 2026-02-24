"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { key: "projects", value: 50, suffix: "+" },
  { key: "technologies", value: 15, suffix: "+" },
  { key: "experience", value: 7, suffix: "+" },
  { key: "coffee", value: 999, suffix: "+" },
];

export default function Stats() {
  const t = useTranslations("Stats");

  return (
    <section className="relative py-12 sm:py-16 md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[200px] w-[300px] rounded-full bg-cyan/5 blur-[80px] sm:h-[300px] sm:w-[600px] sm:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-5 md:px-8">
        <div className="glass glow-cyan overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Top gradient bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

          <div className="grid grid-cols-2 divide-x divide-border/30 md:grid-cols-4">
            {stats.map(({ key, value, suffix }, index) => (
              <ScrollReveal key={key} delay={index * 0.1}>
                <div className="group px-2 py-5 text-center sm:px-4 sm:py-8 md:px-8 md:py-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="mb-1 font-[family-name:var(--font-syne)] text-2xl font-bold text-cyan sm:mb-2 sm:text-3xl md:text-5xl">
                      <AnimatedCounter target={value} suffix={suffix} />
                    </div>
                    <div className="text-[10px] font-medium uppercase tracking-widest text-text-muted sm:text-xs md:text-sm">
                      {t(key)}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom gradient bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
