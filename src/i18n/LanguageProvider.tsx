import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { sitePt } from "../data/site";
import { siteEn } from "../data/site.en";
import { ui, type Lang } from "../data/ui";
import { SiteContext, detectLang, saveLang } from "./lang";

const sites = { pt: sitePt, en: siteEn };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = useCallback((next: Lang) => {
    saveLang(next);
    setLangState(next);
    // ?lang=en fica na URL para o link poder ser compartilhado já em inglês.
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);
  }, []);

  // Idioma do documento, título e descrição acompanham a escolha.
  useEffect(() => {
    const { seo } = sites[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
  }, [lang]);

  const value = useMemo(() => ({ lang, site: sites[lang], t: ui[lang], setLang }), [lang, setLang]);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
