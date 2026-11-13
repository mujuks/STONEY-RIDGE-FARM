import { ArrowUpRight, Leaf } from "lucide-react";
import { buildWhatsAppLink, HERBS_SECTION } from "../data/site";
import SectionHead from "./SectionHead";

export default function HerbsSection({ headless = false }: { headless?: boolean }) {
  return (
    <section
      id="herbs"
      className="section section-herbs grain"
      aria-labelledby={headless ? undefined : "herbs-title"}
    >
      <div className="wrap">
        {!headless && (
          <SectionHead
            id="herbs-title"
            eyebrow={HERBS_SECTION.eyebrow}
            title={HERBS_SECTION.title}
            text={HERBS_SECTION.text}
          />
        )}

        <div className="herbs-layout">
          <figure className="herbs-media reveal">
            <img
              src={HERBS_SECTION.image}
              alt={HERBS_SECTION.imageAlt}
              width={720}
              height={540}
              loading="lazy"
            />
            <figcaption>Herb beds on the ridge</figcaption>
          </figure>

          <ul className="herbs-grid">
            {HERBS_SECTION.items.map((herb) => (
              <li className="herb-card reveal" key={herb.name}>
                <span className="herb-mark" aria-hidden="true">
                  <Leaf size={15} />
                </span>
                <div>
                  <h3>{herb.name}</h3>
                  <p>{herb.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="herbs-foot reveal">
          <p className="herbs-note">{HERBS_SECTION.note}</p>
          <div className="section-actions">
            <a
              className="btn btn-gold"
              href={buildWhatsAppLink(HERBS_SECTION.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {HERBS_SECTION.ctaLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="btn btn-outline"
              href={buildWhatsAppLink(HERBS_SECTION.shopWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {HERBS_SECTION.shopLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
