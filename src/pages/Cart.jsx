import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartPanel from "../components/cart/CartPanel";
import Head from "../components/Head";

const Cart = () => {
  const { cartItems, cartItemCount } = useSelector((state) => state.cart);

  return (
    <div className="cart-page-container">
      <Head title={`cart | ${cartItemCount}`} />
      <CartPanel />
      <div className="cartItems">
        {cartItems.length === 0 && <p id="cart-warning">your cart is empty!</p>}
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.key} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
