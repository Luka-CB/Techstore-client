import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/features/cartSlice";

const CartPanel = () => {
  const { cartItems, cartItemCount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const priceSum = cartItems.reduce(
    (acc, curr) => acc + curr.inCartQty * curr.price,
    0
  );

  const tax = (8 / 100) * priceSum;

  const totalPrice = priceSum + tax;

  const clearCartHandler = () => dispatch(clearCart());

  return (
    <div className="cart-panel-container">
      <h2 id="total-items">
        Total Items: <span>{cartItemCount}</span>
      </h2>
      <h2 id="tax">
        Tax 8%: <span>${tax.toFixed(2)}</span>
      </h2>
      <h2 id="total-price">
        Total Price: <span>${totalPrice.toFixed(2)}</span>
      </h2>
      <div className="btns">
        <button id="order" disabled={cartItemCount === 0}>
          Order Now
        </button>
        <button
          id="clear"
          disabled={cartItemCount === 0}
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPanel;
