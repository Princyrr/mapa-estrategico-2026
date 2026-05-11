import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision2032 from "./components/Vision2032";
import FactorsSection from "./components/FactorsSection";
import ParaibaSection from "./components/ParaibaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white ">
      <Navbar />
      <Hero />
      <Vision2032 />
      <FactorsSection />
      <ParaibaSection />
      <Footer />
    </div>
  );
}
