import { contact } from "../data/site";

/** Monta o link do WhatsApp. Sem número configurado, usa wa.me/?text= (a pessoa escolhe o contato). */
export function waLink(message: string, number: string = contact.whatsappNumber): string {
  const digits = number.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}

/** Mensagem da marmitex com o tamanho escolhido preenchido. */
export function marmitexMessage(size?: string): string {
  const base = contact.marmitexMessage;
  if (!size) return base;
  return /Tamanho:/i.test(base)
    ? base.replace(/Tamanho:[^,]*/i, `Tamanho: ${size}`)
    : `${base} Tamanho: ${size}.`;
}

/** Mensagem pedindo um prato específico. */
export function dishMessage(dish: string): string {
  return `Olá! Gostaria de pedir: ${dish}.`;
}
