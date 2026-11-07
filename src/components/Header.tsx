import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data";
import { SITE } from "../config";
import BrandSeal from "./BrandSeal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function handleNav(e: MouseEvent<HTMLAnchorElement>, id: string) {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }
  }

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" to="/">
          <BrandSeal />
          <span className="brand-name">{SITE.name}</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.id} to={`/#${link.id}`} onClick={(e) => handleNav(e, link.id)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`nav-mobile${open ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="wrap">
          {NAV_LINKS.map((link) => (
            <Link key={link.id} to={`/#${link.id}`} onClick={(e) => handleNav(e, link.id)}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
