import React from "react";
import { Mail, Linkedin, MapPin, Lock, FileText, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-[#FFFFFF]/70 safe-bottom">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">
        <div className="flex flex-col items-center text-center">
          <h4 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-[#A8B7A0] mb-4">
            {t("footer.contactTitle")}
          </h4>
          <div className="space-y-2.5">
            <p className="flex items-start justify-center gap-3 text-sm text-[#FFFFFF]/70 leading-relaxed max-w-md">
              <MapPin size={15} className="text-[#A8B7A0] shrink-0 mt-0.5" />
              {t("footer.address")}
            </p>
            <a href={`mailto:${t("footer.email")}`} className="flex items-center justify-center gap-3 text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors min-h-[38px]">
              <Mail size={15} className="text-[#A8B7A0] shrink-0" />
              {t("footer.email")}
            </a>
            <a href={t("footer.whatsappHref")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-sm text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors min-h-[38px]">
              <MessageCircle size={15} className="text-[#A8B7A0] shrink-0" />
              {t("footer.whatsapp")}
            </a>
          </div>
          <div className="mt-6 pt-5 border-t border-[#FFFFFF]/10 w-full max-w-xs mx-auto">
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

        {/* Privacidade e ética + copyright centralizados */}
        <div className="border-t border-[#FFFFFF]/10 mt-12 pt-7 flex flex-col items-center text-center">
          <h4 className="text-xs font-body font-semibold tracking-[0.18em] uppercase text-[#A8B7A0] mb-3">
            {t("footer.legalTitle")}
          </h4>
          <div className="space-y-1.5 text-xs text-[#FFFFFF]/55 leading-relaxed max-w-xl">
            <p className="flex items-start justify-center gap-2">
              <Lock size={13} className="text-[#A8B7A0] shrink-0 mt-0.5" />
              <span>{t("footer.privacy")}</span>
            </p>
            <p className="flex items-start justify-center gap-2">
              <FileText size={13} className="text-[#A8B7A0] shrink-0 mt-0.5" />
              <span>{t("footer.cookieNote")}</span>
            </p>
          </div>
          <p className="mt-5 text-xs text-[#FFFFFF]/40 tracking-wide">
            © {year} Ponte Social Consultoria. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}