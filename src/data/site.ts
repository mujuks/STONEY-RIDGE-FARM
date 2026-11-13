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
export const WHATSAPP_NUMBER = "254115075306";

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
  phone: "+254 115 075 306",
  location: "Embu, Kenya",
  hours: "Mon – Sat · 8am – 6pm",
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
  { id: "herbs", path: "/herbs", label: "Herbs" },
  { id: "gallery", path: "/gallery", label: "Gallery" },
  { id: "farm-tours", path: "/farm-tours", label: "Farm tours" },
  { id: "our-values", path: "/our-values", label: "Our values" },
  { id: "contact", path: "/contact", label: "Contact" },
];

/* Nav label for a section id — used for breadcrumbs and page titles. */
export function navLabel(id: string): string {
  return NAV_LINKS.find((link) => link.id === id)?.label ?? SITE.name;
}

/* ---------- hero ---------- */

export const HERO = {
  image: "/images/hero-orchard.jpg",
  imageAlt:
    "Sunlit fruit orchard heavy with apples, oranges and mangoes while honey bees work the blossoms beside a wooden hive",
  eyebrow: "Rooted in nature · Established 2026",
  titleLine1: "Good things",
  titleLine2: "grow",
  titleAccent: "here.",
  text: "A fruit orchard humming with bees, beds of fresh herbs, eggs, honey, vegetables and fish — grown with care and brought straight from our ridge to your table.",
  stats: [
    { value: 2026, prefix: "", suffix: "", label: "Established" },
    /* keep in sync with PRODUCTS.length below */
    { value: 18, prefix: "", suffix: "", label: "Farm offerings" },
    { value: 1, prefix: "", suffix: "", label: "Farm tours weekly" },
  ],
} as const;

/* ---------- marquee strip ---------- */

export const MARQUEE_ITEMS = [
  "Free-range farm eggs",
  "Raw honey",
  "Orchard fruit",
  "Pomegranates",
  "Pawpaw",
  "Fresh herbs",
  "Fresh vegetables",
  "Fresh fish",
  "Fresh fruit juices",
  "Quail chicks",
  "Christmas goats",
  "Bunnies",
  "Rabbit urine",
  "Azolla fish feed",
  "Weekly harvest box",
  "Farm tours",
  "From farm to table",
] as const;

/* ---------- our farm ---------- */

export const OUR_FARM = {
  eyebrow: "Our farm",
  title: "Fruit trees, hives and *herbs* — a ridge full of life.",
  text: "Rows of fruit trees — oranges, avocados, pomegranates and pawpaw — stand across the ridge, with honey bees working every blossom from first flower to last fruit. Between them grow our herb beds: mint, lemongrass, rosemary, lavender, chamomile and more. Quail chicks, Christmas goats, bunnies, azolla and our fish ponds complete the farm, so one corner supports the next. It is as much a home for biodiversity as it is a source of food.",
  image: "/grow.jpeg",
  imageAlt: "Watering young seedlings growing in dark soil",
  secondaryImage: "/farmstory.jpeg",
  secondaryAlt: "Farm workers celebrating together in the fields",
  established: "Established 2026",
} as const;

/* ---------- products / offerings ---------- */

