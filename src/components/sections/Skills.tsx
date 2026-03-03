"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import SkillCard from "@/components/ui/SkillCard";

const skills = [
  {
    key: "frontend",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80&auto=format&fit=crop",
    proficiencies: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind", level: 92 },
    ],
  },
  {
    key: "backend",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&q=80&auto=format&fit=crop",
    proficiencies: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    key: "gamedev",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&q=80&auto=format&fit=crop",
    proficiencies: [
      { name: "Unity", level: 88 },
      { name: "C#", level: 85 },
      { name: "Blender", level: 70 },
      { name: "Shader Graph", level: 65 },
    ],
  },
  {
    key: "vr",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=80&auto=format&fit=crop",
    proficiencies: [
      { name: "Unity XR", level: 82 },
      { name: "OpenXR", level: 78 },
      { name: "Meta Quest", level: 80 },
      { name: "3D Modeling", level: 68 },
    ],
  },
  {
    key: "hardware",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80&auto=format&fit=crop",
    proficiencies: [
      { name: "Arduino", level: 85 },
      { name: "Raspberry Pi", level: 78 },
      { name: "IoT", level: 72 },
      { name: "Sensors", level: 80 },
    ],
  },
  {
    key: "more",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&auto=format&fit=crop",
    proficiencies: [
      { name: "Figma", level: 85 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 72 },
      { name: "Mobile", level: 70 },
    ],
  },
];

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-[250px] w-[250px] -translate-y-1/2 translate-x-1/2 rounded-full bg-amber/5 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
          <TextReveal text={t("title")} className="gradient-text" />
        </h2>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber sm:mb-12 md:mb-16" />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {skills.map(({ key, image, proficiencies }, index) => (
            <SkillCard
              key={key}
              image={image}
              title={t(`${key}.title`)}
              description={t(`${key}.desc`)}
              index={index}
              proficiencies={proficiencies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
