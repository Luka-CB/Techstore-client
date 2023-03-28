import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartModalStateHandler } from "../../redux/features/cart/cartModalSlice";
import { msgModalStateHandler } from "../../redux/features/msgModalSlice";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toggleIsModalOpen } from "../../redux/features/statesSlice";

const CartModal = ({ contentType }) => {
  const [pickedAttr, setPickedAttr] = useState(null);

  const { item } = useSelector((state) => state.cartModal);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const closeCartModalHandler = () => {
    dispatch(cartModalStateHandler({ state: false, item: [] }));
    setPickedAttr(null);
    dispatch(toggleIsModalOpen(false));
  };

  const addToCartHandler = () => {
    const filteredImages = item.images.filter(
      (img) => img.colorName === pickedAttr.name
    );

    const itemData = {
      id: item._id,
      key: item._id + new Date().getTime(),
      name: item.name,
      year: item.year || "",
      category: contentType === "accessories" ? item.category : "",
      memory:
        contentType === "computers"
          ? `${item.ram} Ram / ${item.storage.size} ${item.storage.type}`
          : contentType === "cellphones"
          ? `${item.memory.internal} / ${item.memory.ram} Ram`
          : "",
      attr: pickedAttr,
      images: contentType === "tvs" ? item.images : filteredImages,
      inStockQty: item.totalQuantity,
      inCartQty: 1,
      price: contentType === "tvs" ? pickedAttr.price : item.price,
      contentType,
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
        dispatch(msgModalStateHandler({ state: false, msg: "", msgType: "" }));
      }, 2000);
    } else {
      dispatch(addToCart(itemData));
      dispatch(cartModalStateHandler({ state: false, item: [] }));
      setPickedAttr(null);
      dispatch(toggleIsModalOpen(false));
      dispatch(
        msgModalStateHandler({
          state: true,
          msg: `${itemData.name}'s added to cart`,
          msgType: "success",
        })
      );
      setTimeout(() => {
        dispatch(msgModalStateHandler({ state: false, msg: "", msgType: "" }));
      }, 2000);
    }
  };

  return (
    <div className="cart-modal-bg" onClick={closeCartModalHandler}>
      <div
        className="cart-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="title">
          {item.contentType === "tvs" ? "Choose Screen Size" : "Choose Color"}
        </h3>
        <div className="attributes">
          {item.contentType === "tvs"
            ? item.sizes?.map((size, i) => (
                <div key={size._id}>
                  {size.qty === 0 ? (
                    <div
                      title="Product with This Size is Not In Stock"
                      className="size-wrapper-disabled"
                    >
                      <div className="size">
                        <span>{size.size}"</span>
                      </div>
                      <p id="price">{size.price}$</p>
                    </div>
                  ) : (
                    <div
                      onClick={() => setPickedAttr({ ...size, type: "size" })}
                      className={
                        pickedAttr?._id === size._id
                          ? "size-wrapper-active"
                          : "size-wrapper"
                      }
                    >
                      <div className="size">
                        <span>{size.size}"</span>
                      </div>
                      <p id="price">${size.price}</p>
                    </div>
                  )}
                </div>
              ))
            : item.colors?.map((color) => (
                <div key={color._id}>
                  {color.qty === 0 ? (
                    <div
                      title="Product with this Color is Not in Stock"
                      className="color-disabled"
                      style={{ backgroundColor: color.code }}
                    ></div>
                  ) : (
                    <div
                      title={color.name}
                      className={
                        pickedAttr?._id === color._id ? "color-active" : "color"
                      }
                      style={{ backgroundColor: color.code }}
                      onClick={() => setPickedAttr({ ...color, type: "color" })}
                    ></div>
                  )}
                </div>
              ))}
        </div>
        <button id="done-btn" disabled={!pickedAttr} onClick={addToCartHandler}>
          Done
        </button>
      </div>
    </div>
  );
};

export default CartModal;
