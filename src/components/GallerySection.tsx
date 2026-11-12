import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { GALLERY, GALLERY_SECTION } from "../data/site";
import Lightbox from "./Lightbox";
import SectionHead from "./SectionHead";

export default function GallerySection() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section section-gallery grain" aria-labelledby="gallery-title">
      <div className="wrap">
        <SectionHead
          id="gallery-title"
          eyebrow={GALLERY_SECTION.eyebrow}
          title={GALLERY_SECTION.title}
          text={GALLERY_SECTION.text}
          align="center"
        />

        <div className="gallery-grid">
          {GALLERY.map((item, i) => (
            <button
              key={item.src + i}
              type="button"
              className={`gallery-card reveal${item.size ? ` gallery-card--${item.size}` : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${item.title}`}
            >
              <img src={item.src} alt={item.alt} width={640} height={480} loading="lazy" />
              <span className="gallery-zoom" aria-hidden="true">
                <Maximize2 size={14} />
              </span>
              <span className="gallery-caption">
                <small>{item.caption}</small>
                <strong>{item.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <Lightbox
          items={GALLERY}
          index={index}
          onClose={() => setIndex(null)}
          onNavigate={setIndex}
        />
      )}
    </section>
  );
}
