import { createContext, useContext, useState } from 'react';
import { Fruit } from '../types';

interface CartItem extends Fruit {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Fruit) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  updateItemQuantity: () => {},
});

const CartProvider = (props: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Fruit) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    const existingItem = cartItems.find((i) => i.id === id);
    if (existingItem) {
      if (quantity <= 0) {
        setCartItems((prevItems) =>
          prevItems.filter((i) => i.id !== id)
        );
      } else {
        setCartItems((prevItems) =>
          prevItems.map((i) =>
            i.id === id ? { ...i, quantity } : i
          )
        );
      }
    }
  };

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    updateItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
