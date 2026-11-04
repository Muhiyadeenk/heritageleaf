import { FiAward, FiPackage, FiCoffee, FiTruck, FiStar } from "react-icons/fi";
import { GiTeapotLeaves } from "react-icons/gi";
import SmartImage from "./SmartImage";

const ABOUT_IMG = "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=900&q=70";

export function About() {
  const points = [
    ["Quality tea leaves", "Hand-picked from trusted estates and carefully graded."],
    ["Freshness", "Packed in small batches to lock in aroma."],
    ["Authentic taste", "Blends perfected over generations."],
    ["Customer satisfaction", "Every pack backed by our promise of quality."],
  ];
  return (
    <section id="about" className="bg-white">
      <div className="section grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <SmartImage src={ABOUT_IMG} alt="Tea leaves being picked" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-primary px-6 py-4 text-white shadow-soft sm:right-6">
            <p className="font-serif text-3xl font-bold text-gold">Generations</p>
            <p className="text-xs text-white/80">of tea-making tradition</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Rooted in tradition, brewed for today</h2>
          <p className="mt-5 leading-relaxed text-ink/75">
            Our journey began in the tea-growing hills, where picking, withering and rolling are an art passed from one generation to the next. We bring that same
            traditional tea-making culture to your kitchen — choosing only quality leaves, packing them fresh, and keeping the taste authentic in every cup.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/30 text-primary"><GiTeapotLeaves /></span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-primary">{t}</h3>
                  <p className="text-sm text-ink/70">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const cards = [
    [FiAward, "Premium Quality", "Only the finest graded leaves make it into our packs."],
    [FiPackage, "Freshly Packed", "Sealed in small batches to keep aroma and flavour intact."],
    [FiCoffee, "Authentic Taste", "Traditional blends that taste like real, everyday chai."],
    [FiTruck, "Fast Delivery", "Quick dispatch so your tea reaches you fresh."],
  ];
  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Why Choose Us</p>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">The difference is in every cup</h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([Icon, t, d]) => (
          <div key={t} className="rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-soft transition hover:-translate-y-1">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-gold"><Icon size={24} /></span>
            <h3 className="mt-5 text-lg font-semibold text-primary">{t}</h3>
            <p className="mt-2 text-sm text-ink/70">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    ["Anitha R.", "Kochi", "The Masala Tea tastes just like the chai I grew up with. Packing was fresh and neat."],
    ["Faisal K.", "Malappuram", "Strong CTC gives a perfect thick cup. We now order the family pack every month."],
    ["Meera S.", "Kozhikode", "Loved the Elaichi Special — the aroma is wonderful. Ordering on WhatsApp was so easy."],
  ];
  return (
    <section className="bg-primary text-white">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-gold">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Loved by tea lovers</h2>
          <p className="mt-2 text-xs text-white/60">Demo placeholder reviews – replace with real customer feedback.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(([n, c, q]) => (
            <figure key={n} className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="flex gap-1 text-gold">{[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" size={16} />)}</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/90">“{q}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold font-semibold text-primary-dark">{n[0]}</span>
                <span className="text-sm"><strong className="block">{n}</strong><span className="text-white/60">{c}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
