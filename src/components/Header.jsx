import PropTypes from "prop-types";
import { useState } from "react";
const Header = ({ onCartClick, removeFromCart, cartItems }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartClick = () => {
    setIsCartVisible(!isCartVisible);
    onCartClick();
  };
  return (
    <header className="bg-gray-800 text-yellow-400 p-4">
      <div className="container mx-auto flex">
        <a href="/" className="text-2xl font-bold underline">
          Mein Online-Shop
        </a>
        <a href="/shoppingList" className="ml-auto mr-4">
          Einkausliste
        </a>
        <button className="ml-auto flex items-center" onClick={handleCartClick}>
          Warenkorb ({cartItems.length})
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </button>
        {isCartVisible && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-64 translate-y-6">
            <ul className="divide-y divide-gray-300">
              {cartItems.length === 0 && (
                <li className="p-2 text-gray-700">Der Warenkorb ist leer</li>
              )}
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 flex justify-between items-center text-gray-700"
                >
                  {item.produktname}
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Enfernen
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  onCartClick: PropTypes.func,
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func,
};

Header.defaultProps = {
  onCartClick: () => {},
  removeFromCart: () => {},
};

export default Header;
