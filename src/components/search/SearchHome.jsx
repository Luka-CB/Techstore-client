import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { searchProduct } from "../../redux/actions/productActions";
import { toggleSearchResultModal } from "../../redux/features/searchResultModalSlice";
import { toggleIsModalOpen } from "../../redux/features/statesSlice";

const SearchHome = () => {
  const [q, setQ] = useState("");

  const dispatch = useDispatch();

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

  return (
    <div className="search-container">
      <div className="search-box">
        <div className="title-wrapper-sm-screen">
          <div className="top">Techstore</div>
          <div className="bottom" aria-hidden="true">
            Techstore
          </div>
        </div>
        <p id="site-description">
          Aliquam convallis nisi ut tortor venenatis lacinia. Ut at commodo
          lacus. Cras sed nunc efficitur, fermentum felis vitae, egestas tortor.
          Pellentesque finibus leo quam, ut suscipit urna fringilla eu. Praesent
          ullamcorper turpis et mauris tristique ullamcorper. In hac habitasse
          platea dictumst. In tristique, velit vestibulum viverra condimentum,
          sapien est tempor turpis, at vehicula lorem sapien vel urna. Ut sapien
          odio, vestibulum a turpis at, vulputate pulvinar diam. Mauris at nunc
          nisl.
        </p>
        <div className="search-wrapper">
          <h3 id="search-text">Search for Technologies You Desire!</h3>
          <div
            className="search-input-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-icon">
              <BiSearch id="glass-icon" />
            </div>
            <input
              type="search"
              id="search-input"
              placeholder="What are you looking for?"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHome;
