import { type ReactNode } from "react";

interface Props {
  bg: string;
  bgAlt: string;
  bgPosition?: string;
  eyebrow?: string;
  title: ReactNode;
  text: string;
  actions: ReactNode;
}

export default function Hero({ bg, bgAlt, bgPosition, eyebrow, title, text, actions }: Props) {
  return (
    <section className="hero">
      <img
        className="hero-bg"
        src={bg}
        alt={bgAlt}
        width={1400}
        height={767}
        fetchPriority="high"
        style={bgPosition ? { objectPosition: bgPosition } : undefined}
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-inner reveal">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="hero-actions">{actions}</div>
        </div>
      </div>
    </section>
  );
}
