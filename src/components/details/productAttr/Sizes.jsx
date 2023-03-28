import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlScreenDesktop } from "react-icons/sl";
import { setPickedAttr } from "../../../redux/features/detailsSlice";

const Sizes = ({ sizes }) => {
  const { pickedAttr } = useSelector((state) => state.details);

  const dispatch = useDispatch();

  const handlePickSize = (size) => {
    if (size.qty > 0) {
      dispatch(setPickedAttr(size));
    }
  };

  return (
    <div className="sizes">
      <div className="size-wrapper">
        {sizes?.map((size) => (
          <div
            title={size.qty === 0 ? "Not in Stock!" : undefined}
            className={
              size?._id === pickedAttr?._id
                ? "size-active"
                : size.qty === 0
                ? "size-disabled"
                : "size"
            }
            key={size._id}
            onClick={() => handlePickSize(size)}
          >
            <SlScreenDesktop id="screen-icon" />
            <div id="display-size">
              <span>{size.size}"</span>
            </div>
            <div id="size-price">
              <span>${size.price}</span>
            </div>
            <div className="screen-bg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
