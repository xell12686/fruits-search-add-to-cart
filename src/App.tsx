import { useEffect, useState } from "react";
import "./App.scss";
import TypeAhead from "./components/TypeAhead";
import Cart from "./components/Cart";
import { Fruit } from "./types";
import { fetchFruits } from "./api";

function App() {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFruits();
      setFruits(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <TypeAhead fruits={fruits} />
      <Cart />
    </div>
  );
}

export default App;