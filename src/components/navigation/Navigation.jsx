import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import SearchNav from "../search/SearchNav";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAuthModal,
  toggleIsModalOpen,
  toggleUserOptionModal,
} from "../../redux/features/statesSlice";
import { logout } from "../../redux/actions/authActions";
import { cleanUser } from "../../redux/features/users/userSlice";
import { resetAccount } from "../../redux/features/users/userAccountSlice";
import SearchResult from "../search/SearchResult";
import { clearFilter } from "../../redux/features/filters/filterSlice";
import { resetGetFilters } from "../../redux/features/filters/getFiltersSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const { cartItemCount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { userOptionModal } = useSelector((state) => state.states);
  const { isSearchResultModalOpen } = useSelector(
    (state) => state.searchResultModal
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(cleanUser());
    dispatch(resetAccount());
    dispatch(toggleUserOptionModal(false));
    navigate("/");
  };

  const navigationHandler = (to) => {
    navigate(`/${to}`);
    dispatch(toggleUserOptionModal(false));
  };

  const handleOnClickNavlink = () => {
    dispatch(clearFilter());
    dispatch(resetGetFilters());
  };

  return (
    <div className={pathname !== "/" ? "navigation" : "home-navigation"}>
      <div
        className="nav-logo-wrapper"
        title="TechStore"
        onClick={() => {
          navigate("/");
          handleOnClickNavlink();
        }}
      >
        <div className="nav-logo">
          <h3>techstore</h3>
        </div>
      </div>
      <nav>
        <div className="nav-links">
          <NavLink
            to={"/tvs"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
            onClick={handleOnClickNavlink}
          >
            TV
          </NavLink>
          <NavLink
            to={"/computers"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
            onClick={handleOnClickNavlink}
          >
            Computers
          </NavLink>
          <NavLink
            to={"/cellphones"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
            onClick={handleOnClickNavlink}
          >
            Cell Phones
          </NavLink>
          <NavLink
            to={"/accessories"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
            onClick={handleOnClickNavlink}
          >
            Accessories
          </NavLink>
          <NavLink
            to={"/about"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
            onClick={handleOnClickNavlink}
          >
            About
          </NavLink>
        </div>
        <div className="right-half">
          {pathname !== "/" && (
            <div className="nav-search">
              <SearchNav />
            </div>
          )}
          <div
            className="nav-cart"
            title="Your Cart"
            onClick={() => navigate("/cart")}
          >
            <BsCart3 id="cart-icon" />
            <div className="pill">
              <span id="item-count">{cartItemCount}</span>
            </div>
          </div>
          <div className="auth" onClick={(e) => e.stopPropagation()}>
            {user?.id ? (
              <div
                className="auth-user"
                onClick={() =>
                  dispatch(toggleUserOptionModal(!userOptionModal))
                }
              >
                <span id="user-name">{user.username}</span>
                <FaRegUserCircle id="user-icon" />

                {userOptionModal && (
                  <div
                    className="user-option"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p
                      className="option-link"
                      onClick={() => navigationHandler("account")}
                    >
                      Your Account
                    </p>
                    <p
                      className="option-link"
                      onClick={() => navigationHandler("my-orders")}
                    >
                      Your Orders
                    </p>
                    <hr />
                    <p id="logout" onClick={logoutHandler}>
                      Logout
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="sign-in"
                onClick={() => {
                  dispatch(toggleAuthModal(true));
                  dispatch(toggleIsModalOpen(true));
                }}
              >
                <span id="sign-in-link">Sign In</span>
                <FaRegUserCircle id="user-icon" />
              </div>
            )}
          </div>
        </div>
      </nav>

      {isSearchResultModalOpen && pathname !== "/" ? (
        <div className="search-result-nav">
          <SearchResult />
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
