import { useState } from "react";
import Header from "./components/Header";
import Seitenfooter from "./components/Seitenfooter";

function ShoppingListApp() {
  const [inputValue, setInputValue] = useState("");
  const [buttonColor, setButtonColor] = useState("bg-gray-200");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.trim() !== "") {
      setButtonColor("bg-yellow-400");
    } else {
      setButtonColor("bg-gray-200");
    }
  };
  const handleAddIngredient = () => {
    console.log("Zutat hinzufügen: ", inputValue);
  };

  return (
    <div className="grid gap-2">
      <Header />
      <div className="text-center">
        <h1 className="text 2xl: font-bold mb-4">Meine Einkaufsliste</h1>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Zutaten eintippen"
            name="add-zutat"
            id="add-zutat"
            className="border rounded p-3 w-40"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className={`p-3 rounded shadow cursor-pointer ${buttonColor} bg-gray-800  p-4 mt-4`}
            onClick={handleAddIngredient}
            disabled={inputValue.trim() === ""}
            style={{ backgroundColor: buttonColor }}
          >
            Hinzufügen
          </button>
        </div>
      </div>
      <Seitenfooter />
    </div>
  );
}

export default ShoppingListApp;
