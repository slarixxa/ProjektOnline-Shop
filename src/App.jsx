import Header from "./components/Header";
import Produkte from "./components/Produkte";
import Seitenfooter from "./components/Seitenfooter";

function App() {
  const addToCart = (produkt) => {
    console.log("Produkt wurde zum Warenkorb hinzugefügt:", produkt);
    //addToCart(produkt);
  };
  return (
    <div className="grid gap-10">
      <Header />
      <Produkte addToCart={addToCart} />
      <Seitenfooter />
    </div>
  );
}

export default App;
