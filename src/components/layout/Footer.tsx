"use client";

import { useTranslations } from "next-intl";
import { FaTelegram, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaTelegram, href: "https://t.me/Musokhonn", label: "Telegram" },
  { icon: FaInstagram, href: "https://www.instagram.com/musokhon__147/", label: "Instagram" },
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
              className="liquid-glass-icon rounded-lg p-2.5 text-text-muted transition-all hover:text-cyan"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
