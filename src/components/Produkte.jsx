import ProduktKachel from "./ProduktKachel";
const Produkte = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <ProduktKachel
        produktname="Artikel 1"
        produktBild="/Artikel-1.jpg"
        produktbeschreibung="Text hier"
      />
      <ProduktKachel
        produktname="Artikel 2"
        produktBild="/Artikel-1.jpg"
        produktbeschreibung="Text hier"
      />
      <ProduktKachel
        produktname="Artikel 3"
        produktBild="/Artikel-1.jpg"
        produktbeschreibung="Text hier"
      />
      <ProduktKachel
        produktname="Artikel 4"
        produktBild="/Artikel-1.jpg"
        produktbeschreibung="Text hier"
      />
      <ProduktKachel
        produktname="Artikel 4"
        produktBild="/Artikel-1.jpg"
        produktbeschreibung="Text hier"
      />
      <ProduktKachel
        produktname="Artikel 4"
        produktBild="/Artikel-1.jpg"
        produktbeschreibung="Text hier"
      />
    </div>
  );
};
export default Produkte;
