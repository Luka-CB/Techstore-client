import { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartModalStateHandler } from "../../redux/features/cart/cartModalSlice";
import { msgModalStateHandler } from "../../redux/features/msgModalSlice";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toggleIsModalOpen } from "../../redux/features/statesSlice";
import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../hooks/windowWidth";

const ProductCard = ({ data, contentType }) => {
  const windowWidth = useWindowWidth();

  const [displayImage, setDisplayImage] = useState(0);
  const [showCartBtn, setShowCartBtn] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mainImage = data.images?.find((img) => img.isMain);
  const filteredImages = data.images?.filter(
    (img) => img.colorName === mainImage.colorName
  );

  const nextImage = (e) => {
    e.stopPropagation();

    const newImage =
      displayImage === filteredImages.length - 1 ? 0 : displayImage + 1;

    setDisplayImage(newImage);
  };

  const previousImage = (e) => {
    e.stopPropagation();

    const newImage =
      displayImage === 0 ? filteredImages.length - 1 : displayImage - 1;

    setDisplayImage(newImage);
  };

  const addToCartHandler = (e) => {
    e.stopPropagation();

    const itemData = {
      id: data._id,
      key: data._id + new Date().getTime(),
      name: data.name,
      year: data.year || "",
      category: contentType === "accessories" ? data.category : "",
      memory:
        contentType === "computers"
          ? `${data.ram} Ram / ${data?.storage?.size} ${data?.storage?.type}`
          : contentType === "cellphones"
          ? `${data.memory?.internal} / ${data.memory?.ram} Ram`
          : "",
      attr:
        contentType === "tvs"
          ? { ...data.sizes[0], type: "size" }
          : { ...data.colors[0], type: "color" },
      images: data.images,
      inStockQty: data.totalQuantity,
      inCartQty: 1,
      price: contentType === "tvs" ? data.sizes[0].price : data.price,
      contentType,
    };

    const isItemInCart = cartItems.some(
      (cartItem) =>
        cartItem.id === itemData.id && cartItem.attr._id === itemData.attr._id
    );

    if (
      (contentType === "tvs" && data.sizes.length > 1) ||
      (contentType !== "tvs" && data.colors.length > 1)
    ) {
      dispatch(
        cartModalStateHandler({ state: true, item: { ...data, contentType } })
      );
      dispatch(toggleIsModalOpen(true));
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

  useEffect(() => {
    if (windowWidth < 1000) {
      setShowCartBtn(true);
    } else {
      setShowCartBtn(false);
    }
  }, [windowWidth]);

  return (
    <div
      onMouseEnter={() => data.totalQty !== 0 && setShowCartBtn(true)}
      onMouseLeave={() => windowWidth > 1000 && setShowCartBtn(false)}
      onClick={() =>
        data.totalQty !== 0 && navigate(`/${contentType}/details/${data._id}`)
      }
      className={
        data.totalQty === 0 && contentType === "cellphones"
          ? "product-card-cell-disabled"
          : data.totalQty === 0
          ? "product-card-disabled"
          : contentType === "cellphones"
          ? "product-card-cell"
          : "product-card"
      }
    >
      <div
        className={
          contentType === "accessories"
            ? "accessory-prod-card-image"
            : "prod-card-image"
        }
      >
        <img
          src={filteredImages[displayImage].imageUrl}
          alt={data.name}
          id="img"
        />
        {data?.images?.length > 1 && data.totalQty !== 0 && (
          <div className="change-image-arrows">
            <div className="left-arrow" onClick={previousImage}>
              <FaChevronCircleLeft id="chevron-icon" />
            </div>
            <div className="right-arrow" onClick={nextImage}>
              <FaChevronCircleRight id="chevron-icon" />
            </div>
          </div>
        )}
        {data.totalQty === 0 && <h1 id="not-in-stock">not in stock</h1>}
      </div>
      <div className="prod-card-body">
        <div className="card-body-details">
          <h2 id="name">{data.name}</h2>
          <h3 id="year">
            {contentType === "computers"
              ? data.type
              : contentType === "accessories"
              ? data.category
              : data.year}
          </h3>
          {contentType !== "tvs" && <h4 id="price">${data.price}</h4>}
          {contentType === "tvs" && (
            <p id="specs">
              {data.type} / {data.resolution}
            </p>
          )}

          {contentType === "computers" && (
            <p id="specs">
              {data.screen} / {data.storage?.size} {data.storage?.type} /{" "}
              {data.ram} Ram
            </p>
          )}

          {contentType === "cellphones" && (
            <p id="specs">
              {data.display?.size} / {data.display?.type} /{" "}
              {data.memory?.internal} / {data.memory?.ram} Ram
            </p>
          )}
        </div>

        {showCartBtn && data.totalQty !== 0 ? (
          <div
            className="cart-btn"
            title="Add to cart"
            onClick={addToCartHandler}
          >
            <BsCart3 id="cart-icon" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
