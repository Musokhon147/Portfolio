"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const socialIcons = [FaInstagram, FaFacebookF, FaTelegramPlane];

export default function EcommerceFooter() {
  const t = useTranslations("SweetDelights");

  return (
    <footer style={{ backgroundColor: "#2d1b14" }}>
      {/* Rose top gradient line — animated scaleX */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px origin-center"
        style={{
          background: "linear-gradient(to right, transparent, #c2185b 50%, transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold" style={{ color: "#faf5f0" }}>
              <span style={{ color: "#c2185b" }}>.</span>Sweet Delights
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(250,245,240,0.6)" }}>
              {t("footer.description")}
            </p>
            <div className="mt-4 space-y-1 text-xs" style={{ color: "rgba(250,245,240,0.5)" }}>
              <p>{t("footer.address")}</p>
              <p>{t("footer.phone")}</p>
            </div>
          </motion.div>

          {/* Column 2 — Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#c2185b" }}>
              {t("footer.menuTitle")}
            </p>
            <ul className="space-y-2.5">
              {["cakes", "pastries", "custom", "catering"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="footer-link-shift text-sm transition-colors duration-300 hover:text-[#c2185b]"
                    style={{ color: "rgba(250,245,240,0.6)" }}
                  >
                    {t(`footer.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#c2185b" }}>
              {t("footer.companyTitle")}
            </p>
            <ul className="space-y-2.5">
              {["about", "delivery", "careers", "faq"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="footer-link-shift text-sm transition-colors duration-300 hover:text-[#c2185b]"
                    style={{ color: "rgba(250,245,240,0.6)" }}
                  >
                    {t(`footer.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#c2185b" }}>
              {t("footer.newsletter")}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="bakery-input flex-1"
              />
              <button className="bakery-btn whitespace-nowrap px-5 py-2 text-xs">
                {t("footer.subscribe")}
              </button>
            </div>

            {/* Social — spring scale-in with 50ms stagger */}
            <div className="mt-6 flex gap-4">
              {socialIcons.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: 0.3 + i * 0.05,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300"
                  style={{ backgroundColor: "rgba(250,245,240,0.08)", color: "rgba(250,245,240,0.5)" }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t pt-6" style={{ borderColor: "rgba(250,245,240,0.08)" }}>
          <p className="text-center text-xs" style={{ color: "rgba(250,245,240,0.35)" }}>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
