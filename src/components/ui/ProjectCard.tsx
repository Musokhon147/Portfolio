"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "@/i18n/navigation";
import TiltCard from "@/components/ui/TiltCard";

interface ProjectCardProps {
  titleKey: string;
  descKey: string;
  tags: string[];
  href: string;
  index: number;
}

export default function ProjectCard({
  titleKey,
  descKey,
  tags,
  href,
  index,
}: ProjectCardProps) {
  const t = useTranslations("Projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <Link href={href} className="block h-full">
        <TiltCard className="group h-full">
          <div className="glass glass-hover relative flex h-full flex-col overflow-hidden rounded-2xl">
            {/* Top gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan via-cyan-light to-amber opacity-60 transition-opacity group-hover:opacity-100" />

            <div className="flex flex-1 flex-col p-4 sm:p-6">
              <div className="mb-2 flex items-start justify-between sm:mb-3">
                <h3 className="font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-text sm:text-lg">
                  {t(titleKey)}
                </h3>
                <div className="rounded-lg p-2 text-text-muted transition-all group-hover:bg-cyan/10 group-hover:text-cyan">
                  <HiOutlineArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <p className="mb-4 flex-1 text-xs leading-relaxed text-text-muted sm:mb-5 sm:text-sm">
                {t(descKey)}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/50 bg-elevated/50 px-2 py-0.5 text-[10px] font-medium text-text-dim transition-colors group-hover:border-cyan/20 group-hover:text-text-dim sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}
