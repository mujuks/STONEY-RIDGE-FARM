import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { CONTACT, SITE, whatsappLink } from "../config";

export default function Home() {
  return (
    <>
      <Hero
        bg="/image%201.jpeg"
        bgAlt="Two farmers holding a crate of fresh vegetables at the farm"
        title="Fresh from our ridge to your table"
        text="Eggs, honey, produce and fish. Order today, pick up or get it delivered."
        actions={
          <>
            <a
              className="btn btn-primary"
              href={whatsappLink("Hello Stoney Ridge Farm, I'd like to order")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
            <a className="btn" href="#products">
              See prices
            </a>
          </>
        }
      />

      <section id="products" className="section-products" aria-labelledby="products-title">
        <div className="wrap">
          <div className="section-intro reveal">
            <h2 id="products-title">What we grow</h2>
            <p className="section-lead">
              From orchard-inspired freshness to the simple goodness of farm
              staples, discover what makes Stoney Ridge Farm special.
            </p>
          </div>
          <ProductGrid />
          <p className="note">
            Availability may vary by season. Contact us to ask about current
            offerings.
          </p>
        </div>
      </section>

      <section id="about" className="section-about" aria-labelledby="about-title">
        <div className="wrap about-grid">
          <div className="about-media reveal">
            <img
              src="/grow.jpeg"
              alt="Watering young seedlings growing in dark soil"
              width={571}
              height={830}
              loading="lazy"
            />
          </div>
          <div className="about-copy reveal">
            <h2 id="about-title">About the farm</h2>
            <p>
              Bees and honey lead the story of our farm—oranges and avocados,
              eggs and fish follow, alongside the mountain homestead that
              inspires our name. Each harvest represents our appreciation for
              the many gifts that find their way to a family table. As our farm
              grows, we look forward to sharing more of that goodness with you.
            </p>
            <p className="established">Established {SITE.established}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-contact" aria-labelledby="contact-title">
        <div className="wrap contact-grid">
          <div className="contact-intro reveal">
            <h2 id="contact-title">Get in touch</h2>
            <p className="section-lead">
              Have a question about our farm or want to ask what's available?
              Message us on WhatsApp — something good always starts with a
              conversation.
            </p>
            <a
              className="btn btn-primary"
              href={whatsappLink("Hello Stoney Ridge Farm, I'd like to ask about your products.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
          </div>
          <dl className="contact-details reveal">
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{CONTACT.location}</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>{CONTACT.deliveryArea}</dd>
            </div>
            <div>
              <dt>Pickup</dt>
              <dd>{CONTACT.pickupHours}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
