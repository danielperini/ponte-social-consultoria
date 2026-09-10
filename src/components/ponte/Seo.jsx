import React, { useEffect } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { LANGUAGES } from "@/i18n/translations";

const OG_LOCALE = { "pt-BR": "pt_BR", en: "en_US", es: "es_419" };

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, hreflang, href) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({ title, description, keywords, image }) {
  const { lang } = useTranslation();

  useEffect(() => {
    document.title = title || "";

    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", OG_LOCALE[lang]);
    if (image) upsertMeta("property", "og:image", image);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    if (image) upsertMeta("name", "twitter:image", image);

    const canonical = window.location.href.split("?")[0].split("#")[0];
    upsertLink("canonical", null, canonical);
    LANGUAGES.forEach((l) => upsertLink("alternate", l, `${canonical}?lang=${l}`));
    upsertLink("alternate", "x-default", `${canonical}?lang=pt-BR`);
  }, [lang, title, description, keywords, image]);

  return null;
}