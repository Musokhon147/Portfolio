"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function SmartHomeFooter() {
  const t = useTranslations("NovaTech");

  const columns = [
    {
      title: t("footer.productTitle"),
      links: ["features", "pricing", "integrations", "changelog"],
    },
    {
      title: t("footer.companyTitle"),
      links: ["about", "blog", "careers", "press"],
    },
    {
      title: t("footer.resourcesTitle"),
      links: ["docs", "api", "community", "support"],
    },
  ];

  return (
    <footer style={{ backgroundColor: "#09090b" }}>
      {/* Gradient divider */}
      <div
        className="h-px"
        style={{
          background: "linear-gradient(to right, transparent, #8b5cf6 40%, #06b6d4 60%, transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-12">
          {/* Column 1 — Brand + Social */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="font-[family-name:var(--font-inter)] text-lg font-semibold text-white">
              Nova<span style={{ color: "#8b5cf6" }}>Tech</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#52525b" }}>
              An all-in-one platform for modern teams.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              {[FaGithub, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:text-[#8b5cf6]"
                  style={{ backgroundColor: "#18181b", color: "#71717a" }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#fafafa" }}>
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-300 hover:text-[#8b5cf6]"
                      style={{ color: "#52525b" }}
                    >
                      {t(`footer.${link}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#fafafa" }}>
              {t("footer.newsletter")}
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="nova-input"
              />
              <button className="nova-btn py-2.5 text-xs">
                {t("footer.subscribe")}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "#27272a" }}
        >
          <p className="text-xs" style={{ color: "#52525b" }}>
            &copy; 2025 {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            {["terms", "privacy", "security"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-300 hover:text-[#8b5cf6]"
                style={{ color: "#52525b" }}
              >
                {t(`footer.${item}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
