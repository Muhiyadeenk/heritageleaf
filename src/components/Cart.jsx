import { FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import SmartImage from "./SmartImage";
import { useCart } from "../context/CartContext";
import { navigate, goSection } from "../utils/nav";
import { formatINR } from "../utils/whatsapp";

export default function Cart() {
  const { items, total, count, setQty, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <section className="section text-center">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-primary/10 text-primary">
          <FiShoppingBag size={40} />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-primary">Your cart is empty</h1>
        <p className="mt-2 text-ink/70">Discover our teas and add your favourites.</p>
        <button className="btn-primary mt-8" onClick={() => goSection("shop")}>Continue Shopping</button>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">Shopping Cart <span className="text-lg text-ink/50">({count})</span></h1>
        <button onClick={clearCart} className="text-sm text-ink/60 underline hover:text-primary">Clear cart</button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <ul className="space-y-4 lg:col-span-2">
          {items.map((i) => (
            <li key={i.key} className="flex gap-4 rounded-3xl bg-white p-4 shadow-soft">
              <SmartImage src={i.image} alt={i.name} className="h-24 w-24 shrink-0 rounded-2xl object-cover sm:h-28 sm:w-28" />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-primary">{i.name}</h3>
                    <p className="text-sm text-ink/60">{i.weight} · {formatINR(i.price)} each</p>
                  </div>
                  <button onClick={() => removeItem(i.key)} className="h-9 w-9 shrink-0 rounded-full text-red-600 transition hover:bg-red-50" aria-label={`Remove ${i.name}`}>
                    <FiTrash2 className="mx-auto" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-primary/20">
                    <button className="grid h-9 w-9 place-items-center text-primary disabled:opacity-40" disabled={i.qty <= 1} onClick={() => setQty(i.key, i.qty - 1)} aria-label="Decrease">
                      <FiMinus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button className="grid h-9 w-9 place-items-center text-primary" onClick={() => setQty(i.key, i.qty + 1)} aria-label="Increase">
                      <FiPlus size={14} />
                    </button>
                  </div>
                  <p className="font-serif text-lg font-bold text-primary">{formatINR(i.price * i.qty)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-soft lg:sticky lg:top-24">
          <h2 className="text-xl font-semibold text-primary">Order Summary</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatINR(total)}</dd></div>
            <div className="flex justify-between text-ink/60"><dt>Delivery</dt><dd>Confirmed on WhatsApp</dd></div>
            <div className="flex justify-between border-t border-primary/10 pt-4 text-base font-bold text-primary"><dt>Total</dt><dd>{formatINR(total)}</dd></div>
          </dl>
          <button className="btn-primary mt-6 w-full" onClick={() => navigate("/checkout")}>Proceed to Order</button>
          <button className="btn-outline mt-3 w-full" onClick={() => goSection("shop")}>Continue Shopping</button>
        </aside>
      </div>
    </section>
  );
}
