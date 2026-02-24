"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillCard from "@/components/ui/SkillCard";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineCube,
  HiOutlineEye,
  HiOutlineChip,
  HiOutlineSparkles,
} from "react-icons/hi";

const skills = [
  { key: "frontend", icon: <HiOutlineCode size={28} /> },
  { key: "backend", icon: <HiOutlineServer size={28} /> },
  { key: "gamedev", icon: <HiOutlineCube size={28} /> },
  { key: "vr", icon: <HiOutlineEye size={28} /> },
  { key: "hardware", icon: <HiOutlineChip size={28} /> },
  { key: "more", icon: <HiOutlineSparkles size={28} /> },
] as const;

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[250px] w-[250px] -translate-y-1/2 translate-x-1/2 rounded-full bg-amber/5 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber sm:mb-12 md:mb-16" />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {skills.map(({ key, icon }, index) => (
            <SkillCard
              key={key}
              icon={icon}
              title={t(`${key}.title`)}
              description={t(`${key}.desc`)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
