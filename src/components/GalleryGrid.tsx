import { GALLERY } from "../data";

export default function GalleryGrid({ limit }: { limit?: number }) {
  const items = limit ? GALLERY.slice(0, limit) : GALLERY;
  return (
    <div className={`gallery-grid reveal${limit ? " gallery-grid--preview" : ""}`}>
      {items.map((item) => (
        <figure className="gallery-card" key={item.title}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <figcaption>
            {item.title}
            <small>{item.caption}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
