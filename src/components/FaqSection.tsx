import { ChevronDown } from "lucide-react";
import { FAQ } from "../data/site";
import SectionHead from "./SectionHead";

export default function FaqSection() {
  return (
    <section className="section section-faq grain" aria-labelledby="faq-title">
      <div className="wrap faq-wrap">
        <SectionHead
          id="faq-title"
          eyebrow={FAQ.eyebrow}
          title={FAQ.title}
          text={FAQ.text}
        />

        <div className="faq-list">
          {FAQ.items.map((item) => (
            <details className="faq-item reveal" key={item.q}>
              <summary>
                {item.q}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
