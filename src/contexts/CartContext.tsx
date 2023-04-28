import { createContext, useContext, useState } from 'react';
import { Fruit } from '../types';

interface CartContextType {
  cartItems: Fruit[];
  addToCart: (item: Fruit) => void;
  removeFromCart: (item: Fruit) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Fruit[]>([]);

  const addToCart = (item: Fruit) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item: Fruit) => {
    setCartItems((prevItems) =>
      prevItems.filter((i) => i.id !== item.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
