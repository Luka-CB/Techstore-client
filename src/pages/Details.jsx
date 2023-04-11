import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import ProductImages from "../components/details/ProductImages";
import ProductInfo from "../components/details/productInfo";
import { getProduct } from "../redux/actions/productActions";
import ProductAttr from "../components/details/productAttr";
import { setPickedAttr } from "../redux/features/detailsSlice";
import ReviewForm from "../components/details/productReview/ReviewForm";
import Reviews from "../components/details/productReview/Reviews";
import UpdateReviewModal from "../components/details/productReview/UpdateReviewModal";
import {
  msgModalStateHandler,
  resetMsgModal,
} from "../redux/features/msgModalSlice";
import { addCartItemsInfo, addToCart } from "../redux/features/cart/cartSlice";
import {
  setOriginRoute,
  setPickedProduct,
} from "../redux/features/order/orderSlice";
import {
  toggleAuthModal,
  toggleIsModalOpen,
} from "../redux/features/statesSlice";
import Head from "../components/Head";

const Details = () => {
  const [counter, setCounter] = useState(1);

  const { product, isLoading } = useSelector((state) => state.product);
  const { isUpdReviewModalOpen } = useSelector((state) => state.updReviewModal);
  const { pickedAttr, productImages } = useSelector((state) => state.details);
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contentRoute, productId } = useParams();

  useEffect(() => {
    if (productId) {
      dispatch(getProduct({ route: contentRoute, productId }));
    }
  }, [productId, dispatch]);

  useEffect(() => {
    if (product) {
      const mainImg = product.images?.find((img) => img.isMain);
      const defaultPickedColor = product.colors?.find(
        (color) => color.name === mainImg.colorName
      );

      if (contentRoute === "tvs" && product.sizes) {
        const filteredSizes = product.sizes?.filter((size) => size.qty > 0);
        dispatch(setPickedAttr(filteredSizes[0]));
      } else {
        if (
          defaultPickedColor &&
          defaultPickedColor.qty === 0 &&
          product.colors
        ) {
          const availableColor = product.colors?.find((color) => color.qty > 0);
          dispatch(setPickedAttr(availableColor));
        } else {
          dispatch(setPickedAttr(defaultPickedColor));
        }
      }
    }
  }, [product, dispatch]);

  const handleAddToCart = () => {
    const itemData = {
      id: product._id,
      key: product._id + new Date().getTime(),
      name: product.name,
      year: product.year || "",
      category: contentRoute === "accessories" ? product.category : "",
      memory:
        contentRoute === "computers"
          ? `${product.ram} Ram / ${product?.storage?.size} ${product?.storage?.type}`
          : contentRoute === "cellphones"
          ? `${product.memory?.internal} / ${product.memory?.ram} Ram`
          : "",
      attr:
        contentRoute === "tvs"
          ? { ...pickedAttr, type: "size" }
          : { ...pickedAttr, type: "color" },
      images: productImages,
      inStockQty: product.totalQuantity,
      inCartQty: counter,
      price: contentRoute === "tvs" ? pickedAttr.price : product.price,
      contentType: contentRoute,
    };

    const isItemInCart = cartItems.some(
      (cartItem) =>
        cartItem.id === itemData.id && cartItem.attr._id === itemData.attr._id
    );

    if (isItemInCart) {
      dispatch(
        msgModalStateHandler({
          state: true,
          msg: `${itemData.name}'s already in cart`,
          msgType: "error",
        })
      );
      setTimeout(() => {
        dispatch(resetMsgModal());
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
        dispatch(resetMsgModal());
      }, 2000);
    }
  };

  const handleIncreaseQty = () => {
    if (counter === pickedAttr?.qty) {
      return;
    }
    setCounter((prev) => prev + 1);
  };

  const handleDecreaseQty = () => {
    if (counter === 1) {
      return;
    }
    setCounter((prev) => prev - 1);
  };

  const handleOrderNowClick = (e) => {
    const priceSum =
      counter * (contentRoute === "tvs" ? pickedAttr.price : product.price);

    const tax = (8 / 100) * priceSum;

    const totalPrice = priceSum + tax;

    if (!user.id) {
      e.stopPropagation();
      dispatch(toggleAuthModal(true));
      dispatch(toggleIsModalOpen(true));
    } else {
      navigate("/shipping");
      dispatch(setOriginRoute(`/${contentRoute}/details/${productId}`));
      dispatch(
        addCartItemsInfo({
          totalItems: counter,
          tax,
          totalPrice,
        })
      );
      dispatch(
        setPickedProduct({
          id: product._id,
          name: product.name,
          attr:
            contentRoute === "tvs"
              ? { ...pickedAttr, type: "size" }
              : { ...pickedAttr, type: "color" },
          price: contentRoute === "tvs" ? pickedAttr.price : product.price,
          images: productImages,
          contentType: contentRoute,
          pickedQty: counter,
        })
      );
    }
  };

  return (
    <div className="details-container">
      <Head title={`${product?.name} | ${product?._id}`} />
      <div className="row1">
        <div className="gallery">
          <ProductImages images={product?.images} contentType={contentRoute} />
        </div>
        <div className="info">
          <ProductInfo
            info={{ ...product, images: null, colors: null, sizes: null }}
            contentType={contentRoute}
          />
          <ProductAttr
            attrs={contentRoute === "tvs" ? product?.sizes : product?.colors}
            contentType={contentRoute}
          />
          <div className="action-btns">
            <div className="quantity">
              <h4 id="label">Quantity: </h4>
              <button
                id="decrease-btn"
                onClick={handleDecreaseQty}
                disabled={counter === 1}
              >
                -
              </button>
              <span id="qty">{counter}</span>
              <button
                id="increase-btn"
                onClick={handleIncreaseQty}
                disabled={counter === pickedAttr?.qty}
              >
                +
              </button>
            </div>
            <button id="add-to-cart-btn" onClick={handleAddToCart}>
              <BsCartPlus id="cart-icon" />
              <span>Add to Cart</span>
            </button>
            <button id="order-btn" onClick={handleOrderNowClick}>
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="product-reviews">
          <h2 id="title">Review This Product</h2>
          <ReviewForm productId={product._id} />
          <hr id="review-hr" />
          <Reviews productId={product._id} />
        </div>
      </div>

      {isUpdReviewModalOpen ? <UpdateReviewModal /> : null}
    </div>
  );
};

export default Details;
