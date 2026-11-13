import { Phone, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, CONTACT, CONTACT_SECTION, WHATSAPP_NUMBER } from "../data/site";

/* Slim corporate strip above the header: direct line, hours, location. */
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <a className="topbar-link" href={`tel:+${WHATSAPP_NUMBER}`}>
          <Phone size={13} aria-hidden="true" />
          {CONTACT.phone}
        </a>
        <span className="topbar-sep" aria-hidden="true">
          ·
        </span>
        <a
          className="topbar-link"
          href={buildWhatsAppLink(CONTACT_SECTION.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={13} aria-hidden="true" />
          WhatsApp us
        </a>
        <span className="topbar-spacer" />
        <span className="topbar-meta topbar-meta--hide-sm">{CONTACT.hours}</span>
        <span className="topbar-sep topbar-sep--hide-sm" aria-hidden="true">
          ·
        </span>
        <span className="topbar-meta topbar-meta--hide-sm">
          {CONTACT.location}
        </span>
      </div>
    </div>
  );
}
