/* ============================================================
   Stoney Ridge Farm — single source of truth
   All site content, prices, links and copy live here.
   Components must never hardcode numbers, prices or copy.
   ============================================================ */

export const SITE = {
  name: "Stoney Ridge Farm",
  tagline: "From farm to table",
  established: "2026",
  domain: "https://stoney-ridge-farm.vercel.app",
} as const;

/* International format without + (254 + national number, no leading 0). */
export const WHATSAPP_NUMBER = "254115375306";

/* TODO: replace with your real contact email. When empty the
   email UI is hidden and the form falls back to WhatsApp. */
export const CONTACT_EMAIL = "";

/* Placeholder price shown to customers until real prices are set. */
export function displayPrice(price: string): string {
  return price === "KES 000" ? "KES ___" : price;
}

/* Builds a WhatsApp chat link with a pre-filled message. */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface OrderLine {
  id: string;
  name: string;
  unit: string;
  price: string;
  qty: number;
}

/* Builds the WhatsApp order message from the tray contents. */
export function buildOrderMessage(
  items: OrderLine[],
  name: string,
  area: string,
): string {
  const lines = items.map(
    (i) => `• ${i.name} (${i.unit}) — ${displayPrice(i.price)} × ${i.qty}`,
  );
  const msg = [
    `Hello ${SITE.name}, I'd like to order:`,
    "",
    ...lines,
    "",
    `Total: ${items.reduce((sum, i) => sum + i.qty, 0)} item(s)`,
  ];
  if (name.trim()) msg.push("", `Name: ${name.trim()}`);
  if (area.trim()) msg.push(`Delivery / pickup: ${area.trim()}`);
  msg.push("", "Availability and final price to be confirmed, thank you!");
  return msg.join("\n");
}

export const CONTACT = {
  phone: "+254 115 375 306",
  location: "Embu, Kenya",
  /* TODO: replace with your delivery areas. */
  deliveryArea: "[Add delivery areas]",
  /* TODO: replace with your pickup days and hours. */
  pickupHours: "[Add pickup days and hours]",
  minOrder: "[Add minimum order]",
} as const;

/* Farm pin on Google Maps — the one place map links come from. */
export const FARM_LOCATION = {
  coords: "-0.504838,37.501396",
  coordsDisplay: "0.5048° S, 37.5014° E",
  viewUrl: "https://maps.google.com/?q=-0.504838,37.501396",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-0.504838%2C37.501396",
  embedUrl: "https://www.google.com/maps?q=-0.504838,37.501396&z=14&output=embed",
} as const;

/* ---------- navigation ---------- */

export interface NavLink {
  id: string;
  path: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "home", path: "/", label: "Home" },
  { id: "our-farm", path: "/our-farm", label: "Our farm" },
  { id: "offerings", path: "/products", label: "What we offer" },
  { id: "gallery", path: "/gallery", label: "Gallery" },
  { id: "farm-tours", path: "/farm-tours", label: "Farm tours" },
  { id: "our-values", path: "/our-values", label: "Our values" },
  { id: "contact", path: "/contact", label: "Contact" },
];

/* ---------- hero ---------- */

export const HERO = {
  image: "/images/hero.jpg",
  imageAlt: "Two farmers holding a crate of fresh vegetables at the farm",
  eyebrow: "Rooted in nature · Established 2026",
  titleLine1: "Good things",
  titleLine2: "grow",
  titleAccent: "here.",
  text: "Eggs, honey, orchard fruit, vegetables and fresh fish — grown with care and brought straight from our ridge to your table.",
  stats: [
    { value: 2026, prefix: "", suffix: "", label: "Established" },
    { value: 9, prefix: "", suffix: "", label: "Farm offerings" },
    { value: 1, prefix: "", suffix: "", label: "Farm tours weekly" },
  ],
} as const;

/* ---------- marquee strip ---------- */

export const MARQUEE_ITEMS = [
  "Free-range farm eggs",
  "Raw honey",
  "Orchard fruit",
  "Fresh vegetables",
  "Fresh fish",
  "Weekly harvest box",
  "Farm tours",
  "From farm to table",
] as const;

/* ---------- our farm ---------- */

