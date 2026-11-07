export interface Value {
  symbol: string;
  title: string;
  text: string;
}

export interface Product {
  number: string;
  title: string;
  text: string;
  img: string;
  imgAlt: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Farm" },
  { to: "/offerings", label: "What We Offer" },
  { to: "/gallery", label: "Gallery" },
  { to: "/tours", label: "Farm Tours" },
  { to: "/values", label: "Our Values" },
  { to: "/contact", label: "Contact" },
] as const;

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

export const PRODUCTS: Product[] = [
  { number: "01 / ORCHARD", title: "Oranges", text: "Bright, citrusy goodness to bring a little sunshine to your day.", img: "/products/oranges.jpg", imgAlt: "Fresh oranges and citrus fruit" },
  { number: "02 / GROVE", title: "Avocados", text: "Naturally rich and versatile, made for fresh and flavorful meals.", img: "/products/avocado.jpeg", imgAlt: "Fresh avocados, whole and halved" },
  { number: "03 / APIARY", title: "Honey & Bees", text: "A nod to the little pollinators that help our growing world thrive.", img: "/products/honey-bees.jpeg", imgAlt: "Golden honey with bees and honeycomb" },
  { number: "04 / FARMHOUSE", title: "Farm Eggs", text: "A timeless kitchen staple for breakfasts, baking, and family favorites.", img: "/products/farm-eggs.jpeg", imgAlt: "Free-range hen at the farm" },
  { number: "05 / WATERS", title: "Fish", text: "A fresh-from-the-water offering for wholesome meals around the table.", img: "/products/fish.jpeg", imgAlt: "Fisherman holding the day's fresh catch" },
  { number: "06 / VINE", title: "Passion Fruit", text: "Tropical, fragrant fruit with a bright, tangy flavor.", img: "/products/passion-fruit.jpeg", imgAlt: "Ripe passion fruit, whole and halved" },
  { number: "07 / BERRY PATCH", title: "Strawberries", text: "Sweet, colorful berries to enjoy fresh or share in seasonal treats.", img: "/products/strawberries.jpeg", imgAlt: "Bowl of fresh ripe strawberries" },
  { number: "08 / GARDEN", title: "Fresh Vegetables", text: "A variety of garden vegetables for wholesome, everyday cooking.", img: "/products/vegetables.jpg", imgAlt: "Freshly harvested garden vegetables" },
  { number: "09 / THE PANTRY", title: "Seasonal Goodness", text: "Our farm story grows with the seasons and the gifts nature provides.", img: "/products/seasonal-goodness.jpeg", imgAlt: "Basket of seasonal fruit and vegetables" },
];

export const GALLERY: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    alt: "Green fields and countryside beneath an open sky",
    title: "Country Living",
    caption: "Rooted in the land",
  },
  {
    src: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1000&q=85",
    alt: "Fresh oranges and citrus fruit",
    title: "Orchard Fresh",
    caption: "Oranges & citrus",
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=85",
    alt: "Freshly harvested vegetables",
    title: "Garden Goodness",
    caption: "Fresh vegetables",
  },
  {
    src: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=85",
    alt: "Fresh red strawberries",
    title: "Berry Patch",
    caption: "Strawberries",
  },
  {
    src: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1000&q=85",
    alt: "Golden honey in a jar",
    title: "Golden Honey",
    caption: "Bees & pollinators",
  },
  {
    src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=85",
    alt: "Peaceful agricultural fields and farm landscape",
    title: "Farm Tour Views",
    caption: "Come explore",
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

export const INTEREST_OPTIONS = [
  "General farm inquiry",
  "Oranges & avocados",
  "Honey & bees",
  "Farm eggs",
  "Fish",
  "Current availability",
  "Farm tours",
] as const;
