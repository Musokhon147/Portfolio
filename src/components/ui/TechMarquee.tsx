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
    <div className="relative overflow-hidden py-8 sm:py-12">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-base to-transparent sm:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-base to-transparent sm:w-24" />

      <div className="flex animate-[marquee_30s_linear_infinite] gap-4 hover:[animation-play-state:paused] sm:gap-8">
        {items.map(({ icon: Icon, name, color }, i) => (
          <div
            key={`${name}-${i}`}
            className="group flex shrink-0 items-center gap-2 rounded-lg border border-border/30 bg-surface/40 px-3 py-2 transition-all duration-300 hover:border-cyan/20 hover:bg-elevated/60 sm:gap-3 sm:rounded-xl sm:px-5 sm:py-3"
          >
            <Icon
              size={18}
              className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--glow)] sm:[font-size:22px]"
              style={{ color, "--glow": color } as React.CSSProperties}
            />
            <span className="text-xs font-medium text-text-muted transition-colors group-hover:text-text-dim sm:text-sm">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