export type ProductCategory =
  | "All"
  | "Orchard"
  | "Herbs"
  | "Produce"
  | "Eggs and dairy"
  | "Honey"
  | "Fish"
  | "Livestock and feed"
  | "Fresh juices";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "All",
  "Orchard",
  "Herbs",
  "Produce",
  "Eggs and dairy",
  "Honey",
  "Fish",
  "Livestock and feed",
  "Fresh juices",
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
    id: "pomegranates",
    name: "Pomegranates",
    unit: "Per kilo",
    category: "Orchard",
    /* TODO: replace KES 000 with your real prices. */
    price: "KES 000",
    img: "/products/Pomegranates.jpeg",
    alt: "Ripe pomegranates clustered on the tree, one split open to show its seeds",
  },
  {
    id: "pawpaw",
    name: "Pawpaw",
    unit: "Per kilo",
    category: "Orchard",
    price: "KES 000",
    img: "/products/Pawpaw.jpeg",
    alt: "Ripe pawpaw on a wooden table, one half showing orange flesh and black seeds",
  },
  {
    /* TODO: replace with the individual herbs once the catalog arrives. */
    id: "fresh-herbs",
    name: "Fresh herbs",
    unit: "Mixed bunches",
    category: "Herbs",
    price: "KES 000",
    img: "/products/herbs.jpg",
    alt: "Fresh mint, rosemary and basil growing in the herb bed",
  },
  {
    id: "quail-chicks",
    name: "Quail chicks",
    unit: "Per chick",
    category: "Livestock and feed",
    price: "KES 000",
    img: "/products/Quail chicks.jpeg",
    alt: "A mother quail with her flock of young chicks on a bed of straw",
  },
  {
    id: "christmas-goats",
    name: "Christmas goats",
    unit: "Per goat",
    category: "Livestock and feed",
    price: "KES 000",
    img: "/products/Christmas goats.jpeg",
    alt: "A brown and black farm goat standing on green grass",
  },
  {
    id: "bunnies",
    name: "Bunnies",
    unit: "Per rabbit",
    category: "Livestock and feed",
    price: "KES 000",
    img: "/products/Rabbit.jpeg",
    alt: "A light brown and white bunny nibbling a fresh carrot in the garden",
  },
  {
    id: "rabbit-urine",
    name: "Rabbit urine",
    unit: "Per litre",
    category: "Livestock and feed",
    price: "KES 000",
    img: "/products/Rabbit.jpeg",
    alt: "A light brown and white bunny nibbling a fresh carrot in the garden",
  },
  {
    id: "azolla",
    name: "Azolla",
    unit: "Per sack",
    category: "Livestock and feed",
    price: "KES 000",
    img: "/products/Azolla.jpeg",
    alt: "Dense bright green azolla fronds covering the surface of the water",
  },
  {
    id: "fruit-juices",
    name: "Fresh fruit juices",
    unit: "Per bottle",
    category: "Fresh juices",
    price: "KES 000",
    img: "/products/Fresh fruit juices.jpeg",
    alt: "Three glasses of freshly pressed fruit juice surrounded by fresh fruit",
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
  /* "Eighteen" must match PRODUCTS.length above. */
  title: "Eighteen good things, grown *here.*",
  text: "Add what you like to the order tray and send it straight to us on WhatsApp. Availability changes with the season — we will confirm what is ready.",
  note: "Availability may vary by season. Prices are confirmed when you order.",
} as const;

/* ---------- herbs and herbal products ---------- */

export interface Herb {
  name: string;
  note: string;
}

export const HERBS_SECTION = {
  eyebrow: "Herbs and herbal products",
  title: "Twelve herbs, grown for *tea* and cooking.",
  text: "Our herb beds run from chives and parsley through to rosemary, lavender and lemongrass — cut fresh for the kitchen, the teapot and our herbal products. This is a first look: full descriptions, packaging and prices will follow with the herb catalogue.",
  note: "A detailed herb catalogue with descriptions and prices is coming soon. Message us for what is ready today.",
  image: "/products/herbs.jpg",
  imageAlt: "Bunches of fresh green herbs growing thickly in the farm herb bed",
  ctaLabel: "Ask about herbs",
  whatsappMessage: `Hello ${SITE.name}, I'd like to ask about your herbs and herbal products.`,
  shopLabel: "Shop herbs",
  shopWhatsappMessage: `Hello ${SITE.name}, I'd like to shop your fresh herbs.`,
  /* TODO: expand each entry once the detailed catalogue arrives. */
  items: [
    { name: "Chives", note: "Mild onion flavour for eggs, salads and soups." },
    { name: "Lemon balm", note: "Citrus-scented leaves for a fresh herbal infusion." },
    { name: "Mint", note: "Cool, bright leaves for tea, juice and cooking." },
    { name: "Lemongrass", note: "Fresh stalks with a clean lemon scent, prized for tea." },
    { name: "Rosemary", note: "Woody, aromatic sprigs for roasts and fresh breads." },
    { name: "Aloe vera", note: "Thick, cooling leaves, cut fresh from the bed." },
    { name: "Parsley", note: "Green bunches for garnishes, salads and sauces." },
    { name: "Lavender", note: "Fragrant flower spikes for teas, syrups and baking." },
    { name: "Chamomile", note: "Golden flowers gathered for a gentle evening tea." },
    { name: "Wormwood", note: "Aromatic bitter leaves with a long herbal tradition." },
    { name: "Bay leaves (dried)", note: "Slow-dried leaves that deepen stews and sauces." },
    { name: "Hibiscus tea leaves", note: "Ruby-red petals for a tart, refreshing tea, hot or cold." },
  ] as Herb[],
} as const;

