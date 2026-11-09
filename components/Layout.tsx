"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  ArrowUpRight,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useOrder } from "./Store";
import { shop, whatsapp } from "@/data/config";
export function Logo() {
  return (
    <span className="logo">
      <span>
        Outdoor Home<span className="logo-dot">.</span>
      </span>
      <small>
        <i /> CURTAINS <i />
      </small>
    </span>
  );
}
export function WhatsAppButton({
  children = "Order on WhatsApp",
  message = "Hello! I would like to enquire about your curtains and carpets.",
  className = "button gold",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={whatsapp(message)}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={16} />
      {children}
    </a>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const { items } = useOrder();
  return (
    <>
      <div className="announcement">
        Thoughtfully made. Beautifully yours.{" "}
        <span>
          Custom curtains & carpets in Kenya <ArrowUpRight size={12} />
        </span>
      </div>
      <header>
        <div className="header-inner">
          <Link href="/" aria-label="Outdoor Home Curtains home">
            <Logo />
          </Link>
          <nav
            className={open ? "nav open" : "nav"}
            aria-label="Main navigation"
          >
            {[
              ["/", "Home"],
              ["/collections", "Collections"],
              ["/calculator", "Price Calculator"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                className={path === href ? "active" : ""}
                key={href}
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link
              className="bag"
              href="/order"
              aria-label={`Order summary, ${items.length} items`}
            >
              <ShoppingBag size={19} />
              {items.length > 0 && <sup>{items.length}</sup>}
            </Link>
            <WhatsAppButton />
            <button
              className="menu-toggle icon-button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link href="/">
            <Logo />
          </Link>
          <p>
            A softer space. A warmer welcome.
            <br />
            Beautiful interiors begin at home.
          </p>
          <div className="socials">
            <a
              href="https://instagram.com"
              aria-label="Instagram (placeholder)"
            >
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook (placeholder)">
              <Facebook size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4>Find your style</h4>
          <Link href="/collections">Our collections</Link>
          <Link href="/collections?category=Layered%20Luxury">
            Layered luxury
          </Link>
          <Link href="/calculator">Price calculator</Link>
          <Link href="/order">Your order</Link>
        </div>
        <div>
          <h4>Let’s make it yours</h4>
          <p>{shop.displayPhone}</p>
          <p>{shop.address}</p>
          <p>{shop.hours}</p>
        </div>
        <div>
          <h4>A little help?</h4>
          <p>
            Not sure where to start? Tell us about your space. We’re happy to
            help.
          </p>
          <WhatsAppButton className="footer-link">
            Let’s talk <ArrowUpRight size={15} />
          </WhatsAppButton>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Outdoor Home Curtains · Front-end demo
        </span>
        <span>
          Website by <b>Smidify ↗</b>
        </span>
      </div>
    </footer>
  );
}
