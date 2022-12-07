import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchNav = () => {
  const [expandSearchInput, setExpandSearchInput] = useState(false);

  const style = {
    inputWidth: {
      width: expandSearchInput ? "300px" : "0px",
    },
    animation: {
      animation: expandSearchInput && "hoverShake 0.15s linear 3",
    },
  };

  return (
    <div
      style={style.animation}
      title={!expandSearchInput && "Click to start search"}
      className="nav-search-container"
      onClick={() => setExpandSearchInput(!expandSearchInput)}
    >
      <input
        onClick={(e) => e.stopPropagation()}
        style={style.inputWidth}
        type="text"
        name="search"
        placeholder="Search..."
        id="nav-search-input"
      />
      <a href="#" className="search-btn">
        <BiSearch id="nav-search-icon" />
      </a>
    </div>
  );
};

export default SearchNav;
