import { CalendarDays, MessageCircle } from "lucide-react";
import { weekMenu, weekSection } from "../data/site";
import { getWeekday } from "../lib/today";
import { dishMessage, waLink } from "../lib/whatsapp";
import { Img } from "./Img";

export function WeekMenu() {
  const weekday = getWeekday();
  const today = weekMenu.find((d) => d.weekday === weekday);

  return (
    <section id="semana" aria-labelledby="semana-title" className="bg-butter py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{weekSection.eyebrow}</p>
            <h2 id="semana-title" className="section-title mt-1">
              {weekSection.title}
            </h2>
            <p className="mt-3 max-w-xl text-muted">{weekSection.intro}</p>
          </div>
          {today && (
            <a
              href={waLink(dishMessage(`${today.dish} (prato do dia)`))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary self-start md:self-auto"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              Pedir o prato de hoje
              <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
            </a>
          )}
        </div>

        {!today && (
          <p
            role="status"
            className="mt-8 flex items-center gap-3 rounded-2xl bg-tomato px-5 py-4 font-display text-xl font-extrabold text-white"
          >
            <CalendarDays aria-hidden="true" className="size-7 shrink-0" />
            {weekSection.closedToday}
          </p>
        )}

        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {weekMenu.map((d) => {
            const isToday = d.weekday === weekday;
            return (
              <li
                key={d.weekday}
                aria-current={isToday ? "date" : undefined}
                className={`relative flex gap-4 rounded-3xl p-4 xl:flex-col xl:gap-2 xl:p-5 ${
                  isToday ? "bg-white shadow-lg ring-4 ring-brand" : "bg-white/70 ring-1 ring-ink/10"
                }`}
              >
                {isToday && (
                  <span className="stamp stamp-tomato absolute -top-3 right-4 shadow">
                    Hoje<span className="sr-only">, prato do dia</span>
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className={`flex size-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-extrabold xl:size-12 ${
                    isToday ? "bg-brand text-white" : "bg-butter text-ink"
                  }`}
                >
                  {d.short}
                </span>
                <div className="min-w-0">
                  <h3 className="font-sans text-base font-bold leading-snug text-muted">{d.name}</h3>
                  <p className="font-display text-xl font-extrabold leading-tight text-ink">{d.dish}</p>
                  <p className="mt-1 text-sm text-muted">{d.sides}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Destaque de sábado: feijoada */}
        <div className="reveal card-lift mt-10 grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/10 md:grid-cols-2">
          <div className="relative aspect-3/2 overflow-hidden md:aspect-auto md:min-h-72">
            <Img
              name="feijoada"
              sizes="(min-width: 768px) 560px, 100vw"
              className="card-photo absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 p-6 sm:p-8">
            <span className="stamp stamp-tomato">Sábado</span>
            <h3 className="text-3xl font-extrabold text-brand sm:text-4xl">{weekSection.saturdayTitle}</h3>
            <p className="text-lg">{weekSection.saturdayText}</p>
            <a
              href={waLink(weekSection.saturdayMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tomato"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              {weekSection.saturdayCta}
              <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