export const OUR_FARM = {
  eyebrow: "Our farm",
  title: "Bees, birds and *bush* — a ridge full of life.",
  text: "Bees and honey lead the story of our farm — oranges and avocados, eggs and fish follow, alongside the mountain homestead that inspires our name. Each harvest represents our appreciation for the many gifts that find their way to a family table. As our farm grows, we look forward to sharing more of that goodness with you.",
  image: "/grow.jpeg",
  imageAlt: "Watering young seedlings growing in dark soil",
  secondaryImage: "/farmstory.jpeg",
  secondaryAlt: "Farm workers celebrating together in the fields",
  established: "Established 2026",
} as const;

/* ---------- products / offerings ---------- */

export type ProductCategory =
  | "All"
  | "Eggs and dairy"
  | "Produce"
  | "Orchard"
  | "Honey"
  | "Fish";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "All",
  "Eggs and dairy",
  "Produce",
  "Orchard",
  "Honey",
  "Fish",
];

export interface Product {
  id: string;
  name: string;
  unit: string;
  category: ProductCategory;
  /* TODO: replace KES 000 with your real prices. */
  price: string;
  img: string;
  alt: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "farm-eggs",
    name: "Farm eggs",
    unit: "Tray of 30",
    category: "Eggs and dairy",
    price: "KES 000",
    img: "/products/farm-eggs.jpeg",
    alt: "Free-range hen drinking water at the farm",
  },
  {
    id: "honey",
    name: "Honey",
    unit: "500 g jar",
    category: "Honey",
    price: "KES 000",
    img: "/products/honey-bees.jpeg",
    alt: "Jar of golden honey with honeycomb and bees",
  },
  {
    id: "oranges",
    name: "Oranges",
    unit: "Per kilo",
    category: "Orchard",
    price: "KES 000",
    img: "/products/oranges.jpg",
    alt: "Fresh oranges and citrus fruit",
  },
  {
    id: "avocados",
    name: "Avocados",
    unit: "Per kilo",
    category: "Orchard",
    price: "KES 000",
    img: "/products/avocado.jpeg",
    alt: "Fresh avocados, whole and halved",
  },
  {
    id: "passion-fruit",
    name: "Passion fruit",
    unit: "Per kilo",
    category: "Orchard",
    price: "KES 000",
    img: "/products/passion-fruit.jpeg",
    alt: "Ripe passion fruit, whole and halved",
  },
  {
    id: "strawberries",
    name: "Strawberries",
    unit: "Punnet",
    category: "Orchard",
    price: "KES 000",
    img: "/products/strawberries.jpeg",
    alt: "Bowl of fresh ripe strawberries",
  },
  {
    id: "vegetables",
    name: "Fresh vegetables",
    unit: "Seasonal mix",
    category: "Produce",
    price: "KES 000",
    img: "/products/vegetables.jpg",
    alt: "Freshly harvested garden vegetables",
  },
  {
    id: "fish",
    name: "Fresh fish",
    unit: "Whole or filleted",
    category: "Fish",
    price: "KES 000",
    img: "/products/fish.jpeg",
    alt: "Fisherman holding the day's fresh catch",
  },
  {
    id: "harvest-box",
    name: "Weekly harvest box",
    unit: "Box of the week",
    category: "Produce",
    price: "KES 000",
    img: "/products/seasonal-goodness.jpeg",
    alt: "Basket of seasonal fruit and vegetables",
  },
];

export const OFFERINGS = {
  eyebrow: "What we offer",
  title: "Nine good things, grown *here.*",
  text: "Add what you like to the order tray and send it straight to us on WhatsApp. Availability changes with the season — we will confirm what is ready.",
  note: "Availability may vary by season. Prices are confirmed when you order.",
} as const;

/* ---------- harvest board ---------- */

export const HARVEST_BOARD = {
  eyebrow: "This week's harvest",
  title: "Fresh off the *ridge.*",
  text: "What is ready right now. Message us early — the good stuff goes quickly.",
  rows: [
    { day: "Monday", items: "Farm eggs · Fresh vegetables", status: "Fresh" },
    { day: "Tuesday", items: "Honey · Orchard fruit", status: "Fresh" },
    { day: "Wednesday", items: "Fresh fish · Strawberries", status: "Fresh" },
    { day: "Thursday", items: "Farm eggs · Avocados", status: "Fresh" },
    { day: "Friday", items: "Weekly harvest box · Honey", status: "Selling fast" },
    { day: "Saturday", items: "Market morning pickup", status: "Pickup day" },
  ],
} as const;

