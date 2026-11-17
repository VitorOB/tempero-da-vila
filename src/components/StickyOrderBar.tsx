import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useSite } from "../i18n/lang";
import { waLink } from "../lib/whatsapp";

/**
 * Barra fixa de pedido, só no celular (< 768px). Aparece depois que o hero sai da tela.
 * O espaço que ela ocupa fica reservado no fim da página (ver App.tsx), então nada fica coberto.
 */
export function StickyOrderBar() {
  const { site, t } = useSite();
  const { contact, stickyBar } = site;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("inicio");
    if (!heroEl || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 });
    io.observe(heroEl);
    return () => io.disconnect();
  }, []);

  return (
    <div
      data-visible={visible}
      className={`sticky-bar fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-cream/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-12px_rgb(31_42_31/0.35)] backdrop-blur md:hidden ${
        visible ? "visible translate-y-0" : "invisible translate-y-full"
      }`}
    >
      <a
        href={waLink(contact.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary min-h-14 w-full text-lg"
      >
        <MessageCircle aria-hidden="true" className="size-6" />
        {stickyBar.label}
        <span className="sr-only"> {t.newTab}</span>
      </a>
    </div>
  );
}
