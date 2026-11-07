import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-bg" src="/image%201.jpeg" alt="" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap hero-copy reveal">
        <div className="eyebrow">Rooted in nature · Established 2026</div>
        <h1>
          Good things
          <br />
          grow <em>here.</em>
        </h1>
        <p>
          Welcome to Stoney Ridge Farm, where the goodness of the land and the
          care behind every harvest bring a little more nature to your table.
        </p>
        <div className="actions">
          <Link className="btn light" to="/offerings">
            See what we offer
          </Link>
          <Link className="btn ghost" to="/about">
            Our story
          </Link>
        </div>
        <ul className="hero-stats">
          <li>
            <strong>Est. 2026</strong>
            <span>A farm just beginning</span>
          </li>
          <li>
            <strong>Nine offerings</strong>
            <span>Orchard to table</span>
          </li>
          <li>
            <strong>Farm tours</strong>
            <span>By inquiry</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
