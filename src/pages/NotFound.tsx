import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap reveal">
        <div className="eyebrow">404</div>
        <h1>This path hasn't been planted yet.</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link className="btn" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
