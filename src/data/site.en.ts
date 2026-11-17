/**
 * Versão em inglês dos textos de site.ts (mesmo formato).
 * Contatos, endereço, imagens e horários de funcionamento vêm da versão em português; aqui só muda o texto.
 */
import { sitePt, type MenuCategory, type SiteData } from "./site";

const SIDES_NOTE = "Served with rice, beans, salad and the side of the day.";

const menu: MenuCategory[] = [
  {
    id: "executivos",
    label: "Set meals",
    note: SIDES_NOTE,
    items: [
      {
        name: "Bife a cavalo (steak and egg)",
        description: "Strips of steak topped with a fried egg, with french fries.",
        image: "pratoExecutivo",
        tag: "Most ordered",
      },
      {
        name: "Chicken parmigiana",
        description: "Breaded fillet with homemade tomato sauce and melted cheese.",
      },
      {
        name: "Picadinho (beef stew)",
        description: "Diced beef in sauce, with peas and fresh herbs.",
      },
      {
        name: "Breaded fish fillet",
        description: "Light and crispy fish, with lime.",
      },
      {
        name: "Stuffed omelet",
        description: "With cheese, tomato and vegetables. Meat-free option.",
      },
    ],
  },
  {
    id: "grelhados",
    label: "Grilled",
    note: SIDES_NOTE,
    items: [
      {
        name: "Grilled chicken fillet",
        description: "Seasoned to order, golden on the griddle.",
        image: "grelhado",
      },
      {
        name: "Grilled sirloin steak",
        description: "Thick-cut steak, cooked the way you like it.",
      },
      {
        name: "Pork chop",
        description: "Griddled pork chop with golden onions.",
      },
      {
        name: "Tuscan sausage",
        description: "Grilled sausage, served with vinaigrette.",
      },
    ],
  },
  {
    id: "porcoes",
    label: "Sharing plates",
    items: [
      {
        name: "Fried snacks platter",
        description: "Fritters and breaded banana, fried to order.",
        image: "porcao",
      },
      {
        name: "French fries",
        description: "Light and crispy. Great for sharing.",
      },
      {
        name: "Fried cassava",
        description: "Soft inside, crispy outside.",
      },
      {
        name: "Calabresa with onions",
        description: "Griddled calabresa sausage with plenty of onion.",
      },
      {
        name: "Torresmo",
        description: "Crispy pork cracklings, Minas Gerais style.",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Drinks",
    items: [
      {
        name: "Fresh juice of the day",
        description: "Made to order. Ask about today's flavor.",
      },
      { name: "Lemonade", description: "Ice-cold, with or without sugar." },
      { name: "Soda", description: "Can or 2-liter bottle." },
      { name: "Mineral water", description: "Still or sparkling." },
      {
        name: "Cafezinho",
        description: "Freshly brewed Brazilian coffee, on the house after lunch.",
      },
    ],
  },
  {
    id: "sobremesas",
    label: "Desserts",
    items: [
      {
        name: "Milk pudding",
        description: "Silky smooth, with caramel sauce.",
        image: "sobremesa",
        tag: "House favorite",
      },
      { name: "Passion fruit mousse", description: "Light and just tart enough." },
      { name: "Doce de leite with cheese", description: "The countryside classic." },
      {
        name: "Fruit salad",
        description: "Seasonal fruit, cut fresh.",
      },
    ],
  },
];

export const siteEn: SiteData = {
  ...sitePt,

  contact: {
    ...sitePt.contact,
    whatsappMessage: "Hi! I'd like to place an order.",
    marmitexMessage: "Hi! I'd like to order a lunch box. Size: , dish: , address: ",
  },

  brand: {
    ...sitePt.brand,
    tagline: "Home-style cooking",
    shortDescription:
      "Home-style lunch Monday to Saturday: set meals, lunch boxes for delivery and pickup, and feijoada on Saturdays.",
  },

  seo: {
    ...sitePt.seo,
    title: "Tempero da Vila · Home-style cooking | Lunch, lunch boxes and feijoada",
    description:
      "Lunch that tastes like home, Monday to Saturday, 11 am to 3 pm. Dish of the day, lunch boxes for delivery and pickup, and feijoada on Saturdays. Order on WhatsApp.",
  },

  nav: [
    { label: "Menu", href: "#cardapio" },
    { label: "Lunch boxes", href: "#marmitex" },
    { label: "How to order", href: "#como-pedir" },
    { label: "Find us", href: "#onde-estamos" },
  ],

  hero: {
    title: "Lunch that tastes like home, Monday to Saturday.",
    subtitle:
      "Generous plates, piping-hot lunch boxes and feijoada on Saturdays. Send your order on WhatsApp and we'll cook it fresh.",
    hoursBadge: "Mon–Sat · 11 am – 3 pm",
    stamps: ["Made fresh", "Lunch boxes"],
  },

  weekSection: {
    eyebrow: "This week's menu",
    title: "Every day, a new dish of the day",
    intro: "A different dish every day, made fresh and served with the house sides.",
    closedToday: "Closed today — see you Monday!",
    saturdayTitle: "Saturday is feijoada day",
    saturdayText:
      "Feijoada completa (Brazilian black bean and pork stew) with rice, collard greens, farofa, orange and pork cracklings. It goes fast, so get yours early.",
    saturdayCta: "Order feijoada",
    saturdayMessage: "Hi! I'd like to order feijoada for Saturday. Quantity: , pickup or delivery: ",
  },

  menuSection: {
    eyebrow: "Menu",
    title: "What's cooking",
    intro: "Pick a category. To order, just send us the name of the dish on WhatsApp.",
    cta: "Order on WhatsApp",
  },

  marmitexSection: {
    eyebrow: "Lunch boxes",
    title: "Generous lunch boxes, just the way you like them",
    text: "The dish of the day or any set meal from the menu, well packed and piping hot. Perfect for lunch at work.",
    sizesLabel: "Choose a size",
    cta: "Order a lunch box on WhatsApp",
    officeNote: "Ordering for the office team? Send us the list and we'll organize it and deliver it all together.",
  },

  howSection: {
    eyebrow: "How to order",
    title: "Ordering is quick",
    whatsappCta: "Message us on WhatsApp",
    deliveryCta: "Order on the delivery app",
  },

  locationSection: {
    eyebrow: "Find us",
    title: "Come have lunch with us",
    hoursTitle: "Opening hours",
    paymentsTitle: "Payment methods",
    mapTitle: "Map",
    mapNote: "The restaurant's map or “Get directions” link goes here.",
    photoCaption: "Our dining room: simple, clean and with room for everyone.",
  },

  images: {
    hero: {
      ...sitePt.images.hero,
      alt: "Plate of picadinho (diced beef stew) with white rice, farofa, bean salad and a fried egg",
    },
    feijoada: {
      ...sitePt.images.feijoada,
      alt: "Feijoada in a clay pot with calabresa sausage, served with rice, collard greens, farofa, vinaigrette and orange",
    },
    pratoExecutivo: {
      ...sitePt.images.pratoExecutivo,
      alt: "Set meal with strips of steak, a fried egg, rice, beans, french fries and collard greens",
    },
    grelhado: {
      ...sitePt.images.grelhado,
      alt: "Grilled chicken fillet with mashed potatoes, farofa and seasoned rice",
    },
    porcao: {
      ...sitePt.images.porcao,
      alt: "Platter of fritters and breaded banana on a red gingham tablecloth",
    },
    marmitex: {
      ...sitePt.images.marmitex,
      alt: "Lunch box with grilled chicken, rice, beans and mashed potatoes",
    },
    sobremesa: {
      ...sitePt.images.sobremesa,
      alt: "Milk pudding with caramel sauce",
    },
    ambiente: {
      ...sitePt.images.ambiente,
      alt: "Restaurant dining room with wooden tables, chairs and pendant lights",
    },
  },

  weekMenu: [
    { weekday: 1, name: "Monday", short: "Mon", dish: "Steak with onions", sides: "Rice, beans, french fries and salad" },
    { weekday: 2, name: "Tuesday", short: "Tue", dish: "Roast chicken with farofa", sides: "Rice, beans, salad and vegetables" },
    { weekday: 3, name: "Wednesday", short: "Wed", dish: "Feijão tropeiro with pork chop", sides: "Rice, collard greens, egg and salad" },
    { weekday: 4, name: "Thursday", short: "Thu", dish: "Chicken stroganoff", sides: "Rice, potato sticks and salad" },
    { weekday: 5, name: "Friday", short: "Fri", dish: "Breaded fish", sides: "Rice, beans, mashed potatoes and salad" },
    { weekday: 6, name: "Saturday", short: "Sat", dish: "Feijoada completa", sides: "Rice, collard greens, farofa, orange and pork cracklings" },
  ],

  menu,

  marmitexSizes: [
    { id: "P", letter: "S", name: "Small", description: "For light eaters." },
    { id: "M", letter: "M", name: "Medium", description: "Your everyday lunch." },
    { id: "G", letter: "L", name: "Large", description: "For when you're really hungry." },
  ],

  marmitexOptions: [
    {
      icon: "bike",
      title: "Delivery",
      description: "We deliver around the neighborhood. Check the fee on WhatsApp.",
    },
    {
      icon: "store",
      title: "Counter pickup",
      description: "Order ahead and just pick it up, no waiting in line.",
    },
  ],

  steps: [
    {
      icon: "utensils",
      title: "Choose your dish",
      description: "Check the dish of the day or pick from the menu.",
    },
    {
      icon: "message",
      title: "Message us",
      description: "Send your order on WhatsApp or order on the delivery app.",
    },
    {
      icon: "bag",
      title: "Get it delivered or pick it up",
      description: "We deliver it piping hot, or you pick it up at the counter.",
    },
  ],

  address: {
    ...sitePt.address,
    city: "Your City",
    state: "ST",
    reference: "Across from the little square, next to the pharmacy.",
  },

  hours: [
    { ...sitePt.hours[0], days: "Monday to Friday", time: "11 am – 3 pm" },
    { ...sitePt.hours[1], days: "Saturday", time: "11 am – 3 pm (feijoada)" },
    { ...sitePt.hours[2], days: "Sunday", time: "Closed" },
  ],

  hoursNote: "Lunch box orders from 10:30 am.",

  payments: [
    { icon: "qr", label: "Pix" },
    { icon: "cash", label: "Cash" },
    { icon: "card", label: "Debit card" },
    { icon: "card", label: "Credit card" },
    { icon: "ticket", label: "Meal voucher" },
  ],

  footer: {
    text: "Home-style food, generous and made fresh. Monday to Saturday, at lunchtime.",
    creditPrefix: "Demo website created by",
    creditQuestion: "Want a website like this for your restaurant?",
    creditCta: "Talk to me",
    creditMessage: "Hi! I saw the Tempero da Vila demo website and I'd like a website for my restaurant.",
  },

  stickyBar: {
    label: "Order on WhatsApp",
  },
};
