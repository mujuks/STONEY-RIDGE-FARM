import PageHeader from "../components/PageHeader";
import ProductGrid from "../components/ProductGrid";
import { SECTION_COPY } from "../data";

export default function Offerings() {
  return (
    <>
      <PageHeader {...SECTION_COPY.offerings} />
      <section className="products">
        <div className="wrap">
          <ProductGrid />
          <p className="note">
            Availability may vary by season. Contact us to ask about current
            offerings.
          </p>
        </div>
      </section>
    </>
  );
}
