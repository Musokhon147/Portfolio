"use client";

import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      const light = e.matches;
      document.documentElement.classList.toggle("light", light);
      setIsLight(light);
    };
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    setIsLight(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="liquid-glass-icon flex h-[30px] w-[30px] items-center justify-center rounded-lg text-text-muted transition-all duration-300 hover:text-cyan"
    >
      {isLight ? <HiMoon size={16} /> : <HiSun size={16} />}
    </button>
  );
}
