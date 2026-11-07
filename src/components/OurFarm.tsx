import { OUR_FARM } from "../data/site";
import SectionHead from "./SectionHead";

export default function OurFarm() {
  return (
    <section id="our-farm" className="section section-farm grain" aria-labelledby="farm-title">
      <div className="wrap">
        <SectionHead
          id="farm-title"
          eyebrow={OUR_FARM.eyebrow}
          title={OUR_FARM.title}
          text={OUR_FARM.text}
        />

        <div className="farm-grid">
          <figure className="farm-media reveal">
            <img
              src={OUR_FARM.image}
              alt={OUR_FARM.imageAlt}
              width={720}
              height={900}
              loading="lazy"
            />
          </figure>
          <figure className="farm-media farm-media--secondary reveal">
            <img
              src={OUR_FARM.secondaryImage}
              alt={OUR_FARM.secondaryAlt}
              width={720}
              height={540}
              loading="lazy"
            />
            <figcaption>{OUR_FARM.established}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
