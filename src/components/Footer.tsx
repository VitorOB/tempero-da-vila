import { AtSign, Globe, MessageCircle } from "lucide-react";
import { useSite } from "../i18n/lang";
import { waLink } from "../lib/whatsapp";
import { Logo } from "./Logo";

const socialIcons = [AtSign, Globe];

export function Footer() {
  const { site, t } = useSite();
  const { brand, contact, footer, nav, socials } = site;
  return (
    <footer className="on-dark bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm">{footer.text}</p>
        </div>

        <nav aria-label={t.footerNav}>
          <h2 className="font-display text-lg font-extrabold">{t.navigation}</h2>
          <ul className="mt-3 flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-extrabold">{t.socials}</h2>
          <ul className="mt-3 flex flex-col gap-1">
            {socials.map((s, i) => {
              const Icon = socialIcons[i % socialIcons.length];
              return (
                <li key={s.label}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline"
                    >
                      <Icon aria-hidden="true" className="size-5" />
                      {s.label}
                      <span className="sr-only"> {t.newTab}</span>
                    </a>
                  ) : (
                    <a
                      role="link"
                      aria-disabled="true"
                      className="inline-flex min-h-11 cursor-not-allowed items-center gap-2"
                    >
                      <Icon aria-hidden="true" className="size-5" />
                      {s.label}
                      <span className="rounded-full bg-white/15 px-2 py-0.5 text-sm font-bold">{t.demoTag}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-base sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. {t.demoSite}
          </p>
          <p>
            {footer.creditPrefix} {contact.creatorName || "[NOME]"} — {footer.creditQuestion}{" "}
            <a
              href={waLink(footer.creditMessage, contact.creatorWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 font-extrabold underline underline-offset-4 hover:no-underline"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              {footer.creditCta}
              <span className="sr-only"> {t.viaWhatsAppNewTab}</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
