import { weekMenu, type WeekDish } from "../data/site";

/** Dia da semana pela data do navegador (0 = domingo … 6 = sábado). */
export function getWeekday(date: Date = new Date()): number {
  return date.getDay();
}

/** Prato do dia de hoje, ou null no domingo (ou em dia sem prato cadastrado). */
export function getTodayDish(date: Date = new Date()): WeekDish | null {
  const day = getWeekday(date);
  return weekMenu.find((d) => d.weekday === day) ?? null;
}
