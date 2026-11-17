/** Textos fixos da interface (fora de site.ts), em português e inglês. */

export type Lang = "pt" | "en";

const pt = {
  skipLink: "Pular para o conteúdo",
  newTab: "(abre em nova aba)",
  newTabWhatsApp: "(abre o WhatsApp em nova aba)",
  viaWhatsAppNewTab: "pelo WhatsApp (abre em nova aba)",
  mainNav: "Principal",
  mobileNav: "Menu do celular",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  orderNow: "Pedir agora",
  // Hero e cardápio da semana
  today: "Hoje",
  todayExcl: "Hoje!",
  dishOfDayLabel: "Prato do dia: ",
  dishOfDaySuffix: "(prato do dia)",
  sunday: "Domingo",
  saturday: "Sábado",
  orderOnWhatsApp: "Pedir pelo WhatsApp",
  seeMenu: "Ver cardápio",
  orderTodaysDish: "Pedir o prato de hoje",
  todayDishSr: ", prato do dia",
  // Cardápio
  menuCategories: "Categorias do cardápio",
  order: "Pedir",
  orderDishSr: (name: string) => ` ${name} pelo WhatsApp (abre em nova aba)`,
  chosen: "Já escolheu? Manda pra gente.",
  /** Mensagem do WhatsApp ao pedir um prato. */
  dishMessage: (dish: string) => `Olá! Gostaria de pedir: ${dish}.`,
  // Marmitex
  deliveryPickup: "Entrega e retirada",
  sizeSr: (size: string) => `, tamanho ${size} (abre em nova aba)`,
  // Como pedir
  step: (n: number) => `Passo ${n}: `,
  // Onde estamos
  address: "Endereço",
  demo: "Demonstrativo",
  postalCode: "CEP",
  mapReserved: " (área reservada)",
  directions: "Como chegar",
  // Rodapé
  footerNav: "Rodapé",
  navigation: "Navegação",
  socials: "Redes sociais",
  demoTag: "demonstrativo",
  demoSite: "Site demonstrativo.",
  /** Botão de idioma: mostra o idioma de destino. */
  langSwitch: { short: "EN", label: "View in English", target: "en" as Lang },
};

const en: typeof pt = {
  skipLink: "Skip to content",
  newTab: "(opens in a new tab)",
  newTabWhatsApp: "(opens WhatsApp in a new tab)",
  viaWhatsAppNewTab: "on WhatsApp (opens in a new tab)",
  mainNav: "Main",
  mobileNav: "Mobile menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  orderNow: "Order now",
  today: "Today",
  todayExcl: "Today!",
  dishOfDayLabel: "Dish of the day: ",
  dishOfDaySuffix: "(dish of the day)",
  sunday: "Sunday",
  saturday: "Saturday",
  orderOnWhatsApp: "Order on WhatsApp",
  seeMenu: "See the menu",
  orderTodaysDish: "Order today's dish",
  todayDishSr: ", dish of the day",
  menuCategories: "Menu categories",
  order: "Order",
  orderDishSr: (name: string) => ` ${name} on WhatsApp (opens in a new tab)`,
  chosen: "Made your choice? Send it to us.",
  dishMessage: (dish: string) => `Hi! I'd like to order: ${dish}.`,
  deliveryPickup: "Delivery and pickup",
  sizeSr: (size: string) => `, size ${size} (opens in a new tab)`,
  step: (n: number) => `Step ${n}: `,
  address: "Address",
  demo: "Demo",
  postalCode: "Postal code",
  mapReserved: " (reserved area)",
  directions: "Get directions",
  footerNav: "Footer",
  navigation: "Navigation",
  socials: "Social media",
  demoTag: "demo",
  demoSite: "Demo website.",
  langSwitch: { short: "PT", label: "Ver em português", target: "pt" },
};

export const ui = { pt, en };
export type UiText = typeof pt;
