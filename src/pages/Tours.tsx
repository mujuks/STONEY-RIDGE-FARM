import { Link } from "react-router-dom";
import ToursContent from "../components/ToursContent";

export default function Tours() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-bg"
          src="/farmer.jpeg"
          alt=""
          aria-hidden="true"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap hero-copy reveal">
          <div className="eyebrow">Come experience the farm</div>
          <h1>
            Take a little time
            <br />
            to reconnect <em>with nature.</em>
          </h1>
          <p>
            Get closer to the land, discover the story behind our farm, and enjoy
            a taste of the Stoney Ridge way. Reach out to ask about tour options
            and availability.
          </p>
          <div className="actions">
            <Link className="btn light" to="/contact" state={{ interest: "Farm tours" }}>
              Ask about a tour ↗
            </Link>
            <Link className="btn ghost" to="/offerings">
              What we offer
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <ToursContent />
        </div>
      </section>
    </>
  );
}
