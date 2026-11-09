"use client";
import { useState, useEffect } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";
export default function Collection() {
  const [category, setCategory] = useState("All");
  const [style, setStyle] = useState("All");
  const [colour, setColour] = useState("All");
  const [material, setMaterial] = useState("All");
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && categories.includes(c)) setCategory(c);
  }, []);
  const visible = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (style === "All" || p.style === style) &&
      (colour === "All" || p.colours.includes(colour)) &&
      (material === "All" || p.material === material),
  );
  return (
    <>
      <div className="category-tabs">
        {["All", ...categories].map((c) => (
          <button
            className={c === category ? "selected" : ""}
            onClick={() => setCategory(c)}
            key={c}
          >
            {c === "All" ? "All collections" : c}
          </button>
        ))}
      </div>
      <div className="filter-bar">
        <span>
          <SlidersHorizontal size={16} /> Refine your style
        </span>
        {[
          [
            "Style",
            style,
            setStyle,
            [...new Set(products.map((p) => p.style))],
          ],
          [
            "Colour",
            colour,
            setColour,
            [...new Set(products.flatMap((p) => p.colours))],
          ],
          [
            "Material",
            material,
            setMaterial,
            [...new Set(products.map((p) => p.material))],
          ],
        ].map(([label, value, set, options]) => (
          <label key={label as string} className="sr-label">
            <span>{label as string}</span>
            <select
              aria-label={label as string}
              value={value as string}
              onChange={(e) => (set as (v: string) => void)(e.target.value)}
            >
              <option value="All">
                All {(label as string).toLowerCase()}s
              </option>
              {(options as string[]).map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
        ))}
        <span className="result-count">{visible.length} styles</span>
      </div>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>A fresh start?</h2>
          <p>No styles match these filters. Try a different combination.</p>
          <button
            className="button dark"
            onClick={() => {
              setCategory("All");
              setStyle("All");
              setColour("All");
              setMaterial("All");
            }}
          >
            <X size={16} />
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