/* ---------- gallery ---------- */

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const GALLERY: GalleryItem[] = [
  {
    src: "/farmstory.jpeg",
    alt: "Farm workers celebrating together in the fields",
    title: "Harvest joy",
    caption: "Rooted in the land",
  },
  {
    src: "/moonlight.jpeg",
    alt: "Full moon rising over calm water with a moored boat",
    title: "Evening calm",
    caption: "Beauty of the countryside",
  },
  {
    src: "/products/oranges.jpg",
    alt: "Fresh oranges and citrus fruit",
    title: "Oranges",
    caption: "From the orchard",
  },
  {
    src: "/products/avocado.jpeg",
    alt: "Fresh avocados, whole and halved",
    title: "Avocados",
    caption: "From the grove",
  },
  {
    src: "/products/honey-bees.jpeg",
    alt: "Golden honey with bees and honeycomb",
    title: "Honey & bees",
    caption: "From the apiary",
  },
  {
    src: "/products/farm-eggs.jpeg",
    alt: "Free-range hen at the farm",
    title: "Farm eggs",
    caption: "From the farmhouse",
  },
  {
    src: "/products/fish.jpeg",
    alt: "Fisherman holding the day's fresh catch",
    title: "Fresh fish",
    caption: "From the water",
  },
  {
    src: "/products/passion-fruit.jpeg",
    alt: "Ripe passion fruit, whole and halved",
    title: "Passion fruit",
    caption: "From the vine",
  },
  {
    src: "/products/strawberries.jpeg",
    alt: "Bowl of fresh ripe strawberries",
    title: "Strawberries",
    caption: "From the berry patch",
  },
  {
    src: "/products/vegetables.jpg",
    alt: "Freshly harvested garden vegetables",
    title: "Fresh vegetables",
    caption: "From the garden",
  },
  {
    src: "/bees.jpeg",
    alt: "Honeybees working on a honeycomb",
    title: "The bees",
    caption: "Where the story starts",
  },
  {
    src: "/Poultry Egg Handling.jpeg",
    alt: "Careful handling of fresh farm eggs",
    title: "Egg handling",
    caption: "Care in every detail",
  },
];

export const GALLERY_SECTION = {
  eyebrow: "A glimpse of farm life",
  title: "Little moments from *nature.*",
  text: "From the colours of the harvest to the beauty of the countryside — a visual taste of the farm-to-table spirit.",
} as const;

/* ---------- farm tours ---------- */

export const FARM_TOURS = {
  eyebrow: "Farm tours",
  title: "Walk the ridge, taste the *harvest.*",
  text: "Spend a morning with us: see the hives, meet the hens, wander the orchard and taste what is in season. Small groups, real farm life.",
  image: "/farmer.jpeg",
  imageAlt: "A farmer at work on the land",
  /* TODO: replace with your real tour price and duration. */
  price: "[Add tour price]",
  duration: "[Add tour duration]",
  includes: [
    "Guided walk through the hives, hen houses and orchard",
    "Seasonal tasting of what is ready to pick",
    "Time for questions with the people who work the land",
  ],
} as const;

/* ---------- values ---------- */

export interface Value {
  symbol: string;
  title: string;
  text: string;
}

export const VALUES: Value[] = [
  {
    symbol: "❧",
    title: "Rooted in the land",
    text: "Celebrating the natural world and the care that goes into every growing season.",
  },
  {
    symbol: "✳",
    title: "Care in every detail",
    text: "Honoring the work behind fresh produce, nourishing staples, and quality food.",
  },
  {
    symbol: "⌂",
    title: "Made for the table",
    text: "Bringing farm goodness to everyday meals, family gatherings, and shared moments.",
  },
];

export const VALUES_SECTION = {
  eyebrow: "Our values",
  title: "Nature at the *heart* of everything.",
  text: "We believe good food begins with respect for the land, attention to the details, and a deep appreciation for where our food comes from.",
} as const;

