/**
 * Tempero da Vila: todos os dados do site ficam aqui.
 * Para adaptar a outro restaurante, troque os textos, o cardápio e os contatos neste arquivo.
 */

/* ------------------------------------------------------------------ */
/* Contato e pedidos                                                   */
/* ------------------------------------------------------------------ */

export const contact = {
  whatsappNumber: "", // 5531999999999 — preencher antes de publicar (só números, com DDI e DDD)
  whatsappMessage: "Olá! Gostaria de fazer um pedido.",
  marmitexMessage:
    "Olá! Quero pedir uma marmitex. Tamanho: , prato: , endereço: ",
  deliveryUrl: "", // link do restaurante no app de delivery, se houver (vazio = botão escondido)
  creatorName: "Vitor Otávio",
  creatorWhatsapp: "5531993628211",
};

/* ------------------------------------------------------------------ */
/* Marca e SEO                                                         */
/* ------------------------------------------------------------------ */

export const brand = {
  name: "Tempero da Vila",
  tagline: "Comida caseira",
  shortDescription:
    "Almoço caseiro de segunda a sábado: pratos executivos, marmitex para entrega e retirada e feijoada aos sábados.",
};

export const seo = {
  title: "Tempero da Vila · Comida caseira | Almoço, marmitex e feijoada",
  description:
    "Almoço com gosto de casa, de segunda a sábado, das 11h às 15h. Prato do dia, marmitex para entrega e retirada e feijoada no sábado. Peça pelo WhatsApp.",
  /** URL pública do site, sem barra no final (ex.: https://tempero-da-vila.vercel.app). Usada no Open Graph e no JSON-LD. */
  siteUrl: "https://tempero-da-vila-tau.vercel.app/",
  ogImage: "/images/hero-1600.webp",
  themeColor: "#2E6B3A",
};

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "Marmitex", href: "#marmitex" },
  { label: "Como pedir", href: "#como-pedir" },
  { label: "Onde estamos", href: "#onde-estamos" },
];

/* ------------------------------------------------------------------ */
/* Textos das seções                                                   */
/* ------------------------------------------------------------------ */

export const hero = {
  title: "Almoço com gosto de casa, de segunda a sábado.",
  subtitle:
    "Prato bem servido, marmitex quentinha e feijoada no sábado. Mande seu pedido no WhatsApp e a gente prepara na hora.",
  hoursBadge: "Seg a sáb · 11h às 15h",
  stamps: ["Feito na hora", "Marmitex"],
};

export const weekSection = {
  eyebrow: "Cardápio da semana",
  title: "Cada dia, um prato do dia",
  intro:
    "Um prato diferente por dia, feito na hora e com os acompanhamentos da casa.",
  closedToday: "Fechado hoje — volte segunda!",
  saturdayTitle: "Sábado é dia de feijoada",
  saturdayText:
    "Feijoada completa, com arroz, couve, farofa, laranja e torresmo. Sai rápido, então garanta a sua cedo.",
  saturdayCta: "Encomendar feijoada",
  saturdayMessage:
    "Olá! Quero encomendar feijoada para sábado. Quantidade: , retirada ou entrega: ",
};

export const menuSection = {
  eyebrow: "Cardápio",
  title: "O que tem pra comer",
  intro:
    "Escolha a categoria. Para pedir, é só mandar o nome do prato no WhatsApp.",
  cta: "Pedir pelo WhatsApp",
};

export const marmitexSection = {
  eyebrow: "Marmitex",
  title: "Marmitex caprichada, do jeito que você gosta",
  text: "O prato do dia ou qualquer executivo do cardápio, bem embalado e quentinho. Ideal pro almoço no trabalho.",
  sizesLabel: "Escolha o tamanho",
  cta: "Pedir marmitex pelo WhatsApp",
  officeNote:
    "Pedido para a equipe do escritório? Mande a lista que a gente organiza e entrega junto.",
};

