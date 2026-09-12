import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useTranslation } from "@/i18n/LanguageProvider";
import { useArticles } from "./articles-data";

export default function Articles() {
  const { t } = useTranslation();
  const articles = useArticles();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((a) =>
      [a.title, a.category, a.excerpt, (a.keywords || []).join(" "), a.author]
        .filter(Boolean)
        .some((f) => f.toLowerCase().includes(q))
    );
  }, [query, articles]);

  return (
    <section id="artigos" className="relative py-24 lg:py-40 bg-[#F4EFEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-[#A67C00] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
              {t("articles.kicker")}
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#1F4A2E] leading-[1.1] tracking-tight text-balance">
              {t("articles.title")}
            </h2>
          </div>
          <p className="text-[#1F4A2E]/70 max-w-sm text-[15px] leading-relaxed">
            {t("articles.intro")}
          </p>
        </div>

        <div className="relative max-w-xl mb-12">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1F4A2E]/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("articles.searchPlaceholder")}
            aria-label={t("articles.searchPlaceholder")}
            className="w-full bg-[#EAF0E5] border border-[#C2D2C0] rounded-full pl-12 pr-11 py-3.5 text-[15px] text-[#1F4A2E] placeholder:text-[#1F4A2E]/40 outline-none focus:border-[#A67C00] transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1F4A2E]/40 hover:text-[#A67C00] transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#1F4A2E]/60">
            <p className="font-display text-xl mb-2">{t("articles.emptyTitle")}</p>
            <p className="text-[15px]">{t("articles.emptyText")}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              >
                <Link to={`/artigos/${a.slug}`} className="group block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#C2D2C0]/60">
                    <Image
                      src={a.image}
                      alt={a.imageAlt}
                      fittingType="fill"
                      className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-[11px] tracking-[0.14em] uppercase text-[#1F4A2E]/50 mb-3">
                      <span className="text-[#A67C00]">{a.category}</span>
                      <span className="w-4 h-px bg-[#C2D2C0]" />
                      <span>{a.date}</span>
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl font-medium text-[#1F4A2E] leading-snug mb-3 group-hover:text-[#A67C00] transition-colors flex items-start gap-2">
                      {a.title}
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                    <p className="text-[#1F4A2E]/70 text-[15px] leading-relaxed">{a.excerpt}</p>
                    <span className="mt-4 block text-xs tracking-[0.12em] uppercase text-[#1F4A2E]/45">
                      {a.author}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}