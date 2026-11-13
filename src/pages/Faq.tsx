import FaqSection from "../components/FaqSection";
import PageHero from "../components/PageHero";
import { FAQ } from "../data/site";

export default function Faq() {
  return (
    <>
      <PageHero
        navId="faq"
        eyebrow={FAQ.eyebrow}
        title={FAQ.title}
        text={FAQ.text}
      />
      <FaqSection headless />
    </>
  );
}
