import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/actions/productActions";
import { toggleSearchResultModal } from "../../redux/features/searchResultModalSlice";
import useWindowWidth from "../../hooks/windowWidth";
import { toggleIsModalOpen } from "../../redux/features/statesSlice";

const SearchNav = () => {
  const windowWidth = useWindowWidth();

  const [expandSearchInput, setExpandSearchInput] = useState(false);
  const [q, setQ] = useState("");

  const dispatch = useDispatch();

  const style = {
    inputWidth: {
      width: expandSearchInput ? "300px" : "0px",
    },
    animation: {
      animation: expandSearchInput && "hoverShake 0.15s linear 3",
    },
  };

  useEffect(() => {
    let timeOut;

    if (q) {
      timeOut = setTimeout(() => {
        dispatch(searchProduct(q));
        dispatch(toggleSearchResultModal(true));
        dispatch(toggleIsModalOpen(true));
      }, 500);
    }

    return () => clearTimeout(timeOut);
  }, [q, dispatch]);

  const handleExpandSearchInput = () => {
    setExpandSearchInput(!expandSearchInput);
    setQ("");
  };

  return (
    <>
      {windowWidth < 800 ? (
        <div className="mob-nav-search-container">
          <input
            onClick={(e) => e.stopPropagation()}
            type="text"
            placeholder="Search..."
            id="mob-nav-search-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <a href="#" className="search-btn">
            <BiSearch id="nav-search-icon" />
          </a>
        </div>
      ) : (
        <div
          style={style.animation}
          title={!expandSearchInput ? "Click to start search" : undefined}
          className="nav-search-container"
          onClick={handleExpandSearchInput}
        >
          <input
            onClick={(e) => e.stopPropagation()}
            style={style.inputWidth}
            type="text"
            name="search"
            placeholder="Search..."
            id="nav-search-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <a href="#" className="search-btn">
            <BiSearch id="nav-search-icon" />
          </a>
        </div>
      )}
    </>
  );
};

export default SearchNav;
