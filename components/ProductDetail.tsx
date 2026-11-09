"use client";
import { useState } from "react";
import Image from "next/image";
import { Product, money, photos } from "@/data/products";
import Calculator from "./Calculator";
const colours: Record<string, string> = {
  Ivory: "#e6dfd0",
  Sand: "#c3ab89",
  Charcoal: "#494944",
  Sage: "#9ca58c",
  Terracotta: "#b5755c",
};
export default function ProductDetail({ product }: { product: Product }) {
  const [colour, setColour] = useState(product.colours[0]);
  const images = ["Carpets", "Blinds"].includes(product.category)
    ? [product.image]
    : Array.from(new Set([product.image, photos.fabric, product.category === "Sheer Curtains" ? photos.sheer : photos.luxury, photos.curtains]));
  const [image, setImage] = useState(images[0]);
  return (
    <>
      <div className="detail-grid">
        <div>
          <div className="detail-image">
            <Image
              src={image}
              alt={`${product.name} — interior inspiration`}
              fill
              sizes="(max-width:800px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="thumbnails">
            {images.map((src, i) => (
              <button
                key={i}
                aria-label={`View photo ${i + 1}`}
                aria-pressed={src === image}
                onClick={() => setImage(src)}
              >
                <Image
                  src={src}
                  alt={`Style inspiration ${i + 1}`}
                  width={100}
                  height={85}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="detail-copy">
          <div className="eyebrow">{product.category}</div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="detail-price">from {money(product.price)}</div>
          <p className="small muted">
            Starting catalogue price. Use your measurements below for a custom
            curtain estimate.
          </p>
          <hr />
          <p>
            <b>Material</b> · {product.material}
          </p>
          <p>
            <b>Selected colour</b> · {colour}
          </p>
          <div className="swatches">
            {product.colours.map((c) => (
              <button
                key={c}
                aria-label={c}
                aria-pressed={colour === c}
                onClick={() => setColour(c)}
                className={colour === c ? "selected" : ""}
                style={{ background: colours[c] }}
              />
            ))}
          </div>
          <p className="muted small">
            Lifestyle photographs are placeholders. Fabric colours and final
            specifications are confirmed by the shop.
          </p>
          <a href="#customise" className="button dark">
            Make it yours ↓
          </a>
        </div>
      </div>
      <div id="customise">
        <div className="section-head">
          <div>
            <div className="eyebrow">A FIT THAT FEELS RIGHT</div>
            <h2>
              Make it <em>yours.</em>
            </h2>
          </div>
        </div>
        {["Carpets", "Blinds"].includes(product.category) ? (
          <SimpleProductOrder product={product} colour={colour} />
        ) : (
          <Calculator
            name={product.name}
            initialStyle={product.style}
            colour={colour}
          />
        )}
      </div>
    </>
  );
}
import { useOrder } from "./Store";
import { WhatsAppButton } from "./Layout";
import Link from "next/link";
function SimpleProductOrder({
  product,
  colour,
}: {
  product: Product;
  colour: string;
}) {
  const { add } = useOrder();
  const [added, setAdded] = useState(false);
  return (
    <div className="simple-order">
      <h3>
        {product.name} · {colour}
      </h3>
      <p>
        From {money(product.price)}. Add this style to your enquiry; the shop
        will confirm available sizes and the final price.
      </p>
      <button
        className="button dark"
        onClick={() => {
          add({
            id: "",
            name: product.name,
            style: product.category,
            width: 0,
            height: 0,
            colour,
            fullness: 1,
            layers: 1,
            price: product.price,
          });
          setAdded(true);
        }}
      >
        {added ? "Added to order ✓" : "Add to Order"}
      </button>
      <WhatsAppButton
        message={`Hello! I’m interested in ${product.name} in ${colour}. Please confirm sizing and pricing.`}
      />
      {added && (
        <Link href="/order" className="text-link">
          View your order →
        </Link>
      )}
    </div>
  );
}
