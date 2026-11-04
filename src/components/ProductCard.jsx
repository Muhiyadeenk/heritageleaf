import { useState } from "react";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import SmartImage from "./SmartImage";
import { useCart } from "../context/CartContext";
import { navigate } from "../utils/nav";
import { formatINR } from "../utils/whatsapp";

export function QtySelector({ qty, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-primary/20 bg-white">
      <button className="grid h-9 w-9 place-items-center text-primary disabled:opacity-40" onClick={() => onChange(Math.max(1, qty - 1))} disabled={qty <= 1} aria-label="Decrease quantity">
        <FiMinus size={14} />
      </button>
      <span className="w-8 text-center text-sm font-semibold">{qty}</span>
      <button className="grid h-9 w-9 place-items-center text-primary" onClick={() => onChange(qty + 1)} aria-label="Increase quantity">
        <FiPlus size={14} />
      </button>
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [wi, setWi] = useState(0);
  const [qty, setQty] = useState(1);
  const weight = product.weights[wi];

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <button onClick={() => navigate(`/product/${product.id}`)} className="relative block aspect-square overflow-hidden" aria-label={`View ${product.name}`}>
        <SmartImage src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-primary-dark">{product.badge}</span>
        )}
      </button>
      <div className="flex flex-1 flex-col p-5">
        <button onClick={() => navigate(`/product/${product.id}`)} className="text-left">
          <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
        </button>
        <p className="mt-1 text-sm text-ink/70">{product.short}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.weights.map((w, i) => (
            <button
              key={w.label}
              onClick={() => setWi(i)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${i === wi ? "border-primary bg-primary text-white" : "border-primary/25 text-primary hover:border-primary"}`}
            >
              {w.label}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-serif text-2xl font-bold text-primary">{formatINR(weight.price)}</p>
          <QtySelector qty={qty} onChange={setQty} />
        </div>

        <button
          className="btn-primary mt-4 w-full"
          onClick={() => {
            addItem(product, weight, qty);
            setQty(1);
          }}
        >
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
    </article>
  );
}
