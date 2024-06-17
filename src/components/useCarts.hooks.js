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

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const removeFromCart = (productName) => {
    const updatedCart = cartItems.filter(
      (item) => item.produktname !== productName
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Synchronisieren des globalen Warenkorbs bei Änderungen an cartItems
  useEffect(() => {
    updateLocalStorage(cartItems);
  }, [cartItems]);

  return [cartItems, addToCart, removeFromCart];
};
