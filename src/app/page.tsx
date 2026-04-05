import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Strip from "./components/Strip";
import Amenities from "./components/Amenities";
import Confidence from "./components/Confidence";


export default function Home() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <Hero />
      <Strip />
      <About />
      <Amenities />
      <Plans />
      <Confidence />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}