"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiUnity,
  SiSharp,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiArduino,
  SiBlender,
  SiFigma,
} from "react-icons/si";

const techs = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiUnity, name: "Unity", color: "#ffffff" },
  { icon: SiSharp, name: "C#", color: "#68217A" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiArduino, name: "Arduino", color: "#00979D" },
  { icon: SiBlender, name: "Blender", color: "#E87D0D" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

// Duplicate for seamless loop
const items = [...techs, ...techs];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-12">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-base to-transparent" />

      <div className="flex animate-[marquee_30s_linear_infinite] gap-8 hover:[animation-play-state:paused]">
        {items.map(({ icon: Icon, name, color }, i) => (
          <div
            key={`${name}-${i}`}
            className="group flex shrink-0 items-center gap-3 rounded-xl border border-border/30 bg-surface/40 px-5 py-3 transition-all duration-300 hover:border-cyan/20 hover:bg-elevated/60"
          >
            <Icon
              size={22}
              className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--glow)]"
              style={{ color, "--glow": color } as React.CSSProperties}
            />
            <span className="text-sm font-medium text-text-muted transition-colors group-hover:text-text-dim">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
