import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Navbar from "@/components/ponte/Navbar";
import Footer from "@/components/ponte/Footer";
import { ARTICLES } from "@/components/ponte/articles-data";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);
  const others = ARTICLES.filter((a) => a.slug !== slug);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = article ? `${article.title} | Ponte Social` : "Ponte Social";
    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    if (article) {
      setMeta("description", article.description || article.excerpt);
      setMeta("keywords", article.keywords);
    }
    return () => {
      document.title = prevTitle;
    };
  }, [article]);

  if (!article) {
    return (
      <div className="bg-[#F4EFEA] min-h-screen">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-40 text-center">
          <h1 className="font-display text-3xl text-[#3C2F2F] mb-4">Artigo não encontrado</h1>
          <Link to="/#artigos" className="text-[#C87A53] hover:underline">
            Voltar aos artigos
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#F4EFEA]">
      <Navbar />
      <main>
        <article>
          <header className="pt-32 pb-12 lg:pt-40 lg:pb-16">
            <div className="max-w-3xl mx-auto px-6">
              <Link
                to="/#artigos"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#3C2F2F]/60 hover:text-[#C87A53] transition-colors mb-8"
              >
                <ArrowLeft size={15} /> Artigos
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 text-xs tracking-[0.14em] uppercase text-[#3C2F2F]/50 mb-5">
                  <span className="text-[#C87A53]">{article.category}</span>
                  <span className="w-4 h-px bg-[#D6CDBF]" />
                  <span>{article.date}</span>
                </div>
                <h1 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance mb-6">
                  {article.title}
                </h1>
                <p className="text-[#3C2F2F]/70 text-lg leading-relaxed">{article.excerpt}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3C2F2F] flex items-center justify-center text-[#C87A53] font-display text-sm">
                    DP
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#3C2F2F]">{article.author}</p>
                    <p className="text-xs text-[#3C2F2F]/50">Ponte Social</p>
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
              className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#D6CDBF]/60"
            >
              <Image src={article.image} alt={article.title} fittingType="fill" className="w-full h-full" />
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
            <div className="space-y-7 text-[#3C2F2F]/85 text-[18px] leading-[1.8]">
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
                      className="font-display text-2xl lg:text-[28px] font-medium text-[#3C2F2F] leading-tight pt-8"
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
                      className="list-disc pl-6 space-y-2 text-[#3C2F2F]/85 marker:text-[#C87A53]"
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
                      className="text-sm italic text-[#3C2F2F]/55 border-t border-[#D6CDBF]/60 pt-6 mt-2"
                    >
                      {p.text}
                    </motion.p>
                  );
                }
                return (
                  <motion.p key={i} {...anim}>{p}</motion.p>
                );
              })}
            </div>

            <div className="mt-16 pt-10 border-t border-[#D6CDBF]/60">
              <Link
                to="/#artigos"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#3C2F2F]/60 hover:text-[#C87A53] transition-colors"
              >
                <ArrowLeft size={15} /> Voltar aos artigos
              </Link>
            </div>
          </div>
        </article>

        {others.length > 0 && (
          <section className="py-20 lg:py-28 bg-[#EFE8E0] border-t border-[#D6CDBF]/60">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <h2 className="font-display text-2xl lg:text-3xl font-light text-[#3C2F2F] mb-10">
                Continue lendo
              </h2>
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {others.map((a) => (
                  <Link key={a.slug} to={`/artigos/${a.slug}`} className="group block">
                    <div className="flex gap-5">
                      <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-lg border border-[#D6CDBF]/60">
                        <Image
                          src={a.image}
                          alt={a.title}
                          fittingType="fill"
                          className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[11px] tracking-[0.14em] uppercase text-[#C87A53] mb-2">
                          {a.category}
                        </span>
                        <h3 className="font-display text-lg font-medium text-[#3C2F2F] leading-snug group-hover:text-[#C87A53] transition-colors flex items-start gap-1.5">
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