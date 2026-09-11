import React from "react";
import { Mail, Phone, Linkedin, ShieldCheck, Lock, FileText } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const NAV_LINKS = [
  { label: "nav.about", target: "a-ponte" },
  { label: "nav.solutions", target: "pilares" },
  { label: "nav.howWeWork", target: "como-atravessamos" },
  { label: "nav.team", target: "quem-constroi" },
  { label: "nav.cases", target: "construcoes" },
  { label: "nav.insights", target: "artigos" },
];

function scrollTo(target) {
  const el = document.getElementById(target);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#3C2F2F] text-[#F4EFEA]/70 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
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
            <p className="font-display italic text-[#C87A53] text-lg font-light leading-snug">
              {t("footer.slogan")}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4EFEA]/50 mb-4">
              {t("footer.navTitle")}
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="text-sm text-[#F4EFEA]/70 hover:text-[#C87A53] transition-colors text-left"
                  >
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4EFEA]/50 mb-4">
              {t("footer.contactTitle")}
            </h4>
            <div className="space-y-3">
              <a href="mailto:contato@pontesocial.com.br" className="flex items-center gap-3 text-sm text-[#F4EFEA]/70 hover:text-[#C87A53] transition-colors">
                <Mail size={16} className="text-[#C87A53] shrink-0" />
                contato@pontesocial.com.br
              </a>
              <a href="tel:+551130000000" className="flex items-center gap-3 text-sm text-[#F4EFEA]/70 hover:text-[#C87A53] transition-colors">
                <Phone size={16} className="text-[#C87A53] shrink-0" />
                +55 11 3000-0000
              </a>
            </div>
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4EFEA]/50 mb-3 mt-7">
              {t("footer.followTitle")}
            </h4>
            <a
              href="https://www.linkedin.com/company/ponte-social"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#F4EFEA]/70 hover:text-[#C87A53] transition-colors"
            >
              <Linkedin size={16} className="text-[#C87A53]" />
              {t("footer.linkedinLabel")}
            </a>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4EFEA]/50 mb-4">
              {t("footer.legalTitle")}
            </h4>
            <ul className="space-y-3.5 text-sm text-[#F4EFEA]/60 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <Lock size={15} className="text-[#C87A53] shrink-0 mt-0.5" />
                <span>{t("footer.privacy")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck size={15} className="text-[#C87A53] shrink-0 mt-0.5" />
                <span>{t("footer.ethics")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FileText size={15} className="text-[#C87A53] shrink-0 mt-0.5" />
                <span>{t("footer.cookieNote")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F4EFEA]/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#F4EFEA]/40">
          <p>© {new Date().getFullYear()} {t("nav.brand")}. {t("footer.rights")}</p>
          <p className="font-display italic text-[#C87A53]/80">{t("footer.closer")}</p>
        </div>
      </div>
    </footer>
  );
}