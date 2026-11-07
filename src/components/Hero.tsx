import { type ReactNode } from "react";

interface Props {
  bg: string;
  bgPosition?: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
  actions: ReactNode;
  stats?: { strong: string; span: string }[];
}

export default function Hero({ bg, bgPosition, eyebrow, title, text, actions, stats }: Props) {
  return (
    <section className="hero">
      <img
        className="hero-bg"
        src={bg}
        alt=""
        aria-hidden="true"
        style={bgPosition ? { objectPosition: bgPosition } : undefined}
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap hero-copy reveal">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="actions">{actions}</div>
        {stats && (
          <ul className="hero-stats">
            {stats.map((stat) => (
              <li key={stat.strong}>
                <strong>{stat.strong}</strong>
                <span>{stat.span}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
