import React from "react";
import { Mail, Linkedin, MapPin, ShieldCheck, BarChart3, Globe, Lock, FileText, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "nav.about", target: "a-ponte" },
  { label: "nav.solutions", target: "pilares" },
  { label: "nav.howWeWork", target: "como-atravessamos" },
  { label: "nav.team", target: "quem-constroi" },
  { label: "nav.cases", target: "construcoes" },
];

const SEALS = [
  { Icon: ShieldCheck, labelKey: "footer.lgpdSeal", descKey: "footer.lgpdSealDesc" },
  { Icon: BarChart3, labelKey: "footer.griSeal", descKey: "footer.griSealDesc" },
  { Icon: Globe, labelKey: "footer.pactoSeal", descKey: "footer.pactoSealDesc" },
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
            <div className="mb-4">
              <Logo theme="light" />
            </div>
            <p className="text-xs text-[#F4EFEA]/50 mb-5">{t("footer.tagline")}</p>
            <p className="font-display italic text-[#BC5A3A] text-lg font-light leading-snug">
              {t("footer.slogan")}
            </p>
            <div className="mt-7 space-y-3">
              {SEALS.map((s) => {
                const Icon = s.Icon;
                return (
                  <div key={s.labelKey} className="flex items-center gap-3 border border-[#BC5A3A]/30 rounded-full pl-3 pr-4 py-2.5 bg-[#F4EFEA]/5">
                    <span className="w-9 h-9 rounded-full bg-[#BC5A3A]/15 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#BC5A3A]" />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[11px] font-medium tracking-[0.16em] uppercase text-[#F4EFEA]">
                        {t(s.labelKey)}
                      </span>
                      <span className="block text-[11px] text-[#F4EFEA]/55">
                        {t(s.descKey)}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
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
                    className="text-sm text-[#F4EFEA]/70 hover:text-[#BC5A3A] transition-colors text-left"
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
              <p className="flex items-start gap-3 text-sm text-[#F4EFEA]/70">
                <MapPin size={16} className="text-[#BC5A3A] shrink-0 mt-0.5" />
                {t("footer.address")}
              </p>
              <a href={`mailto:${t("footer.email")}`} className="flex items-center gap-3 text-sm text-[#F4EFEA]/70 hover:text-[#BC5A3A] transition-colors">
                <Mail size={16} className="text-[#BC5A3A] shrink-0" />
                {t("footer.email")}
              </a>
              <a href={t("footer.whatsappHref")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#F4EFEA]/70 hover:text-[#BC5A3A] transition-colors">
                <MessageCircle size={16} className="text-[#BC5A3A] shrink-0" />
                {t("footer.whatsapp")}
              </a>
            </div>
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4EFEA]/50 mb-3 mt-7">
              {t("footer.followTitle")}
            </h4>
            <a
              href="https://www.linkedin.com/company/ponte-social"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#F4EFEA]/70 hover:text-[#BC5A3A] transition-colors"
            >
              <Linkedin size={16} className="text-[#BC5A3A]" />
              {t("footer.linkedinLabel")}
            </a>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4EFEA]/50 mb-4">
              {t("footer.legalTitle")}
            </h4>
            <ul className="space-y-3.5 text-sm text-[#F4EFEA]/60 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <Lock size={15} className="text-[#BC5A3A] shrink-0 mt-0.5" />
                <span>{t("footer.privacy")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck size={15} className="text-[#BC5A3A] shrink-0 mt-0.5" />
                <span>{t("footer.ethics")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FileText size={15} className="text-[#BC5A3A] shrink-0 mt-0.5" />
                <span>{t("footer.cookieNote")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F4EFEA]/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#F4EFEA]/40">
          <p>© {new Date().getFullYear()} {t("nav.brand")}. {t("footer.rights")}</p>
          <p className="font-display italic text-[#BC5A3A]/80">{t("footer.closer")}</p>
        </div>
      </div>
    </footer>
  );
}