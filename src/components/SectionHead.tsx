import type { ReactNode } from "react";

/* Parses the *accent* marker in section titles into a single
   italic gold emphasis — exactly one accent word per title. */
export function accentTitle(title: string): ReactNode {
  return title.split(/(\*[^*]+\*)/g).map((part, i) => {
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="accent">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

interface Props {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  id?: string;
}

export default function SectionHead({
  eyebrow,
  title,
  text,
  tone = "light",
  align = "left",
  id,
}: Props) {
  return (
    <div
      className={`section-head section-head--${tone} section-head--${align} reveal`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{accentTitle(title)}</h2>
      {text && <p className="section-lead">{text}</p>}
    </div>
  );
}
