import { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getOrder, updatePaidState } from "../../redux/actions/orderActions";
import msgModalSlice, {
  msgModalStateHandler,
  resetMsgModal,
} from "../../redux/features/msgModalSlice";
import { resetUpdatePaidState } from "../../redux/features/order/updatePaidStateSlice";

const MyPayment = ({ orderObjId, orderId, paymentInfo, itemsInfo }) => {
  const { isSuccess, successMsg } = useSelector(
    (state) => state.updatePaidState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        msgModalStateHandler({
          state: true,
          msg: successMsg,
          msgType: "success",
        })
      );
      setTimeout(() => {
        dispatch(resetMsgModal());
        dispatch(getOrder(orderObjId));
        dispatch(resetUpdatePaidState());
      }, 2000);
    }
  }, [isSuccess, dispatch]);

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: { value: itemsInfo.totalPrice?.toFixed(2) },
        },
      ],
    });
  };

  const handleOnApprove = async (data, actions) => {
    const details = await actions.order.capture();

    if (details.status === "COMPLETED") {
      dispatch(
        updatePaidState({
          orderId,
          create_time: details.create_time,
        })
      );
    }
  };

  return (
    <div className="payment-container">
      <div className="row1">
        <div className="sum">
          <div className="keys">
            <h3 className="key">Total Items:</h3>
            <h3 className="key">Tax 8%:</h3>
            <h3 className="key">Total Price:</h3>
          </div>
          <div className="values">
            <p className="value">{itemsInfo.totalItems}</p>
            <p className="value">${itemsInfo.tax?.toFixed(2)}</p>
            <p className="value">${itemsInfo.totalPrice?.toFixed(2)}</p>
          </div>
        </div>
        <div className="payment-info">
          <div className="paid">
            <h2 id="key">Paid</h2>
            {paymentInfo.isPaid ? (
              <div className="value">
                <AiFillCheckCircle id="check-icon" />
                <span>-</span>
                <p id="date">{paymentInfo.payDate} ago</p>
              </div>
            ) : (
              <p id="value">
                <AiFillCloseCircle id="close-icon" />
              </p>
            )}
          </div>
          <div className="delivered">
            <h2 id="key">Delivered</h2>
            <p id="value">
              <AiFillCloseCircle id="close-icon" />
            </p>
          </div>
        </div>

        {!paymentInfo.isPaid ? (
          <div className="paypal">
            <PayPalButtons
              style={{
                height: 40,
                label: "pay",
                shape: "pill",
              }}
              createOrder={handleCreateOrder}
              onApprove={handleOnApprove}
            />
          </div>
        ) : null}
      </div>

      <div className="action-btns">
        <div className="btns">
          <button id="exit-btn" onClick={() => navigate("/my-orders")}>
            <BiLogOutCircle id="exit-icon" />
            <span>Exit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPayment;
