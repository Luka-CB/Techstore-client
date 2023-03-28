import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../../redux/actions/reviewActions";
import {
  msgModalStateHandler,
  resetMsgModal,
} from "../../../redux/features/msgModalSlice";
import { updateReviewText } from "../../../redux/features/reviews/getReviewsSlice";
import { resetUpdateReview } from "../../../redux/features/reviews/updateReviewSlice";
import {
  resetUpdReviewModal,
  toggleUpdReviewModal,
} from "../../../redux/features/reviews/updReviewModalSlice";
import { toggleIsModalOpen } from "../../../redux/features/statesSlice";
import Dots from "../../Dots";

const UpdateReviewModal = () => {
  const [post, setPost] = useState("");

  const { updReviewData } = useSelector((state) => state.updReviewModal);
  const { isLoading, isSuccess, successMsg, errorMsg } = useSelector(
    (state) => state.updateReview
  );

  const dispatch = useDispatch();

  const handleCloseUpdModal = () => {
    dispatch(toggleUpdReviewModal(false));
    dispatch(toggleIsModalOpen(false));
    dispatch(resetUpdReviewModal());
  };

  useEffect(() => {
    if (updReviewData) {
      setPost(updReviewData.post);
    }
  }, [updReviewData]);

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
        dispatch(
          updateReviewText({
            reviewId: updReviewData.id,
            post,
          })
        );
        dispatch(resetUpdateReview());
        handleCloseUpdModal();
      }, 2500);
    }

    if (errorMsg) {
      dispatch(
        msgModalStateHandler({
          state: true,
          msg: errorMsg,
          msgType: "error",
        })
      );
      setTimeout(() => {
        dispatch(resetMsgModal());
        dispatch(resetUpdateReview());
      }, 2500);
    }
  }, [isSuccess, errorMsg, dispatch]);

  return (
    <div className="upd-review-modal-bg" onClick={handleCloseUpdModal}>
      <div
        className="upd-review-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Update Review</h1>
        <AiOutlineCloseCircle id="close-icon" onClick={handleCloseUpdModal} />
        <form className="upd-review-form">
          <textarea
            cols="65"
            rows="15"
            placeholder="Enter review here"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
          <button
            id="upd-btn"
            disabled={isLoading}
            onClick={() =>
              dispatch(
                updateReview({
                  reviewId: updReviewData.id,
                  post,
                })
              )
            }
          >
            {isLoading ? <Dots /> : <span>Update</span>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReviewModal;
