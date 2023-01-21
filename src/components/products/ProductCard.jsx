import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartModalStateHandler } from "../../redux/features/cartModalSlice";
import { msgModalStateHandler } from "../../redux/features/msgModalSlice";
import { addToCart } from "../../redux/features/cartSlice";

const ProductCard = ({ data, contentType }) => {
  const [displayImage, setDisplayImage] = useState(0);
  const [showCartBtn, setShowCartBtn] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

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

  const addToCartHandler = (e) => {
    e.stopPropagation();

    const itemData = {
      id: data._id,
      key: data._id + new Date().getTime(),
      name: data.name,
      year: data.year || "",
      memory:
        contentType === "computer"
          ? `${data.memory} Ram / ${data.storage.size} ${data.storage.type}`
          : contentType === "cell"
          ? `${data.memory.internal} / ${data.memory.ram} Ram`
          : "",
      attr:
        contentType === "tv"
          ? { ...data.sizes[0], type: "size" }
          : { ...data.colors[0], type: "color" },
      images: data.images,
      inStockQty: data.totalQuantity,
      inCartQty: 1,
      price: contentType === "tv" ? data.sizes[0].price : data.price,
      contentType,
    };

    const isItemInCart = cartItems.some(
      (cartItem) =>
        cartItem.id === itemData.id && cartItem.attr._id === itemData.attr._id
    );

    if (
      (contentType === "tv" && data.sizes.length > 1) ||
      (contentType !== "tv" && data.colors.length > 1)
    ) {
      dispatch(
        cartModalStateHandler({ state: true, item: { ...data, contentType } })
      );
    } else {
      if (isItemInCart) {
        dispatch(
          msgModalStateHandler({
            state: true,
            msg: `${itemData.name}'s already in cart`,
            msgType: "error",
          })
        );
        setTimeout(() => {
          dispatch(
            msgModalStateHandler({ state: false, msg: "", msgType: "" })
          );
        }, 2000);
      } else {
        dispatch(addToCart(itemData));
        dispatch(
          msgModalStateHandler({
            state: true,
            msg: `${itemData.name}'s added to cart`,
            msgType: "success",
          })
        );
        setTimeout(() => {
          dispatch(
            msgModalStateHandler({ state: false, msg: "", msgType: "" })
          );
        }, 2000);
      }
    }
  };

  return (
    <div
      onMouseEnter={() => data.totalQuantity !== 0 && setShowCartBtn(true)}
      onMouseLeave={() => setShowCartBtn(false)}
      className={
        data.totalQuantity === 0 && contentType === "cell"
          ? "product-card-cell-disabled"
          : data.totalQuantity === 0
          ? "product-card-disabled"
          : contentType === "cell"
          ? "product-card-cell"
          : "product-card"
      }
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
        {data.totalQuantity === 0 && <h1 id="not-in-stock">not in stock</h1>}
      </div>
      <div className="prod-card-body" onClick={() => console.log("clicked")}>
        <div className="card-body-details">
          <h2 id="name">{data.name}</h2>
          <h3 id="year">
            {contentType === "computer" ? data.type : data.year}
          </h3>
          {contentType !== "tv" && <h4 id="price">${data.price}</h4>}
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
            onClick={addToCartHandler}
          >
            <BsCart3 id="cart-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
