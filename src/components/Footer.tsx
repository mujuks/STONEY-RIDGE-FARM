import { SITE } from "../config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span className="footer-name">{SITE.name}</span>
        <small className="copyright">
          © {SITE.established} {SITE.name}. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
