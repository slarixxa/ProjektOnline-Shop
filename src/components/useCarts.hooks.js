// useCarts.hooks.js

import { useState, useEffect } from "react";

// Funktion zur Initialisierung des Warenkorbs aus dem Local Storage
const initializeCartFromStorage = () => {
  const storedCart = localStorage.getItem("globalCart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const useCart = () => {
  const [cartItems, setCartItems] = useState(initializeCartFromStorage());

  // Funktion, um den Warenkorb im Local Storage zu aktualisieren
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("globalCart", JSON.stringify(updatedCart));
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
    updateLocalStorage(updatedCartItems);
  };

  const removeFromCart = (productName) => {
    console.log(cartItems, productName);
    const updatedCart = cartItems.filter(
      (item) => item.produkt.produktname !== productName
    );
    console.log(updatedCart);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Synchronisieren des globalen Warenkorbs bei Änderungen an cartItems
  useEffect(() => {
    updateLocalStorage(cartItems);
  }, [cartItems]);

  return [cartItems, addToCart, removeFromCart];
};
