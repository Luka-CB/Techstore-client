import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addCartItemsInfo,
  clearCart,
} from "../../redux/features/cart/cartSlice";
import { setOriginRoute } from "../../redux/features/order/orderSlice";
import { setRoute } from "../../redux/features/savedRouteSlice";
import {
  toggleAuthModal,
  toggleIsModalOpen,
} from "../../redux/features/statesSlice";

const CartPanel = () => {
  const { cartItems, cartItemCount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const priceSum = cartItems.reduce(
    (acc, curr) => acc + curr.inCartQty * curr.price,
    0
  );

  const tax = (8 / 100) * priceSum;

  const totalPrice = priceSum + tax;

  const clearCartHandler = () => dispatch(clearCart());

  const handleOrderNowClick = (e) => {
    if (!user.id) {
      e.stopPropagation();
      dispatch(toggleAuthModal(true));
      dispatch(toggleIsModalOpen(true));
      dispatch(setRoute("/shipping"));
    } else {
      navigate("/shipping");
      dispatch(
        addCartItemsInfo({
          totalItems: cartItemCount,
          tax,
          totalPrice,
        })
      );
      dispatch(setOriginRoute("/cart"));
    }
  };

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
        <button
          id="order"
          disabled={cartItemCount === 0}
          onClick={handleOrderNowClick}
        >
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
