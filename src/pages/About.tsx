import PageHeader from "../components/PageHeader";
import AboutStory from "../components/AboutStory";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="A little about us"
        title="A farm story, just beginning."
        lead="Stoney Ridge Farm was established in 2026 with a simple idea at its heart: celebrate the good things nature provides and share them with care."
        image={{
          src: "/grow.jpeg",
          alt: "A watering can nourishing young seedlings at Stoney Ridge Farm",
          caption: {
            title: "Grown together.",
            sub: "Shared with love · Est. 2026",
          },
        }}
      />
      <section>
        <div className="wrap">
          <AboutStory />
        </div>
      </section>
    </>
  );
}
