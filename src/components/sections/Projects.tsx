"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    titleKey: "project1.title",
    descKey: "project1.desc",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    titleKey: "project2.title",
    descKey: "project2.desc",
    tags: ["Unity", "C#", "VR", "Oculus SDK"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    titleKey: "project3.title",
    descKey: "project3.desc",
    tags: ["Arduino", "React Native", "MQTT", "Node.js"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    titleKey: "project4.title",
    descKey: "project4.desc",
    tags: ["Unity", "C#", "2D", "Custom Physics"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber sm:mb-12 md:mb-16" />
        </ScrollReveal>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.titleKey} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
