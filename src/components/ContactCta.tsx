import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  buildWhatsAppLink,
  CONTACT,
  CONTACT_SECTION,
  WHATSAPP_NUMBER,
} from "../data/site";
import SectionHead from "./SectionHead";

/* Closing band on the home page — points to the contact page instead of
   carrying the full form. */
export default function ContactCta() {
  return (
    <section className="section section-cta" aria-labelledby="cta-title">
      <div className="wrap cta-inner">
        <SectionHead
          id="cta-title"
          tone="dark"
          align="center"
          eyebrow={CONTACT_SECTION.eyebrow}
          title={CONTACT_SECTION.title}
          text={CONTACT_SECTION.textWhatsAppOnly}
        />

        <div className="cta-actions reveal">
          <a
            className="btn btn-gold"
            href={buildWhatsAppLink(CONTACT_SECTION.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us on WhatsApp
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <Link className="btn btn-outline-light" to="/contact">
            Contact page
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <p className="cta-meta reveal">
          <a href={`tel:+${WHATSAPP_NUMBER}`}>{CONTACT.phone}</a>
          <span aria-hidden="true">·</span>
          <span>{CONTACT.hours}</span>
          <span aria-hidden="true">·</span>
          <span>{CONTACT.location}</span>
        </p>
      </div>
    </section>
  );
}