export const howSection = {
  eyebrow: "Como pedir",
  title: "Pedir é rapidinho",
  whatsappCta: "Chamar no WhatsApp",
  deliveryCta: "Pedir pelo app de delivery",
};

export const locationSection = {
  eyebrow: "Onde estamos",
  title: "Vem almoçar com a gente",
  hoursTitle: "Horário de funcionamento",
  paymentsTitle: "Formas de pagamento",
  mapTitle: "Mapa",
  mapNote: "Aqui entra o mapa ou o link “Como chegar” do restaurante.",
  photoCaption: "Nosso salão: simples, limpo e com lugar pra todo mundo.",
};

/* ------------------------------------------------------------------ */
/* Imagens (WebP em 800 e 1600 px; ver CREDITS.md)                     */
/* ------------------------------------------------------------------ */

export type ImageData = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  hero: {
    src: "/images/hero",
    width: 1600,
    height: 1200,
    alt: "Prato com picadinho de carne, arroz branco, farofa, salada de feijão e ovo frito",
  },
  feijoada: {
    src: "/images/feijoada",
    width: 1600,
    height: 1066,
    alt: "Feijoada em panela de barro com calabresa, servida com arroz, couve, farofa, vinagrete e laranja",
  },
  pratoExecutivo: {
    src: "/images/prato-executivo",
    width: 1600,
    height: 1066,
    alt: "Prato executivo com bife em tiras, ovo frito, arroz, feijão, batata frita e couve",
  },
  grelhado: {
    src: "/images/grelhado",
    width: 1600,
    height: 2400,
    alt: "Filé de frango grelhado com purê, farofa e arroz temperado",
  },
  porcao: {
    src: "/images/porcao",
    width: 1600,
    height: 1066,
    alt: "Porção de bolinhos e banana empanada sobre toalha xadrez vermelha",
  },
  marmitex: {
    src: "/images/marmitex",
    width: 1600,
    height: 1066,
    alt: "Marmitex com frango grelhado, arroz, feijão e purê",
  },
  sobremesa: {
    src: "/images/sobremesa",
    width: 1600,
    height: 1066,
    alt: "Pudim de leite com calda de caramelo",
  },
  ambiente: {
    src: "/images/ambiente",
    width: 1600,
    height: 1066,
    alt: "Salão do restaurante com mesas de madeira, cadeiras e luminárias pendentes",
  },
} satisfies Record<string, ImageData>;

export type ImageKey = keyof typeof images;

/* ------------------------------------------------------------------ */
/* Cardápio da semana (troque os pratos toda semana)                   */
/* weekday: 1 = segunda … 6 = sábado (igual ao Date.getDay())          */
/* ------------------------------------------------------------------ */

export type WeekDish = {
  weekday: 1 | 2 | 3 | 4 | 5 | 6;
  name: string;
  short: string;
  dish: string;
  sides: string;
};

export const weekMenu: WeekDish[] = [
  {
    weekday: 1,
    name: "Segunda",
    short: "Seg",
    dish: "Bife acebolado",
    sides: "Arroz, feijão, batata frita e salada",
  },
  {
    weekday: 2,
    name: "Terça",
    short: "Ter",
    dish: "Frango assado com farofa",
    sides: "Arroz, feijão, salada e legumes",
  },
  {
    weekday: 3,
    name: "Quarta",
    short: "Qua",
    dish: "Feijão tropeiro com bisteca",
    sides: "Arroz, couve, ovo e salada",
  },
  {
    weekday: 4,
    name: "Quinta",
    short: "Qui",
    dish: "Strogonoff de frango",
    sides: "Arroz, batata palha e salada",
  },
  {
    weekday: 5,
    name: "Sexta",
    short: "Sex",
    dish: "Peixe empanado",
    sides: "Arroz, feijão, purê e salada",
  },
  {
    weekday: 6,
    name: "Sábado",
    short: "Sáb",
    dish: "Feijoada completa",
    sides: "Arroz, couve, farofa, laranja e torresmo",
  },
];

