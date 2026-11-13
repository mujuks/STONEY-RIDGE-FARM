import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderTray from "./components/OrderTray";
import TopBar from "./components/TopBar";
import WhatsAppFab from "./components/WhatsAppFab";
import { OrderProvider } from "./components/OrderProvider";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurFarm from "./pages/OurFarm";
import Products from "./pages/Products";
import Herbs from "./pages/Herbs";
import Gallery from "./pages/Gallery";
import FarmTours from "./pages/FarmTours";
import Values from "./pages/Values";
import Faq from "./pages/Faq";

function usePageEffects() {
  const { pathname, hash } = useLocation();

  /* Every route is its own page — always start at the top,
     unless the URL carries a hash target. */
  useEffect(() => {
    const hashId = hash.startsWith("#") ? hash.slice(1) : "";
    const target = hashId ? document.getElementById(hashId) : null;
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
    );
    els.forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);
}

function Shell() {
  usePageEffects();
  return (
    <OrderProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-farm" element={<OurFarm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/herbs" element={<Herbs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/farm-tours" element={<FarmTours />} />
          <Route path="/our-values" element={<Values />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<Navigate to="/our-farm" replace />} />
          <Route path="/offerings" element={<Navigate to="/products" replace />} />
          <Route path="/values" element={<Navigate to="/our-values" replace />} />
          <Route path="/tours" element={<Navigate to="/farm-tours" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <OrderTray />
      <WhatsAppFab />
    </OrderProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
