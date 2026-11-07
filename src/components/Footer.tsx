import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  buildWhatsAppLink,
  CONTACT,
  CONTACT_SECTION,
  FOOTER,
  NAV_LINKS,
  SITE,
} from "../data/site";
import Logo from "./Logo";
import RidgeDivider from "./RidgeDivider";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <RidgeDivider fill="var(--deep-forest)" className="footer-ridge" />

      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo variant="light" size={44} />
          <p>{FOOTER.blurb}</p>
          <a
            className="btn btn-gold"
            href={buildWhatsAppLink(CONTACT_SECTION.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <nav className="footer-col" aria-label={FOOTER.quickLinksLabel}>
          <h2>{FOOTER.quickLinksLabel}</h2>
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`/#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-col">
          <h2>{FOOTER.contactLabel}</h2>
          <span>{CONTACT.phone}</span>
          <span>{CONTACT.location}</span>
          <span>{CONTACT.deliveryArea}</span>
          <span>{CONTACT.pickupHours}</span>
        </div>

        <div className="footer-col">
          <h2>{FOOTER.legalLabel}</h2>
          {FOOTER.legalLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
          {FOOTER.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <small>
          © {year} {SITE.name}. All rights reserved.
        </small>
        <small>
          {SITE.tagline} · Established {SITE.established}
        </small>
      </div>
    </footer>
  );
}
