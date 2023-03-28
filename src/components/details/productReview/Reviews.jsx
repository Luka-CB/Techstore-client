import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, getReviews } from "../../../redux/actions/reviewActions";
import {
  msgModalStateHandler,
  resetMsgModal,
} from "../../../redux/features/msgModalSlice";
import { resetDeleteReviewReview } from "../../../redux/features/reviews/deleteReviewSlice";
import { removeReview } from "../../../redux/features/reviews/getReviewsSlice";
import {
  setUpdReviewData,
  toggleUpdReviewModal,
} from "../../../redux/features/reviews/updReviewModalSlice";
import { toggleIsModalOpen } from "../../../redux/features/statesSlice";
import {
  resetWarningPopup,
  setWarningPopupIndex,
  toggleWarningPopup,
} from "../../../redux/features/warningPopupSlice";
import WarningPopup from "../../WarningPopup";

const Reviews = ({ productId }) => {
  const [reviewId, setReviewId] = useState("");

  const { reviews } = useSelector((state) => state.reviews);
  const { user } = useSelector((state) => state.user);
  const { isWarningPopupOpen, warningPopupIndex, popupResponse } = useSelector(
    (state) => state.warningPopup
  );
  const { isLoading, isSuccess, successMsg, errorMsg } = useSelector(
    (state) => state.deleteReview
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(getReviews(productId));
    }
  }, [productId, dispatch]);

  const handleShowDelWarning = (e, i, revId) => {
    e.stopPropagation();
    setReviewId(revId);
    dispatch(toggleWarningPopup(true));
    dispatch(setWarningPopupIndex(i));
    dispatch(toggleIsModalOpen(true));
  };

  useEffect(() => {
    if (reviewId && popupResponse) {
      dispatch(deleteReview(reviewId));
    }
  }, [reviewId, popupResponse, dispatch]);

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
        if (reviewId) dispatch(removeReview(reviewId));
        dispatch(resetDeleteReviewReview());
        dispatch(resetWarningPopup());
        dispatch(toggleIsModalOpen(false));
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
      }, 2500);
    }
  }, [isSuccess, errorMsg, dispatch]);

  const handleOpenUpdModal = (e, reviewId, post) => {
    e.stopPropagation();
    dispatch(toggleUpdReviewModal(true));
    dispatch(setUpdReviewData({ id: reviewId, post }));
    dispatch(toggleIsModalOpen(true));
  };

  return (
    <div className="reviews-container">
      <div className="reviews-count">
        <span>
          Reviews: <b>{reviews.length}</b>
        </span>
      </div>
      {reviews.length === 0 && <p id="no-reviews">No Reviews!</p>}
      {reviews?.map((review, i) => (
        <div className="review" key={review._id}>
          <div className="reviewer-info">
            <div className="avatar">
              <span>{review.author?.username?.charAt(0).toUpperCase()}</span>
            </div>
            <p id="author">{review.author?.username}</p>
            <h5 id="post-date">{review.createdAt}</h5>
            {user?.id === review.author?._id ? (
              <div className="icons">
                <div
                  className="edit-icon"
                  title="Edit Post"
                  onClick={(e) =>
                    handleOpenUpdModal(e, review._id, review.post)
                  }
                >
                  <AiOutlineEdit />
                </div>
                <div
                  className="del-icon"
                  title="Delete Post"
                  onClick={(e) => handleShowDelWarning(e, i, review._id)}
                >
                  <AiOutlineDelete />
                </div>

                {isWarningPopupOpen && warningPopupIndex === i ? (
                  <WarningPopup isLoading={isLoading} />
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="divider"></div>
          <div className="post">{review.post}</div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
