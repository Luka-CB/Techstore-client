import { useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { FaSave } from "react-icons/fa";
import {
  msgModalStateHandler,
  resetMsgModal,
} from "../../redux/features/msgModalSlice";
import { resetSaveOrder } from "../../redux/features/order/saveOrderSlice";
import { saveOrder } from "../../redux/actions/orderActions";
import Dots from "../Dots";
import { useNavigate } from "react-router-dom";
import { updateIncome } from "../../redux/actions/incomeActions";

const Payment = () => {
  const { cartItems, cartItemsInfo } = useSelector((state) => state.cart);
  const { pickedProduct, shippingData, originRoute } = useSelector(
    (state) => state.order
  );
  const { isLoading, isSuccess, successMsg, returnedOrderIds } = useSelector(
    (state) => state.saveOrder
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
        navigate(`/order/${returnedOrderIds.orderObjId}`);
        dispatch(resetSaveOrder());
      }, 2000);
    }
  }, [isSuccess, dispatch]);

  let items;
  let item;

  if (cartItems) {
    items = cartItems?.map((item) => {
      return {
        itemId: item.id,
        name: item.name,
        itemType: item.contentType,
        qty: item.inCartQty,
        price: item.price,
        color: {
          name: item.contentType !== "tvs" ? item.attr.name : "",
          code: item.contentType !== "tvs" ? item.attr.code : "",
        },
        size: item.contentType === "tvs" ? item.attr.size : null,
        imageUrl: item.images[0].imageUrl,
      };
    });
  }

  if (pickedProduct.id) {
    item = {
      itemId: pickedProduct.id,
      name: pickedProduct.name,
      itemType: pickedProduct.contentType,
      qty: pickedProduct.pickedQty,
      price: pickedProduct.price,
      color: {
        name:
          pickedProduct.contentType !== "tvs" ? pickedProduct.attr?.name : "",
        code:
          pickedProduct.contentType !== "tvs" ? pickedProduct.attr?.code : "",
      },
      size:
        pickedProduct.contentType === "tvs" ? pickedProduct.attr?.size : null,
      imageUrl: pickedProduct.images[0].imageUrl,
    };
  }

  const handleSaveOrder = () => {
    dispatch(
      saveOrder({
        items: originRoute === "/cart" ? items : [item],
        shippingData,
        totalItems: cartItemsInfo.totalItems,
        tax: cartItemsInfo.tax,
        totalPrice: cartItemsInfo.totalPrice,
      })
    );
  };

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: { value: cartItemsInfo.totalPrice?.toFixed(2) },
        },
      ],
    });
  };

  const handleOnApprove = async (data, actions) => {
    const details = await actions.order.capture();

    if (details.status === "COMPLETED") {
      dispatch(
        saveOrder({
          items: originRoute === "/cart" ? items : [item],
          shippingData,
          totalItems: cartItemsInfo.totalItems,
          tax: cartItemsInfo.tax,
          totalPrice: cartItemsInfo.totalPrice,
          isPaid: true,
          payDate: details.create_time,
        })
      );
      dispatch(updateIncome(cartItemsInfo.totalPrice));
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
            <p className="value">{cartItemsInfo.totalItems}</p>
            <p className="value">${cartItemsInfo.tax.toFixed(2)}</p>
            <p className="value">${cartItemsInfo.totalPrice.toFixed(2)}</p>
          </div>
        </div>

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
      </div>

      <div className="action-btns">
        <button id="save-btn" onClick={handleSaveOrder} disabled={isLoading}>
          {isLoading ? (
            <Dots />
          ) : (
            <>
              <FaSave id="save-icon" />
              <span>Save to Pay Later</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Payment;
