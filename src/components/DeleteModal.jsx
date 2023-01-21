import { useDispatch } from "react-redux";
import { toggleDeleteModal } from "../redux/features/statesSlice";

const DeleteModal = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="delete-modal-bg"
      onClick={() => dispatch(toggleDeleteModal(false))}
    >
      <div
        className="delete-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <p id="delete-modal-text">{text}</p>
        <div className="btns">
          <button id="yes-btn">yes</button>
          <button
            id="no-btn"
            onClick={() => dispatch(toggleDeleteModal(false))}
          >
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
