import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap reveal">
        <p className="eyebrow">404</p>
        <h1>This path hasn't been planted yet.</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link className="btn btn-outline" to="/">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
