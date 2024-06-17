import Header from "./components/Header";
import Produkte from "./components/Produkte";
import Seitenfooter from "./components/Seitenfooter";
import { useCart } from "./components/useCarts.hooks";

function App() {
  const [cartItems, addToCart, removeFromCart] = useCart();
  const handleCartClick = () => {
    console.log(
      "Enthaltene Produkte",
      cartItems.map((item) => item.produktname)
    );
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
