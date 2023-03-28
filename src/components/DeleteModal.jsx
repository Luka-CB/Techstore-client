import { useDispatch } from "react-redux";
import { resetDeleteModal } from "../redux/features/deleteModalSlice";
import { toggleIsModalOpen } from "../redux/features/statesSlice";
import Dots from "./Dots";

const DeleteModal = ({ text, action, isLoading }) => {
  const dispatch = useDispatch();

  const handleCloseDeleteModal = () => {
    dispatch(resetDeleteModal());
    dispatch(toggleIsModalOpen(false));
  };

  return (
    <div className="delete-modal-bg" onClick={handleCloseDeleteModal}>
      <div
        className="delete-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <p id="delete-modal-text">{text}</p>
        <div className="btns">
          <button id="yes-btn" onClick={action} disabled={isLoading}>
            {isLoading ? <Dots color="#7dce13" /> : "Yes"}
          </button>
          <button
            id="no-btn"
            onClick={handleCloseDeleteModal}
            disabled={isLoading}
          >
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
