import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import Accommodations from "../components/Accommodations";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Features />
      <Accommodations />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
