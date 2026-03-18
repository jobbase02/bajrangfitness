import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CTA from "./components/CTA";


export default function Home() {
  return (
    <main className="bg-[#050505]">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}