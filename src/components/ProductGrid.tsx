import { PRODUCTS } from "../data";

export default function ProductGrid({ limit }: { limit?: number }) {
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;
  return (
    <div className="product-grid reveal">
      {items.map((product) => (
        <article className="product" key={product.number}>
          <div className="p-frame">
            <img className="p-img" src={product.img} alt={product.imgAlt} loading="lazy" />
          </div>
          <div className="number">{product.number}</div>
          <h3>{product.title}</h3>
          <p>{product.text}</p>
          <div className="line"></div>
        </article>
      ))}
    </div>
  );
}
