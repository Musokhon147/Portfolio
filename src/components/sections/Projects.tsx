"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "@/i18n/navigation";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

type InternalProject = {
  titleKey: string;
  descKey: string;
  tags: string[];
  href: string;
  domain: string;
  external?: false;
};

type ExternalProject = {
  titleKey: string;
  descKey: string;
  tags: string[];
  domain: string;
  external: true;
  externalUrl: string;
  screenshot: string;
};

type Project = InternalProject | ExternalProject;

const projects: Project[] = [
  {
    titleKey: "project1.title",
    descKey: "project1.desc",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    href: "/projects/ecommerce",
    domain: "sweetdelights.com",
  },
  {
    titleKey: "project2.title",
    descKey: "project2.desc",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    href: "/projects/vr-simulator",
    domain: "ironforge.fit",
  },
  {
    titleKey: "project3.title",
    descKey: "project3.desc",
    tags: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
    href: "/projects/smart-home",
    domain: "novatech.io",
  },
{
    titleKey: "project4.title",
    descKey: "project4.desc",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    domain: "eduassess.uz",
    external: true,
    externalUrl: "https://eduassess.uz",
    screenshot: "/images/projects/eduassess.png",
  },
  {
    titleKey: "project5.title",
    descKey: "project5.desc",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    domain: "playm8sports.com",
    external: true,
    externalUrl: "https://playm8sports.com",
    screenshot: "/images/projects/playm8sports.png",
  },
  {
    titleKey: "project6.title",
    descKey: "project6.desc",
    tags: ["Next.js", "TypeScript", "AI", "Supabase"],
    domain: "hikoyam.uz",
    external: true,
    externalUrl: "https://hikoyam.uz",
    screenshot: "/images/projects/hikoyam.png",
  },
];

const IFRAME_W = 1440;
const IFRAME_H = 900;

/* ── Internal project preview (iframe) ── */
function InternalPreview({
  project,
  index,
  locale,
}: {
  project: InternalProject;
  index: number;
  locale: string;
}) {
  const t = useTranslations("Projects");
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / IFRAME_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const containerH = IFRAME_H * scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1] as const,
      }}
      className="group"
    >
      <div className="glass overflow-hidden rounded-2xl border border-border/50 transition-all duration-500 group-hover:border-cyan/30 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
        <BrowserChrome domain={project.domain} />
        <Link href={project.href} className="relative block">
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden"
            style={{ height: `${containerH}px` }}
          >
            <iframe
              src={`/${locale}${project.href}`}
              title={t(project.titleKey)}
              className="pointer-events-none absolute left-0 top-0 origin-top-left"
              style={{
                width: `${IFRAME_W}px`,
                height: `${IFRAME_H}px`,
                transform: `scale(${scale})`,
                border: "none",
              }}
              loading="lazy"
              tabIndex={-1}
            />
            <HoverOverlay label={t("viewProject")} />
          </div>
        </Link>
      </div>
      <ProjectInfo project={project} linkHref={project.href} />
    </motion.div>
  );
}

/* ── External project preview (screenshot) ── */
function ExternalPreview({
  project,
  index,
}: {
  project: ExternalProject;
  index: number;
}) {
  const t = useTranslations("Projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1] as const,
      }}
      className="group"
    >
      <div className="glass overflow-hidden rounded-2xl border border-border/50 transition-all duration-500 group-hover:border-cyan/30 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
        <BrowserChrome domain={project.domain} />
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block"
        >
          <div className="relative w-full overflow-hidden">
            <img
              src={project.screenshot}
              alt={t(project.titleKey)}
              className="h-auto w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <HoverOverlay label={t("visitSite")} external />
          </div>
        </a>
      </div>
      <ProjectInfo project={project} externalUrl={project.externalUrl} />
    </motion.div>
  );
}

/* ── Shared browser chrome bar ── */
function BrowserChrome({ domain }: { domain: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border/50 bg-surface/80 px-3 py-2 sm:px-4 sm:py-2.5">
      <div className="flex gap-1.5">
        <div className="h-2 w-2 rounded-full bg-red-500/70 sm:h-2.5 sm:w-2.5" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/70 sm:h-2.5 sm:w-2.5" />
        <div className="h-2 w-2 rounded-full bg-green-500/70 sm:h-2.5 sm:w-2.5" />
      </div>
      <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md bg-base/60 px-2 py-1 sm:px-3">
        <svg className="h-2.5 w-2.5 text-text-muted sm:h-3 sm:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="text-[9px] text-text-muted sm:text-xs">{domain}</span>
      </div>
    </div>
  );
}

/* ── Hover overlay ── */
function HoverOverlay({ label, external }: { label: string; external?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-base/0 transition-all duration-300 group-hover:bg-base/40">
      <span className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-text opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="relative z-10">{label}</span>
        {external ? (
          <HiOutlineExternalLink className="relative z-10" size={16} />
        ) : (
          <HiOutlineArrowRight className="relative z-10" size={16} />
        )}
      </span>
    </div>
  );
}

/* ── Project info below frame ── */
function ProjectInfo({
  project,
  linkHref,
  externalUrl,
}: {
  project: Project;
  linkHref?: string;
  externalUrl?: string;
}) {
  const t = useTranslations("Projects");

  const titleContent = (
    <>
      <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-text transition-colors group-hover/link:text-cyan sm:text-lg">
        {t(project.titleKey)}
      </h3>
      {externalUrl ? (
        <HiOutlineExternalLink className="text-text-muted transition-all group-hover/link:translate-x-1 group-hover/link:text-cyan" size={16} />
      ) : (
        <HiOutlineArrowRight className="text-text-muted transition-all group-hover/link:translate-x-1 group-hover/link:text-cyan" size={16} />
      )}
    </>
  );

  return (
    <div className="mt-4 px-1">
      {externalUrl ? (
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2">
          {titleContent}
        </a>
      ) : linkHref ? (
        <Link href={linkHref} className="group/link inline-flex items-center gap-2">
          {titleContent}
        </Link>
      ) : null}
      <p className="mt-1 text-xs text-text-muted sm:text-sm">
        {t(project.descKey)}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/50 bg-elevated/50 px-2 py-0.5 text-[10px] font-medium text-text-dim sm:px-2.5 sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale();

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-32">
      <div className="section-divider mx-auto max-w-4xl" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-5 sm:pt-20 md:px-8 md:pt-24">
        <ScrollReveal>
          <h2 className="mb-4 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            <span className="gradient-text">{t("title")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-amber sm:mb-12 md:mb-16" />
        </ScrollReveal>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-3">
          {projects.map((project, index) =>
            project.external ? (
              <ExternalPreview
                key={project.titleKey}
                project={project}
                index={index}
              />
            ) : (
              <InternalPreview
                key={project.titleKey}
                project={project}
                index={index}
                locale={locale}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
