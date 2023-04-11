import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../../redux/actions/reviewActions";
import { resetAddReview } from "../../../redux/features/reviews/addReviewSlice";
import { addNewReview } from "../../../redux/features/reviews/getReviewsSlice";
import { toggleAuthModal } from "../../../redux/features/statesSlice";
import Dots from "../../Dots";

const ReviewForm = ({ productId }) => {
  const [post, setPost] = useState("");

  const { isLoading, isSuccess, addedReview } = useSelector(
    (state) => state.addReview
  );
  const { user } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(addNewReview(addedReview));
      setTimeout(() => {
        dispatch(resetAddReview());
        setPost("");
      }, 2000);
    }
  }, [isSuccess, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user?.id) {
      dispatch(toggleAuthModal(true));
      return;
    }

    if (post) {
      dispatch(
        addReview({
          productId,
          post,
        })
      );
    }
  };

  return (
    <div className="review-form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          cols="60"
          rows="7"
          placeholder="Enter your review here"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          required
        ></textarea>
        <button type="submit" id="post-btn" disabled={isLoading}>
          {isLoading ? <Dots /> : "Post Review"}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
