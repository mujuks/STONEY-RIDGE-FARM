import PageHero from "../components/PageHero";
import ValuesSection from "../components/ValuesSection";
import { VALUES_SECTION } from "../data/site";

export default function Values() {
  return (
    <>
      <PageHero
        navId="our-values"
        eyebrow={VALUES_SECTION.eyebrow}
        title={VALUES_SECTION.title}
        text={VALUES_SECTION.text}
      />
      <ValuesSection headless />
    </>
  );
}
