import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ChevronDown, GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function Team() {
  const { t } = useTranslation();
  const p = t("team.profile");
  const [showFull, setShowFull] = useState(false);

  return (
    <section id="quem-constroi" className="py-24 lg:py-32 bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.span {...fade(0)} className="text-[#A67C00] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
              {t("team.kicker")}
            </motion.span>
            <motion.h2 {...fade(0.05)} className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.08] tracking-tight text-balance">
              {t("team.title")}
            </motion.h2>
            <motion.p {...fade(0.1)} className="mt-6 text-[#3C2F2F]/75 text-base lg:text-[17px] leading-relaxed">
              {t("team.p1")}
            </motion.p>

            <motion.div {...fade(0.15)} className="mt-8 border-l-2 border-[#A67C00]/40 pl-5">
              <h3 className="font-display text-xl text-[#3C2F2F] mb-2">{t("team.experienceTitle")}</h3>
              <p className="text-[#3C2F2F]/70 text-[15px] leading-relaxed">{t("team.experienceText")}</p>
            </motion.div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <motion.div {...fade(0.2)} className="border-t border-[#3C2F2F]/12 pt-4">
                <h4 className="font-display text-lg text-[#3C2F2F]">{t("team.nucleusTitle")}</h4>
                <p className="mt-1.5 text-[#3C2F2F]/65 text-sm leading-relaxed">{t("team.nucleusText")}</p>
              </motion.div>
              <motion.div {...fade(0.25)} className="border-t border-[#3C2F2F]/12 pt-4">
                <h4 className="font-display text-lg text-[#3C2F2F]">{t("team.networkTitle")}</h4>
                <p className="mt-1.5 text-[#3C2F2F]/65 text-sm leading-relaxed">{t("team.networkText")}</p>
              </motion.div>
            </div>

            <motion.p {...fade(0.3)} className="mt-8 font-display italic text-[#A67C00] text-xl font-light">
              {t("team.closing")}
            </motion.p>
          </div>

          <motion.div {...fade(0.15)} className="lg:col-span-5 bg-[#EFE8E0] border border-[#D6CDBF]/70 rounded-2xl p-7 lg:p-8">
            <span className="text-[#A67C00] text-[11px] font-medium tracking-[0.2em] uppercase">{p.kicker}</span>
            <h3 className="font-display text-2xl text-[#3C2F2F] mt-2 leading-tight">{p.name}</h3>
            <p className="text-[#A67C00] text-sm font-medium mt-1">{p.role}</p>
            <p className="mt-4 text-[#3C2F2F]/75 text-sm leading-relaxed">{p.summary}</p>

            <div className="mt-6 border-t border-[#3C2F2F]/12 pt-4">
              <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#3C2F2F]/50 mb-2">
                <GraduationCap size={14} className="text-[#A67C00]" />
                {p.educationTitle}
              </p>
              <ul className="space-y-1">
                {p.education.map((e, i) => (
                  <li key={i} className="text-[#3C2F2F]/75 text-sm leading-relaxed flex gap-2">
                    <span className="text-[#A67C00]">·</span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-[#3C2F2F]/12 pt-4">
              <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#3C2F2F]/50 mb-2">
                <Award size={14} className="text-[#A67C00]" />
                {p.certsTitle}
              </p>
              <p className="text-[#3C2F2F] text-sm font-medium leading-relaxed">{p.certsShort}</p>

              <button
                onClick={() => setShowFull(!showFull)}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#A67C00] hover:underline"
              >
                {showFull ? t("team.hideFull") : t("team.seeFull")}
                <ChevronDown size={14} className={`transition-transform ${showFull ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showFull && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 space-y-2">
                      {p.certs.map((c, i) => (
                        <li key={i} className="text-[#3C2F2F]/75 text-[13px] leading-relaxed flex gap-2">
                          {c.ongoing ? (
                            <span className="text-[#A67C00] text-[10px] font-medium uppercase tracking-wide mt-0.5 shrink-0">Em curso</span>
                          ) : (
                            <CheckCircle2 size={14} className="text-[#A67C00] shrink-0 mt-0.5" />
                          )}
                          <span>
                            <span className="text-[#3C2F2F]">{c.name}</span> — {c.inst}
                            {c.year ? ` · ${c.year}` : ""}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#3C2F2F]/50 mb-2">
                      <BookOpen size={14} className="text-[#A67C00]" />
                      {p.complementaryTitle}
                    </p>
                    <ul className="space-y-1">
                      {p.complementary.map((c, i) => (
                        <li key={i} className="text-[#3C2F2F]/70 text-[13px] leading-relaxed flex gap-2">
                          <span className="text-[#A67C00]">·</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#3C2F2F] hover:text-[#A67C00] transition-colors border-t border-[#3C2F2F]/12 pt-4"
            >
              <Linkedin size={16} className="text-[#A67C00]" />
              {t("team.linkedinCta")}
            </a>
            <p className="mt-4 text-[11px] text-[#3C2F2F]/45 leading-relaxed">{t("team.profileNote")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}