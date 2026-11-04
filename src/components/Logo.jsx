import { GiTeapot } from "react-icons/gi";
import { BRAND } from "../config";
import { goSection } from "../utils/nav";

export default function Logo({ light = false }) {
  return (
    <button onClick={() => goSection("top")} className="flex items-center gap-2" aria-label={`${BRAND.name} home`}>
      <span className={`grid h-10 w-10 place-items-center rounded-full ${light ? "bg-gold text-primary-dark" : "bg-primary text-gold"}`}>
        <GiTeapot size={22} />
      </span>
      <span className="text-left leading-tight">
        <span className={`block font-serif text-xl font-bold ${light ? "text-white" : "text-primary"}`}>{BRAND.name}</span>
        <span className={`block text-[10px] uppercase tracking-[0.3em] ${light ? "text-gold" : "text-gold-dark"}`}>Tea Co.</span>
      </span>
    </button>
  );
}
