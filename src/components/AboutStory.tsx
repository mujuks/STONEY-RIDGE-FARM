export default function AboutStory() {
  return (
    <div className="story-grid reveal">
      <div className="story-art story-art--photo">
        <div className="story-photo story-photo--fill">
          <img src="/bees.jpeg" alt="Bees gathering honey from a fresh honeycomb" />
        </div>
      </div>
      <div className="story-copy">
        <div className="eyebrow">Our story</div>
        <h2>From our land to your table.</h2>
        <p>
          Bees and honey lead the story of our farm—oranges and avocados, eggs
          and fish follow, alongside the mountain homestead that inspires our
          name. Our broader offerings also include passion fruit, strawberries,
          and fresh vegetables.
        </p>
        <p>
          Each represents our appreciation for the many gifts that find their
          way to a family table. As our farm grows, we look forward to sharing
          more of that goodness with you.
        </p>
        <div className="signature">From farm to table.</div>
      </div>
    </div>
  );
}
