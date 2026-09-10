import React from "react";
import { motion } from "framer-motion";
import ConnectingArc from "./ConnectingArc";

export default function APonte() {
  return (
    <section id="a-ponte" className="relative py-24 lg:py-40 bg-[#F4EFEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <span className="block text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5">
              A Ponte
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-light text-[#3C2F2F] leading-[1.12] tracking-tight text-balance">
              Entre o território e a decisão existe uma complexidade que precisa ser compreendida.
            </h2>
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[#3C2F2F]/80">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Projetos e operações empresariais envolvem pessoas, relações, interesses e diferentes
              percepções sobre o negócio. Quando esses fatores não são compreendidos, podem gerar
              incertezas, conflitos, resistência e impactos sobre prazos, custos, reputação e
              continuidade.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#3C2F2F] font-medium"
            >
              O desafio não é eliminar a complexidade. É compreendê-la antes que ela se transforme em
              risco. É nesse espaço que a Ponte Social atua.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Transformamos conhecimento sobre pessoas, relações e contextos em informação estratégica
              para apoiar decisões mais seguras.
            </motion.p>
          </div>
        </div>

        <div className="relative mt-20 lg:mt-28">
          <ConnectingArc className="-top-10" height={140} />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {[
              {
                title: "Contexto à decisão",
                text: "Conectamos contextos à decisão, informação à estratégia e divergências à construção de caminhos possíveis.",
              },
              {
                title: "Informação à estratégia",
                text: "Porque informação, sozinha, não basta. É preciso transformá-la em estratégia.",
              },
              {
                title: "Conflitos a caminhos",
                text: "Porque conflitos não se resolvem apenas quando surgem. É preciso compreender suas origens para antecipar riscos.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-[#EFE8E0]/60 border border-[#D6CDBF]/50 rounded-lg p-7 backdrop-blur-sm"
              >
                <span className="font-display text-3xl text-[#C87A53] font-light">0{i + 1}</span>
                <h3 className="font-display text-xl font-medium text-[#3C2F2F] mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-[#3C2F2F]/70 text-[15px] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}