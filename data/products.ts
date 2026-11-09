import { cataloguePrices } from "./config";
export const photos = {
  hero: "/images/catalogue/terracotta-charcoal.jpg",
  curtains: "/images/catalogue/ivory-classic.webp",
  luxury: "/images/catalogue/terracotta-charcoal.jpg",
  sheer: "/images/catalogue/layered-design.jpg",
  fabric: "/images/catalogue/navy-silver.jpg",
  carpet: "/images/catalogue/woven-carpet.webp",
  blinds: "/images/catalogue/roman-blind.webp",
};
export const categories = [
  "Curtains",
  "Layered Luxury",
  "Sheer Curtains",
  "Carpets",
  "Blinds",
];
export type Product = {
  id: string;
  name: string;
  category: string;
  style: string;
  material: string;
  colours: string[];
  price: number;
  image: string;
  description: string;
};
const names = [
  "Royal Layered Ivory",
  "Savannah Sheer",
  "Nairobi Blackout Charcoal",
  "Plush Living Room Carpet",
  "Linen Everyday Sand",
  "Natural Roman Blind",
  "Royal Layered Sage",
  "Coastal Sheer White",
  "Velvet Drape Terracotta",
  "Woven Savannah Rug",
  "Classic Roller Blind",
  "Royal Layered Champagne",
  "Soft Linen Oat",
  "Cloud Sheer Cream",
  "Heritage Patterned Carpet",
];
const cats = [1, 2, 0, 3, 0, 4, 1, 2, 0, 3, 4, 1, 0, 2, 3];
export const products: Product[] = names.map((name, i) => ({
  id: name.toLowerCase().replaceAll(" ", "-"),
  name,
  category: categories[cats[i]],
  style:
    cats[i] === 1
      ? "Layered Luxury"
      : cats[i] === 2
        ? "Sheer"
        : i === 2
          ? "Blackout"
          : "Standard",
  material:
    cats[i] === 3
      ? "Wool blend"
      : cats[i] === 2
        ? "Voile"
        : i === 8
          ? "Velvet"
          : "Linen blend",
  colours:
    i % 2 ? ["Ivory", "Sand", "Charcoal"] : ["Ivory", "Sage", "Terracotta"],
  price: cataloguePrices[i],
  image: [photos.sheer, photos.sheer, photos.fabric, photos.carpet, photos.curtains, photos.blinds, photos.fabric, photos.sheer, photos.luxury, photos.carpet, photos.blinds, photos.luxury, photos.curtains, photos.sheer, photos.carpet][i],
  description:
    "Beautiful texture, thoughtful detail, and a finish that feels at home. Made to suit your space, with colour and sizing confirmed with our team.",
}));
export const money = (value: number) =>
  "KES " + value.toLocaleString("en-KE", { maximumFractionDigits: 0 });
