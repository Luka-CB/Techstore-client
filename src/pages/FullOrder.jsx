import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyOrderInfo from "../components/order/MyOrderInfo";
import MyPayment from "../components/order/MyPayment";
import { Spinner } from "../components/Spinner";
import { getOrder } from "../redux/actions/orderActions";

const FullOrder = () => {
  const { isLoading, order } = useSelector((state) => state.getOrder);

  const dispatch = useDispatch();
  const { orderId } = useParams();

  useEffect(() => {
    if (orderId) {
      dispatch(getOrder(orderId));
    }
  }, [orderId, dispatch]);

  return (
    <div className="full-order-container">
      <div className="order-info-wrapper">
        {isLoading ? (
          <Spinner width={80} height={80} color="#ffa1cf" />
        ) : (
          <MyOrderInfo order={order} />
        )}
      </div>
      <div className="payment-panel">
        <MyPayment
          orderObjId={orderId}
          orderId={order.orderId}
          paymentInfo={{
            isPaid: order.isPaid,
            payDate: order.payDate,
            isDelivered: order.isDelivered,
            deliverDate: order.deliverDate,
          }}
          itemsInfo={{
            totalItems: order.totalItems,
            tax: order.tax,
            totalPrice: order.totalPrice,
          }}
        />
      </div>
    </div>
  );
};

export default FullOrder;
