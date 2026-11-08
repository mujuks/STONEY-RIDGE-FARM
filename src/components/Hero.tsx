import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink, HERO } from "../data/site";
import RidgeDivider from "./RidgeDivider";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function CountUp({ value }: { value: number }) {
  const [display, setDisplay] = useState(prefersReducedMotion() ? value : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done.current) return;
        done.current = true;
        observer.disconnect();
        const start = performance.now();
        const duration = 1100;
        function tick(now: number) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(value * eased));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    /* Safety: never leave the stat stuck at 0 if the observer or
       animation frame does not run (e.g. headless/virtual time). */
    const fallback = window.setTimeout(() => setDisplay(value), 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Welcome">
      <img
        className="hero-bg"
        src={HERO.image}
        alt={HERO.imageAlt}
        width={1600}
        height={900}
        fetchPriority="high"
      />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="wrap">
        <div className="hero-inner">
          <p className="hero-eyebrow reveal">{HERO.eyebrow}</p>
          <h1 className="reveal">
            {HERO.titleLine1}
            <br />
            {HERO.titleLine2} <em>{HERO.titleAccent}</em>
          </h1>
          <p className="hero-text reveal">{HERO.text}</p>

          <div className="hero-actions reveal">
            <a
              className="btn btn-gold"
              href={buildWhatsAppLink("Hello Stoney Ridge Farm, I'd like to order")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <Link className="btn btn-cream" to="/our-farm">
              Explore our farm
            </Link>
            <Link className="btn btn-outline-light" to="/our-values">
              Our story
            </Link>
          </div>

          <dl className="hero-stats reveal">
            {HERO.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <dt>{stat.label}</dt>
                <dd>
                  <span className="stat-value">
                    {stat.prefix}
                    <CountUp value={stat.value} />
                    {stat.suffix}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <RidgeDivider fill="var(--cream)" className="hero-ridge" />
    </section>
  );
}
