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
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex(
      (item) => item.produkt.produktname === produkt.produktname
    );

    if (index !== -1) {
      updatedCartItems[index].quantity++;
    } else {
      updatedCartItems.push({ produkt: produkt, quantity: 1 });
    }

    setCartItems(updatedCartItems);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  return (
    <div className="grid gap-10">
      <Header
        onCartClick={handleCartClick}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <Produkte addToCart={addToCart} />

      <Seitenfooter />
    </div>
  );
}

export default App;
