import Header from "./components/Header";
import Produkte from "./components/Produkte";
import Seitenfooter from "./components/Seitenfooter";

function App() {
  return (
    <div className="grid gap-2">
      <Header />
      <Produkte />
      <Seitenfooter />
    </div>
  );
}

export default App;
