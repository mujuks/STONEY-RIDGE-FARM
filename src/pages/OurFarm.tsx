import PageHero from "../components/PageHero";
import OurFarmSection from "../components/OurFarm";
import { OUR_FARM } from "../data/site";

export default function OurFarm() {
  return (
    <>
      <PageHero
        navId="our-farm"
        eyebrow={OUR_FARM.eyebrow}
        title={OUR_FARM.title}
        text={OUR_FARM.text}
      />
      <OurFarmSection headless />
    </>
  );
}
