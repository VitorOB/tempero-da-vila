import { useState } from "react";
import { Bike, Check, MessageCircle, Store } from "lucide-react";
import { useSite } from "../i18n/lang";
import { marmitexMessage, waLink } from "../lib/whatsapp";
import { Img } from "./Img";

const optionIcons = { bike: Bike, store: Store };

export function Marmitex() {
  const { site, t } = useSite();
  const { contact, marmitexOptions, marmitexSection, marmitexSizes } = site;
  const [size, setSize] = useState("M");
  const chosen = marmitexSizes.find((s) => s.id === size);
  const message = marmitexMessage(contact.marmitexMessage, chosen ? `${chosen.letter} (${chosen.name})` : undefined);

  return (
    <section id="marmitex" aria-labelledby="marmitex-title" className="gingham py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal grid overflow-hidden rounded-[2rem] bg-cream shadow-xl ring-1 ring-ink/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-3/2 overflow-hidden lg:aspect-auto">
            <Img
              name="marmitex"
              sizes="(min-width: 1024px) 520px, 100vw"
              className="absolute inset-0 size-full object-cover"
            />
            <span className="stamp stamp-tomato absolute left-4 top-4 px-4 py-2 text-lg shadow-md">
              {t.deliveryPickup}
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <p className="eyebrow">{marmitexSection.eyebrow}</p>
            <h2 id="marmitex-title" className="section-title mt-1">
              {marmitexSection.title}
            </h2>
            <p className="mt-4 text-lg">{marmitexSection.text}</p>

            <fieldset className="mt-7">
              <legend className="font-display text-xl font-extrabold text-ink">{marmitexSection.sizesLabel}</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {marmitexSizes.map((s) => {
                  const checked = s.id === size;
                  return (
                    <label
                      key={s.id}
                      className={`relative flex cursor-pointer items-center gap-3 rounded-2xl bg-white p-3 ring-2 transition-shadow has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-ink sm:flex-col sm:items-start sm:gap-1 sm:p-4 ${
                        checked ? "ring-brand" : "ring-ink/15 hover:ring-ink/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tamanho"
                        value={s.id}
                        checked={checked}
                        onChange={() => setSize(s.id)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`flex size-12 shrink-0 items-center justify-center rounded-full font-display text-2xl font-extrabold ${
                          checked ? "bg-brand text-white" : "bg-butter text-ink"
                        }`}
                      >
                        {s.letter}
                      </span>
                      <span>
                        <span className="block font-extrabold">
                          {s.name}
                          <span className="sr-only"> ({s.letter})</span>
                        </span>
                        <span className="block text-sm text-muted">{s.description}</span>
                      </span>
                      {checked && (
                        <Check aria-hidden="true" className="absolute right-3 top-3 size-5 text-brand" />
                      )}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {marmitexOptions.map((o) => {
                const Icon = optionIcons[o.icon];
                return (
                  <li key={o.title} className="flex gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-butter text-brand">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <span>
                      <span className="block font-extrabold">{o.title}</span>
                      <span className="block text-muted">{o.description}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8 min-h-14 w-full px-7 text-lg sm:w-auto"
            >
              <MessageCircle aria-hidden="true" className="size-6" />
              {marmitexSection.cta}
              <span className="sr-only">{t.sizeSr(chosen?.name ?? "")}</span>
            </a>
            <p className="mt-4 text-muted">{marmitexSection.officeNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
