import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Ruler,
  Truck,
  Layers,
  MessageCircle,
  Star,
  Check,
  MoveUpRight,
} from "lucide-react";
import { photos, categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/Layout";
export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          src={photos.hero}
          alt="Terracotta and charcoal layered curtains framing white sheers in a living room"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow light">
            <i /> BEAUTIFULLY MADE FOR YOUR HOME
          </div>
          <h1>
            A little softness.
            <br />A whole new <em>feeling.</em>
          </h1>
          <p>
            Curtains and carpets that turn everyday spaces
            <br className="desktop" /> into the place you love coming home to.
          </p>
          <div className="hero-buttons">
            <Link className="button cream" href="/collections">
              Explore collections <ArrowUpRight size={17} />
            </Link>
            <Link className="hero-secondary" href="/calculator">
              Get a price estimate <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hero-note">
            <span>MADE TO MEASURE</span>
            <i /> INSPIRED BY YOU
          </div>
        </div>
        <div className="hero-caption">
          THE ART OF FEELING AT HOME <span>01 — 03</span>
        </div>
      </section>
      <div className="trust-strip">
        <span>
          <Ruler />
          Made for your measurements
        </span>
        <span>
          <Layers />
          Fabrics you’ll fall in love with
        </span>
        <span>
          <Truck />
          Delivery & fitting available
        </span>
        <span>
          <MessageCircle />
          Easy WhatsApp ordering
        </span>
      </div>
      <section className="section collections-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">A STYLE FOR EVERY SPACE</div>
            <h2>
              Find your kind of <em>beautiful.</em>
            </h2>
          </div>
          <Link className="text-link" href="/collections">
            View all collections <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="category-grid">
          {categories.map((category, i) => (
            <Link
              href={`/collections?category=${encodeURIComponent(category)}`}
              className={`category category-${i}`}
              key={category}
            >
              <Image
                src={
                  [
                    photos.curtains,
                    photos.luxury,
                    photos.sheer,
                    photos.carpet,
                    photos.blinds,
                  ][i]
                }
                alt={`${category} styled in a welcoming home`}
                fill
                sizes="(max-width:640px) 70vw, 20vw"
              />
              <div>
                <span>
                  {i === 1 ? "OUR SIGNATURE STYLE" : "EXPLORE THE COLLECTION"}
                </span>
                <h3>
                  {category}
                  <ArrowUpRight size={20} />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="signature">
        <div className="signature-photo">
          <Image
            src={photos.luxury}
            alt="Terracotta and charcoal outer drapes layered with white sheer curtains"
            fill
            sizes="(max-width:800px) 100vw, 55vw"
          />
          <span className="image-stamp">
            Layers of luxury.
            <br />
            <em>Made just for you.</em>
          </span>
        </div>
        <div className="signature-copy">
          <div className="eyebrow">THE OUTDOOR HOME SIGNATURE</div>
          <h2>
            More layers.
            <br />
            More <em>possibilities.</em>
          </h2>
          <p>
            A beautiful outer drape. A whisper of sheer. The perfect balance of
            light, privacy, and a little everyday luxury.
          </p>
          <p>
            Discover our signature layered curtains, thoughtfully combined and
            made to fit your home.
          </p>
          <Link
            className="button dark"
            href="/collections?category=Layered%20Luxury"
          >
            Discover layered luxury <ArrowUpRight size={17} />
          </Link>
          <span className="fine-note">
            <Check size={14} /> Your colours. Your layers. Your perfect fit.
          </span>
        </div>
      </section>
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">A FEW OF OUR FAVOURITES</div>
            <h2>
              Small details. <em>Beautiful spaces.</em>
            </h2>
          </div>
          <Link href="/collections" className="text-link">
            Shop all styles <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="estimate-banner">
        <div className="window-mini">
          <i />
          <i />
          <i />
          <i />
          <span>↔</span>
        </div>
        <div>
          <div className="eyebrow">LET’S FIND YOUR PERFECT FIT</div>
          <h2>
            Your space. Your style.
            <br />
            <em>Your estimate, in seconds.</em>
          </h2>
          <p>A few measurements are all you need to get started.</p>
        </div>
        <Link href="/calculator" className="button gold">
          Try the price calculator <ArrowUpRight size={17} />
        </Link>
      </section>
      <section className="section process">
        <div className="eyebrow">FROM YOUR FIRST IDEA TO THE FINAL FOLD</div>
        <h2>
          A beautiful home, <em>made simple.</em>
        </h2>
        <div className="steps">
          {[
            [
              "01",
              "Find what feels like you",
              "Explore our fabrics, colours, and collections. There’s a style for every space.",
            ],
            [
              "02",
              "Make it your size",
              "Enter your measurements and get an instant, no-pressure price estimate.",
            ],
            [
              "03",
              "Let’s bring it home",
              "Share your choices on WhatsApp. We’ll help with the finishing touches.",
            ],
          ].map(([n, title, copy]) => (
            <div key={n}>
              <span className="step-number">{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reviews section">
        <div className="section-head">
          <div>
            <div className="eyebrow">HAPPY SPACES, HAPPY PEOPLE</div>
            <h2>
              Feels like <em>home.</em>
            </h2>
          </div>
          <span className="muted small">
            Illustrative reviews for this demo
          </span>
        </div>
        <div className="review-grid">
          {[
            [
              "“The layered curtains brought the whole room together. Such a warm, lovely finish.”",
              "Mary W.",
              "Nairobi",
            ],
            [
              "“Choosing the right size felt so easy. I love how calm and cosy my bedroom feels.”",
              "Brian K.",
              "Kiambu",
            ],
            [
              "“Beautiful textures and a carpet that makes our living room feel complete.”",
              "Aisha M.",
              "Mombasa",
            ],
          ].map(([quote, name, place]) => (
            <article key={name}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <blockquote>{quote}</blockquote>
              <p>
                {name}
                <span> · {place}</span>
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="last-cta">
        <div className="eyebrow">YOUR HOME DESERVES A LITTLE BEAUTIFUL</div>
        <h2>Let’s dress your space.</h2>
        <p>A question, an idea, or a room you’re ready to transform?</p>
        <WhatsAppButton>
          Let’s talk on WhatsApp <MoveUpRight size={16} />
        </WhatsAppButton>
      </section>
    </>
  );
}
