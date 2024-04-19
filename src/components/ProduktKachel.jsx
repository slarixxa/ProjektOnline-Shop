const ProduktKachel = ({ produktname, produktBild, produktbeschreibung }) => {
  return (
    <article className="border-black border">
      <h1>{produktname}</h1>
      <img src={produktBild}></img>
      <p>{produktbeschreibung}</p>
      <button className="border rounded-md bg-orange-600">Einfügen</button>
    </article>
  );
};
export default ProduktKachel;
