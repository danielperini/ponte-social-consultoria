import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageProvider";

const INSTITUTIONS = [
  { name: "Fundação ArcelorMittal", who: "Daniel Perini", descKey: "trajectory.fundacaoArcelor" },
  { name: "Fundação Renova", who: "Daniel Perini · Patrícia Abreu", descKey: "trajectory.fundacaoRenova" },
  { name: "Malavi Produções", who: "Daniel Perini", descKey: "trajectory.malavi" },
  { name: "Claro Abreu Projetos", who: "Patrícia Abreu", descKey: "trajectory.claroAbreu" },
  { name: "Vale", who: "Daniela Reis", descKey: "trajectory.vale" },
  { name: "Votorantim", who: "Daniela Reis", descKey: "trajectory.votorantim" },
  { name: "Grupo EBX", who: "Daniela Reis", descKey: "trajectory.ebx" },
  { name: "ETCO", who: "Daniela Reis", descKey: "trajectory.etco" },
];

export default function Trajectories() {
  const { t } = useTranslation();

  return (
    <section id="trajetorias" className="relative py-24 lg:py-32 bg-[#EFE8E0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("trajectory.kicker")}
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance">
            {t("trajectory.title")}
          </h2>
          <p className="mt-5 text-[#3C2F2F]/70 text-[15px] leading-relaxed">
            {t("trajectory.intro")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {INSTITUTIONS.map((inst, i) => (
            <motion.article
              key={inst.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group flex flex-col justify-between bg-[#F4EFEA] border border-[#D6CDBF]/70 rounded-2xl p-7 min-h-[170px] hover:border-[#C87A53] hover:-translate-y-1 hover:shadow-[0_14px_34px_-14px_rgba(60,47,47,0.28)] transition-all duration-300"
            >
              <div>
                <h3 className="font-display text-xl font-medium text-[#3C2F2F] leading-tight">
                  {inst.name}
                </h3>
                <div className="w-8 h-px bg-[#C87A53]/40 my-3" />
                <p className="text-[#3C2F2F]/65 text-sm leading-relaxed">
                  {t(inst.descKey)}
                </p>
              </div>
              <p className="text-[#C87A53] text-[12px] font-medium tracking-wide mt-5">
                {inst.who}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}