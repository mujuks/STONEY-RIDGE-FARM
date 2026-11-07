import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";
import GallerySection from "../components/GallerySection";
import HarvestBoard from "../components/HarvestBoard";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Offerings from "../components/Offerings";
import OrderTray from "../components/OrderTray";
import OurFarm from "../components/OurFarm";
import Testimonials from "../components/Testimonials";
import ToursSection from "../components/ToursSection";
import ValuesSection from "../components/ValuesSection";
import WelcomeStrip from "../components/WelcomeStrip";
import WhatsAppFab from "../components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeStrip />
      <OurFarm />
      <Offerings />
      <HarvestBoard />
      <GallerySection />
      <ToursSection />
      <ValuesSection />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
      <ContactSection />
      <OrderTray />
      <WhatsAppFab />
    </>
  );
}
