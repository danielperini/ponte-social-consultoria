import React from "react";
import { motion } from "framer-motion";
import ConnectingArc from "./ConnectingArc";

const QUESTIONS = [
  { q: "O que está acontecendo?", a: "Entender o contexto." },
  { q: "Quem está envolvido?", a: "Compreender relações, interesses e influências." },
  { q: "O que precisa ser construído?", a: "Transformar essa leitura em estratégia." },
];

export default function HowWeCross() {
  return (
    <section id="como-atravessamos" className="relative py-24 lg:py-40 bg-[#F4EFEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
              Como atravessamos
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance mb-8">
              Não acreditamos em soluções prontas.
            </h2>
            <p className="text-[#3C2F2F]/75 leading-relaxed mb-6">
              Cada organização está inserida em um território diferente, com histórias, relações,
              expectativas e conflitos próprios. Por isso, nosso trabalho parte de três perguntas:
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 bg-[#3C2F2F] rounded-xl p-7 lg:p-8"
            >
              <p className="font-display text-lg lg:text-xl text-[#F4EFEA] leading-relaxed">
                Território <span className="text-[#C87A53] mx-1">+</span> Pessoas{" "}
                <span className="text-[#C87A53] mx-1">+</span> Estratégia
              </p>
              <p className="font-display text-2xl lg:text-3xl text-[#C87A53] mt-3 font-light tracking-tight">
                = Sustentabilidade do negócio
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 relative">
            <ConnectingArc className="-top-12" height={120} />
            <div className="space-y-5 relative">
              {QUESTIONS.map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-5 items-start bg-[#EFE8E0]/50 border border-[#D6CDBF]/50 rounded-lg p-6"
                >
                  <span className="font-display text-2xl text-[#C87A53] font-light shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-[#3C2F2F] mb-1">
                      {item.q}
                    </h3>
                    <p className="text-[#3C2F2F]/70 text-[15px]">{item.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}