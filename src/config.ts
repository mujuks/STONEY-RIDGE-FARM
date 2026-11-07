/* ============================================================
   EDIT THIS FILE ONLY — prices, WhatsApp number and contact
   details live here. The layout picks them up automatically.
   ============================================================ */

export const SITE = {
  name: "Stoney Ridge Farm",
  tagline: "From farm to table",
  established: "2026",
} as const;

/* TODO: replace with your real WhatsApp number, international
   format without + (for example 2547XXXXXXXX). */
export const WHATSAPP_NUMBER = "PHONE_NUMBER";

/* Builds a WhatsApp chat link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  /* TODO: replace with your real phone number. */
  phone: WHATSAPP_NUMBER,
  location: "Nairobi, Kenya",
  /* TODO: replace with your delivery areas. */
  deliveryArea: "[Add delivery areas]",
  /* TODO: replace with your pickup days and hours. */
  pickupHours: "[Add pickup days and hours]",
} as const;

export interface Product {
  id: string;
  name: string;
  unit: string;
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
    price: "KES 000",
    img: "/products/farm-eggs.jpeg",
    alt: "Free-range hen drinking water at the farm",
  },
  {
    id: "honey",
    name: "Honey",
    unit: "500 g jar",
    price: "KES 000",
    img: "/products/honey-bees.jpeg",
    alt: "Jar of golden honey with honeycomb and bees",
  },
  {
    id: "produce",
    name: "Produce",
    unit: "Seasonal mix",
    price: "KES 000",
    img: "/products/vegetables.jpg",
    alt: "Basket of fresh vegetables and fruit",
  },
  {
    id: "fish",
    name: "Fresh fish",
    unit: "Whole or filleted",
    price: "KES 000",
    img: "/products/fish.jpeg",
    alt: "Fisherman holding the day's fresh catch",
  },
];
