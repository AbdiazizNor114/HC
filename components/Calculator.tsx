"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Plus, Ruler } from "lucide-react";
import { pricing, estimate } from "@/data/config";
import { money } from "@/data/products";
import { useOrder } from "./Store";
import { WhatsAppButton } from "./Layout";
export default function Calculator({
  name = "Custom curtains",
  initialStyle = "Layered Luxury",
  colour = "Ivory",
}: {
  name?: string;
  initialStyle?: string;
  colour?: string;
}) {
  const [style, setStyle] = useState(initialStyle);
  const [unit, setUnit] = useState("cm");
  const [width, setWidth] = useState("240");
  const [height, setHeight] = useState("260");
  const [fullness, setFullness] = useState(2);
  const [layers, setLayers] = useState(2);
  const [added, setAdded] = useState(false);
  const { add } = useOrder();
  const w = Number(width) / (unit === "cm" ? 100 : 1),
    h = Number(height) / (unit === "cm" ? 100 : 1);
  const valid =
    Number.isFinite(w) &&
    Number.isFinite(h) &&
    w > 0 &&
    h > 0 &&
    w <= 30 &&
    h <= 10;
  const total = valid ? estimate(w, h, style, fullness, layers) : 0;
  function changeUnit(next: string) {
    if (next === unit) return;
    setWidth(
      String(Number((Number(width) * (next === "m" ? 0.01 : 100)).toFixed(4))),
    );
    setHeight(
      String(Number((Number(height) * (next === "m" ? 0.01 : 100)).toFixed(4))),
    );
    setUnit(next);
  }
  return (
    <div className="calculator">
      <div className="calc-fields">
        <div className="eyebrow">
          <Ruler size={14} /> MADE TO YOUR MEASUREMENTS
        </div>
        <h3>Let’s get the perfect fit.</h3>
        <label>
          Curtain style
          <select
            value={style}
            onChange={(e) => {
              setStyle(e.target.value);
              setAdded(false);
            }}
          >
            {Object.keys(pricing).map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <div className="measurement-label">
          <span>Your measurements</span>
          <div className="unit-toggle">
            {["cm", "m"].map((u) => (
              <button
                key={u}
                className={unit === u ? "selected" : ""}
                onClick={() => changeUnit(u)}
                type="button"
              >
                {u}
              </button>
            ))}
          </div>
        </div>
        <div className="two-cols">
          <label>
            Width ({unit})
            <input
              type="number"
              min="0.01"
              step="any"
              value={width}
              onChange={(e) => {
                setWidth(e.target.value);
                setAdded(false);
              }}
            />
          </label>
          <label>
            Height ({unit})
            <input
              type="number"
              min="0.01"
              step="any"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                setAdded(false);
              }}
            />
          </label>
        </div>
        <div className="two-cols">
          <label>
            Fullness
            <select
              value={fullness}
              onChange={(e) => setFullness(Number(e.target.value))}
            >
              <option value={1.5}>1.5× — light gather</option>
              <option value={2}>2× — full & flowing</option>
              <option value={2.5}>2.5× — extra full</option>
            </select>
          </label>
          {style === "Layered Luxury" && (
            <label>
              Fabric layers
              <select
                value={layers}
                onChange={(e) => setLayers(Number(e.target.value))}
              >
                {[2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n} layers
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
        <details>
          <summary>How to measure your window</summary>
          <p>
            Measure the full curtain track or pole width, allowing about 15–25
            cm beyond each side of the window. For height, measure from the
            track to your preferred hem. For a full wall, use the wall’s width
            and track-to-floor height. Enter the actual width; we add fullness
            for you.
          </p>
        </details>
      </div>
      <div className="calc-result">
        <div className="window-diagram">
          <span className="diagram-width">
            ← {width || "—"} {unit} →
          </span>
          <div className="window-frame">
            <i />
            <i />
            <i />
            <i />
          </div>
          <span className="diagram-height">
            ↕ {height || "—"} {unit}
          </span>
        </div>
        <span className="eyebrow">YOUR ESTIMATED PRICE</span>
        <div className="estimate-price" aria-live="polite">
          {money(total)}
        </div>
        <p>
          {style} · {fullness}× fullness
          {style === "Layered Luxury" ? ` · ${layers} layers` : ""}
          <br />
          {colour} ·{" "}
          {valid
            ? `${(w * h * fullness).toFixed(2)} m² of fabric per layer`
            : "Enter a width up to 30 m and height up to 10 m."}
        </p>
        <small>
          Estimate only. Final price confirmed by the shop.
          <br />
          Delivery and fitting quoted separately.
        </small>
        <button
          disabled={!valid}
          className="button dark full"
          onClick={() => {
            add({
              id: "",
              name,
              style,
              width: w,
              height: h,
              colour,
              fullness,
              layers: style === "Layered Luxury" ? layers : 1,
              price: total,
            });
            setAdded(true);
          }}
        >
          {added ? <Check size={16} /> : <Plus size={16} />}{" "}
          {added ? "Added to your order" : "Add to Order"}
        </button>
        {valid && (
          <WhatsAppButton
            className="button outline full"
            message={`Hello! Please confirm this estimate: ${name}, ${style}, ${w} m wide × ${h} m high, ${fullness}× fullness, ${style === "Layered Luxury" ? layers : 1} layer(s), ${colour}. Estimate: ${money(total)}. This is a demo enquiry.`}
          >
            Send Estimate on WhatsApp <ArrowUpRight size={14} />
          </WhatsAppButton>
        )}
        {added && (
          <Link className="text-link" href="/order">
            View your order →
          </Link>
        )}
      </div>
    </div>
  );
}
