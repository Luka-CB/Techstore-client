import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const ProductCard = ({ data, contentType }) => {
  const [displayImage, setDisplayImage] = useState(0);
  const [showCartBtn, setShowCartBtn] = useState(false);

  const nextImage = () => {
    const newImage =
      displayImage === data.images.length - 1 ? 0 : displayImage + 1;

    setDisplayImage(newImage);
  };

  const previousImage = () => {
    const newImage =
      displayImage === 0 ? data.images.length - 1 : displayImage - 1;

    setDisplayImage(newImage);
  };

  return (
    <div
      onMouseEnter={() => setShowCartBtn(true)}
      onMouseLeave={() => setShowCartBtn(false)}
      className={contentType === "cell" ? "product-card-cell" : "product-card"}
    >
      <div className="prod-card-image">
        <img src={data.images[displayImage]} alt={data.name} id="img" />
        <div className="change-image-arrows">
          <div className="left-arrow" onClick={previousImage}>
            <FaChevronCircleLeft id="chevron-icon" />
          </div>
          <div className="right-arrow" onClick={nextImage}>
            <FaChevronCircleRight id="chevron-icon" />
          </div>
        </div>
      </div>
      <div className="prod-card-body" onClick={() => console.log("clicked")}>
        <div className="card-body-details">
          <h2 id="name">{data.name}</h2>
          <h3 id="year">
            {contentType === "computer" ? data.type : data.year}
          </h3>
          {contentType === "tv" && (
            <p id="specs">
              {data.type} / {data.resolution}
            </p>
          )}

          {contentType === "computer" && (
            <p id="specs">
              {data.display} / {data.storage.size} {data.storage.type} /{" "}
              {data.memory} Ram
            </p>
          )}

          {contentType === "cell" && (
            <p id="specs">
              {data.display.size} / {data.display.type} / {data.memory.internal}{" "}
              / {data.memory.ram} Ram
            </p>
          )}
        </div>

        {showCartBtn && (
          <div
            className="cart-btn"
            title="Add to cart"
            onClick={(e) => e.stopPropagation()}
          >
            <BsCart3 id="cart-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
