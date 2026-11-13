import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { navLabel } from "../data/site";
import { accentTitle } from "./SectionHead";

/* Home / Current — used at the top of every inner page. */
export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}

interface Props {
  navId: string;
  eyebrow: string;
  title: string;
  text?: string;
  actions?: ReactNode;
  tone?: "forest" | "soft";
}

/* Banner that opens every inner page: breadcrumb, eyebrow, h1 and lead. */
export default function PageHero({
  navId,
  eyebrow,
  title,
  text,
  actions,
  tone = "forest",
}: Props) {
  const current = navLabel(navId);
  return (
    <section
      className={`page-hero page-hero--${tone}`}
      aria-labelledby="page-hero-title"
    >
      <div className="wrap">
        <Breadcrumbs current={current} />
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-hero-title">{accentTitle(title)}</h1>
        {text && <p className="page-hero-lead">{text}</p>}
        {actions && <div className="page-hero-actions">{actions}</div>}
      </div>
    </section>
  );
}
