import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { navigate, goSection } from "../utils/nav";
import { buildOrderMessage, formatINR, openWhatsApp } from "../utils/whatsapp";

const empty = { name: "", mobile: "", address: "", city: "", pin: "", notes: "" };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name";
  if (!/^[6-9]\d{9}$/.test(f.mobile.replace(/[\s-]/g, ""))) e.mobile = "Enter a valid 10-digit mobile number";
  if (f.address.trim().length < 6) e.address = "Please enter your full delivery address";
  if (f.city.trim().length < 2) e.city = "Please enter your city";
  if (!/^\d{6}$/.test(f.pin.trim())) e.pin = "Enter a valid 6-digit PIN code";
  return e;
}

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  if (items.length === 0 && !sent) {
    return (
      <section className="section text-center">
        <h1 className="text-3xl font-bold text-primary">Nothing to order yet</h1>
        <p className="mt-2 text-ink/70">Add some tea to your cart first.</p>
        <button className="btn-primary mt-8" onClick={() => goSection("shop")}>Browse Teas</button>
      </section>
    );
  }

  if (sent) {
    return (
      <section className="section text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#25D366]/15 text-[#1ebe5b]">
          <FiCheckCircle size={40} />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-primary">WhatsApp opened with your order</h1>
        <p className="mx-auto mt-3 max-w-lg text-ink/70">
          Please press <strong>Send</strong> in WhatsApp to submit your order. It is <strong>not confirmed or paid</strong> until we reply and confirm the details with you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="btn-primary" onClick={() => setSent(false)}>Back to Order</button>
          <button className="btn-outline" onClick={() => { clearCart(); setForm(empty); setSent(false); navigate("/"); }}>
            I've sent it – clear cart
          </button>
        </div>
      </section>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.querySelector("[data-error='true']")?.focus();
      return;
    }
    openWhatsApp(buildOrderMessage({ ...form, mobile: form.mobile.replace(/[\s-]/g, "") }, items));
    setSent(true);
  };

  const field = (k, label, props = {}) => (
    <div className={props.wrap}>
      <label htmlFor={k} className="mb-1 block text-sm font-medium text-primary">{label}</label>
      {props.area ? (
        <textarea id={k} rows={3} value={form[k]} onChange={set(k)} data-error={!!errors[k]} className={`input ${errors[k] ? "!border-red-500" : ""}`} placeholder={props.placeholder} />
      ) : (
        <input id={k} value={form[k]} onChange={set(k)} data-error={!!errors[k]} inputMode={props.inputMode} maxLength={props.maxLength} className={`input ${errors[k] ? "!border-red-500" : ""}`} placeholder={props.placeholder} />
      )}
      {errors[k] && <p className="mt-1 text-xs text-red-600">{errors[k]}</p>}
    </div>
  );

  return (
    <section className="section">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">Checkout</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <form onSubmit={submit} noValidate className="space-y-4 rounded-3xl bg-white p-6 shadow-soft lg:col-span-3">
          <h2 className="text-xl font-semibold text-primary">Delivery Details</h2>
          {field("name", "Full Name *", { placeholder: "Your name" })}
          {field("mobile", "Mobile Number *", { placeholder: "10-digit mobile number", inputMode: "numeric", maxLength: 14 })}
          {field("address", "Delivery Address *", { area: true, placeholder: "House / street / landmark" })}
          <div className="grid gap-4 sm:grid-cols-2">
            {field("city", "City *", { placeholder: "City" })}
            {field("pin", "PIN Code *", { placeholder: "6-digit PIN", inputMode: "numeric", maxLength: 6 })}
          </div>
          {field("notes", "Order Notes (optional)", { area: true, placeholder: "Any special instructions" })}
          <button type="submit" className="btn-whatsapp w-full !py-4 text-base">
            <FaWhatsapp size={20} /> Place Order on WhatsApp
          </button>
          <button type="button" className="w-full text-sm text-ink/60 underline" onClick={() => navigate("/cart")}>← Back to cart</button>
        </form>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-soft lg:col-span-2 lg:sticky lg:top-24">
          <h2 className="text-xl font-semibold text-primary">Order Summary</h2>
          <ul className="mt-4 divide-y divide-primary/10 text-sm">
            {items.map((i) => (
              <li key={i.key} className="flex justify-between gap-3 py-3">
                <span>{i.name} <span className="text-ink/60">({i.weight}) × {i.qty}</span></span>
                <span className="font-medium">{formatINR(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex justify-between border-t border-primary/10 pt-4 text-lg font-bold text-primary">
            <span>Total</span><span>{formatINR(total)}</span>
          </div>
          <p className="mt-3 text-xs text-ink/60">Delivery charges and payment details will be confirmed with you on WhatsApp.</p>
        </aside>
      </div>
    </section>
  );
}
