"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { useToast } from "@/components/ui/Toast";

export default function VRFooter() {
  const t = useTranslations("IronForge");
  const { showToast } = useToast();

  return (
    <footer style={{ backgroundColor: "#050505" }}>
      {/* Orange top border — animated scale from left */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[3px] origin-left"
        style={{ backgroundColor: "#f97316" }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <p className="font-[family-name:var(--font-bebas)] text-3xl tracking-wider text-white">
              IRON<span style={{ color: "#f97316" }}>FORGE</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#777" }}>
              {t("footer.description")}
            </p>
            {/* 24/7 badge with glow pulse */}
            <div
              className="mt-4 inline-block px-4 py-1.5"
              style={{
                backgroundColor: "#f97316",
                animation: "glow-pulse-orange 2s ease-in-out infinite",
              }}
            >
              <span className="font-[family-name:var(--font-bebas)] text-sm tracking-wider text-white">
                {t("footer.hours")}
              </span>
            </div>
            <div className="mt-3 space-y-1 text-xs" style={{ color: "#555" }}>
              <p>{t("footer.address")}</p>
              <p>{t("footer.phone")}</p>
            </div>
          </motion.div>

          {/* Column 2 — Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p
              className="mb-4 font-[family-name:var(--font-bebas)] text-sm uppercase tracking-[0.2em]"
              style={{ color: "#f97316" }}
            >
              {t("footer.programsTitle")}
            </p>
            <ul className="space-y-2.5">
              {["strength", "cardio", "yoga", "boxing"].map((item) => (
                <li key={item}>
                  <a
                    href="#programs"
                    onClick={(e) => { e.preventDefault(); document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="footer-link-shift text-sm transition-colors duration-200 hover:text-[#f97316]"
                    style={{ color: "#777" }}
                  >
                    {t(`footer.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p
              className="mb-4 font-[family-name:var(--font-bebas)] text-sm uppercase tracking-[0.2em]"
              style={{ color: "#f97316" }}
            >
              {t("footer.companyTitle")}
            </p>
            <ul className="space-y-2.5">
              {["about", "careers", "blog", "faq"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item === "about") {
                        document.getElementById("trainers")?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        showToast("Coming soon!", "info");
                      }
                    }}
                    className="footer-link-shift text-sm transition-colors duration-200 hover:text-[#f97316]"
                    style={{ color: "#777" }}
                  >
                    {t(`footer.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p
              className="mb-4 font-[family-name:var(--font-bebas)] text-sm uppercase tracking-[0.2em]"
              style={{ color: "#f97316" }}
            >
              {t("footer.newsletter")}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="gym-input flex-1"
              />
              <button onClick={() => showToast("Subscribed successfully!", "success")} className="gym-btn whitespace-nowrap px-5 py-2.5 text-xs">
                {t("footer.subscribe")}
              </button>
            </div>

            {/* Social — spring entrance + hover rotate */}
            <div className="mt-6 flex gap-3">
              {[FaInstagram, FaYoutube, FaTelegramPlane].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  onClick={(e) => { e.preventDefault(); showToast("Opens in new tab", "info"); }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.35 + i * 0.08,
                  }}
                  whileHover={{ rotate: 5 }}
                  className="flex h-9 w-9 items-center justify-center transition-colors duration-200 hover:text-[#f97316]"
                  style={{ backgroundColor: "#111", color: "#777" }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t pt-6" style={{ borderColor: "#222" }}>
          <p className="text-center text-xs" style={{ color: "#555" }}>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
