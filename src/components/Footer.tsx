import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const LINKS = [
  { to: "/about", label: "Our Farm" },
  { to: "/offerings", label: "Offerings" },
  { to: "/gallery", label: "Gallery" },
  { to: "/tours", label: "Farm Tours" },
  { to: "/values", label: "Our Values" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-seal">
              <img src={logo} alt="" />
            </span>
            <span>
              Stoney Ridge Farm
              <small>From farm to table · Est. 2026</small>
            </span>
          </div>
          <div className="footer-links">
            {LINKS.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="copyright">
          <span>© 2026 Stoney Ridge Farm. All rights reserved.</span>
          <span>Rooted in nature. Made for sharing.</span>
        </div>
      </div>
    </footer>
  );
}
