import Image from "next/image";
import { photos } from "@/data/products";
import { WhatsAppButton } from "@/components/Layout";
export const metadata = { title: "Our Story" };
export default function Page() {
  return (
    <section className="section page-section">
      <div className="page-heading">
        <div className="eyebrow">A HOME IS A FEELING</div>
        <h1>
          Thoughtful details.
          <br />
          <em>Everyday comfort.</em>
        </h1>
      </div>
      <div className="about-grid">
        <div className="about-image">
          <Image
            src={photos.hero}
            alt="Terracotta and charcoal curtains with white sheers"
            fill
            sizes="(max-width:800px) 100vw, 50vw"
          />
        </div>
        <div>
          <div className="eyebrow">THE OUTDOOR HOME STORY</div>
          <h2>
            For the spaces
            <br />
            you <em>call your own.</em>
          </h2>
          <p>
            A quiet morning behind soft sheers. A cosy evening with the curtains
            drawn. A carpet that brings everyone a little closer.
          </p>
          <p>
            Outdoor Home Curtains is a Kenyan curtain and carpet shop with a
            simple idea: beautiful spaces should feel personal. Discover
            everyday drapes, signature layered designs, sheers, carpets, and
            blinds that work together naturally.
          </p>
          <p>
            Choose your style, explore your measurements, and start a
            conversation about your home.
          </p>
          <WhatsAppButton>Tell us about your space ↗</WhatsAppButton>
          <p className="small muted">
            Demo story: this copy will be replaced with the owner’s real story
            and service details.
          </p>
        </div>
      </div>
    </section>
  );
}
