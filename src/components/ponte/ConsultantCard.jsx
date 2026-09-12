import React, { useState } from "react";
import { Linkedin, ChevronDown, GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

export default function ConsultantCard({ p, labels }) {
  const [showFull, setShowFull] = useState(false);
  const hasExpand = (p.certs?.length > 0 || p.complementary?.length > 0);

  return (
    <div className="h-full min-h-[580px] lg:min-h-[640px] flex flex-col bg-[#EAF0E5] border border-[#C2D2C0]/70 rounded-2xl p-6 lg:p-7">
      <span className="text-[#A67C00] text-[11px] font-medium tracking-[0.2em] uppercase">{p.kicker}</span>
      <h3 className="font-display text-xl lg:text-2xl text-[#1F4A2E] mt-1.5 leading-tight">{p.name}</h3>
      <p className="text-[#A67C00] text-[13px] font-medium mt-1 leading-snug">{p.role}</p>
      <p className="mt-3 text-[#1F4A2E]/75 text-sm leading-relaxed">{p.summary}</p>

      {p.education?.length > 0 && (
        <div className="mt-4 border-t border-[#1F4A2E]/12 pt-3">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#1F4A2E]/50 mb-1.5">
            <GraduationCap size={14} className="text-[#A67C00]" />
            {labels.educationTitle}
          </p>
          <ul className="space-y-1">
            {p.education.map((e, i) => (
              <li key={i} className="text-[#1F4A2E]/75 text-[13px] leading-relaxed flex gap-2">
                <span className="text-[#A67C00]">·</span>{e}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-3 border-t border-[#1F4A2E]/12 pt-3 flex-1 flex flex-col min-h-0">
        {p.certsShort && (
          <>
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#1F4A2E]/50 mb-1.5">
              <Award size={14} className="text-[#A67C00]" />
              {labels.certsTitle}
            </p>
            <p className="text-[#1F4A2E] text-[13px] font-medium leading-relaxed">{p.certsShort}</p>
          </>
        )}
        {hasExpand && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#A67C00] hover:underline self-start"
          >
            {showFull ? labels.hideFull : labels.seeFull}
            <ChevronDown size={14} className={`transition-transform ${showFull ? "rotate-180" : ""}`} />
          </button>
        )}

        <div className="flex-1 overflow-y-auto mt-2 -mx-1 px-1">
          {showFull && (
            <>
              {p.certs?.length > 0 && (
                <ul className="space-y-2">
                  {p.certs.map((c, i) => (
                    <li key={i} className="text-[#1F4A2E]/75 text-[13px] leading-relaxed flex gap-2">
                      {c.ongoing ? (
                        <span className="text-[#A67C00] text-[10px] font-medium uppercase tracking-wide mt-0.5 shrink-0">{labels.ongoing}</span>
                      ) : (
                        <CheckCircle2 size={14} className="text-[#A67C00] shrink-0 mt-0.5" />
                      )}
                      <span>
                        <span className="text-[#1F4A2E]">{c.name}</span> — {c.inst}
                        {c.year ? ` · ${c.year}` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {p.complementary?.length > 0 && (
                <>
                  <p className="mt-4 flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#1F4A2E]/50 mb-1.5">
                    <BookOpen size={14} className="text-[#A67C00]" />
                    {labels.complementaryTitle}
                  </p>
                  <ul className="space-y-1">
                    {p.complementary.map((c, i) => (
                      <li key={i} className="text-[#1F4A2E]/70 text-[13px] leading-relaxed flex gap-2">
                        <span className="text-[#A67C00]">·</span>{c}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </div>
      </div>

      <a
        href={p.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-sm text-[#1F4A2E] hover:text-[#A67C00] transition-colors border-t border-[#1F4A2E]/12 pt-3"
      >
        <Linkedin size={16} className="text-[#A67C00]" />
        {labels.linkedinCta}
      </a>
      <p className="mt-2 text-[10px] text-[#1F4A2E]/45 leading-relaxed">{labels.profileNote}</p>
    </div>
  );
}