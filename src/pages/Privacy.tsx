import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CONTACT, CONTACT_EMAIL, SITE } from "../data/site";

export default function Privacy() {
  return (
    <article className="page-privacy grain">
      <div className="wrap">
        <p className="eyebrow">Legal</p>
        <h1>Privacy policy</h1>
        <p className="page-updated">Last updated: {SITE.established}</p>

        <div className="prose">
          <section>
            <h2>What we collect</h2>
            <p>
              {SITE.name} does not use tracking cookies or analytics scripts. If
              you send us a message through the contact form, we receive only
              the details you type in: your name, email address and message.
            </p>
          </section>

          <section>
            <h2>How we use it</h2>
            <p>
              We use your details solely to reply to your enquiry and, if you
              place an order, to arrange pickup or delivery. We do not sell,
              rent or share your information with third parties for marketing.
            </p>
          </section>

          <section>
            <h2>WhatsApp</h2>
            <p>
              Order and enquiry buttons open WhatsApp with a pre-filled
              message. WhatsApp handles your message under its own privacy
              policy; we only see what you choose to send us.
            </p>
          </section>

          <section>
            <h2>Storage</h2>
            <p>
              Your order tray is saved in your browser's local storage so it
              survives a refresh. It never leaves your device until you tap
              “Send order on WhatsApp”. You can clear it at any time from the
              tray itself.
            </p>
          </section>

          <section>
            <h2>Contact us</h2>
            <p>
              Questions about this policy? Message us on WhatsApp at{" "}
              {CONTACT.phone}
              {CONTACT_EMAIL ? (
                <>
                  {" "}
                  or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </>
              ) : null}
              .
            </p>
          </section>
        </div>

        <Link className="btn btn-outline" to="/">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </article>
  );
}
