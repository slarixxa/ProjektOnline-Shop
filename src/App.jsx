import { useState } from "react";
import Header from "./components/Header";
import Produkte from "./components/Produkte";
import Seitenfooter from "./components/Seitenfooter";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleCartClick = () => {
    console.log(
      "Enthaltene Produkte",
      cartItems.map((item) => item.produktname)
    );
  };
  const addToCart = (produkt) => {
    console.log("Produkt wurde zum Warenkorb hinzugefügt:", produkt);
    setCartItems([...cartItems, produkt]);
    //addToCart(produkt);
  };
  return (
    <div className="grid gap-10">
      <Header onCartClick={handleCartClick} />
      <Produkte addToCart={addToCart} />
      <Seitenfooter />
    </div>
  );
}

export default App;
