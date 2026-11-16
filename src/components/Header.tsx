import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { contact, nav } from "../data/site";
import { waLink } from "../lib/whatsapp";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Esc fecha o menu e devolve o foco ao botão; clicar fora também fecha.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !toggleRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  // Fecha ao passar para o layout de desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <a href="#inicio" className="min-w-0 rounded-lg py-1">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 font-bold text-ink hover:bg-butter"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden px-5 min-[400px]:inline-flex"
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            Pedir agora
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full bg-butter text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      <div
        ref={panelRef}
        id="menu-mobile"
        hidden={!open}
        className="border-t border-ink/10 bg-cream px-4 pb-5 pt-2 shadow-lg lg:hidden"
      >
        <nav aria-label="Menu do celular">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-3 font-display text-xl font-bold text-ink hover:bg-butter"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={waLink(contact.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-3 w-full"
          onClick={() => setOpen(false)}
        >
          <MessageCircle aria-hidden="true" className="size-5" />
          Pedir agora
          <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
        </a>
      </div>
    </header>
  );
}
