import OrderInfo from "../components/order/OrderInfo";
import Payment from "../components/order/Payment";
import { TiCancelOutline, TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPickedProduct,
  clearShippingData,
} from "../redux/features/order/orderSlice";
import Head from "../components/Head";

const Checkout = () => {
  const { originRoute, pickedProduct } = useSelector((state) => state.order);
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(clearShippingData());
    navigate(originRoute);
    dispatch(clearPickedProduct());
  };

  return (
    <div className="checkout-container">
      <Head title="Checkout" />
      <div className="col1">
        <OrderInfo
          data={originRoute === "/cart" ? cartItems : pickedProduct}
          originRoute={originRoute}
        />

        <div className="btns">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <TiArrowBackOutline id="back-icon" />
            <span>Go Back</span>
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            <TiCancelOutline id="cancel-icon" />
            <span>Cancel</span>
          </button>
        </div>
      </div>
      <div id="divider"></div>
      <div className="col2">
        <Payment />
      </div>
    </div>
  );
};

export default Checkout;
