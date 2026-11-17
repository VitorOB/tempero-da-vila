/**
 * Gera as tags de SEO do <head> a partir de src/data/site.ts.
 * Roda no Node (vite.config.ts), por isso não importa nada do navegador.
 */
import { address, brand, contact, images, openingHoursSchema, seo } from "../data/site";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const abs = (path: string) => (seo.siteUrl ? `${seo.siteUrl.replace(/\/$/, "")}${path}` : path);

export function buildJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: brand.name,
    description: brand.shortDescription,
    servesCuisine: ["Brasileira", "Comida caseira"],
    openingHours: openingHoursSchema,
    image: abs(seo.ogImage),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: "BR",
    },
    acceptsReservations: false,
    hasMenu: abs("/#cardapio"),
  };
  if (seo.siteUrl) data.url = seo.siteUrl;
  const phone = contact.whatsappNumber.replace(/\D/g, "");
  if (phone) data.telephone = `+${phone}`;
  // Evita fechar a tag <script> por acidente.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildHeadTags(): string {
  const hero = images.hero;
  const base = seo.siteUrl.replace(/\/$/, "");
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="theme-color" content="${seo.themeColor}" />`,
    // Versões por idioma (o inglês é a mesma página com ?lang=en).
    base ? `<link rel="alternate" hreflang="pt-BR" href="${esc(base)}/" />` : "",
    base ? `<link rel="alternate" hreflang="en" href="${esc(base)}/?lang=en" />` : "",
    base ? `<link rel="alternate" hreflang="x-default" href="${esc(base)}/" />` : "",
    `<meta property="og:type" content="restaurant.restaurant" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:locale:alternate" content="en_US" />`,
    `<meta property="og:site_name" content="${esc(brand.name)}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    base ? `<meta property="og:url" content="${esc(base)}/" />` : "",
    `<meta property="og:image" content="${esc(abs(seo.ogImage))}" />`,
    `<meta property="og:image:alt" content="${esc(hero.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    // Pré-carrega a foto do hero só no desktop, onde ela é o maior elemento da primeira dobra.
    // No celular ela fica abaixo dos botões, e o preload competiria com o JS no 4G.
    `<link rel="preload" as="image" type="image/webp" media="(min-width: 1024px)" fetchpriority="high" imagesrcset="${hero.src}-800.webp 800w, ${hero.src}-1600.webp 1600w" imagesizes="(min-width: 1024px) 480px, min(90vw, 416px)" />`,
    `<script type="application/ld+json">${buildJsonLd()}</script>`,
  ];
  return tags.filter(Boolean).join("\n    ");
}
