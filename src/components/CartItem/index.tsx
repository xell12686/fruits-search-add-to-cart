import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import s from './CartItem.module.scss';

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { updateItemQuantity, cartItems } = useContext(CartContext);

  const item = cartItems.find((i) => i.id === id);

  const handleDecrement = () => {
    if (quantity > 1) {
      updateItemQuantity(id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateItemQuantity(id, quantity + 1);
  };

  return (
    <div className={s.CartItem}>
      <div className={s.text}>
        <span>{item?.name}</span>
      </div>
      <div className={s.buttons}>
        <button className={s.decrement} onClick={handleDecrement}>
          &ndash;
        </button>
        <div className={s.quantity}>{quantity}</div>
        <button className={s.increment} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
