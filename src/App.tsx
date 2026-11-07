import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Values from "./pages/Values";
import GalleryPage from "./pages/GalleryPage";
import Tours from "./pages/Tours";
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
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/offerings" element={<Navigate to="/#products" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/values" element={<Values />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
