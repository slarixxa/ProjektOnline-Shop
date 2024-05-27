import PropTypes from "prop-types";

const ProduktKachel = ({ produktInfo, onAddToCart }) => {
  const { produktname, produktBild, produktbeschreibung } = produktInfo;

  const handleAddToCart = () => {
    onAddToCart(produktInfo);
    console.log("Add to cart clicked:", produktInfo);
  };

  //const ProduktKachel = ({ produktname, produktBild, produktbeschreibung }) => {
  return (
    <article className="border-black border">
      <h1>{produktname}</h1>
      <img src={produktBild}></img>
      <p>{produktbeschreibung}</p>
      <button
        className="border rounded-md bg-orange-500 w-24 py-1 px-2  text-white font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
        onClick={handleAddToCart}
      >
        Einfügen
      </button>
    </article>
  );
};

ProduktKachel.propTypes = {
  produktInfo: PropTypes.shape({
    produktname: PropTypes.string.isRequired,
    produktBild: PropTypes.string.isRequired,
    produktbeschreibung: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
export default ProduktKachel;
