import { TESTIMONIALS, TESTIMONIALS_SECTION } from "../data/site";
import SectionHead from "./SectionHead";

/* Renders nothing while TESTIMONIALS is empty — never invent quotes. */
export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="section section-testimonials" aria-labelledby="testimonials-title">
      <div className="wrap">
        <SectionHead
          id="testimonials-title"
          eyebrow={TESTIMONIALS_SECTION.eyebrow}
          title={TESTIMONIALS_SECTION.title}
          text={TESTIMONIALS_SECTION.text}
          align="center"
        />
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <blockquote className="testimonial-card reveal" key={t.name} style={{ transitionDelay: `${i * 60}ms` }}>
              <p>“{t.quote}”</p>
              <footer>
                <cite>{t.name}</cite>
                <span>{t.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
