import { VALUES } from "../data";

export default function ValuesGrid() {
  return (
    <div className="values reveal">
      {VALUES.map((value, i) => (
        <article className="value" key={value.title}>
          <div className="num">{String(i + 1).padStart(2, "0")}</div>
          <h2>{value.title}</h2>
          <p>{value.text}</p>
        </article>
      ))}
    </div>
  );
}
