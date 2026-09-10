import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Compass, Globe2, Layers } from "lucide-react";
import SocietarScreens from "./SocietarScreens";

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

const SOCIETAR = {
  subtitle:
    "A plataforma de inteligência social que transforma escuta em gestão territorial.",
  text: "O Societa.ai registra cada interação no território — do campo ao conselho, do WhatsApp à ata da reunião — e transforma a escuta do dia a dia em informação estratégica. Em um só ambiente, reúne escuta e registro com transcrição e classificação inteligente; mapeamento de comunidades e território; gestão de stakeholders, agendas e compromissos conectada ao ciclo de devolutiva; e relatórios rastreáveis alinhados a GRI, ODS e Pacto Global. Toda demanda registrada tem um caminho de resposta, comprovado e auditável, e um motor de decisões detecta tendências, riscos e oportunidades a partir dos próprios registros do território. É devolver ao território o que nele é produzido: demanda que vira resposta, relação que vira confiança.",
  audience:
    "Empresas, institutos e órgãos públicos que atuam em territórios de influência e precisam gerenciar o relacionamento com comunidades de forma profissional, transparente e auditável.",
};

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
                          ? "https://images.unsplash.com/photo-1663837804068-7d7b4c04044d?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                          : "https://images.unsplash.com/photo-1658877559465-ef305a167829?fm=jpg&q=80&w=1200&auto=format&fit=crop"
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-10 lg:pt-14 mt-6 lg:mt-10 border-t border-[#D6CDBF]/60"
          >
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#3C2F2F] flex items-center justify-center">
                  <Layers size={22} className="text-[#C87A53]" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-medium text-[#3C2F2F] tracking-tight">
                  SOCIETA.AI
                </h3>
              </div>
              <p className="text-[#C87A53] font-medium mb-5 text-[15px]">{SOCIETAR.subtitle}</p>
              <p className="text-[#3C2F2F]/80 leading-relaxed mb-6">{SOCIETAR.text}</p>
              <div className="border-l-2 border-[#C87A53] pl-4">
                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#3C2F2F]/50 block mb-1">
                  Para quem
                </span>
                <p className="text-[#3C2F2F]/75 text-[15px] leading-relaxed">{SOCIETAR.audience}</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <SocietarScreens />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}