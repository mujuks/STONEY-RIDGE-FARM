import { HOW_IT_WORKS } from "../data/site";
import SectionHead from "./SectionHead";

export default function HowItWorks() {
  return (
    <section className="section section-how" aria-labelledby="how-title">
      <div className="wrap">
        <SectionHead
          id="how-title"
          eyebrow={HOW_IT_WORKS.eyebrow}
          title={HOW_IT_WORKS.title}
          text={HOW_IT_WORKS.text}
          align="center"
        />

        <ol className="how-grid">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <li
              className="how-card reveal"
              key={step.num}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="how-num" aria-hidden="true">
                {step.num}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
