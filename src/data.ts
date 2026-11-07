export interface Value {
  symbol: string;
  title: string;
  text: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const NAV_LINKS = [
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTION_COPY = {
  values: {
    eyebrow: "The Stoney Ridge way",
    title: "Nature at the heart of everything.",
    lead: "We believe good food begins with respect for the land, attention to the details, and a deep appreciation for where our food comes from.",
  },
  gallery: {
    eyebrow: "A glimpse of farm life",
    title: "Little moments from nature.",
    lead: "From the colors of the harvest to the beauty of the countryside, here's a visual taste of the farm-to-table spirit.",
  },
} as const;

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

export const GALLERY: GalleryItem[] = [
  {
    src: "/farmstory.jpeg",
    alt: "Farm workers celebrating together in the fields",
    title: "Harvest Joy",
    caption: "Rooted in the land",
  },
  {
    src: "/moonlight.jpeg",
    alt: "Full moon rising over calm water with a moored boat",
    title: "Evening Calm",
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
    title: "Honey & Bees",
    caption: "From the apiary",
  },
  {
    src: "/products/farm-eggs.jpeg",
    alt: "Free-range hen at the farm",
    title: "Farm Eggs",
    caption: "From the farmhouse",
  },
  {
    src: "/products/fish.jpeg",
    alt: "Fisherman holding the day's fresh catch",
    title: "Fresh Fish",
    caption: "From the water",
  },
  {
    src: "/products/passion-fruit.jpeg",
    alt: "Ripe passion fruit, whole and halved",
    title: "Passion Fruit",
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
    title: "Fresh Vegetables",
    caption: "From the garden",
  },
  {
    src: "/products/seasonal-goodness.jpeg",
    alt: "Basket of seasonal fruit and vegetables",
    title: "Seasonal Goodness",
    caption: "From the pantry",
  },
];
