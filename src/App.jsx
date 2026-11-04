import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { useCart } from "./context/CartContext";
import { currentPath } from "./utils/nav";
import { FiCheck } from "react-icons/fi";

export default function App() {
  const [path, setPath] = useState(currentPath());
  const { toast } = useCart();

  useEffect(() => {
    const on = () => {
      setPath(currentPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);

  let page;
  if (path === "/cart") page = <Cart />;
  else if (path === "/checkout") page = <Checkout />;
  else if (path.startsWith("/product/")) page = <ProductDetails key={path} id={path.split("/")[2]} />;
  else page = <Home />;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{page}</main>
      <Footer />
      {toast && (
        <div role="status" className="animate-toast fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-white shadow-xl">
          <FiCheck className="text-gold" /> {toast}
        </div>
      )}
    </div>
  );
}