/* ------------------------------------------------------------------ */
/* Cardápio (sem preços)                                               */
/* ------------------------------------------------------------------ */

export type MenuItem = {
  name: string;
  description: string;
  image?: ImageKey;
  tag?: string;
};
export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

const SIDES_NOTE = "Acompanha arroz, feijão, salada e guarnição do dia.";

export const menu: MenuCategory[] = [
  {
    id: "executivos",
    label: "Pratos executivos",
    note: SIDES_NOTE,
    items: [
      {
        name: "Bife a cavalo",
        description: "Bife em tiras com ovo frito por cima e batata frita.",
        image: "pratoExecutivo",
        tag: "Mais pedido",
      },
      {
        name: "Frango à parmegiana",
        description:
          "Filé empanado com molho de tomate caseiro e queijo gratinado.",
      },
      {
        name: "Picadinho de carne",
        description: "Carne em cubos no molho, com ervilha e cheiro-verde.",
      },
      {
        name: "Filé de peixe empanado",
        description: "Peixe sequinho e crocante, com limão.",
      },
      {
        name: "Omelete recheada",
        description: "Com queijo, tomate e legumes. Opção sem carne.",
      },
    ],
  },
  {
    id: "grelhados",
    label: "Grelhados",
    note: SIDES_NOTE,
    items: [
      {
        name: "Filé de frango grelhado",
        description: "Temperado na hora, dourado na chapa.",
        image: "grelhado",
      },
      {
        name: "Contrafilé grelhado",
        description: "Bife alto, no ponto que você pedir.",
      },
      {
        name: "Bisteca suína",
        description: "Bisteca na chapa, com cebola dourada.",
      },
      {
        name: "Linguiça toscana",
        description: "Linguiça grelhada, servida com vinagrete.",
      },
    ],
  },
  {
    id: "porcoes",
    label: "Porções",
    items: [
      {
        name: "Porção de salgadinhos",
        description: "Bolinhos e banana empanada, fritos na hora.",
        image: "porcao",
      },
      {
        name: "Batata frita",
        description: "Sequinha e crocante. Boa para dividir.",
      },
      {
        name: "Mandioca frita",
        description: "Macia por dentro e crocante por fora.",
      },
      {
        name: "Calabresa acebolada",
        description: "Calabresa na chapa com bastante cebola.",
      },
      {
        name: "Torresmo",
        description: "Pururuca, crocante, do jeito mineiro.",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      {
        name: "Suco natural do dia",
        description: "Feito na hora. Pergunte o sabor de hoje.",
      },
      { name: "Limonada", description: "Gelada, com ou sem açúcar." },
      { name: "Refrigerante", description: "Lata ou garrafa de 2 litros." },
      { name: "Água mineral", description: "Com ou sem gás." },
      {
        name: "Cafezinho",
        description: "Passado na hora, cortesia depois do almoço.",
      },
    ],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    items: [
      {
        name: "Pudim de leite",
        description: "Lisinho, com calda de caramelo.",
        image: "sobremesa",
        tag: "Da casa",
      },
      { name: "Mousse de maracujá", description: "Leve e azedinho na medida." },
      { name: "Doce de leite com queijo", description: "O clássico da roça." },
      {
        name: "Salada de frutas",
        description: "Frutas da estação picadas na hora.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Marmitex                                                            */
/* ------------------------------------------------------------------ */

/** id: valor interno · letter: letra exibida no círculo e na mensagem. */
export type MarmitexSize = { id: "P" | "M" | "G"; letter: string; name: string; description: string };

export const marmitexSizes: MarmitexSize[] = [
  { id: "P", letter: "P", name: "Pequena", description: "Para quem come pouco." },
  { id: "M", letter: "M", name: "Média", description: "O almoço de todo dia." },
  { id: "G", letter: "G", name: "Grande", description: "Para quem está com muita fome." },
];

export type IconItem<I extends string> = { icon: I; title: string; description: string };

export const marmitexOptions: IconItem<"bike" | "store">[] = [
  {
    icon: "bike",
    title: "Entrega",
    description: "Levamos até você na região. A taxa você confere no WhatsApp.",
  },
  {
    icon: "store",
    title: "Retirada no balcão",
    description: "Peça antes e é só pegar, sem fila.",
  },
];

/* ------------------------------------------------------------------ */
/* Como pedir                                                          */
/* ------------------------------------------------------------------ */

export const steps: IconItem<"utensils" | "message" | "bag">[] = [
  {
    icon: "utensils",
    title: "Escolha o prato",
    description: "Veja o prato do dia ou escolha no cardápio.",
  },
  {
    icon: "message",
    title: "Chame a gente",
    description: "Mande o pedido no WhatsApp ou peça pelo app de delivery.",
  },
  {
    icon: "bag",
    title: "Receba ou retire",
    description: "Entregamos quentinho, ou você retira no balcão.",
  },
];

/* ------------------------------------------------------------------ */
/* Onde estamos                                                        */
/* ------------------------------------------------------------------ */

export const address = {
  street: "Rua das Laranjeiras, 120",
  district: "Vila Nova",
  city: "Sua Cidade",
  state: "UF",
  postalCode: "00000-000",
  reference: "Em frente à pracinha, ao lado da farmácia.",
  isDemo: true,
  /** Link do Google Maps (deixe vazio para esconder o botão “Como chegar”). */
  mapsUrl: "",
};

/** weekdays: dias cobertos pela linha (0 = domingo … 6 = sábado), usados para destacar a linha de hoje. */
export const hours = [
  { days: "Segunda a sexta", time: "11h às 15h", weekdays: [1, 2, 3, 4, 5] },
  { days: "Sábado", time: "11h às 15h (feijoada)", weekdays: [6] },
  { days: "Domingo", time: "Fechado", weekdays: [0] },
];

export const hoursNote = "Encomendas de marmitex a partir das 10h30.";

/** Formato schema.org, usado no JSON-LD. */
export const openingHoursSchema = ["Mo-Sa 11:00-15:00"];

export const payments: { icon: "qr" | "cash" | "card" | "ticket"; label: string }[] = [
  { icon: "qr", label: "Pix" },
  { icon: "cash", label: "Dinheiro" },
  { icon: "card", label: "Cartão de débito" },
  { icon: "card", label: "Cartão de crédito" },
  { icon: "ticket", label: "Vale-refeição" },
];

/* ------------------------------------------------------------------ */
/* Rodapé                                                              */
/* ------------------------------------------------------------------ */

/** Links das redes. Deixe href vazio enquanto o site for demonstrativo. */
export const socials = [
  { label: "Instagram", href: "" },
  { label: "Facebook", href: "" },
];

export const footer = {
  text: "Comida caseira, farta e feita na hora. De segunda a sábado, no almoço.",
  creditPrefix: "Site demonstrativo criado por",
  creditQuestion: "Quer um site assim para o seu restaurante?",
  creditCta: "Fale comigo",
  creditMessage:
    "Olá! Vi o site demonstrativo do Tempero da Vila e quero um site para o meu restaurante.",
};

export const stickyBar = {
  label: "Pedir pelo WhatsApp",
};

/* ------------------------------------------------------------------ */
/* Conjunto completo, usado pela troca de idioma (src/i18n).           */
/* A versão em inglês fica em site.en.ts, com este mesmo formato.      */
/* ------------------------------------------------------------------ */

export const sitePt = {
  contact,
  brand,
  seo,
  nav,
  hero,
  weekSection,
  menuSection,
  marmitexSection,
  howSection,
  locationSection,
  images,
  weekMenu,
  menu,
  marmitexSizes,
  marmitexOptions,
  steps,
  address,
  hours,
  hoursNote,
  payments,
  socials,
  footer,
  stickyBar,
};
export type SiteData = typeof sitePt;
