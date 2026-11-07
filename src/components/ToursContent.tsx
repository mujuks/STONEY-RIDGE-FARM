import { Link } from "react-router-dom";
import StoryBlock from "./StoryBlock";

export default function ToursContent() {
  return (
    <StoryBlock
      image={{
        src: "/Poultry%20Egg%20Handling.jpeg",
        alt: "Fresh eggs being collected from the henhouse",
        wide: true,
      }}
      eyebrow="Farm tours"
      title="Step into the farm story."
    >
      <p>
        Our farm tours are an opportunity to learn about the farm, explore our
        growing vision, and discover how bees, honey, produce, eggs, and fish fit
        into the Stoney Ridge story.
      </p>
      <p>
        Interested in visiting? Contact us to discuss your group size, preferred
        date, and interests. Tour dates, activities, and availability must be
        confirmed in advance.
      </p>
      <div className="actions">
        <Link className="btn" to="/#contact">
          Ask about a tour ↗
        </Link>
      </div>
    </StoryBlock>
  );
}
