import s from './Cart.module.scss';
import clock from '../../assets/images/clock.png';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className={s.Cart}>
        <div className={s.noProducts}>
          <img src={clock} alt="Clock" />
          <h3>No products have been added.</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={s.CartItems}>
      {cartItems.map((item) => (
        <CartItem key={item.id} id={item.id} quantity={item.quantity} />
      ))}
    </div>
  );
};

export default Cart;
