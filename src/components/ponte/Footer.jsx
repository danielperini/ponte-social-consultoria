import React from "react";
import { Mail, Linkedin, MapPin, Lock, FileText, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { navigateToSection } from "@/lib/navScroll";

const NAV_LINKS = [
  { label: "nav.about", target: "a-ponte" },
  { label: "nav.solutions", target: "pilares" },
  { label: "nav.howWeWork", target: "como-atravessamos" },
  { label: "nav.team", target: "quem-constroi" },
  { label: "nav.cases", target: "construcoes" },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-[#FFFFFF]/70 safe-bottom">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Navegação */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-[#A8B7A0] mb-4">
              {t("footer.navTitle")}
            </h4>
            <ul className="space-y-0.5">
              {NAV_LINKS.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => navigateToSection(item.target)}
                    className="text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors text-left min-h-[38px] flex items-center"
                  >
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-[#A8B7A0] mb-4">
              {t("footer.contactTitle")}
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-3 text-sm text-[#FFFFFF]/70 leading-relaxed">
                <MapPin size={15} className="text-[#A8B7A0] shrink-0 mt-0.5" />
                {t("footer.address")}
              </p>
              <a href={`mailto:${t("footer.email")}`} className="flex items-center gap-3 text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors min-h-[38px]">
                <Mail size={15} className="text-[#A8B7A0] shrink-0" />
                {t("footer.email")}
              </a>
              <a href={t("footer.whatsappHref")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors min-h-[38px]">
                <MessageCircle size={15} className="text-[#A8B7A0] shrink-0" />
                {t("footer.whatsapp")}
              </a>
            </div>
          </div>

          {/* Privacidade e Redes */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-[#A8B7A0] mb-4">
              {t("footer.legalTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFFFFF]/60 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <Lock size={14} className="text-[#A8B7A0] shrink-0 mt-0.5" />
                <span>{t("footer.privacy")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FileText size={14} className="text-[#A8B7A0] shrink-0 mt-0.5" />
                <span>{t("footer.cookieNote")}</span>
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-[#FFFFFF]/10">
              <h4 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-[#A8B7A0] mb-3">
                {t("footer.followTitle")}
              </h4>
              <a
                href="https://www.linkedin.com/company/ponte-social"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors min-h-[38px]"
              >
                <Linkedin size={15} className="text-[#A8B7A0]" />
                {t("footer.linkedinLabel")}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FFFFFF]/10 mt-12 pt-6 flex items-center justify-center">
          <p className="text-xs text-[#FFFFFF]/40 tracking-wide">
            © {year} Ponte Social Consultoria. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}