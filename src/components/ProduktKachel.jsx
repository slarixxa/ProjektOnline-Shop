const ProduktKachel = ({ produktname, produktBild }) => {
  return (
    <article className="">
      <h1>{produktname}</h1>
      <img src={produktBild}></img>
      <button>Submit</button>
    </article>
  );
};
export default ProduktKachel;
