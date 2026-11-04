import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { cartTotal } from "../utils/whatsapp";

const CartContext = createContext(null);
const KEY = "heritage-leaf-cart-v1";

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load);
  const [toast, setToast] = useState("");
  const timer = useRef();

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  const addItem = useCallback(
    (product, weight, qty = 1) => {
      const key = `${product.id}-${weight.label}`;
      setItems((prev) => {
        const found = prev.find((i) => i.key === key);
        if (found) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i));
        return [
          ...prev,
          { key, id: product.id, name: product.name, image: product.image, weight: weight.label, price: weight.price, qty },
        ];
      });
      showToast(`${product.name} (${weight.label}) added to cart`);
    },
    [showToast]
  );

  const setQty = useCallback((key, qty) => {
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)));
  }, []);

  const removeItem = useCallback((key) => setItems((prev) => prev.filter((i) => i.key !== key)), []);
  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: cartTotal(items),
      addItem,
      setQty,
      removeItem,
      clearCart,
      toast,
    }),
    [items, addItem, setQty, removeItem, clearCart, toast]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
