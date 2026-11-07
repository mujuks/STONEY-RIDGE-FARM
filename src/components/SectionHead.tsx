interface Props {
  eyebrow: string;
  title: string;
  text: string;
  number?: string;
}

export default function SectionHead({ eyebrow, title, text, number }: Props) {
  return (
    <div className="section-head reveal">
      <div>
        {number && <div className="sh-num">{number}</div>}
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}
