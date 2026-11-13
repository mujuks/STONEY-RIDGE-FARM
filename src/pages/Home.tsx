import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";
import HarvestBoard from "../components/HarvestBoard";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Offerings from "../components/Offerings";
import OurFarm from "../components/OurFarm";
import Testimonials from "../components/Testimonials";
import ToursSection from "../components/ToursSection";
import WelcomeStrip from "../components/WelcomeStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeStrip />
      <OurFarm />
      <Offerings />
      <HarvestBoard />
      <ToursSection />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
      <ContactSection />
    </>
  );
}
