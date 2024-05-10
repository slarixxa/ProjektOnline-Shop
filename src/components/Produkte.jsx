import ProduktKachel from "./ProduktKachel";
import produktejson from "../mocks/produkte.json";
import PropTypes from "prop-types";

const Produkte = ({ addToCart }) => {
  const handleAddToCart = (produkt) => {
    // Implementiere die Logik zum Hinzufügen des Produkts zum Warenkorb hier
    console.log("Produkt wurde zum Warenkorb hinzugefügt:", produkt);
    addToCart(produkt);
  };
  return (
    <div className="grid grid-cols-3 gap-2">
      {produktejson.map((produkt, index) => (
        <ProduktKachel
          // produktname={produkt.produktname}
          //  produktBild={produkt.produktBild}
          //  produktbeschreibung={produkt.produktbeschreibung}
          // key={produkt.produktname}
          key={index}
          //produktInfo={{ ...produkt, onAddToCart: addToCart }}
          produktInfo={{ ...produkt }}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
Produkte.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Produkte;
