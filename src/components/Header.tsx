import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data";
import logo from "../assets/logo.jpg";

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
          <span className="brand-seal">
            <img src={logo} alt="" />
          </span>
          <span>
            <span className="brand-name">Stoney Ridge Farm</span>
            <span className="brand-tag">From farm to table</span>
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
          Get in touch ↗
        </Link>
      </div>
    </header>
  );
}
