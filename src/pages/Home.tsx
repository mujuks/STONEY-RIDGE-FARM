import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionHead from "../components/SectionHead";
import ValuesGrid from "../components/ValuesGrid";
import ProductGrid from "../components/ProductGrid";
import GalleryGrid from "../components/GalleryGrid";
import { SECTION_COPY } from "../data";
import { SITE } from "../config";

export default function Home() {
  return (
    <>
      <Hero
        bg="/image%201.jpeg"
        eyebrow={`Rooted in nature · Established ${SITE.established}`}
        title={
          <>
            Good things
            <br />
            grow <em>here.</em>
          </>
        }
        text={`Welcome to ${SITE.name}, where the goodness of the land and the care behind every harvest bring a little more nature to your table.`}
        actions={
          <>
            <Link className="btn light" to="/offerings">
              See what we offer
            </Link>
            <Link className="btn ghost" to="/about">
              Our story
            </Link>
          </>
        }
        stats={[
          { strong: `Est. ${SITE.established}`, span: "A farm just beginning" },
          { strong: "Nine offerings", span: "Orchard to table" },
          { strong: "Farm tours", span: "By inquiry" },
        ]}
      />
      <div className="marquee">
        Fresh from nature <span>✦</span> Thoughtfully raised <span>✦</span>{" "}
        Made for sharing <span>✦</span> {SITE.tagline}
      </div>

      <section>
        <div className="wrap">
          <SectionHead number="01" {...SECTION_COPY.values} />
          <ValuesGrid />
        </div>
      </section>

      <section className="products">
        <div className="wrap">
          <SectionHead number="02" {...SECTION_COPY.offerings} />
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
          <SectionHead number="03" {...SECTION_COPY.gallery} />
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
                Get in touch →
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
