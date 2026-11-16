import { MessageCircle, ShoppingBag, Smartphone, Utensils } from "lucide-react";
import { contact, howSection, steps } from "../data/site";
import { waLink } from "../lib/whatsapp";

const stepIcons = { utensils: Utensils, message: MessageCircle, bag: ShoppingBag };

export function HowToOrder() {
  const hasDelivery = contact.deliveryUrl.trim() !== "";

  return (
    <section id="como-pedir" aria-labelledby="como-pedir-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal text-center">
          <p className="eyebrow">{howSection.eyebrow}</p>
          <h2 id="como-pedir-title" className="section-title mt-1">
            {howSection.title}
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = stepIcons[s.icon];
            return (
              <li key={s.title} className="reveal relative rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-7">
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 font-display text-5xl font-extrabold text-butter"
                >
                  {i + 1}
                </span>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-white">
                  <Icon aria-hidden="true" className="size-7" />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-ink">
                  <span className="sr-only">Passo {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-2 text-muted">{s.description}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink(contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary min-h-14 px-7 text-lg"
          >
            <MessageCircle aria-hidden="true" className="size-6" />
            {howSection.whatsappCta}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          {hasDelivery && (
            <a
              href={contact.deliveryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary min-h-14 px-7 text-lg"
            >
              <Smartphone aria-hidden="true" className="size-6" />
              {howSection.deliveryCta}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
