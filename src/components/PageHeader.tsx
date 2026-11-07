interface Props {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: { src: string; alt: string; caption?: { title: string; sub: string } };
}

export default function PageHeader({ eyebrow, title, lead, image }: Props) {
  if (image) {
    return (
      <div className="page-head page-head--image">
        <div className="wrap ph-split">
          <div className="reveal">
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
            {lead && <p>{lead}</p>}
          </div>
          <div className="ph-media reveal">
            <div className="ph-media-frame">
              <img src={image.src} alt={image.alt} />
            </div>
            {image.caption && (
              <div className="ph-media-card">
                <strong>{image.caption.title}</strong>
                <small>{image.caption.sub}</small>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

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
