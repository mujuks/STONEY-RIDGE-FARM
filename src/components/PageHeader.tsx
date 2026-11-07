interface Props {
  eyebrow: string;
  title: string;
  lead?: string;
}

export default function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <div className="page-head">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          {lead && <p>{lead}</p>}
        </div>
      </div>
    </div>
  );
}
