import { useEffect, useMemo, useRef } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import {
  displayPrice,
  OFFERINGS,
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type Product,
  type ProductCategory,
} from "../data/site";
import { useOrder } from "./OrderProvider";
import SectionHead from "./SectionHead";

function Price({ price }: { price: string }) {
  const label = displayPrice(price);
  if (label !== price) {
    return (
      <span className="price price--placeholder" title="Price confirmed on WhatsApp">
        {label}
      </span>
    );
  }
  return <span className="price">{label}</span>;
}

function slug(cat: ProductCategory) {
  return cat.toLowerCase().replace(/ /g, "-");
}

function ProductCard({ product }: { product: Product }) {
  const { add, remove, qtyOf, lastAdded } = useOrder();
  const qty = qtyOf(product.id);
  const justAdded = lastAdded === product.id;
  const cardRef = useRef<HTMLElement>(null);

  /* Cards re-mount when the category filter changes, so each card
     reveals itself instead of relying on the page-level observer. */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article ref={cardRef} className="product-card reveal-self">
      <div className="product-media">
        <img src={product.img} alt={product.alt} width={640} height={480} loading="lazy" />
        {qty > 0 && (
          <span className="product-badge" aria-label={`${qty} in your order tray`}>
            {qty}
          </span>
        )}
      </div>
      <div className="product-body">
        <p className="product-unit">{product.unit}</p>
        <h3>{product.name}</h3>
        <p className="product-price">
          <Price price={product.price} />
        </p>

        {qty === 0 ? (
          <button className="btn btn-outline add-btn" type="button" onClick={() => add(product)}>
            <Plus size={15} aria-hidden="true" />
            {justAdded ? "Added" : "Add to tray"}
            {justAdded && <Check size={15} aria-hidden="true" />}
          </button>
        ) : (
          <div className="qty-stepper" aria-label={`Quantity of ${product.name}`}>
            <button
              type="button"
              aria-label={`Remove one ${product.name}`}
              onClick={() => remove(product.id)}
            >
              <Minus size={15} aria-hidden="true" />
            </button>
            <span aria-live="polite">{qty}</span>
            <button
              type="button"
              aria-label={`Add one ${product.name}`}
              onClick={() => add(product)}
            >
              <Plus size={15} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Offerings({ headless = false }: { headless?: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = (searchParams.get("category") ?? "").toLowerCase();
  const category: ProductCategory =
    PRODUCT_CATEGORIES.find((c) => slug(c) === param) ?? "All";

  const visible = useMemo(
    () =>
      category === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === category),
    [category],
  );

  function pick(cat: ProductCategory) {
    setSearchParams(cat === "All" ? {} : { category: slug(cat) });
  }

  return (
    <section
      id="offerings"
      className="section section-offerings"
      aria-labelledby={headless ? undefined : "offerings-title"}
    >
      <div className="wrap">
        {!headless && (
          <SectionHead
            id="offerings-title"
            eyebrow={OFFERINGS.eyebrow}
            title={OFFERINGS.title}
            text={OFFERINGS.text}
          />
        )}

        <div
          className="filter-row reveal"
          role="group"
          aria-label="Filter offerings by category"
        >
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-chip${category === cat ? " is-active" : ""}`}
              aria-pressed={category === cat}
              onClick={() => pick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className="note">{OFFERINGS.note}</p>
      </div>
    </section>
  );
}
