import { Clock, MessageCircle, UtensilsCrossed } from "lucide-react";
import { useSite } from "../i18n/lang";
import { getTodayDish } from "../lib/today";
import { waLink } from "../lib/whatsapp";
import { Img } from "./Img";

export function Hero() {
  const { site, t } = useSite();
  const { contact, hero, weekSection, weekMenu } = site;
  const today = getTodayDish(weekMenu);
  const orderMessage = today ? t.dishMessage(`${today.dish} ${t.dishOfDaySuffix}`) : contact.whatsappMessage;

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-20 lg:pt-14">
        <div>
          {/* Prato de hoje: a informação mais importante, logo no topo */}
          <a
            href="#semana"
            className="mb-5 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl bg-white py-2 pl-2 pr-4 shadow-sm ring-1 ring-ink/10 hover:ring-brand"
          >
            {today ? (
              <>
                <span className="stamp stamp-tomato">{t.todayExcl}</span>
                <span className="font-bold">
                  <span className="sr-only">{t.dishOfDayLabel}</span>
                  {today.dish}
                </span>
              </>
            ) : (
              <>
                <span className="stamp stamp-tomato">{t.sunday}</span>
                <span className="font-bold">{weekSection.closedToday}</span>
              </>
            )}
          </a>

          <h1
            id="hero-title"
            className="text-[2.5rem] font-extrabold tracking-tight text-brand sm:text-5xl lg:text-[3.6rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink sm:text-xl">{hero.subtitle}</p>

          <p className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-butter px-4 py-3 font-display text-xl font-extrabold text-ink ring-2 ring-mustard sm:text-2xl">
            <Clock aria-hidden="true" className="size-7 shrink-0 text-tomato" />
            {hero.hoursBadge}
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row">
            <a
              href={waLink(orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary min-h-14 px-7 text-lg"
            >
              <MessageCircle aria-hidden="true" className="size-6" />
              {t.orderOnWhatsApp}
              <span className="sr-only"> {t.newTab}</span>
            </a>
            <a href="#cardapio" className="btn btn-secondary min-h-14 px-7 text-lg">
              <UtensilsCrossed aria-hidden="true" className="size-5" />
              {t.seeMenu}
            </a>
          </div>
        </div>

        {/* Foto do prato: entra com giro e escala; selos logo depois */}
        <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]">
          <div aria-hidden="true" className="gingham absolute inset-[-6%] rounded-[2.5rem] rotate-3" />
          <div className="plate-in relative aspect-square overflow-hidden rounded-full border-8 border-white shadow-[0_24px_50px_-20px_rgb(31_42_31/0.45)]">
            <Img
              name="hero"
              priority
              sizes="(min-width: 1024px) 480px, min(90vw, 416px)"
              className="size-full object-cover"
            />
          </div>
          <span
            className="stamp stamp-tomato stamp-in absolute -left-1 top-6 rotate-[-8deg] px-4 py-2 text-lg shadow-md sm:-left-4"
            style={{ animationDelay: "650ms" }}
          >
            {hero.stamps[0]}
          </span>
          <span
            className="stamp stamp-brand stamp-in absolute -right-1 bottom-8 rotate-[6deg] px-4 py-2 text-lg shadow-md sm:-right-4"
            style={{ animationDelay: "850ms" }}
          >
            {hero.stamps[1]}
          </span>
        </div>
      </div>
    </section>
  );
}
