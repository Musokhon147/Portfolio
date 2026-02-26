"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useToast } from "@/components/ui/Toast";

const ease = [0.16, 1, 0.3, 1] as const;

const footerSectionMap: Record<string, string> = {
  features: "features",
  pricing: "pricing",
};

export default function SmartHomeFooter() {
  const t = useTranslations("NovaTech");
  const { showToast } = useToast();

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

  const socialIcons = [FaGithub, FaTwitter, FaLinkedinIn];

  return (
    <footer style={{ backgroundColor: "#09090b" }}>
      {/* Gradient divider — animated scaleX */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="h-px"
        style={{
          background: "linear-gradient(to right, transparent, #8b5cf6 40%, #06b6d4 60%, transparent)",
          transformOrigin: "center",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-12">
          {/* Column 1 — Brand + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0, ease }}
            className="col-span-2 sm:col-span-3 lg:col-span-1"
          >
            <p className="font-[family-name:var(--font-inter)] text-lg font-semibold text-white">
              Nova<span style={{ color: "#8b5cf6" }}>Tech</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#52525b" }}>
              An all-in-one platform for modern teams.
            </p>

            {/* Social — spring entrance with stagger */}
            <div className="mt-5 flex gap-3">
              {socialIcons.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  onClick={(e) => { e.preventDefault(); showToast("Opens in new tab", "info"); }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 + i * 0.06 }}
                  whileHover={{ scale: 1.15, color: "#8b5cf6" }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 hover:text-[#8b5cf6]"
                  style={{ backgroundColor: "#18181b", color: "#71717a" }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns — staggered */}
          {columns.map((col, colIndex) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (colIndex + 1) * 0.08, ease }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#fafafa" }}>
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={footerSectionMap[link] ? `#${footerSectionMap[link]}` : "#"}
                      onClick={(e) => {
                        e.preventDefault();
                        const id = footerSectionMap[link];
                        if (id) {
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                        } else {
                          showToast("Coming soon!", "info");
                        }
                      }}
                      className="footer-link-shift text-sm transition-colors duration-300 hover:text-[#8b5cf6]"
                      style={{ color: "#52525b" }}
                    >
                      {t(`footer.${link}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter column — staggered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 4 * 0.08, ease }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#fafafa" }}>
              {t("footer.newsletter")}
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="nova-input"
              />
              <button onClick={() => showToast("Subscribed successfully!", "success")} className="nova-btn py-2.5 text-xs">
                {t("footer.subscribe")}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "#27272a" }}
        >
          <p className="text-xs" style={{ color: "#52525b" }}>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "#52525b" }}>
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"
                style={{ animation: "status-dot-pulse 2s ease-in-out infinite" }}
              />
              All Systems Operational
            </span>
            {["terms", "privacy", "security"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => { e.preventDefault(); showToast("Coming soon!", "info"); }}
                className="footer-link-shift text-xs transition-colors duration-300 hover:text-[#8b5cf6]"
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
