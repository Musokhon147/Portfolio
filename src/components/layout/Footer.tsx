"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaTelegram, href: "https://t.me", label: "Telegram" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border/30 py-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:gap-6 sm:px-5 md:flex-row md:justify-between md:px-8">
        <a
          href="#"
          className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight"
        >
          <span className="gradient-text">Port</span>
          <span className="text-text">folio</span>
        </a>

        <p className="text-xs text-text-muted sm:text-sm">
          &copy; {new Date().getFullYear()} Portfolio. {t("rights")}
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg border border-border/30 bg-elevated/30 p-2.5 text-text-muted transition-all hover:border-cyan/30 hover:text-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
