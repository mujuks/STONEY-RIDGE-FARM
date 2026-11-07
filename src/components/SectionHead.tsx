interface Props {
  eyebrow: string;
  title: string;
  lead: string;
  number?: string;
}

export default function SectionHead({ eyebrow, title, lead, number }: Props) {
  return (
    <div className="section-head reveal">
      <div>
        {number && <div className="sh-num">{number}</div>}
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      <p>{lead}</p>
    </div>
  );
}
