"use client";
import Link from "next/link";
import { Trash2, CheckCircle, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useOrder } from "@/components/Store";
import { money } from "@/data/products";
export default function Page() {
  const { items, remove } = useOrder();
  const [sent, setSent] = useState(false);
  return (
    <section className="section page-section">
      <div className="page-heading">
        <div className="eyebrow">ONE STEP CLOSER TO HOME</div>
        <h1>
          Your <em>lovely choices.</em>
        </h1>
        <p>A little inspiration, ready to become something beautiful.</p>
      </div>
      {sent ? (
        <div className="success-state" role="status">
          <CheckCircle size={40} />
          <h2>Thank you. You’re on the list.</h2>
          <p>
            This is a demo. In the full version your order would arrive in the
            shop’s dashboard instantly. Nothing has been sent.
          </p>
          <Link className="button dark" href="/collections">
            Keep exploring <ArrowUpRight size={16} />
          </Link>
        </div>
      ) : !items.length ? (
        <div className="empty-state">
          <h2>Your space is a blank canvas.</h2>
          <p>Explore our collections or create your first curtain estimate.</p>
          <Link className="button dark" href="/collections">
            Find your style ↗
          </Link>
        </div>
      ) : (
        <div className="order-grid">
          <div>
            {items.map((item) => (
              <article className="order-item" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.style} · {item.colour}
                  </p>
                  <p className="small muted">
                    {item.width
                      ? `${item.width} m × ${item.height} m · ${item.fullness}× fullness · ${item.layers} layer(s)`
                      : "Size to be confirmed by the shop"}
                  </p>
                  <b>{money(item.price)}</b>
                </div>
                <button
                  className="icon-button"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => remove(item.id)}
                >
                  <Trash2 size={18} />
                </button>
              </article>
            ))}
            <div className="order-total">
              <span>Estimated total</span>
              <b>{money(items.reduce((sum, i) => sum + i.price, 0))}</b>
            </div>
            <p className="small muted">
              Estimate only. Final price, delivery, and fitting confirmed by the
              shop.
            </p>
          </div>
          <form
            className="order-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h3>Make yourself at home.</h3>
            <p>Leave your details to try the demo order experience.</p>
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                placeholder="Full name"
              />
            </label>
            <label>
              Phone number
              <input
                name="phone"
                autoComplete="tel"
                type="tel"
                required
                placeholder="Your phone number"
              />
            </label>
            <label>
              Location
              <input
                name="location"
                autoComplete="address-level2"
                required
                placeholder="Town or neighbourhood"
              />
            </label>
            <label>
              A little more about your space
              <textarea
                name="notes"
                rows={3}
                placeholder="Anything you’d like us to know?"
              />
            </label>
            <button className="button gold full">
              Send Order <ArrowUpRight size={16} />
            </button>
            <small>
              Demo only. Your details stay in this page and are not submitted.
            </small>
          </form>
        </div>
      )}
    </section>
  );
}
