import s from './Cart.module.scss';
import clock from '../../assets/images/clock.png';

interface CartProps {
  // Add any necessary props here
}

const Cart = (props: CartProps) => {
  return (
    <div className={s.Cart}>
      {/* Your Cart component content */}

      <div className={s.noProducts}>
        <img src={clock} alt="Clock" />
        <h3>No products have been added.</h3>
      </div>
    </div>
  );
};

export default Cart;
