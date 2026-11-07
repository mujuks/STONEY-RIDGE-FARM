import { useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { INTEREST_OPTIONS } from "../data";
import { FARM_EMAIL, SITE } from "../config";
import BrandSeal from "../components/BrandSeal";

const READY_NOTE = "This form opens your email app with your message ready to send.";
const MISSING_EMAIL_NOTE =
  "The farm email address has not been added yet. Open src/config.ts and set FARM_EMAIL to your email address.";

export default function Contact() {
  const location = useLocation();
  const state = location.state as { interest?: string } | null;
  const [interest, setInterest] = useState(state?.interest ?? INTEREST_OPTIONS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState(READY_NOTE);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FARM_EMAIL) {
      setNote(MISSING_EMAIL_NOTE);
      return;
    }
    const subject = encodeURIComponent(`${SITE.name} inquiry — ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`,
    );
    window.location.href = `mailto:${FARM_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact">
      <div className="wrap contact-grid reveal">
        <div className="contact-intro">
          <BrandSeal />
          <div className="eyebrow">Let's connect</div>
          <h2>Something good starts with a hello.</h2>
          <p>
            Have a question about our farm or want to ask what's available? Send
            us a message and tell us what you're looking for.
          </p>
          <p>
            <strong>{SITE.name}</strong>
            <br />
            Established {SITE.established}
            <br />
            <em>{SITE.tagline}</em>
          </p>
        </div>
        <form className="contact-card" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="interest">I'm interested in</label>
            <select
              id="interest"
              name="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              {INTEREST_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Prepare email →
          </button>
          <div className="form-note" id="formNote">
            {note}
          </div>
        </form>
      </div>
    </section>
  );
}
