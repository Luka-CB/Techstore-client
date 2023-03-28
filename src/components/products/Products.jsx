import { useDispatch, useSelector } from "react-redux";
import CartModal from "../cart/CartModal";
import ProductCard from "./ProductCard";
import { toggleUserOptionModal } from "../../redux/features/statesSlice";
import Pagination from "../Pagination";
import Filters from "./filter";
import { Spinner } from "../Spinner";

const Products = ({ content, contentType, isLoading }) => {
  const { paginationData } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const { showCartModal } = useSelector((state) => state.cartModal);

  return (
    <div
      className="products-container"
      onClick={() => dispatch(toggleUserOptionModal(false))}
    >
      <div className="filters-container">
        <Filters contentType={contentType} />
      </div>
      <div className="products">
        {isLoading ? (
          <Spinner width={70} height={70} color="#d800a6" />
        ) : content?.length === 0 ? (
          <p id="no-match">No Match Found!</p>
        ) : (
          <>
            <div className="cards">
              {content.map((item) => (
                <ProductCard
                  key={item._id}
                  data={item}
                  contentType={contentType}
                />
              ))}
            </div>
          </>
        )}
        {paginationData.limit < paginationData.totalDocs && (
          <Pagination
            paginationData={paginationData}
            contentType={contentType}
          />
        )}
      </div>

      {showCartModal && <CartModal contentType={contentType} />}
    </div>
  );
};

export default Products;
