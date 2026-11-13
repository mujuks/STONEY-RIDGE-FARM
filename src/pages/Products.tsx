import OfferingsSection from "../components/Offerings";
import PageHero from "../components/PageHero";
import { OFFERINGS } from "../data/site";

export default function Products() {
  return (
    <>
      <PageHero
        navId="offerings"
        eyebrow={OFFERINGS.eyebrow}
        title={OFFERINGS.title}
        text={OFFERINGS.text}
      />
      <OfferingsSection headless />
    </>
  );
}
