import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Navbar from "@/components/ponte/Navbar";
import Footer from "@/components/ponte/Footer";
import Seo from "@/components/ponte/Seo";
import { useTranslation } from "@/i18n/LanguageProvider";
import { useArticle, useOtherArticles } from "@/components/ponte/articles-data";
import ReactMarkdown from "react-markdown";

const ARTICLE_MD_COMPONENTS = {
  p: "span",
  a: ({ node, ...props }) => (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#A67C00] underline underline-offset-2 hover:text-[#073050] transition-colors"
    />
  ),
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const article = useArticle(slug);
  const others = useOtherArticles(slug);

  if (!article) {
    return (
      <div className="bg-[#F6F6F6] min-h-screen">
        <Seo title={`${t("articles.notFoundTitle")} | Ponte Social`} description={t("seo.description")} />
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-40 text-center">
          <h1 className="font-display text-3xl text-[#073050] mb-4">{t("articles.notFoundTitle")}</h1>
          <Link to="/#artigos" className="text-[#A67C00] hover:underline">
            {t("articles.backToArticles")}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#F6F6F6]">
      <Seo
        title={article.metaTitle}
        description={article.metaDescription}
        keywords={(article.keywords || []).join(", ")}
        image={article.image}
      />
      <Navbar />
      <main>
        <article>
          <header className="pt-32 pb-12 lg:pt-40 lg:pb-16">
            <div className="max-w-3xl mx-auto px-6">
              <Link
                to="/#artigos"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#073050]/60 hover:text-[#1B562A] transition-colors mb-8"
              >
                <ArrowLeft size={15} /> {t("nav.insights")}
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 text-xs tracking-[0.14em] uppercase text-[#073050]/50 mb-5">
                  <span className="text-[#A67C00]">{article.category}</span>
                  <span className="w-4 h-px bg-[#A4B29B]" />
                  <span>{article.date}</span>
                </div>
                <h1 className="font-display text-3xl lg:text-5xl font-light text-[#073050] leading-[1.1] tracking-tight text-balance mb-6">
                  {article.title}
                </h1>
                <p className="text-[#073050]/70 text-lg leading-relaxed">{article.excerpt}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#073050] flex items-center justify-center text-[#A67C00] font-display text-sm">
                    DP
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#073050]">{article.author}</p>
                    <p className="text-xs text-[#073050]/50">{t("articles.authorRole")}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </header>

          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#A4B29B]/40"
            >
              <Image src={article.image} alt={article.imageAlt} fittingType="fill" className="w-full h-full" />
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
            <div className="space-y-7 text-[#073050]/85 text-[18px] leading-[1.8]">
              {article.body.map((p, i) => {
                const anim = {
                  initial: { opacity: 0, y: 15 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-40px" },
                  transition: { duration: 0.5, delay: i * 0.05 },
                };
                if (p && typeof p === "object" && p.type === "heading") {
                  return (
                    <motion.h2
                      key={i}
                      {...anim}
                      className="font-display text-2xl lg:text-[28px] font-medium text-[#073050] leading-tight pt-8"
                    >
                      {p.text}
                    </motion.h2>
                  );
                }
                if (p && typeof p === "object" && p.type === "list") {
                  return (
                    <motion.ul
                      key={i}
                      {...anim}
                      className="list-disc pl-6 space-y-2 text-[#073050]/85 marker:text-[#A67C00]"
                    >
                      {p.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </motion.ul>
                  );
                }
                if (p && typeof p === "object" && p.type === "footnote") {
                  return (
                    <motion.p
                      key={i}
                      {...anim}
                      className="text-sm italic text-[#073050]/55 border-t border-[#A4B29B]/40 pt-6 mt-2"
                    >
                      {p.text}
                    </motion.p>
                  );
                }
                return (
                  <motion.p key={i} {...anim}>
                    <ReactMarkdown components={ARTICLE_MD_COMPONENTS}>{p}</ReactMarkdown>
                  </motion.p>
                );
              })}
            </div>

            <div className="mt-16 pt-10 border-t border-[#A4B29B]/40">
              <Link
                to="/#artigos"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#073050]/60 hover:text-[#1B562A] transition-colors"
              >
                <ArrowLeft size={15} /> {t("articles.backToArticles")}
              </Link>
            </div>
          </div>
        </article>

        {others.length > 0 && (
          <section className="py-20 lg:py-28 bg-[#A4B29B]/15 border-t border-[#A4B29B]/40">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <h2 className="font-display text-2xl lg:text-3xl font-light text-[#073050] mb-10">
                {t("articles.continueReading")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {others.map((a) => (
                  <Link key={a.slug} to={`/artigos/${a.slug}`} className="group block">
                    <div className="flex gap-5">
                      <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-lg border border-[#A4B29B]/40">
                        <Image
                          src={a.image}
                          alt={a.imageAlt}
                          fittingType="fill"
                          className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[11px] tracking-[0.14em] uppercase text-[#A67C00] mb-2">
                          {a.category}
                        </span>
                        <h3 className="font-display text-lg font-medium text-[#073050] leading-snug group-hover:text-[#1B562A] transition-colors flex items-start gap-1.5">
                          {a.title}
                          <ArrowUpRight
                            size={16}
                            className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}