import PageHeader from "../components/PageHeader";
import ValuesGrid from "../components/ValuesGrid";
import { SECTION_COPY } from "../data";

export default function Values() {
  return (
    <>
      <PageHeader {...SECTION_COPY.values} />
      <section>
        <div className="wrap">
          <ValuesGrid />
        </div>
      </section>
    </>
  );
}
