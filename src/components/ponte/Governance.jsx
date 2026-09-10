import React from "react";
import { motion } from "framer-motion";
import { Lock, Scale, ShieldCheck, FileCheck2 } from "lucide-react";

const PRINCIPLES = [
  {
    Icon: Lock,
    title: "Confidencialidade",
    text: "Tratamos informações sensíveis de clientes, territórios e comunidades com discrição e proteção.",
  },
  {
    Icon: Scale,
    title: "Independência",
    text: "Análises e diagnósticos conduzidos com isenção, baseados em evidências e no contexto territorial.",
  },
  {
    Icon: ShieldCheck,
    title: "Ética e transparência",
    text: "Compromisso com a verdade dos dados e com relações pautadas por respeito e responsabilidade.",
  },
  {
    Icon: FileCheck2,
    title: "Conformidade (LGPD)",
    text: "Tratamento de dados pessoais em conformidade com a LGPD e as boas práticas de proteção de dados.",
  },
];

export default function Governance() {
  return (
    <section className="py-20 lg:py-24 bg-[#3C2F2F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            Governança e compromissos
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#F4EFEA] leading-[1.15] tracking-tight text-balance">
            Princípios que sustentam a confiança no nosso trabalho.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {PRINCIPLES.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.1 }}
              className="bg-[#F4EFEA]/5 border border-[#F4EFEA]/10 rounded-xl p-6 lg:p-7"
            >
              <Icon size={24} className="text-[#C87A53] mb-4" />
              <h3 className="font-display text-lg font-medium text-[#F4EFEA] mb-2">{title}</h3>
              <p className="text-[#F4EFEA]/65 text-[14px] leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}