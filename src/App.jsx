import Header from "./components/Header";
import ProduktKachel from "./components/ProduktKachel";

function App() {
  return (
    <>
      <Header />
      <ProduktKachel produktname="Artikel 1" produktBild="/Artikel-1.jpg" />
      <ProduktKachel produktname="Artikel 2" produktBild="/Artikel-1.jpg" />
      <ProduktKachel produktname="Artikel 3" produktBild="/Artikel-1.jpg" />
      <ProduktKachel produktname="Artikel 4" produktBild="/Artikel-1.jpg" />
    </>
  );
}

export default App;
