import { FaWhatsapp } from "react-icons/fa";
import SmartImage from "./SmartImage";
import { goSection } from "../utils/nav";
import { generalChatUrl } from "../utils/whatsapp";

const HERO_IMG = "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=1800&q=70";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark">
      <SmartImage src={HERO_IMG} alt="Tea plantation at sunrise" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark/95 via-primary-dark/75 to-primary-dark/30" />
      <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="eyebrow animate-fade-up !text-gold">Est. with tradition · Packed with care</p>
        <h1 className="animate-fade-up delay-1 mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Experience the Authentic Taste of Tea
        </h1>
        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Garden-fresh leaves, carefully graded and freshly packed. Rooted in tradition, crafted for the perfect cup — delivered to your doorstep.
        </p>
        <div className="animate-fade-up delay-2 mt-10 flex flex-wrap gap-4">
          <button className="btn-gold" onClick={() => goSection("shop")}>Shop Now</button>
          <a className="btn-whatsapp" href={generalChatUrl()} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={18} /> WhatsApp Us
          </a>
        </div>
        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 text-white">
          {[["8+", "Signature blends"], ["100%", "Freshly packed"], ["5★", "Customer love"]].map(([a, b]) => (
            <div key={b}>
              <dt className="font-serif text-2xl font-bold text-gold">{a}</dt>
              <dd className="text-xs text-white/75">{b}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
