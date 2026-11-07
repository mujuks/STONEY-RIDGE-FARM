import { useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { INTEREST_OPTIONS } from "../data";
import { FARM_EMAIL } from "../config";
import logo from "../assets/logo.jpg";

const DEFAULT_NOTE =
  "This form opens your email app with your message ready to send. Add the farm's email address in src/config.ts before publishing.";

export default function Contact() {
  const location = useLocation();
  const state = location.state as { interest?: string } | null;
  const [interest, setInterest] = useState(state?.interest ?? "General farm inquiry");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState(DEFAULT_NOTE);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("Stoney Ridge Farm inquiry — " + interest);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`);
    if (!FARM_EMAIL) {
      setNote(
        "The form is working, but the farm email address has not been added yet. Open src/config.ts and set FARM_EMAIL to your email address.",
      );
      return;
    }
    window.location.href = `mailto:${FARM_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact">
      <div className="wrap contact-grid reveal">
        <div className="contact-intro">
          <span className="brand-seal">
            <img src={logo} alt="" />
          </span>
          <div className="eyebrow">Let's connect</div>
          <h2>Something good starts with a hello.</h2>
          <p>
            Have a question about our farm or want to ask what's available? Send
            us a message and tell us what you're looking for.
          </p>
          <p>
            <strong>Stoney Ridge Farm</strong>
            <br />
            Established 2026
            <br />
            <em>From farm to table</em>
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
            Prepare email ↗
          </button>
          <div className="form-note" id="formNote">
            {note}
          </div>
        </form>
      </div>
    </section>
  );
}
