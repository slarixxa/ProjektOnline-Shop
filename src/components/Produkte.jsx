import ProduktKachel from "./ProduktKachel";
import produktejson from "../mocks/produkte.json";
const Produkte = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {produktejson.map((produkt) => (
        <ProduktKachel
          produktname={produkt.produktname}
          produktBild={produkt.produktBild}
          produktbeschreibung={produkt.produktbeschreibung}
          key={produkt.produktname}
        />
      ))}
    </div>
  );
};
export default Produkte;
