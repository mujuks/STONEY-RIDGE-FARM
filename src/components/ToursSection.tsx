import { ArrowUpRight, Check } from "lucide-react";
import { buildWhatsAppLink, FARM_TOURS, SITE } from "../data/site";
import SectionHead from "./SectionHead";

export default function ToursSection({ headless = false }: { headless?: boolean }) {
  return (
    <section
      id="farm-tours"
      className="section section-tours"
      aria-labelledby={headless ? undefined : "tours-title"}
    >
      <div className={`wrap tours-grid${headless ? " tours-grid--headless" : ""}`}>
        <div className="tours-copy">
          {!headless && (
            <SectionHead
              id="tours-title"
              tone="dark"
              eyebrow={FARM_TOURS.eyebrow}
              title={FARM_TOURS.title}
              text={FARM_TOURS.text}
            />
          )}

          <ul className="tours-list reveal">
            {FARM_TOURS.includes.map((line) => (
              <li key={line}>
                <Check size={17} aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>

          <div className="tours-meta reveal">
            <div>
              <span className="meta-label">Price</span>
              <span className="meta-value">{FARM_TOURS.price}</span>
            </div>
            <div>
              <span className="meta-label">Duration</span>
              <span className="meta-value">{FARM_TOURS.duration}</span>
            </div>
          </div>

          <div className="section-actions reveal">
            <a
              className="btn btn-gold"
              href={buildWhatsAppLink(
                `Hello ${SITE.name}, I'd like to book a farm tour.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className="tours-media reveal">
          <img
            src={FARM_TOURS.image}
            alt={FARM_TOURS.imageAlt}
            width={720}
            height={900}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
