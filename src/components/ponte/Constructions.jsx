import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { base44 } from "@/api/base44Client";
import { useTranslation } from "@/i18n/LanguageProvider";

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#073050]/55 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-[#073050]/25 py-2 text-[#073050] placeholder:text-[#073050]/35 focus:border-[#1B562A] outline-none";

export default function Constructions() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const cases = t("constructions.cases");
  const labels = t("constructions.labels");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: t("constructions.toastRequired") });
      return;
    }
    setSending(true);
    try {
      await base44.integrations.Core.SendEmail({
        to: "comercial@pontesocialconsultoria.com.br",
        subject: "Contato — Ponte Social",
        body: `Nome: ${form.name}\nE-mail: ${form.email}\nEmpresa: ${form.company}\n\n${form.message}`,
      });
      toast({ title: t("constructions.toastSuccess") });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      toast({ title: t("constructions.toastError") });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="construcoes" className="py-24 lg:py-32 bg-[#A4B29B]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <motion.span {...fade(0)} className="text-[#A67C00] text-xs font-medium tracking-[0.22em] uppercase mb-5 block">
            {t("constructions.kicker")}
          </motion.span>
          <motion.h2 {...fade(0.05)} className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#073050] leading-[1.08] tracking-tight text-balance">
            {t("constructions.title")}
          </motion.h2>
          <motion.p {...fade(0.1)} className="mt-5 text-[#073050]/70 text-base lg:text-[17px] leading-relaxed">
            {t("constructions.intro")}
          </motion.p>
        </div>

        <div className="space-y-10">
          {cases.map((c, i) => (
            <motion.article key={c.num} {...fade(i * 0.05)} className="grid lg:grid-cols-12 gap-6 lg:gap-10 border-t border-[#073050]/15 pt-8">
              <div className="lg:col-span-4">
                <span className="font-display text-4xl text-[#A67C00] leading-none">{c.num}</span>
                <p className="mt-3 text-[11px] font-medium tracking-[0.18em] uppercase text-[#073050]/50">{c.tag}</p>
                <h3 className="font-display text-xl lg:text-2xl text-[#073050] mt-2 leading-tight">{c.title}</h3>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#A67C00] mb-1">{labels.contexto}</p>
                  <p className="text-[#073050]/75 text-sm leading-relaxed">{c.contexto}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#A67C00] mb-1">{labels.desafio}</p>
                  <p className="text-[#073050]/75 text-sm leading-relaxed">{c.desafio}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#A67C00] mb-1">{labels.atuacao}</p>
                  <p className="text-[#073050]/75 text-sm leading-relaxed">{c.atuacao}</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#A67C00] mb-1">{labels.diferencial}</p>
                  <p className="text-[#073050]/75 text-sm leading-relaxed">{c.diferencial}</p>
                </div>
                <div className="sm:col-span-2 border-t border-[#073050]/12 pt-4">
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#073050]/50 mb-1">{labels.resultado}</p>
                  <p className="text-[#073050] text-[15px] leading-relaxed font-medium">{c.resultado}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl lg:text-3xl text-[#073050] leading-tight">{t("constructions.formTitle")}</h3>
            <p className="mt-3 text-[#073050]/70 text-[15px] leading-relaxed">{t("constructions.formIntro")}</p>
          </div>
          <form onSubmit={submit} className="lg:col-span-7 grid gap-4 bg-[#F6F6F6] border border-[#A4B29B]/40 rounded-2xl p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={t("constructions.fieldName")}>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
              </Field>
              <Field label={t("constructions.fieldEmail")}>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
              </Field>
            </div>
            <Field label={t("constructions.fieldCompany")}>
              <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} />
            </Field>
            <Field label={t("constructions.fieldMessage")}>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t("constructions.placeholder")}
                className={`${inputCls} resize-none`}
              />
            </Field>
            <button
              type="submit"
              disabled={sending}
              className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-[#073050] px-6 py-2.5 text-sm font-medium tracking-[0.12em] uppercase text-[#FFFFFF] hover:bg-[#1B562A] transition-colors disabled:opacity-60"
            >
              {sending ? t("constructions.sending") : t("constructions.submit")}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}