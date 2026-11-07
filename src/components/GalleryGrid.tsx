import { GALLERY } from "../data";

export default function GalleryGrid() {
  return (
    <div className="gallery-grid reveal">
      {GALLERY.map((item) => (
        <figure className="gallery-card" key={item.title}>
          <img src={item.src} alt={item.alt} width={640} height={480} loading="lazy" />
          <figcaption>
            {item.title}
            <small>{item.caption}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
