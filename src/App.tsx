import { useEffect, useState } from "react";
import "./App.scss";
import TypeAhead from "./components/TypeAhead";
import Cart from "./components/Cart";
import { Fruit } from "./types";
import { fetchFruits } from "./api";
import { CartProvider } from "./contexts/CartContext";

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
      <div className="header"></div>
      <div className="container">
        <h2>Add Products</h2>
        <TypeAhead fruits={fruits} />
        <Cart />
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}
