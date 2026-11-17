import { useSite } from "../i18n/lang";

/** Botão PT/EN: mostra o idioma de destino. */
export function LanguageSwitch() {
  const { t, setLang } = useSite();
  const { short, label, target } = t.langSwitch;
  return (
    <button
      type="button"
      onClick={() => setLang(target)}
      className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white font-display font-extrabold text-ink ring-2 ring-ink/15 hover:bg-butter"
    >
      <span lang={target === "en" ? "en" : "pt-BR"}>
        {short}
        <span className="sr-only"> — {label}</span>
      </span>
    </button>
  );
}
