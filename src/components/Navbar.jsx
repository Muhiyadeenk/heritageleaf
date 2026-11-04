import { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";
import { goSection, navigate } from "../utils/nav";

const links = [
  { label: "Home", id: "top" },
  { label: "Shop", id: "shop" },
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const go = (id) => {
    setOpen(false);
    goSection(id);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? "bg-cream/95 shadow-soft backdrop-blur" : "bg-cream"}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className="text-sm font-medium text-ink transition hover:text-primary">
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/cart")}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-primary text-white transition hover:bg-primary-dark"
            aria-label={`Cart, ${count} items`}
          >
            <FiShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-primary-dark">
                {count}
              </span>
            )}
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-full text-primary md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-primary/10 bg-cream px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className="w-full py-3 text-left text-base font-medium text-ink">
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
