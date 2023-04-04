import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillCreditCard,
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
import { MdLaunch } from "react-icons/md";
import { deleteOrder, getOrders } from "../redux/actions/orderActions";
import { Spinner } from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import {
  resetDeleteModal,
  setDelData,
  toggleDeleteModal,
} from "../redux/features/deleteModalSlice";
import { toggleIsModalOpen } from "../redux/features/statesSlice";
import {
  msgModalStateHandler,
  resetMsgModal,
} from "../redux/features/msgModalSlice";
import { resetDeleteOrder } from "../redux/features/order/deleteOrderSlice";
import Head from "../components/Head";

const MyOrders = () => {
  const { isDeleteModalOpen, delData } = useSelector(
    (state) => state.deleteModal
  );
  const { isLoading: isGetOrdersLoading, orders } = useSelector(
    (state) => state.getOrders
  );
  const {
    isLoading: isDeleteOrderLoading,
    isSuccess: isDeleteOrderSuccess,
    successMsg: deleteOrderSuccessMsg,
  } = useSelector((state) => state.deleteOrder);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    if (isDeleteOrderSuccess) {
      dispatch(
        msgModalStateHandler({
          state: true,
          msg: deleteOrderSuccessMsg,
          msgType: "success",
        })
      );
      setTimeout(() => {
        dispatch(resetMsgModal());
        dispatch(resetDeleteOrder());
        dispatch(getOrders());
        dispatch(resetDeleteModal());
        dispatch(toggleIsModalOpen(false));
      }, 2000);
    }
  }, [isDeleteOrderSuccess, dispatch]);

  const handleOpenDeleteModal = (e, orderObjId) => {
    e.stopPropagation();
    dispatch(setDelData({ id: orderObjId }));
    dispatch(toggleDeleteModal(true));
    dispatch(toggleIsModalOpen(true));
  };

  return (
    <div className="my-orders-container">
      <Head title={`My Orders | ${orders?.length}`} />
      {isGetOrdersLoading ? (
        <Spinner width={80} height={80} color="#ffa1cf" />
      ) : orders?.length === 0 ? (
        <p id="no-orders">No Orders!</p>
      ) : (
        <div className="card-wrapper">
          {orders?.map((order) => (
            <div className="card" key={order._id}>
              <div className="card-header">
                <div className="card-icon-wrapper">
                  <AiFillCreditCard id="card-icon" />
                </div>
                <span id="card-id">{order._id}</span>
                <div
                  className="detail-icon-wrapper"
                  title="See Full Order"
                  onClick={() => navigate(`/order/${order._id}`)}
                >
                  <MdLaunch id="detail-icon" />
                </div>
              </div>
              <div className="card-body">
                <div className="paid">
                  <h3 id="key">Paid</h3>
                  {order.isPaid ? (
                    <div className="value">
                      <AiFillCheckCircle id="check-icon" />
                      <span>-</span>
                      <p id="date">{order.payDate} ago</p>
                    </div>
                  ) : (
                    <p id="value">
                      <AiFillCloseCircle id="close-icon" />
                    </p>
                  )}
                </div>
                <div className="delivered">
                  <h3 id="key">Delivered</h3>
                  {!order.isDelivered ? (
                    <div className="value">
                      <AiFillCheckCircle id="check-icon" />
                      <span>-</span>
                      <p id="date">{order.deliverDate} about 22 hours ago</p>
                    </div>
                  ) : (
                    <p id="value">
                      <AiFillCloseCircle id="close-icon" />
                    </p>
                  )}
                </div>
              </div>
              <div className="card-footer">
                <span id="created">{order.createdAt} agos</span>
                <div
                  className="delete-card"
                  title="Delete Order"
                  onClick={(e) => handleOpenDeleteModal(e, order._id)}
                >
                  <AiFillDelete id="delete-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isDeleteModalOpen ? (
        <DeleteModal
          text={"Are you sure?"}
          action={() => dispatch(deleteOrder(delData.id))}
          isLoading={isDeleteOrderLoading}
        />
      ) : null}
    </div>
  );
};

export default MyOrders;
