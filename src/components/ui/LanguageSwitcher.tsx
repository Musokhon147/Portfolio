"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "en" as const, label: "EN" },
  { code: "uz" as const, label: "UZ" },
  { code: "ru" as const, label: "RU" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchLocale(locale: "en" | "uz" | "ru") {
    router.replace(pathname, { locale });
  }

  return (
    <div className="liquid-glass-icon flex items-center gap-0.5 rounded-lg p-0.5">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          className={`relative rounded-md px-2.5 py-1 text-xs font-semibold tracking-wider transition-all duration-300 ${
            currentLocale === code
              ? "liquid-glass text-text shadow-[0_0_12px_rgba(6,182,212,0.15)]"
              : "text-text-muted hover:text-text"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
