
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
