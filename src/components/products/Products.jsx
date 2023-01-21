import { useDispatch, useSelector } from "react-redux";
import CartModal from "../cart/CartModal";
import MsgModal from "../MsgModal";
import ProductCard from "./ProductCard";
import { toggleUserOptionModal } from "../../redux/features/statesSlice";

const Products = ({ content, contentType }) => {
  const dispatch = useDispatch();

  const { showCartModal } = useSelector((state) => state.cartModal);

  const { showMsgModal, msg, msgType } = useSelector((state) => state.msgModal);

  return (
    <div
      className="products-container"
      onClick={() => dispatch(toggleUserOptionModal(false))}
    >
      <div className="filters">
        <h2>Here Goes Filters</h2>
      </div>
      <div className="cards">
        {content.map((item) => (
          <ProductCard key={item._id} data={item} contentType={contentType} />
        ))}
      </div>

      {showCartModal && <CartModal contentType={contentType} />}
      {showMsgModal && <MsgModal text={msg} classname={msgType} />}
    </div>
  );
};

export default Products;
