import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSearchResultModal } from "../../redux/features/searchResultModalSlice";
import { Spinner } from "../Spinner";

const SearchResult = () => {
  const { isLoading, searchResult } = useSelector(
    (state) => state.searchProduct
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlenavigation = (contentType, id) => {
    const route =
      contentType === "accessory" ? "accessories" : `${contentType}s`;
    navigate(`/${route}/details/${id}`);
    dispatch(toggleSearchResultModal(false));
  };

  return (
    <div
      className="search-result-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="result-header">
        <h3 id="res-count">
          Result: <span>{searchResult?.length}</span>
        </h3>
        <AiOutlineCloseCircle
          id="close-icon"
          onClick={() => dispatch(toggleSearchResultModal(false))}
        />
      </div>
      <div className="result-body">
        {isLoading ? (
          <Spinner width={70} height={70} color="#3174cc" />
        ) : searchResult?.length === 0 ? (
          <p id="no-result">No Match!</p>
        ) : (
          <>
            {searchResult?.map((item) => (
              <div
                className="item"
                key={item._id}
                onClick={() => handlenavigation(item.contentType, item._id)}
              >
                <div className="item-image">
                  <img src={item.images?.imageUrl} alt={item.name} />
                </div>
                <div className="item-info">
                  <div className="col1">
                    <h4 id="name">{item.name}</h4>
                  </div>
                  <div className="col2">
                    <div className="item-type">
                      <span id="type">{item.contentType}</span>
                    </div>
                    <div className="item-brand">
                      <h4 id="brand">{item.brand}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
