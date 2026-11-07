import { HARVEST_BOARD } from "../data/site";
import SectionHead from "./SectionHead";

function statusClass(status: string) {
  if (status === "Fresh") return "chip chip--fresh";
  if (status === "Selling fast") return "chip chip--fast";
  return "chip chip--pickup";
}

export default function HarvestBoard() {
  return (
    <section className="section section-harvest" aria-labelledby="harvest-title">
      <div className="wrap">
        <SectionHead
          id="harvest-title"
          eyebrow={HARVEST_BOARD.eyebrow}
          title={HARVEST_BOARD.title}
          text={HARVEST_BOARD.text}
          align="center"
        />

        <div className="harvest-board reveal" role="table" aria-label="This week's harvest">
          <div className="harvest-row harvest-row--head" role="row">
            <span role="columnheader">Day</span>
            <span role="columnheader">Ready on the ridge</span>
            <span role="columnheader">Status</span>
          </div>
          {HARVEST_BOARD.rows.map((row) => (
            <div className="harvest-row" role="row" key={row.day}>
              <span className="harvest-day" role="cell">
                {row.day}
              </span>
              <span className="harvest-items" role="cell">
                {row.items}
              </span>
              <span role="cell">
                <span className={statusClass(row.status)}>{row.status}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
