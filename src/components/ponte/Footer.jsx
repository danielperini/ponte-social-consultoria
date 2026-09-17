import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, MapPin, Lock, FileText, MessageCircle, UserX } from "lucide-react";
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

  return (
    <footer className="bg-navy text-[#FFFFFF]/70 pt-12 pb-8 safe-bottom">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.12em] uppercase text-[#FFFFFF]/50 mb-3">
              {t("footer.navTitle")}
            </h4>
            <ul className="space-y-1">
              {NAV_LINKS.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => navigateToSection(item.target)}
                    className="text-xs text-[#FFFFFF]/70 hover:text-[#A4B29B] transition-colors text-left min-h-[36px] flex items-center"
                  >
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.12em] uppercase text-[#FFFFFF]/50 mb-3">
              {t("footer.contactTitle")}
            </h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2.5 text-xs text-[#FFFFFF]/70 leading-relaxed">
                <MapPin size={14} className="text-[#A8B7A0] shrink-0 mt-0.5" />
                {t("footer.address")}
              </p>
              <a href={`mailto:${t("footer.email")}`} className="flex items-center gap-2.5 text-xs text-[#FFFFFF]/70 hover:text-[#A4B29B] transition-colors min-h-[36px] py-0.5">
                <Mail size={14} className="text-[#A8B7A0] shrink-0" />
                {t("footer.email")}
              </a>
              <a href={t("footer.whatsappHref")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-[#FFFFFF]/70 hover:text-[#A4B29B] transition-colors min-h-[36px] py-0.5">
                <MessageCircle size={14} className="text-[#A8B7A0] shrink-0" />
                {t("footer.whatsapp")}
              </a>
            </div>
            <h4 className="text-xs font-body font-semibold tracking-[0.12em] uppercase text-[#FFFFFF]/50 mb-2 mt-5">
              {t("footer.followTitle")}
            </h4>
            <a
              href="https://www.linkedin.com/company/ponte-social"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#FFFFFF]/70 hover:text-[#A4B29B] transition-colors min-h-[36px] py-0.5"
            >
              <Linkedin size={14} className="text-[#A8B7A0]" />
              {t("footer.linkedinLabel")}
            </a>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.12em] uppercase text-[#FFFFFF]/50 mb-3">
              {t("footer.legalTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFFFFF]/60 leading-relaxed">
              <li className="flex items-start gap-2">
                <Lock size={13} className="text-[#A8B7A0] shrink-0 mt-0.5" />
                <span>{t("footer.privacy")}</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText size={13} className="text-[#A8B7A0] shrink-0 mt-0.5" />
                <span>{t("footer.cookieNote")}</span>
              </li>
              <li>
                <Link
                  to="/conta/excluir"
                  className="inline-flex items-center gap-2 text-xs text-[#FFFFFF]/70 hover:text-[#A4B29B] transition-colors min-h-[36px] py-0.5"
                >
                  <UserX size={13} className="text-[#A8B7A0] shrink-0" />
                  {t("accountDeletion.title")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FFFFFF]/10 mt-8 pt-5">
          <p className="text-xs text-[#FFFFFF]/40">
            © {new Date().getFullYear()} {t("nav.brand")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}