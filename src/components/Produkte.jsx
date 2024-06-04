import ProduktKachel from "./ProduktKachel";
import produktejson from "../mocks/produkte.json";
import PropTypes from "prop-types";

const Produkte = ({ addToCart }) => {
  const handleAddToCart = (produkt) => {
    console.log("Produkt wurde zum Warenkorb hinzugefügt:", produkt);
    addToCart(produkt);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {produktejson.map((produkt, index) => (
        <ProduktKachel
          key={index}
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
