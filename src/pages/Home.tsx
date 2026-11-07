import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHead from "../components/SectionHead";
import ValuesGrid from "../components/ValuesGrid";
import ProductGrid from "../components/ProductGrid";
import GalleryGrid from "../components/GalleryGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="marquee">
        Fresh from nature <span>✦</span> Thoughtfully raised <span>✦</span>{" "}
        Made for sharing <span>✦</span> From farm to table
      </div>

      <section>
        <div className="wrap">
          <SectionHead
            number="01"
            eyebrow="The Stoney Ridge way"
            title="Nature at the heart of everything."
            text="We believe good food begins with respect for the land, attention to the details, and a deep appreciation for where our food comes from."
          />
          <ValuesGrid />
        </div>
      </section>

      <section className="products">
        <div className="wrap">
          <SectionHead
            number="02"
            eyebrow="A taste of the farm"
            title="Goodness in every harvest."
            text="From orchard-inspired freshness to the simple goodness of farm staples, discover what makes Stoney Ridge Farm special."
          />
          <ProductGrid limit={6} />
          <div className="section-more">
            <Link className="link-more" to="/offerings">
              View all offerings
            </Link>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="wrap">
          <SectionHead
            number="03"
            eyebrow="A glimpse of farm life"
            title="Little moments from nature."
            text="From the colors of the harvest to the beauty of the countryside, here's a visual taste of the farm-to-table spirit."
          />
          <GalleryGrid limit={3} />
          <div className="section-more">
            <Link className="link-more" to="/gallery">
              See the full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="cta-card reveal">
            <div className="eyebrow">Visit · Taste · Connect</div>
            <h2>Come see what's growing.</h2>
            <p>
              Ask about current availability, plan a farm tour, or simply say
              hello — something good always starts with a conversation.
            </p>
            <div className="cta-actions">
              <Link className="btn light" to="/contact">
                Get in touch ↗
              </Link>
              <Link className="btn ghost" to="/about">
                About the farm
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
