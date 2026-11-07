import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ToursContent from "../components/ToursContent";
import { TOURS_INTEREST } from "../data";

export default function Tours() {
  return (
    <>
      <Hero
        bg="/farmer.jpeg"
        bgPosition="center 20%"
        eyebrow="Come experience the farm"
        title={
          <>
            Take a little time
            <br />
            to reconnect <em>with nature.</em>
          </>
        }
        text="Get closer to the land, discover the story behind our farm, and enjoy a taste of the Stoney Ridge way. Reach out to ask about tour options and availability."
        actions={
          <>
            <Link className="btn light" to="/contact" state={{ interest: TOURS_INTEREST }}>
              Ask about a tour →
            </Link>
            <Link className="btn ghost" to="/offerings">
              What we offer
            </Link>
          </>
        }
      />

      <section>
        <div className="wrap">
          <ToursContent />
        </div>
      </section>
    </>
  );
}
