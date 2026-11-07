import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "../data/site";

interface Props {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — image ${index + 1} of ${items.length}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-bar">
        <span className="lightbox-count">
          {index + 1} / {items.length}
        </span>
        <button ref={closeRef} type="button" className="lightbox-close" aria-label="Close gallery" onClick={onClose}>
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--prev"
        aria-label="Previous image"
        onClick={() => onNavigate((index - 1 + items.length) % items.length)}
      >
        <ChevronLeft size={26} aria-hidden="true" />
      </button>

      <figure className="lightbox-figure">
        <img src={item.src} alt={item.alt} />
        <figcaption>
          <strong>{item.title}</strong>
          <span>{item.caption}</span>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--next"
        aria-label="Next image"
        onClick={() => onNavigate((index + 1) % items.length)}
      >
        <ChevronRight size={26} aria-hidden="true" />
      </button>
    </div>
  );
}
