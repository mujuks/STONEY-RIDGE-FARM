import { VALUES, VALUES_SECTION } from "../data/site";
import SectionHead from "./SectionHead";

export default function ValuesSection({ headless = false }: { headless?: boolean }) {
  return (
    <section
      id="our-values"
      className="section section-values"
      aria-labelledby={headless ? undefined : "values-title"}
    >
      <div className="wrap">
        {!headless && (
          <SectionHead
            id="values-title"
            eyebrow={VALUES_SECTION.eyebrow}
            title={VALUES_SECTION.title}
            text={VALUES_SECTION.text}
          />
        )}

        <div className="values-list">
          {VALUES.map((value, i) => (
            <article className="value reveal" key={value.title} style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="value-symbol" aria-hidden="true">
                {value.symbol}
              </span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
