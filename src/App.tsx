import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { OrderProvider } from "./components/OrderProvider";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/* Section paths: URL path → element id on the Home page. */
const SECTION_PATHS: Record<string, string> = {
  "/our-farm": "our-farm",
  "/products": "offerings",
  "/gallery": "gallery",
  "/farm-tours": "farm-tours",
  "/our-values": "our-values",
};

function usePageEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const hashId = hash.startsWith("#") ? hash.slice(1) : "";
    const id = hashId || SECTION_PATHS[pathname] || "";
    const target = id ? document.getElementById(id) : null;
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    } else {
      window.scrollTo(0, 0);
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
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-farm" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/farm-tours" element={<Home />} />
          <Route path="/our-values" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<Navigate to="/our-farm" replace />} />
          <Route path="/offerings" element={<Navigate to="/products" replace />} />
          <Route path="/values" element={<Navigate to="/our-values" replace />} />
          <Route path="/tours" element={<Navigate to="/farm-tours" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
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
