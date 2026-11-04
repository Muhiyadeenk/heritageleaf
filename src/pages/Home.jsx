import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { About, WhyChoose, Testimonials } from "../components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <WhyChoose />
      <About />
      <Testimonials />
    </>
  );
}
