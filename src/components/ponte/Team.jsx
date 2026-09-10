import React from "react";
import { motion } from "framer-motion";
import { Network, Layers, BadgeCheck, Linkedin } from "lucide-react";

const TEAM = [
  {
    name: "Patrícia Abreu",
    role: "Comunicação, Relacionamento e Integração",
    bio:
      "Sócia da Claro Abreu Projetos e ex-Diretora de Comunicação, Relacionamento e Integração da Fundação Renova. Atua na gestão de campanhas nacionais, comunicação pública e relacionamento institucional.",
    linkedin: "https://www.linkedin.com/in/patriciaoabreu/",
  },
  {
    name: "Ana Carolina de Moura Maciel",
    role: "Executiva de ESG & Sustentabilidade",
    bio:
      "Consultora master em ESG, Mestre em Administração. Atua em estratégia, relações institucionais, comunicação, gestão de crises e engajamento de stakeholders.",
    linkedin: "https://www.linkedin.com/in/anacarolinamouramaciel/",
  },
  {
    name: "Daniel Perini",
    role: "Gestão de Projetos Socioeconômicos",
    bio:
      "Bacharel em Ciências Sociais pela UFMG, com especialização em avaliação de projetos sociais também pela UFMG, e especialista em ESG pela ESPM (Escola Superior de Propaganda e Marketing de São Paulo). Atua em doação e economia circular. Mais de 20 anos de experiência na gestão, planejamento e implementação de projetos sociais, culturais, educacionais e de direitos humanos.",
    linkedin: "https://www.linkedin.com/in/daniel-perini-esg/",
  },
  {
    name: "Daniela Reis",
    role: "Liderança, ESG e Neurociência aplicada a equipes",
    bio:
      "Executiva de ESG com MBA pelo IBMEC, especialização em Neurociência e Comportamento. Palestrante TEDx, com experiência em estruturação de investimento socioambiental.",
    linkedin: "https://www.linkedin.com/in/reisdaniela/",
  },
];

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
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#EFE8E0] border border-[#D6CDBF] rounded-xl p-7 lg:p-8"
            >
              <BadgeCheck size={28} className="text-[#C87A53] mb-4" />
              <h3 className="font-display text-xl font-medium text-[#3C2F2F] mb-3">
                Profissionais certificados
              </h3>
              <p className="text-[#3C2F2F]/75 text-[15px] leading-relaxed">
                Especialistas com pós-graduação e formação em sustentabilidade, trajetória
                construída em cargos de direção, coordenação e gerência em organizações. Possuem
                <span className="text-[#3C2F2F] font-medium"> certificações internacionais</span> e
                vasta experiência de campo em relacionamento comunitário, projetos sociais,
                avaliação de projetos e desenvolvimento de estratégias, com atuação em nível
                territorial e nacional. Trabalharam em diferentes ramos — telecomunicações,
                <span className="text-[#3C2F2F] font-medium"> siderurgia</span>, mineração e
                bioflorestas — incluindo a <span className="text-[#3C2F2F] font-medium">gestão de
                grandes desastres</span> e situações de gravidade elevada, onde a leitura social do
                território e a capacidade de resposta foram decisivas.
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

        <div className="mt-20 lg:mt-28">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl lg:text-3xl font-light text-[#3C2F2F] mb-3 text-balance"
          >
            Quem somos
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#3C2F2F]/70 max-w-2xl text-[15px] leading-relaxed mb-10"
          >
            Conheça as pessoas que conduzem os trabalhos da Ponte Social.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {TEAM.map((person, i) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                className="group flex flex-col bg-[#EFE8E0] border border-[#D6CDBF]/60 rounded-xl p-6 hover:border-[#C87A53] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#3C2F2F] flex items-center justify-center text-[#F4EFEA] font-display text-xl font-medium mb-5">
                  {person.name.charAt(0)}
                </div>
                <h4 className="font-display text-lg font-medium text-[#3C2F2F] leading-snug">
                  {person.name}
                </h4>
                <p className="text-[#C87A53] text-[13px] font-medium mt-1 mb-3 leading-snug">
                  {person.role}
                </p>
                <p className="text-[#3C2F2F]/70 text-[14px] leading-relaxed flex-grow">
                  {person.bio}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[#3C2F2F] text-sm font-medium border border-[#D6CDBF] rounded-full px-4 py-2 hover:bg-[#3C2F2F] hover:text-[#F4EFEA] hover:border-[#3C2F2F] transition-colors duration-300"
                >
                  <Linkedin size={16} />
                  Ver no LinkedIn
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}