import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Minus, Plus, ShoppingBasket, X } from "lucide-react";
import {
  buildOrderMessage,
  buildWhatsAppLink,
  CONTACT,
  displayPrice,
  PRODUCTS,
} from "../data/site";
import { useOrder } from "./OrderProvider";

export default function OrderTray() {
  const { items, open, setOpen, add, remove, clear } = useOrder();
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [selected, setSelected] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  function addSelected() {
    const product = PRODUCTS.find((p) => p.id === selected);
    if (product) add(product);
  }

  const waHref =
    items.length > 0
      ? buildWhatsAppLink(buildOrderMessage(items, name, area))
      : undefined;

  return (
    <>
      {/* mobile sticky bar */}
      <div className={`order-bar${open ? " is-open" : ""}`}>
        <button type="button" className="order-bar-toggle" onClick={() => setOpen(!open)}>
          <ShoppingBasket size={18} aria-hidden="true" />
          <span>
            {count === 0
              ? "Your tray is empty"
              : `${count} item${count === 1 ? "" : "s"} in tray`}
          </span>
          <span className="order-bar-hint">{open ? "Close" : "View"}</span>
        </button>
      </div>

      {/* desktop tray pill (hidden when panel open) */}
      {!open && count > 0 && (
        <button
          type="button"
          className="tray-pill"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          aria-controls="order-tray-panel"
        >
          <ShoppingBasket size={17} aria-hidden="true" />
          Tray · {count}
        </button>
      )}

      {open && (
        <div
          className="tray-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="order-tray-panel"
        className={`tray-panel${open ? " is-open" : ""}`}
        ref={panelRef}
        role="dialog"
        aria-modal={open ? "true" : undefined}
        aria-label="Order tray"
        aria-hidden={!open}
      >
        <div className="tray-head">
          <h2>
            <ShoppingBasket size={18} aria-hidden="true" />
            Your order tray
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="tray-close"
            aria-label="Close order tray"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="tray-body">
          <div className="tray-add">
            <label htmlFor="tray-product">Select products</label>
            <div className="tray-add-row">
              <select
                id="tray-product"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                tabIndex={open ? 0 : -1}
              >
                <option value="">Choose a product…</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} · {p.unit} · {displayPrice(p.price)}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="tray-add-btn"
                onClick={addSelected}
                disabled={!selected}
                tabIndex={open ? 0 : -1}
              >
                <Plus size={15} aria-hidden="true" />
                Add
              </button>
            </div>
          </div>

          {items.length === 0 ? (
            <p className="tray-empty">
              Your tray is empty — pick a product above, or add items from
              “What we offer”, and they will appear here.
            </p>
          ) : (
            <ul className="tray-list">
              {items.map((item) => (
                <li key={item.id} className="tray-item">
                  <div className="tray-item-info">
                    <strong>{item.name}</strong>
                    <span>
                      {item.unit} · {item.price}
                    </span>
                  </div>
                  <div className="tray-qty" aria-label={`Quantity of ${item.name}`}>
                    <button
                      type="button"
                      aria-label={`Remove one ${item.name}`}
                      onClick={() => remove(item.id)}
                      tabIndex={open ? 0 : -1}
                    >
                      <Minus size={14} aria-hidden="true" />
                    </button>
                    <span aria-live="polite">{item.qty}</span>
                    <button
                      type="button"
                      aria-label={`Add one ${item.name}`}
                      onClick={() =>
                        add({
                          id: item.id,
                          name: item.name,
                          unit: item.unit,
                          price: item.price,
                          category: "All",
                          img: "",
                          alt: "",
                        })
                      }
                      tabIndex={open ? 0 : -1}
                    >
                      <Plus size={14} aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="tray-foot">
          <label htmlFor="tray-name">Your name</label>
          <input
            id="tray-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jane Wanjiku"
            tabIndex={open ? 0 : -1}
          />

          <label htmlFor="tray-area">Delivery or pickup area</label>
          <input
            id="tray-area"
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g. Embu town"
            tabIndex={open ? 0 : -1}
          />

          <a
            className="tray-wa"
            href={buildWhatsAppLink("Hello Stoney Ridge Farm!")}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            WhatsApp us: {CONTACT.phone}
          </a>

          <a
            className={`btn btn-gold tray-send${items.length === 0 ? " is-disabled" : ""}`}
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={items.length === 0 ? "true" : undefined}
            onClick={(e) => {
              if (items.length === 0) e.preventDefault();
            }}
            tabIndex={open && items.length > 0 ? 0 : -1}
          >
            Send order on WhatsApp
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <div className="tray-foot-row">
            <span className="tray-note">Prices confirmed on WhatsApp</span>
            {items.length > 0 && (
              <button type="button" className="tray-clear" onClick={clear} tabIndex={open ? 0 : -1}>
                Clear tray
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
