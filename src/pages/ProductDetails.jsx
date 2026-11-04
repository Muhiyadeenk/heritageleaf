import { useState } from "react";
import { FiArrowLeft, FiShoppingCart } from "react-icons/fi";
import SmartImage from "../components/SmartImage";
import { QtySelector } from "../components/ProductCard";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { navigate } from "../utils/nav";
import { formatINR } from "../utils/whatsapp";

export default function ProductDetails({ id }) {
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [wi, setWi] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <section className="section text-center">
        <h1 className="text-3xl font-bold text-primary">Product not found</h1>
        <button className="btn-primary mt-6" onClick={() => navigate("/")}>Back to shop</button>
      </section>
    );
  }

  const weight = product.weights[wi];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <section className="section !pb-8">
        <button onClick={() => navigate("/")} className="mb-6 inline-flex items-center gap-2 text-sm text-primary hover:underline">
          <FiArrowLeft /> Back to shop
        </button>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <SmartImage src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
            {product.badge && <span className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-primary-dark">{product.badge}</span>}
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Heritage Leaf Tea</p>
            <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">{product.name}</h1>
            <p className="mt-4 leading-relaxed text-ink/75">{product.description}</p>

            <p className="mt-8 text-sm font-semibold text-primary">Select weight</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.weights.map((w, i) => (
                <button
                  key={w.label}
                  onClick={() => setWi(i)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition ${i === wi ? "border-primary bg-primary text-white" : "border-primary/25 text-primary hover:border-primary"}`}
                >
                  {w.label}
                </button>
              ))}
            </div>

            <p className="mt-8 font-serif text-4xl font-bold text-primary">{formatINR(weight.price * qty)}</p>
            <p className="text-xs text-ink/60">{formatINR(weight.price)} per {weight.label} pack{qty > 1 ? ` × ${qty}` : ""}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <QtySelector qty={qty} onChange={setQty} />
              <button className="btn-primary" onClick={() => { addItem(product, weight, qty); setQty(1); }}>
                <FiShoppingCart /> Add to Cart
              </button>
              <button className="btn-outline" onClick={() => { addItem(product, weight, qty); navigate("/cart"); }}>Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section !pt-8">
        <h2 className="text-2xl font-bold text-primary">You may also like</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
