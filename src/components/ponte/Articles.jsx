import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { ARTICLES } from "./articles-data";

export default function Articles() {
  return (
    <section id="artigos" className="relative py-24 lg:py-40 bg-[#F4EFEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
              Artigos
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance">
              Reflexões sobre a dimensão social dos negócios.
            </h2>
          </div>
          <p className="text-[#3C2F2F]/70 max-w-sm text-[15px] leading-relaxed">
            Textos de Daniel Perini sobre riscos sociais, stakeholders e território.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
            >
              <Link to={`/artigos/${a.slug}`} className="group block h-full">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#D6CDBF]/60">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fittingType="fill"
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-[11px] tracking-[0.14em] uppercase text-[#3C2F2F]/50 mb-3">
                    <span className="text-[#C87A53]">{a.category}</span>
                    <span className="w-4 h-px bg-[#D6CDBF]" />
                    <span>{a.date}</span>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-medium text-[#3C2F2F] leading-snug mb-3 group-hover:text-[#C87A53] transition-colors flex items-start gap-2">
                    {a.title}
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>
                  <p className="text-[#3C2F2F]/70 text-[15px] leading-relaxed">{a.excerpt}</p>
                  <span className="mt-4 block text-xs tracking-[0.12em] uppercase text-[#3C2F2F]/45">
                    {a.author}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}