/* ---------- harvest board ---------- */

export const HARVEST_BOARD = {
  eyebrow: "This week's harvest",
  title: "Fresh off the *ridge.*",
  text: "What is ready right now. Message us early — the good stuff goes quickly.",
  rows: [
    { day: "Monday", items: "Farm eggs · Fresh vegetables", status: "Fresh" },
    { day: "Tuesday", items: "Honey · Pomegranates", status: "Fresh" },
    { day: "Wednesday", items: "Fresh fish · Fresh herbs", status: "Fresh" },
    { day: "Thursday", items: "Farm eggs · Pawpaw", status: "Fresh" },
    { day: "Friday", items: "Weekly harvest box · Fresh fruit juices", status: "Selling fast" },
    { day: "Saturday", items: "Market morning pickup", status: "Pickup day" },
  ],
} as const;

/* ---------- gallery ---------- */

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
  size?: "feature" | "wide";
}

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/hero-orchard.jpg",
    alt: "Sunlit orchard rows of apples, oranges and mangoes with honey bees at work",
    title: "The orchard",
    caption: "Fruit trees in full season",
    size: "feature",
  },
  {
    src: "/products/oranges.jpg",
    alt: "Fresh oranges and citrus fruit",
    title: "Oranges",
    caption: "From the orchard",
  },
  {
    src: "/products/honey-bees.jpeg",
    alt: "Golden honey with bees and honeycomb",
    title: "Honey & bees",
    caption: "From the apiary",
  },
  {
    src: "/products/avocado.jpeg",
    alt: "Fresh avocados, whole and halved",
    title: "Avocados",
    caption: "From the grove",
  },
  {
    src: "/products/vegetables.jpg",
    alt: "Freshly harvested garden vegetables",
    title: "Fresh vegetables",
    caption: "From the garden",
    size: "wide",
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
    src: "/products/farm-eggs.jpeg",
    alt: "Free-range hen at the farm",
    title: "Farm eggs",
    caption: "From the farmhouse",
  },
  {
    src: "/products/Quail chicks.jpeg",
    alt: "A mother quail with her flock of young chicks on a bed of straw",
    title: "Quail chicks",
    caption: "From the rearing shed",
    size: "feature",
  },
  {
    src: "/products/Christmas goats.jpeg",
    alt: "A brown and black farm goat standing on green grass",
    title: "Christmas goats",
    caption: "From the paddock",
  },
  {
    src: "/products/Rabbit.jpeg",
    alt: "A light brown and white bunny nibbling a fresh carrot in the garden",
    title: "Bunnies",
    caption: "From the rabbitry",
    size: "feature",
  },
  {
    src: "/products/Azolla.jpeg",
    alt: "Dense bright green azolla fronds covering the surface of the water",
    title: "Azolla",
    caption: "From the ponds",
  },
  {
    src: "/bees.jpeg",
    alt: "Honeybees working on a honeycomb",
    title: "The bees",
    caption: "Where the story starts",
  },
  {
    src: "/products/fish.jpeg",
    alt: "Fisherman holding the day's fresh catch",
    title: "Fresh fish",
    caption: "From the water",
  },
  {
    src: "/moonlight.jpeg",
    alt: "Full moon rising over calm water with a moored boat",
    title: "Evening calm",
    caption: "Beauty of the countryside",
    size: "wide",
  },
  {
    src: "/farmstory.jpeg",
    alt: "Farm workers celebrating together in the fields",
    title: "Harvest joy",
    caption: "Rooted in the land",
  },
  {
    src: "/Poultry Egg Handling.jpeg",
    alt: "Careful handling of fresh farm eggs",
    title: "Egg handling",
    caption: "Care in every detail",
    size: "wide",
  },
  {
    src: "/products/pomegranates.jpg",
    alt: "Pomegranates ripening on the tree",
    title: "Pomegranates",
    caption: "From the orchard",
  },
  {
    src: "/products/Fresh fruit juices.jpeg",
    alt: "Three glasses of freshly pressed fruit juice surrounded by fresh fruit",
    title: "Fresh juices",
    caption: "Pressed on the farm",
    size: "feature",
  },
  {
    src: "/products/Pawpaw.jpeg",
    alt: "Ripe pawpaw on a wooden table, one half showing orange flesh and black seeds",
    title: "Pawpaw",
    caption: "From the orchard",
  },
  {
    src: "/products/Pomegranates.jpeg",
    alt: "Ripe pomegranates clustered on the tree, one split open to show its seeds",
    title: "Ripe pomegranates",
    caption: "From the orchard",
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
  text: "Spend a morning with us: wander the orchard rows, see the hives and the herb beds, meet the hens, quail and bunnies and taste whatever is in season. Small groups, real farm life.",
  image: "/farmer.jpeg",
  imageAlt: "A farmer at work on the land",
  /* TODO: replace with your real tour price and duration. */
  price: "On request",
  duration: "By arrangement",
  includes: [
    "Guided walk through the orchard, herb beds, hives and fish ponds",
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
  text: `What people say about food from ${SITE.name}.`,
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
      a: "Message us on WhatsApp with your location and we will confirm delivery or farm pickup for your order.",
    },
    {
      q: "Are prices fixed?",
      a: "Prices shown are guidance. Final prices are confirmed on WhatsApp because harvest availability changes with the season.",
    },
    {
      q: "Can I visit the farm?",
      a: "Yes! We run farm tours — see the farm tours section above and message us on WhatsApp to book a slot.",
    },
    {
      q: "Which herbs do you grow?",
      a: "Chives, lemon balm, mint, lemongrass, rosemary, aloe vera, parsley, lavender, chamomile, wormwood, dried bay leaves and hibiscus tea leaves. A full catalogue with descriptions and prices is on the way — message us for what is cut fresh today.",
    },
    {
      q: "Do you have quail, goats, rabbits and azolla?",
      a: "Yes — young quail chicks, Christmas goats, bunnies and rabbit urine, plus azolla as supplementary feed for fish and chickens. Availability is confirmed on WhatsApp.",
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
  textWhatsAppOnly: "Message us on WhatsApp for orders, questions or tour bookings — we usually reply the same day.",
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
  mapTitle: `${SITE.name} on Google Maps`,
  cards: [
    { key: "whatsapp", label: "WhatsApp / phone" },
    { key: "location", label: "Location" },
    { key: "hours", label: "Hours" },
  ] as { key: string; label: string }[],
  ctaEyebrow: "We are listening",
  ctaTitle: "Say hello, we would love to *hear* from you.",
  ctaText: `Chat with us on WhatsApp — orders, availability or tour bookings. We usually reply the same day.`,
} as const;

/* ---------- footer ---------- */

export const FOOTER = {
  blurb:
    "Orchard fruit, pomegranates, fresh herbs, farm eggs, honey, quail, goats, bunnies and fish — grown with care on the ridge and brought from farm to table.",
  quickLinksLabel: "Explore",
  contactLabel: "Contact",
  legalLabel: "Legal",
  legalLinks: [
    { to: "/privacy", label: "Privacy policy" },
  ] as { to: string; label: string }[],
} as const;
