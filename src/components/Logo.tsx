import { SITE } from "../data/site";

interface LogoProps {
  variant?: "full" | "mark" | "light";
  size?: number;
  className?: string;
}

/* The farm badge — circular illustration with transparent corners. */
export default function Logo({ variant = "full", size = 40, className }: LogoProps) {
  return (
    <span className={`logo logo--${variant}${className ? ` ${className}` : ""}`}>
      <img
        className="logo-mark"
        src="/images/badge.png"
        alt=""
        width={size}
        height={size}
        aria-hidden="true"
        decoding="async"
      />
      {variant !== "mark" && (
        <span className="logo-text">
          <span className="logo-name">{SITE.name}</span>
          <span className="logo-tag">From farm to table</span>
        </span>
      )}
    </span>
  );
}
