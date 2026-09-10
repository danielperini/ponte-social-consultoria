import React from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#3C2F2F] text-[#F4EFEA]/70 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M6 24 Q17 4 28 24" stroke="#C87A53" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="17" cy="9.5" r="2.8" fill="#F4EFEA" />
              <line x1="6" y1="24" x2="28" y2="24" stroke="#F4EFEA" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <p className="font-display text-lg font-medium text-[#F4EFEA]">{t("nav.brand")}</p>
              <p className="text-xs text-[#F4EFEA]/50">{t("footer.tagline")}</p>
            </div>
          </div>
          <p className="font-display italic text-[#C87A53] text-lg font-light max-w-md">
            {t("footer.slogan")}
          </p>
        </div>
        <div className="border-t border-[#F4EFEA]/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#F4EFEA]/40">
          <p>© {new Date().getFullYear()} {t("nav.brand")}. {t("footer.rights")}</p>
          <p>{t("footer.closer")}</p>
        </div>
      </div>
    </footer>
  );
}