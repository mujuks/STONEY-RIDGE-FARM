import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { OrderProvider } from "./components/OrderProvider";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function usePageEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash.startsWith("#") ? hash.slice(1) : "";
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
      el.classList.remove("is-visible");
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<Navigate to="/#our-farm" replace />} />
          <Route path="/offerings" element={<Navigate to="/#offerings" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/values" element={<Navigate to="/#our-values" replace />} />
          <Route path="/gallery" element={<Navigate to="/#gallery" replace />} />
          <Route path="/tours" element={<Navigate to="/#farm-tours" replace />} />
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
