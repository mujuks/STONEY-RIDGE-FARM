import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data";
import { SITE } from "../config";
import BrandSeal from "./BrandSeal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" to="/">
          <BrandSeal />
          <span>
            <span className="brand-name">{SITE.name}</span>
            <span className="brand-tag">{SITE.tagline}</span>
          </span>
        </Link>
        <button
          className="menu"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <nav className={`navlinks${open ? " open" : ""}`} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link className="navcta" to="/contact">
          Get in touch →
        </Link>
      </div>
    </header>
  );
}
