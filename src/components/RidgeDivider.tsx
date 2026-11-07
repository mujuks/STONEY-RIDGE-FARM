interface Props {
  fill: string;
  className?: string;
}

/* Single-shape ridge silhouette used at the hero base and above the footer. */
export default function RidgeDivider({ fill, className }: Props) {
  return (
    <svg
      className={`ridge-divider${className ? ` ${className}` : ""}`}
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 72 V44 L58 26 L112 40 L182 16 L252 36 L322 22 L400 42 L472 20 L542 34 L620 14 L700 32 L780 22 L862 40 L942 24 L1022 38 L1102 18 L1182 34 L1262 26 L1342 42 L1402 30 L1440 38 V72 Z"
        fill={fill}
      />
    </svg>
  );
}
