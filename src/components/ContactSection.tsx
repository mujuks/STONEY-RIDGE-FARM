import { useState, type FormEvent } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  buildWhatsAppLink,
  CONTACT,
  CONTACT_EMAIL,
  CONTACT_PAGE,
  CONTACT_SECTION,
  SITE,
  WHATSAPP_NUMBER,
} from "../data/site";
import SectionHead from "./SectionHead";

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

function validate(name: string, email: string, message: string) {
  const errors: Record<string, string> = {};
  if (!name.trim()) errors.name = "Please tell us your name.";
  if (!email.trim()) errors.email = "Please add your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    errors.email = "That email address doesn't look right.";
  if (!message.trim()) errors.message = "Please write a short message.";
  return errors;
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const canEmail = Boolean(ENDPOINT || CONTACT_EMAIL);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return; /* bot filled the hidden field — drop silently */
    const found = validate(name, email, message);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        const subject = encodeURIComponent(`${SITE.name} — message from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section-contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <SectionHead
            id="contact-title"
            tone="dark"
            eyebrow={CONTACT_SECTION.eyebrow}
            title={CONTACT_SECTION.title}
            text={canEmail ? CONTACT_SECTION.text : CONTACT_SECTION.textWhatsAppOnly}
          />

          <div className="contact-actions reveal">
            <a
              className="btn btn-gold"
              href={buildWhatsAppLink(CONTACT_SECTION.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on WhatsApp
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <dl className="contact-details reveal">
            <div>
              <dt>
                <Phone size={15} aria-hidden="true" /> {CONTACT_PAGE.cards[0].label}
              </dt>
              <dd>
                <a href={`tel:+${WHATSAPP_NUMBER}`}>{CONTACT.phone}</a>
              </dd>
            </div>
            <div>
              <dt>
                <MapPin size={15} aria-hidden="true" /> {CONTACT_PAGE.cards[1].label}
              </dt>
              <dd>{CONTACT.location}</dd>
            </div>
            <div>
              <dt>
                <Clock size={15} aria-hidden="true" /> {CONTACT_PAGE.cards[2].label}
              </dt>
              <dd>{CONTACT.hours}</dd>
            </div>
          </dl>
        </div>

        {canEmail && (
          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <h3>Or send a note</h3>

            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name && (
              <span className="field-error" id="err-name" role="alert">
                {errors.name}
              </span>
            )}

            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            {errors.email && (
              <span className="field-error" id="err-email" role="alert">
                {errors.email}
              </span>
            )}

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            {errors.message && (
              <span className="field-error" id="err-message" role="alert">
                {errors.message}
              </span>
            )}

            {/* honeypot — hidden from people, tempting to bots */}
            <label className="hp-field" aria-hidden="true">
              Leave this field empty
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>

            <button className="btn btn-gold" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
              <Mail size={16} aria-hidden="true" />
            </button>

            {status === "sent" && (
              <p className="form-status form-status--ok" role="status">
                Thank you — your message is on its way. We will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status--err" role="alert">
                Something went wrong. Please try again or message us on WhatsApp instead.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
