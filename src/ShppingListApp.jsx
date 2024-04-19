import Header from "./components/Header";
import Seitenfooter from "./components/Seitenfooter";

function ShoppingListApp() {
  return (
    <div className="grid gap-2">
      <Header />
      <h1>Meine Einkaufsliste</h1>
      <Seitenfooter />
    </div>
  );
}

export default ShoppingListApp;
