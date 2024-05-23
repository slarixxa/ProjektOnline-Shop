import { useState } from "react";
import Header from "./components/Header";
import Seitenfooter from "./components/Seitenfooter";

function ShoppingListApp() {
  const [inputValue, setInputValue] = useState("");
  const [buttonColor, setButtonColor] = useState("bg-gray-200");
  const [outstandingItems, setOutstandingItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [cartItems] = useState([]);

  const handleCompleteItem = (index) => {
    const itemToComplete = outstandingItems[index];
    setCompletedItems([...completedItems, itemToComplete]);
    setOutstandingItems(outstandingItems.filter((_, i) => i !== index));
  };

  const handleDeleteCompletedItem = (index) => {
    setCompletedItems(completedItems.filter((_, i) => i !== index));
  };

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

    if (inputValue.trim() !== "") {
      setOutstandingItems([...outstandingItems, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="grid gap-2">
      <Header cartItems={cartItems} />
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
          <section className="grid gap-3">
            <h3 className="text-2xl">Ausstehende Einkaufsliste</h3>
            {!outstandingItems.length && <p>Keine ausstehende Artikel</p>}
            {outstandingItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <p>{item}</p>
                <button onClick={() => handleCompleteItem(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </section>
          <section className="grid gab-3">
            <h3 className="text-2xl">Abgeschlossene Einkausliste</h3>
            {!completedItems.length && <p>Keine abgeschlossene Artikel</p>}
            {completedItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center line-through"
              >
                <p>{item}</p>
                <button onClick={() => handleDeleteCompletedItem(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </section>
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
