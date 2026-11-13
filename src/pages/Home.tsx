import ContactCta from "../components/ContactCta";
import ExploreSection from "../components/ExploreSection";
import HarvestBoard from "../components/HarvestBoard";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import WelcomeStrip from "../components/WelcomeStrip";

/* Home is a landing page: hero, the site map and the short answers.
   Every full section lives on its own page. */
export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeStrip />
      <ExploreSection />
      <HarvestBoard />
      <HowItWorks />
      <Testimonials />
      <ContactCta />
    </>
  );
}
