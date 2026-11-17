import { contact } from "../data/site";

/** Monta o link do WhatsApp. Sem número configurado, usa wa.me/?text= (a pessoa escolhe o contato). */
export function waLink(message: string, number: string = contact.whatsappNumber): string {
  const digits = number.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}

/** Mensagem da marmitex (no idioma atual) com o tamanho escolhido preenchido. */
export function marmitexMessage(base: string, size?: string): string {
  if (!size) return base;
  const label = /(Tamanho|Size):[^,]*/i;
  return label.test(base) ? base.replace(label, (m) => `${m.split(":")[0]}: ${size}`) : `${base} ${size}.`;
}
