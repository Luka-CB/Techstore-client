import { useDispatch, useSelector } from "react-redux";
import { setPickedAttr } from "../../../redux/features/detailsSlice";

const Colors = ({ colors }) => {
  const { pickedAttr } = useSelector((state) => state.details);

  const dispatch = useDispatch();

  const handlePickColor = (color) => {
    if (color.qty > 0) {
      dispatch(setPickedAttr(color));
    }
  };

  return (
    <div className="colors">
      {colors?.map((color) => (
        <div className="color-wrapper" key={color._id}>
          <div
            title={
              color.qty === 0 ? `${color.name} - Out of Stock!` : color.name
            }
            className={
              color._id === pickedAttr?._id
                ? "color-active"
                : color.qty === 0
                ? "color-disabled"
                : "color"
            }
            style={{
              backgroundColor: color.code,
              boxShadow:
                color._id === pickedAttr?._id && `0 0 5px ${color.code}`,
            }}
            onClick={() => handlePickColor(color)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Colors;
