import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { base44 } from "@/api/base44Client";
import { useTranslation } from "@/i18n/LanguageProvider";

const CASE_IMAGES = [
  "https://images.unsplash.com/photo-1695169152303-fdbd96a95cc2?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1632798121054-c6b73cc9e8b0?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585413145330-d093b633f303?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587944333503-ef66108afa79?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1658877556576-41341f9bfaf5?fm=jpg&q=80&w=1200&auto=format&fit=crop",
];

export default function Constructions() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const cases = t("constructions.cases");
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", mensagem: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      toast({ title: t("constructions.toastRequired") });
      return;
    }
    setSending(true);
    try {
      await base44.integrations.Core.SendEmail({
        to: "contato@pontesocial.com.br",
        subject: `Novo contato pelo site — ${form.nome}`,
        text: `Nome: ${form.nome}\nEmail: ${form.email}\nEmpresa: ${form.empresa || "—"}\n\n${form.mensagem}`,
      });
      toast({ title: t("constructions.toastSuccess") });
      setForm({ nome: "", email: "", empresa: "", mensagem: "" });
    } catch (err) {
      toast({ title: t("constructions.toastError"), variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="construcoes" className="relative py-24 lg:py-40 bg-[#EFE8E0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[#C87A53] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("constructions.kicker")}
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#3C2F2F] leading-[1.1] tracking-tight text-balance">
            {t("constructions.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-28">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
              className="group bg-[#F4EFEA] rounded-xl overflow-hidden border border-[#D6CDBF]/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={CASE_IMAGES[i]}
                  alt={c.title}
                  fittingType="fill"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#3C2F2F]/85 text-[#F4EFEA] text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <span className="inline-block text-[#C87A53] text-[11px] font-medium tracking-[0.14em] uppercase mb-3">
                  {c.category}
                </span>
                <h3 className="font-display text-xl font-medium text-[#3C2F2F] leading-snug mb-3">
                  {c.title}
                </h3>
                <p className="text-[#3C2F2F]/70 text-[15px] leading-relaxed">{c.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h3 className="font-display text-3xl lg:text-4xl font-light text-[#3C2F2F] leading-tight mb-6">
              {t("constructions.formTitle")}
            </h3>
            <p className="text-[#3C2F2F]/75 leading-relaxed mb-8">
              {t("constructions.formIntro")}
            </p>
            <div className="space-y-4">
              <a href="mailto:contato@pontesocial.com.br" className="flex items-center gap-3 text-[#3C2F2F]/80 hover:text-[#C87A53] transition-colors">
                <Mail size={18} className="text-[#C87A53]" />
                contato@pontesocial.com.br
              </a>
              <a href="tel:+551130000000" className="flex items-center gap-3 text-[#3C2F2F]/80 hover:text-[#C87A53] transition-colors">
                <Phone size={18} className="text-[#C87A53]" />
                +55 11 3000-0000
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#F4EFEA] rounded-xl p-7 lg:p-10 border border-[#D6CDBF]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={t("constructions.fieldName")} value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} />
              <Field label={t("constructions.fieldEmail")} type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <div className="mt-5">
              <Field label={t("constructions.fieldCompany")} value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-medium tracking-[0.1em] uppercase text-[#3C2F2F]/60 mb-2">
                {t("constructions.fieldMessage")}
              </label>
              <textarea
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-[#D6CDBF] focus:border-[#C87A53] outline-none py-2 text-[#3C2F2F] resize-none transition-colors"
                placeholder={t("constructions.placeholder")}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-8 inline-flex items-center gap-2 bg-[#3C2F2F] text-[#F4EFEA] px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#C87A53] transition-colors disabled:opacity-50"
            >
              {sending ? t("constructions.sending") : t("constructions.submit")}
              <Send size={15} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-[0.1em] uppercase text-[#3C2F2F]/60 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-[#D6CDBF] focus:border-[#C87A53] outline-none py-2 text-[#3C2F2F] transition-colors"
      />
    </div>
  );
}