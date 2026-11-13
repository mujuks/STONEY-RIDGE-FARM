import PageHero from "../components/PageHero";
import ToursSection from "../components/ToursSection";
import { FARM_TOURS } from "../data/site";

export default function FarmTours() {
  return (
    <>
      <PageHero
        navId="farm-tours"
        tone="soft"
        eyebrow={FARM_TOURS.eyebrow}
        title={FARM_TOURS.title}
        text={FARM_TOURS.text}
      />
      <ToursSection headless />
    </>
  );
}
