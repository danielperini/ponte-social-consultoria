import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Compass, Globe2 } from "lucide-react";

const SOLUTIONS = [
  {
    icon: Compass,
    name: "MARCO ESG",
    subtitle: "Direcionamento estratégico para a evolução da prática ESG.",
    text: "Uma metodologia própria para avaliar a maturidade ESG da organização, identificar prioridades e orientar sua evolução de forma estruturada. O Marco ESG transforma a análise de práticas, processos e capacidades em prioridades de ação, direcionamento estratégico e planos de evolução, apoiando a organização na definição de onde agir, em que ordem e com quais objetivos.",
    audience: "Empresas que precisam estruturar, organizar ou avançar sua agenda ESG com maior clareza estratégica.",
  },
  {
    icon: Globe2,
    name: "PONTE ODS 2030",
    subtitle: "Inteligência territorial para transformar oportunidades em desenvolvimento.",
    text: "Uma solução voltada a municípios e organizações que precisam transformar demandas e oportunidades em projetos estruturados, acesso a recursos e resultados para a população. A metodologia combina diagnóstico territorial, identificação de oportunidades de financiamento, estruturação de projetos, fortalecimento de capacidades e acompanhamento de resultados.",
    audience: "Municípios e organizações que buscam ampliar sua capacidade de transformar necessidades e oportunidades em projetos viáveis e recursos para o desenvolvimento sustentável.",
  },
];

export default function Solutions() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#EFE8E0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            Soluções proprietárias
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance">
            Ferramentas próprias que combinam análise, experiência prática e conhecimento do contexto.
          </h2>
        </div>

        <div className="space-y-10 lg:space-y-12">
          {SOLUTIONS.map((s, i) => {
            const Icon = s.icon;
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={`lg:col-span-7 lg:[direction:ltr] ${reversed ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#3C2F2F] flex items-center justify-center">
                      <Icon size={22} className="text-[#C87A53]" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-[#3C2F2F] tracking-tight">
                      {s.name}
                    </h3>
                  </div>
                  <p className="text-[#C87A53] font-medium mb-5 text-[15px]">{s.subtitle}</p>
                  <p className="text-[#3C2F2F]/80 leading-relaxed mb-6">{s.text}</p>
                  <div className="border-l-2 border-[#C87A53] pl-4">
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#3C2F2F]/50 block mb-1">
                      Para quem
                    </span>
                    <p className="text-[#3C2F2F]/75 text-[15px] leading-relaxed">{s.audience}</p>
                  </div>
                </div>
                <div className={`lg:col-span-5 lg:[direction:ltr] ${reversed ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[4/5] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#3C2F2F]/15">
                    <Image
                      src={
                        i === 0
                          ? "https://images.unsplash.com/photo-1518837695005-72bfad529aa7?auto=format&fit=crop&w=1000&q=80"
                          : "https://images.unsplash.com/photo-1502602898657-3e9fa606d5da?auto=format&fit=crop&w=1000&q=80"
                      }
                      alt={s.name}
                      fittingType="fill"
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3C2F2F]/40 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}