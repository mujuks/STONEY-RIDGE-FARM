import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE, type NavLink } from "../data/site";
import Logo from "./Logo";

const CONTACT_LINK: NavLink =
  NAV_LINKS.find((link) => link.id === "contact") ?? NAV_LINKS[NAV_LINKS.length - 1];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const active = NAV_LINKS.find((link) => link.path === pathname)?.id ?? "";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    let raf = 0;
    function measure() {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(measure);
    }
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="wrap header-inner">
        <Link className="brand" to="/" aria-label={`${SITE.name} — home`}>
          <Logo size={38} />
        </Link>

        <nav className="nav-desktop" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="btn btn-gold header-cta" to={CONTACT_LINK.path}>
          Get in touch
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <nav
        id="mobile-nav"
        className={`nav-mobile${open ? " open" : ""}`}
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <div className="wrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link className="btn btn-gold nav-mobile-cta" to="/contact">
            Get in touch
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
