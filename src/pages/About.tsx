import PageHeader from "../components/PageHeader";
import AboutStory from "../components/AboutStory";
import { SITE } from "../config";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="A little about us"
        title="A farm story, just beginning."
        lead={`${SITE.name} was established in ${SITE.established} with a simple idea at its heart: celebrate the good things nature provides and share them with care.`}
        image={{
          src: "/grow.jpeg",
          alt: "A watering can nourishing young seedlings at Stoney Ridge Farm",
          caption: {
            title: "Grown together.",
            sub: `Shared with love · Est. ${SITE.established}`,
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
