import { type ReactNode } from "react";

interface Props {
  image: { src: string; alt: string; wide?: boolean };
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export default function StoryBlock({ image, eyebrow, title, children }: Props) {
  return (
    <div className="story-grid reveal">
      <div className="story-art story-art--photo">
        <div className={`story-photo story-photo--fill${image.wide ? " story-photo--wide" : ""}`}>
          <img src={image.src} alt={image.alt} />
        </div>
      </div>
      <div className="story-copy">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
