import HerbsSection from "../components/HerbsSection";
import PageHero from "../components/PageHero";
import { HERBS_SECTION } from "../data/site";

export default function Herbs() {
  return (
    <>
      <PageHero
        navId="herbs"
        eyebrow={HERBS_SECTION.eyebrow}
        title={HERBS_SECTION.title}
        text={HERBS_SECTION.text}
      />
      <HerbsSection headless />
    </>
  );
}
