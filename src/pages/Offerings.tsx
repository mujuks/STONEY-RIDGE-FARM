import PageHeader from "../components/PageHeader";
import ProductGrid from "../components/ProductGrid";

export default function Offerings() {
  return (
    <>
      <PageHeader
        eyebrow="A taste of the farm"
        title="Goodness in every harvest."
        lead="From orchard-inspired freshness to the simple goodness of farm staples, discover what makes Stoney Ridge Farm special."
      />
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
