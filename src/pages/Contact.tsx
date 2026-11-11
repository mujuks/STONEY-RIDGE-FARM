import { ArrowUpRight, Clock, MapPin, Navigation, Phone, Truck } from "lucide-react";
import {
  buildWhatsAppLink,
  CONTACT,
  CONTACT_PAGE,
  FARM_LOCATION,
  WHATSAPP_NUMBER,
} from "../data/site";
import { accentTitle } from "../components/SectionHead";

const CARDS = [
  { icon: Phone, label: CONTACT_PAGE.cards[0].label, value: CONTACT.phone, href: `tel:+${WHATSAPP_NUMBER}` },
  { icon: MapPin, label: CONTACT_PAGE.cards[1].label, value: CONTACT.location, href: FARM_LOCATION.viewUrl },
  { icon: Clock, label: CONTACT_PAGE.cards[2].label, value: CONTACT.pickupHours },
  { icon: Truck, label: CONTACT_PAGE.cards[3].label, value: CONTACT.deliveryArea },
];

export default function Contact() {
  return (
    <article className="page-contact">
      <section id="contact" className="contact-hero" aria-labelledby="contact-page-title">
        <div className="wrap">
          <p className="eyebrow">{CONTACT_PAGE.eyebrow}</p>
          <h1 id="contact-page-title">{accentTitle(CONTACT_PAGE.title)}</h1>
          <p className="contact-hero-lead">{CONTACT_PAGE.text}</p>

          <div className="contact-hero-actions reveal">
            <a
              className="btn btn-gold"
              href={buildWhatsAppLink(CONTACT_PAGE.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on WhatsApp
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="btn btn-outline-light"
              href={FARM_LOCATION.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT_PAGE.directionsLabel}
              <Navigation size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-cards-section" aria-label="Contact details">
        <div className="wrap contact-cards">
          {CARDS.map(({ icon: Icon, label, value, href }) => {
            const body = (
              <>
                <span className="contact-card-icon">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="contact-card-label">{label}</span>
                <span className="contact-card-value">{value}</span>
              </>
            );
            return href ? (
              <a
                key={label}
                className="contact-card reveal"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {body}
              </a>
            ) : (
              <div key={label} className="contact-card reveal">
                {body}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section contact-map-section grain" aria-label="Farm location map">
        <div className="wrap">
          <div className="map-card reveal">
            <div className="map-frame">
              <iframe
                src={FARM_LOCATION.embedUrl}
                title={CONTACT_PAGE.mapTitle}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-meta">
              <div>
                <p className="map-place">{CONTACT.location}</p>
                <p className="map-coords">{FARM_LOCATION.coordsDisplay}</p>
              </div>
              <div className="map-links">
                <a
                  className="btn btn-outline"
                  href={FARM_LOCATION.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_PAGE.mapLabel}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a
                  className="btn btn-gold"
                  href={FARM_LOCATION.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_PAGE.directionsLabel}
                  <Navigation size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-page-cta" aria-labelledby="contact-cta-title">
        <div className="wrap contact-cta-inner">
          <p className="eyebrow">{CONTACT_PAGE.ctaEyebrow}</p>
          <h2 id="contact-cta-title">{accentTitle(CONTACT_PAGE.ctaTitle)}</h2>
          <p className="contact-cta-text">{CONTACT_PAGE.ctaText}</p>
          <div className="contact-cta-actions reveal">
            <a
              className="btn btn-gold"
              href={buildWhatsAppLink(CONTACT_PAGE.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a chat
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn-outline-light" href={`tel:+${WHATSAPP_NUMBER}`}>
              <Phone size={16} aria-hidden="true" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
