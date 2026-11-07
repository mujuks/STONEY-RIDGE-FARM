import { Link } from "react-router-dom";

export default function ToursContent() {
  return (
    <div className="story-grid reveal">
      <div className="story-art story-art--photo">
        <div className="story-photo story-photo--fill story-photo--wide">
          <img src="/Poultry%20Egg%20Handling.jpeg" alt="Fresh eggs being collected from the henhouse" />
        </div>
      </div>
      <div className="story-copy">
        <div className="eyebrow">Farm tours</div>
        <h2>Step into the farm story.</h2>
        <p>
          Our farm tours are an opportunity to learn about the farm, explore our
          growing vision, and discover how bees, honey, produce, eggs, and fish
          fit into the Stoney Ridge story.
        </p>
        <p>
          Interested in visiting? Contact us to discuss your group size,
          preferred date, and interests. Tour dates, activities, and
          availability must be confirmed in advance.
        </p>
        <div className="actions">
          <Link className="btn" to="/contact" state={{ interest: "Farm tours" }}>
            Ask about a tour ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
