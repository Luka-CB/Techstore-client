import Sizes from "./Sizes";
import { FiCornerRightDown } from "react-icons/fi";
import Colors from "./Colors";

const ProductAttr = ({ attrs, contentType }) => {
  return (
    <div className="attrs-container">
      <div className="title">
        <h2 id="text">
          {contentType === "tvs"
            ? "Choose Screen Size"
            : "Choose Product Color"}
        </h2>
        <FiCornerRightDown id="arrow-icon" />
      </div>

      {contentType === "tvs" ? (
        <Sizes sizes={attrs} />
      ) : (
        <Colors colors={attrs} />
      )}
    </div>
  );
};

export default ProductAttr;
