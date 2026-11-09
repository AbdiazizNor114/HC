export const shop = {
  phone: "254700000000",
  displayPhone: "+254 700 000 000 (placeholder)",
  address: "Your shop address, Nairobi, Kenya (placeholder)",
  hours: "Mon – Sat, 8:00 am – 6:00 pm",
};
export const pricing: Record<string, number> = {
  Standard: 1200,
  "Layered Luxury": 1800,
  Sheer: 850,
  Blackout: 1600,
};
export const extraLayerRate = 650;
export function estimate(
  width: number,
  height: number,
  style: string,
  fullness: number,
  layers: number,
) {
  return (
    width *
    height *
    fullness *
    (pricing[style] +
      (style === "Layered Luxury"
        ? Math.max(0, layers - 1) * extraLayerRate
        : 0))
  );
}
export const whatsapp = (message: string) =>
  `https://wa.me/${shop.phone}?text=${encodeURIComponent(message)}`;

export const cataloguePrices = [
  4500, 1800, 3200, 6500, 2400, 3500, 4800, 1900, 3800, 7500, 2800, 5200, 2600,
  2100, 8500,
];
