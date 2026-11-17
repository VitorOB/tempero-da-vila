import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { Info, MessageCircle } from "lucide-react";
import type { MenuItem } from "../data/site";
import { useSite } from "../i18n/lang";
import { waLink } from "../lib/whatsapp";
import { Img } from "./Img";

const INDICATOR_BASE = 100; // largura base do indicador em px; a largura real vem do scaleX

function OrderLink({ name, light = false }: { name: string; light?: boolean }) {
  const { t } = useSite();
  return (
    <a
      href={waLink(t.dishMessage(name))}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-4 text-base font-extrabold ${
        light ? "bg-brand text-white hover:bg-brand-dark" : "bg-butter text-brand hover:bg-brand hover:text-white"
      }`}
    >
      <MessageCircle aria-hidden="true" className="size-4" />
      {t.order}
      <span className="sr-only">{t.orderDishSr(name)}</span>
    </a>
  );
}

function FeaturedCard({ item }: { item: MenuItem & { image: NonNullable<MenuItem["image"]> } }) {
  return (
    <article className="card-lift flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/10">
      <div className="relative aspect-4/3 overflow-hidden">
        <Img
          name={item.image}
          sizes="(min-width: 1024px) 520px, (min-width: 640px) 90vw, 100vw"
          className="card-photo size-full object-cover"
        />
        {item.tag && <span className="stamp stamp-tomato absolute left-4 top-4 shadow">{item.tag}</span>}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <h3 className="text-2xl font-extrabold text-ink">{item.name}</h3>
        <p className="text-muted">{item.description}</p>
        <div className="mt-auto pt-3">
          <OrderLink name={item.name} light />
        </div>
      </div>
    </article>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="card-lift flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-2xl bg-white p-4 ring-1 ring-ink/10 sm:p-5">
      <div className="min-w-0 flex-1 basis-56">
        <h3 className="flex flex-wrap items-center gap-2 text-xl font-extrabold text-ink">
          {item.name}
          {item.tag && <span className="stamp stamp-tomato text-sm">{item.tag}</span>}
        </h3>
        <p className="mt-1 text-muted">{item.description}</p>
      </div>
      <OrderLink name={item.name} />
    </li>
  );
}

export function Menu() {
  const { lang, site, t } = useSite();
  const { contact, menu, menuSection } = site;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const userChanged = useRef(false);
  const [indicator, setIndicator] = useState({ x: 0, w: 0 });

  const measure = useCallback(() => {
    const tab = tabRefs.current[active];
    if (tab) setIndicator({ x: tab.offsetLeft, w: tab.offsetWidth });
  }, [active]);

  // As abas mudam de largura com o idioma, então o indicador é medido de novo.
  useLayoutEffect(measure, [measure, lang]);

  // Recalcula o indicador quando a largura muda (rotação, zoom, fonte carregada).
  useEffect(() => {
    const el = listRef.current;
    if (!el || !("ResizeObserver" in window)) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [measure]);

  // Mantém a aba ativa visível na faixa rolável (só depois de interação do usuário).
  useEffect(() => {
    if (!userChanged.current) return;
    tabRefs.current[active]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  const select = (i: number, focus = false) => {
    userChanged.current = true;
    setActive(i);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = menu.length - 1;
    const map: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <section id="cardapio" aria-labelledby="cardapio-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal">
          <p className="eyebrow">{menuSection.eyebrow}</p>
          <h2 id="cardapio-title" className="section-title mt-1">
            {menuSection.title}
          </h2>
          <p className="mt-3 max-w-xl text-muted">{menuSection.intro}</p>
        </div>

        {/* Abas no padrão ARIA: setas, Home e End trocam a categoria */}
        <div className="mt-8 -mx-4 overflow-x-auto px-4 [scrollbar-width:thin] sm:mx-0 sm:px-0">
          <div
            ref={listRef}
            role="tablist"
            aria-label={t.menuCategories}
            className="relative inline-flex min-w-full gap-1 border-b-2 border-ink/10"
          >
            {menu.map((cat, i) => (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={i === active}
                aria-controls={`painel-${cat.id}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={onKeyDown}
                className={`min-h-12 shrink-0 whitespace-nowrap rounded-t-xl px-4 pb-2 pt-2 font-display text-lg font-bold transition-colors ${
                  i === active ? "text-brand" : "text-muted hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span
              aria-hidden="true"
              className="tab-indicator absolute -bottom-0.5 left-0 h-1 rounded-full bg-tomato"
              style={{
                width: INDICATOR_BASE,
                transform: `translateX(${indicator.x}px) scaleX(${indicator.w / INDICATOR_BASE})`,
              }}
            />
          </div>
        </div>

        {menu.map((cat, i) => {
          const featured = cat.items.filter((it): it is MenuItem & { image: NonNullable<MenuItem["image"]> } =>
            Boolean(it.image)
          );
          const rest = cat.items.filter((it) => !it.image);
          return (
            <div
              key={cat.id}
              role="tabpanel"
              id={`painel-${cat.id}`}
              aria-labelledby={`tab-${cat.id}`}
              hidden={i !== active}
              className="pt-8"
            >
              {cat.note && (
                <p className="mb-6 inline-flex items-start gap-2 rounded-2xl bg-butter px-4 py-3 font-bold">
                  <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                  {cat.note}
                </p>
              )}
              <div className={featured.length ? "grid gap-6 lg:grid-cols-[1fr_1.15fr]" : ""}>
                {featured.map((item) => (
                  <FeaturedCard key={item.name} item={item} />
                ))}
                <ul className={`grid content-start gap-3 ${featured.length ? "" : "md:grid-cols-2"}`}>
                  {rest.map((item) => (
                    <ItemRow key={item.name} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        <div className="mt-10 flex flex-col items-start gap-3 rounded-3xl bg-brand p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8 on-dark">
          <p className="font-display text-2xl font-extrabold">{t.chosen}</p>
          <a
            href={waLink(contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-brand hover:bg-butter"
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            {menuSection.cta}
            <span className="sr-only"> {t.newTab}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
