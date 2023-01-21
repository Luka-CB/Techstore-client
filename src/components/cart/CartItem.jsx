import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCart } from "../../redux/features/cartSlice";

const CartItem = ({ cartItem }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const dispatch = useDispatch();

  const nextImage = () => {
    const newImage =
      currentImage === cartItem.images.length - 1 ? 0 : currentImage + 1;

    setCurrentImage(newImage);
  };

  const previousImage = () => {
    const newImage =
      currentImage === 0 ? cartItem.images.length - 1 : currentImage - 1;

    setCurrentImage(newImage);
  };

  const increaseQty = () => {
    if (cartItem.inCartQty >= cartItem.attr.qty) return;

    dispatch(updateCart({ id: cartItem.attr._id, increase: true }));
  };

  const decreaseQty = () => {
    if (cartItem.inCartQty <= 1) {
      dispatch(removeCartItem(cartItem.attr._id));
      return;
    }

    dispatch(updateCart({ id: cartItem.attr._id, increase: false }));
  };

  return (
    <div className="cartItem">
      <div className="item-info">
        <h2 id="item-name">{cartItem.name}</h2>
        <h3 id="item-year">{cartItem.year}</h3>
        <p id="item-memory">{cartItem.memory}</p>
        <h3 id="item-price">${cartItem.price}</h3>
      </div>
      <div className="item-attr">
        {cartItem.attr.type === "color" ? (
          <div
            title={cartItem.attr.name}
            className="color"
            style={{ backgroundColor: cartItem.attr.code }}
          ></div>
        ) : (
          <div className="size">
            <span>{cartItem.attr.size}</span>
          </div>
        )}
      </div>
      <div className="item-qty" title="Item Quantity">
        <button
          id="increase-qty"
          title={
            cartItem.inCartQty === cartItem.attr.qty
              ? "No More Item in the Stock"
              : "Increase Quantity"
          }
          onClick={increaseQty}
          disabled={cartItem.inCartQty === cartItem.attr.qty}
        >
          +
        </button>
        <span id="value">{cartItem.inCartQty}</span>
        <button
          id="decrease-qty"
          title={
            cartItem.inCartQty === 1
              ? "Click to Remove from Cart"
              : "Decrease Quantity"
          }
          onClick={decreaseQty}
        >
          -
        </button>
      </div>
      <div className="item-image-wrapper">
        <div
          className={
            cartItem.contentType === "cell" ? "item-images-cell" : "item-images"
          }
        >
          <img
            src={cartItem.images[currentImage]}
            alt={cartItem.name}
            id="item-img"
          />
        </div>
        <div className="change-image-handles">
          <div className="left" onClick={previousImage}>
            <FaChevronCircleLeft id="chevron-icon" />
          </div>
          <div className="right" onClick={nextImage}>
            <FaChevronCircleRight id="chevron-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
