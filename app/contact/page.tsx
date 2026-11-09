import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { shop } from "@/data/config";
import { WhatsAppButton } from "@/components/Layout";
export const metadata = { title: "Contact" };
export default function Page() {
  return (
    <section className="section page-section">
      <div className="page-heading">
        <div className="eyebrow">A CONVERSATION AWAY</div>
        <h1>
          Let’s talk <em>about home.</em>
        </h1>
        <p>Bring your ideas, your measurements, or simply your questions.</p>
      </div>
      <div className="contact-grid">
        <div>
          <h2>
            We’d love to <em>help.</em>
          </h2>
          <div className="contact-row">
            <Phone />
            <div>
              <h3>Give us a call</h3>
              <p>{shop.displayPhone}</p>
            </div>
          </div>
          <div className="contact-row">
            <MapPin />
            <div>
              <h3>Find the shop</h3>
              <p>{shop.address}</p>
            </div>
          </div>
          <div className="contact-row">
            <Clock />
            <div>
              <h3>Opening hours</h3>
              <p>{shop.hours} · Demo hours</p>
            </div>
          </div>
          <WhatsAppButton>
            Chat on WhatsApp <ArrowUpRight size={16} />
          </WhatsAppButton>
          <p className="small muted">
            Contact details are placeholders. The WhatsApp number is not a
            verified shop number.
          </p>
        </div>
        <div
          className="map-placeholder"
          role="img"
          aria-label="Illustrative map placeholder. Shop location to be confirmed."
        >
          <div className="map-road one" />
          <div className="map-road two" />
          <div className="map-road three" />
          <div className="map-pin">
            <MapPin size={32} />
            <h3>A warm welcome awaits.</h3>
            <p>Shop location coming soon</p>
            <small>Illustrative map · placeholder address</small>
          </div>
        </div>
      </div>
    </section>
  );
}
