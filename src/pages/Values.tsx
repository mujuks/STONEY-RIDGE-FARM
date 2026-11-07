import PageHeader from "../components/PageHeader";
import ValuesGrid from "../components/ValuesGrid";

export default function Values() {
  return (
    <>
      <PageHeader
        eyebrow="The Stoney Ridge way"
        title="Nature at the heart of everything."
        lead="We believe good food begins with respect for the land, attention to the details, and a deep appreciation for where our food comes from."
      />
      <section>
        <div className="wrap">
          <ValuesGrid />
        </div>
      </section>
    </>
  );
}
