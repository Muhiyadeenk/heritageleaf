import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Logo from "./Logo";
import { BRAND } from "../config";
import { goSection } from "../utils/nav";
import { generalChatUrl } from "../utils/whatsapp";

export default function Footer() {
  const socials = [
    [FaFacebookF, "Facebook"],
    [FaInstagram, "Instagram"],
    [FaYoutube, "YouTube"],
  ];
  return (
    <footer id="contact" className="bg-primary-dark text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Premium tea powders, freshly packed and delivered with care. Authentic taste, rooted in tradition.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(([Icon, label]) => (
              <a key={label} href="#" onClick={(e) => e.preventDefault()} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-primary-dark">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[["Home", "top"], ["Shop", "shop"], ["About Us", "about"]].map(([l, id]) => (
              <li key={id}><button onClick={() => goSection(id)} className="hover:text-gold">{l}</button></li>
            ))}
            <li><a href="#/cart" className="hover:text-gold">Cart</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><FiPhone className="mt-0.5 shrink-0" /> {BRAND.phone}</li>
            <li className="flex gap-2"><FiMail className="mt-0.5 shrink-0" /> {BRAND.email}</li>
            <li className="flex gap-2"><FiMapPin className="mt-0.5 shrink-0" /> {BRAND.address}</li>
          </ul>
          <a href={generalChatUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-5">
            <FaWhatsapp size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
