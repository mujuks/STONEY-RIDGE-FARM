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
  return (
    <footer className="site-footer">
      <RidgeDivider fill="var(--deep-forest)" className="footer-ridge" />

      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo variant="light" size={56} />
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
            <Link key={link.id} to={link.path}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-col">
          <h2>{FOOTER.contactLabel}</h2>
          <span>{CONTACT.phone}</span>
          <span>{CONTACT.location}</span>
        </div>

        <div className="footer-col">
          <h2>{FOOTER.legalLabel}</h2>
          {FOOTER.legalLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <small>
          © {SITE.established} {SITE.name}. All rights reserved.
        </small>
        <small>
          Developed by{" "}
          <a href="https://github.com/mujuks" target="_blank" rel="noopener noreferrer">
            Max-mujuks
          </a>
        </small>
      </div>
    </footer>
  );
}
