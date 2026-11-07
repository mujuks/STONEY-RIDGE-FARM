import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data";
import { SITE } from "../config";
import BrandSeal from "./BrandSeal";

const FOOTER_LINKS = NAV_LINKS.filter((link) => link.to !== "/");

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <BrandSeal />
            <span>
              {SITE.name}
              <small>
                {SITE.tagline} · Est. {SITE.established}
              </small>
            </span>
          </div>
          <div className="footer-links">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="copyright">
          <span>
            © {SITE.established} {SITE.name}. All rights reserved.
          </span>
          <span>Rooted in nature. Made for sharing.</span>
        </div>
      </div>
    </footer>
  );
}
