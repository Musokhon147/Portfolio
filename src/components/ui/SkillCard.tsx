"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

interface SkillCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

export default function SkillCard({
  image,
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
        <div className="glass glass-hover relative h-full overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Image header */}
          <div className="relative h-40 w-full overflow-hidden sm:h-48">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            {/* Gradient overlay fading into card body */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
          </div>

          {/* Text content */}
          <div className="relative px-4 pb-4 pt-2 sm:px-6 sm:pb-6 sm:pt-3">
            {/* Corner accent */}
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-cyan/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <h3 className="mb-1.5 font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-text sm:mb-2 sm:text-lg">
              {title}
            </h3>
            <p className="text-xs leading-relaxed text-text-muted sm:text-sm">
              {description}
            </p>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
