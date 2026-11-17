import type { WeekDish } from "../data/site";

/** Dia da semana pela data do navegador (0 = domingo … 6 = sábado). */
export function getWeekday(date: Date = new Date()): number {
  return date.getDay();
}

/** Prato do dia de hoje no cardápio informado (no idioma atual), ou null no domingo. */
export function getTodayDish(weekMenu: WeekDish[], date: Date = new Date()): WeekDish | null {
  const day = getWeekday(date);
  return weekMenu.find((d) => d.weekday === day) ?? null;
}
