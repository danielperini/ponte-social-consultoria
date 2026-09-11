import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageProvider";

const INSTITUTIONS = [
  { name: "Perini Projetos", descKey: "trajectory.periniProjetos", logo: null },
  { name: "Fiat Ultra Artes", descKey: "trajectory.fiatUltraArtes", logo: null },
  { name: "Fábrica do Futuro", descKey: "trajectory.fabricaFuturo", logo: null },
  { name: "Viaduto das Artes", descKey: "trajectory.meioAdultoArtes", logo: null },
  { name: "Centro de Referência da Juventude", descKey: "trajectory.crj", logo: null },
  { name: "Fundação Municipal de Cultura", descKey: "trajectory.fundacaoMunicipalCultura", logo: "fmc.pbh.gov.br" },
  { name: "Secretaria de Educação de MG", descKey: "trajectory.secretariaEducacaoMG", logo: "educacao.mg.gov.br" },
  { name: "Secretaria de Direitos Humanos de MG", descKey: "trajectory.secretariaDireitosHumanos", logo: null },
  { name: "Fundação ArcelorMittal", descKey: "trajectory.fundacaoArcelor", logo: "arcelormittal.com" },
  { name: "Fundação Renova", descKey: "trajectory.fundacaoRenova", logo: "fundacaorenova.org" },
  { name: "LafargeHolcim", descKey: "trajectory.lafargeHolcim", logo: "holcim.com" },
  { name: "Vivo", descKey: "trajectory.vivo", logo: "vivo.com.br" },
  { name: "Claro Abreu Projetos", descKey: "trajectory.claroAbreu", logo: null },
  { name: "Angra Partners", descKey: "trajectory.angra", logo: "angrapartners.com" },
  { name: "Beija-Flor Tecnologias Sociais", descKey: "trajectory.beijaFlor", logo: "beijaflor.org.br" },
  { name: "Vale", descKey: "trajectory.vale", logo: "vale.com" },
  { name: "Votorantim", descKey: "trajectory.votorantim", logo: "votorantim.com.br" },
  { name: "Grupo EBX", descKey: "trajectory.ebx", logo: null },
  { name: "ETCO", descKey: "trajectory.etco", logo: "etco.org.br" },
  { name: "H&P", descKey: "trajectory.hp", logo: null },
  { name: "UFMG", descKey: "trajectory.ufmg", logo: "ufmg.br" },
  { name: "C Caps", descKey: "trajectory.ccaps", logo: null },
  { name: "CeCaps", descKey: "trajectory.cecaps", logo: null },
  { name: "Anglo American", descKey: "trajectory.anglo", logo: "angloamerican.com" },
  { name: "PNUD", descKey: "trajectory.pnud", logo: "undp.org" },
  { name: "Prefeitura de BH", descKey: "trajectory.prefeituraBH", logo: "pbh.gov.br" },
];

function TrajectoryCard({ inst, index }) {
  const { t } = useTranslation();
  const [logoOk, setLogoOk] = useState(Boolean(inst.logo));
  const logoUrl = inst.logo ? `https://www.google.com/s2/favicons?sz=128&domain=${inst.logo}` : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group flex flex-col justify-between bg-[#F4EFEA] border border-[#D6CDBF]/70 rounded-2xl p-6 min-h-[170px] hover:border-[#C87A53] hover:-translate-y-1 hover:shadow-[0_14px_34px_-14px_rgba(60,47,47,0.28)] transition-all duration-300"
    >
      <div className="h-11 flex items-center justify-center mb-3">
        {logoUrl && logoOk ? (
          <div className="h-11 w-11 rounded-lg bg-white border border-[#D6CDBF]/60 flex items-center justify-center shadow-[0_3px_10px_-4px_rgba(60,47,47,0.25)]">
            <img
              src={logoUrl}
              alt={inst.name}
              loading="lazy"
              className="max-h-7 max-w-7 object-contain"
              onError={() => setLogoOk(false)}
            />
          </div>
        ) : (
          <h3 className="font-display text-lg font-medium text-[#3C2F2F] leading-tight text-center">
            {inst.name}
          </h3>
        )}
      </div>
      <div className="w-8 h-px bg-[#C87A53]/40 mx-auto mb-3" />
      <p className="text-[#3C2F2F]/65 text-[13px] leading-relaxed text-center">
        {t(inst.descKey)}
      </p>
    </motion.article>
  );
}

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
            <TrajectoryCard key={inst.name} inst={inst} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}