import "./styles/Global.css";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <Gallery />
        <Contact />
      </main>
    </>
  );
}

export default App;
