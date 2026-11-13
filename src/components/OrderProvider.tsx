import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { OrderLine } from "../data/site";

const STORAGE_KEY = "srf-order-tray";

interface OrderState {
  items: OrderLine[];
  open: boolean;
  lastAdded: string | null;
  add: (line: Omit<OrderLine, "qty">) => void;
  remove: (id: string) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
  qtyOf: (id: string) => number;
}

const OrderContext = createContext<OrderState | null>(null);

function load(): OrderLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (i): i is OrderLine =>
        i &&
        typeof i.id === "string" &&
        typeof i.name === "string" &&
        typeof i.qty === "number" &&
        i.qty > 0,
    );
  } catch {
    return [];
  }
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderLine[]>(load);
  const [open, setOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable — tray still works for this session */
    }
  }, [items]);

  const add = useCallback((line: Omit<OrderLine, "qty">) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === line.id);
      if (found) {
        return prev.map((i) =>
          i.id === line.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...line, qty: 1 }];
    });
    setLastAdded(line.id);
    window.setTimeout(() => setLastAdded((v) => (v === line.id ? null : v)), 1400);
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const qtyOf = useCallback(
    (id: string) => items.find((i) => i.id === id)?.qty ?? 0,
    [items],
  );

  const value = useMemo(
    () => ({ items, open, lastAdded, add, remove, clear, setOpen, qtyOf }),
    [items, open, lastAdded, add, remove, clear, qtyOf],
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder(): OrderState {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
}
