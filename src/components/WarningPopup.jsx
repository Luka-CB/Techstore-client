import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleIsModalOpen } from "../redux/features/statesSlice";
import {
  setPopupResponse,
  toggleWarningPopup,
} from "../redux/features/warningPopupSlice";
import { SpinnerButton } from "./Spinner";

const WarningPopup = ({ isLoading }) => {
  const dispatch = useDispatch();

  return (
    <div className="warning" onClick={(e) => e.stopPropagation()}>
      <p id="warn-text">Are You Sure?</p>
      <div className="warn-icon-btns">
        <button
          className="yes-btn"
          title="Yes"
          onClick={() => dispatch(setPopupResponse(true))}
          disabled={isLoading}
        >
          <AiOutlineCheckCircle id="yes-icon" />
          {isLoading ? <SpinnerButton color={"green"} /> : null}
        </button>
        <button
          className="no-btn"
          title="No"
          onClick={() => {
            dispatch(toggleWarningPopup(false));
            dispatch(toggleIsModalOpen(false));
          }}
          disabled={isLoading}
        >
          <AiOutlineCloseCircle id="no-icon" />
        </button>
      </div>
    </div>
  );
};

export default WarningPopup;
