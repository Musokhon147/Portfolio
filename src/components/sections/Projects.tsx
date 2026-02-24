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
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 pt-24 md:px-8">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-16 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber" />
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.titleKey} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
