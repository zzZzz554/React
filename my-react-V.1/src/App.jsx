import "./App.css";
import Navbar from "./view/Navbar";
import Hero from "./view/Hero";
import Footer from "./view/Footer";
import Features from "./view/Features";
import Testimonials from "./view/Testimonials";
import Pricing from "./view/Pricing";
import FAQ from "./view/FAQ";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
