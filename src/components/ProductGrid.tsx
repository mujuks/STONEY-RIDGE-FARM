import { PRODUCTS, whatsappLink } from "../config";

export default function ProductGrid() {
  return (
    <div className="product-grid">
      {PRODUCTS.map((product) => (
        <article className="product-card reveal" key={product.id}>
          <div className="product-media">
            <img
              src={product.img}
              alt={product.alt}
              width={640}
              height={480}
              loading="lazy"
            />
          </div>
          <div className="product-body">
            <h3>{product.name}</h3>
            <p className="product-meta">
              {product.unit} · <strong>{product.price}</strong>
            </p>
            <a
              className="btn"
              href={whatsappLink(`Hello Stoney Ridge Farm, I'd like to order: ${product.name}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
