import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductGrid({ items = products, title = "Our Featured Teas", subtitle = "Choose your weight, add to cart and order on WhatsApp in seconds." }) {
  return (
    <section id="shop" className="section">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Shop</p>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
        <p className="mt-4 text-ink/70">{subtitle}</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
