import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, CONTACT_SECTION } from "../data/site";
import { useOrder } from "./OrderProvider";

export default function WhatsAppFab() {
  const { open } = useOrder();
  return (
    <a
      className={`fab${open ? " fab--hidden" : ""}`}
      href={buildWhatsAppLink(CONTACT_SECTION.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={open ? "true" : undefined}
      tabIndex={open ? -1 : 0}
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
