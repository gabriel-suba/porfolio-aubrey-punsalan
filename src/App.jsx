import "./styles/Global.css";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <Gallery />
      </main>
    </>
  );
}

export default App;
