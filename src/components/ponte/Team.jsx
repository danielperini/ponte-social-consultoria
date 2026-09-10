import React from "react";
import { motion } from "framer-motion";
import { Network, Layers } from "lucide-react";

export default function Team() {
  return (
    <section id="quem-constroi" className="relative py-24 lg:py-40 bg-[#F4EFEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            Quem constrói
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance">
            Diferentes perspectivas. Um mesmo propósito.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-6 space-y-5 text-[#3C2F2F]/80">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Desafios que envolvem pessoas, relações e decisões de negócio exigem diferentes
              perspectivas e conhecimentos. Assim, a Ponte Social articula profissionais e
              especialistas de acordo com a natureza, a complexidade e os objetivos de cada trabalho.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A Ponte Social é formada por uma rede de profissionais e especialistas com diferentes
              trajetórias, conhecimentos e experiências complementares. Trabalhamos de forma
              colaborativa, reunindo as competências necessárias para cada desafio — sem perder a
              proximidade, a responsabilidade e a visão estratégica que orientam nosso trabalho.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Essa forma de atuação amplia nossa capacidade de entrega e permite reunir diferentes
              perspectivas sem criar estruturas maiores do que o necessário.
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#3C2F2F] rounded-xl p-7 lg:p-8"
            >
              <Network size={28} className="text-[#C87A53] mb-4" />
              <h3 className="font-display text-xl font-medium text-[#F4EFEA] mb-3">Núcleo Ponte</h3>
              <p className="text-[#F4EFEA]/70 text-[15px] leading-relaxed">
                Profissionais que representam a Ponte Social, conduzem os projetos e respondem pela
                relação com o cliente, pela estratégia e pela integração das entregas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#EFE8E0] border border-[#D6CDBF] rounded-xl p-7 lg:p-8"
            >
              <Layers size={28} className="text-[#C87A53] mb-4" />
              <h3 className="font-display text-xl font-medium text-[#3C2F2F] mb-3">
                Rede de especialistas
              </h3>
              <p className="text-[#3C2F2F]/75 text-[15px] leading-relaxed">
                Profissionais e empresas que integram a Ponte Social em projetos específicos, de acordo
                com as competências necessárias. Trajetórias, conhecimentos e experiências que ampliam
                nossa capacidade de atuação.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-lg italic text-[#C87A53] font-light"
            >
              Uma rede formada para cada desafio.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}