/* ---------- how ordering works ---------- */

export const HOW_IT_WORKS = {
  eyebrow: "How ordering works",
  title: "Three steps to your *table.*",
  text: "Ordering from the farm is simple — no accounts, no checkout, just a conversation.",
  steps: [
    {
      num: "01",
      title: "Fill the tray",
      text: "Tap add on anything you would like. Your tray stays with you while you browse.",
    },
    {
      num: "02",
      title: "Send it on WhatsApp",
      text: "One tap sends your whole order to us as a message, with your name and delivery area.",
    },
    {
      num: "03",
      title: "We confirm and deliver",
      text: `We reply to confirm availability, final prices, pickup or delivery — usually within the same day.`,
    },
  ],
} as const;

/* ---------- testimonials ---------- */

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

/* TODO: add real customer quotes here — this section stays
   hidden while the list is empty. Never invent testimonials. */
export const TESTIMONIALS: Testimonial[] = [];

export const TESTIMONIALS_SECTION = {
  eyebrow: "Kind words",
  title: "Loved at the *table.*",
  text: "What people say about food from Stoney Ridge Farm.",
} as const;

/* ---------- faq ---------- */

export const FAQ = {
  eyebrow: "Questions",
  title: "Good to *know.*",
  text: "Everything people usually ask before their first order or visit.",
  items: [
    {
      q: "How do I place an order?",
      a: "Add what you would like to the order tray and tap “Send order on WhatsApp”. Your order arrives as a message and we confirm availability and price with you.",
    },
    {
      q: "Do you deliver?",
      a: "We deliver to [Add delivery areas] and offer farm pickup on [Add pickup days and hours]. Delivery details are confirmed when you order.",
    },
    {
      q: "Are prices fixed?",
      a: "Prices shown are guidance — [Add minimum order] minimum order applies. Final prices are confirmed on WhatsApp because harvest availability changes with the season.",
    },
    {
      q: "Can I visit the farm?",
      a: "Yes! We run farm tours — see the farm tours section above and message us on WhatsApp to book a slot.",
    },
    {
      q: "What if something is out of stock?",
      a: "We will always tell you what is ready that day and suggest the closest alternative from the harvest.",
    },
  ],
} as const;

/* ---------- contact ---------- */

export const CONTACT_SECTION = {
  eyebrow: "Get in touch",
  title: "Something good starts with a *hello.*",
  text: "Message us on WhatsApp for orders, questions or tour bookings — or send a note below and we will get back to you.",
  whatsappMessage: `Hello ${SITE.name}, I'd like to ask about your products.`,
} as const;

/* ---------- contact page ---------- */

export const CONTACT_PAGE = {
  eyebrow: "Get in touch",
  title: "Find us on the *ridge.*",
  text: "Orders, questions, tour bookings or just a friendly hello — message us on WhatsApp any time, or follow the map to our gate near Embu.",
  whatsappMessage: `Hello ${SITE.name}, I'd like to get in touch.`,
  directionsLabel: "Get directions",
  mapLabel: "Open in Google Maps",
  mapTitle: "Stoney Ridge Farm on Google Maps",
  cards: [
    { key: "whatsapp", label: "WhatsApp / phone" },
    { key: "location", label: "Location" },
    { key: "pickup", label: "Pickup" },
    { key: "delivery", label: "Delivery" },
  ],
  ctaEyebrow: "We are listening",
  ctaTitle: "Say hello, we would love to *hear* from you.",
  ctaText: `Chat with us on WhatsApp — orders, availability, pickup times or tour bookings. We usually reply the same day.`,
} as const;

/* ---------- footer ---------- */

export const FOOTER = {
  blurb: "Fresh produce, farm eggs, honey and fish — grown with care on the ridge and brought from farm to table.",
  quickLinksLabel: "Explore",
  contactLabel: "Contact",
  legalLabel: "Legal",
  legalLinks: [
    { to: "/privacy", label: "Privacy policy" },
  ] as { to: string; label: string }[],
  /* TODO: add your social links (set href to "#" to hide). */
  socials: [] as { label: string; href: string }[],
} as const;
