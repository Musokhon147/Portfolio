"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function SkillCard({
  icon,
  title,
  description,
  index,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <TiltCard className="group h-full">
        <div className="glass glass-hover relative h-full overflow-hidden rounded-2xl p-6">
          {/* Corner accent */}
          <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-cyan/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="mb-5 inline-flex rounded-xl bg-cyan/10 p-3 text-cyan transition-all duration-300 group-hover:bg-cyan/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            {icon}
          </div>
          <h3 className="mb-2 font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight text-text">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-text-muted">
            {description}
          </p>
        </div>
      </TiltCard>
    </motion.div>
  );
}
