import StoryBlock from "./StoryBlock";

export default function AboutStory() {
  return (
    <StoryBlock
      image={{ src: "/bees.jpeg", alt: "Bees gathering honey from a fresh honeycomb" }}
      eyebrow="Our story"
      title="From our land to your table."
    >
      <p>
        Bees and honey lead the story of our farm—oranges and avocados, eggs and
        fish follow, alongside the mountain homestead that inspires our name. Our
        broader offerings also include passion fruit, strawberries, and fresh
        vegetables.
      </p>
      <p>
        Each represents our appreciation for the many gifts that find their way
        to a family table. As our farm grows, we look forward to sharing more of
        that goodness with you.
      </p>
      <div className="signature">From farm to table.</div>
    </StoryBlock>
  );
}
