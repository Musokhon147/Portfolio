"use client";

import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function BackToPortfolio() {
  const t = useTranslations("ProjectPages");

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6"
    >
      <Link
        href="/#projects"
        className="liquid-glass-icon group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-text-dim transition-all hover:text-text sm:text-sm"
      >
        <HiArrowLeft className="relative z-10 transition-transform group-hover:-translate-x-1" size={16} />
        <span className="relative z-10">{t("backToPortfolio")}</span>
      </Link>
    </motion.div>
  );
}
