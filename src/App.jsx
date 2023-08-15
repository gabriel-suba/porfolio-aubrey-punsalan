import "./styles/Global.css";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
