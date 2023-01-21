import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import SearchNav from "./search/SearchNav";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAuthModal,
  toggleUserOptionModal,
} from "../redux/features/statesSlice";
import { logout } from "../redux/actions/authActions";
import { cleanUser } from "../redux/features/users/userSlice";
import { resetAccount } from "../redux/features/users/userAccountSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const { cartItemCount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { userOptionModal } = useSelector((state) => state.states);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(cleanUser());
    dispatch(resetAccount());
    dispatch(toggleUserOptionModal(false));
  };

  const navigationHandler = (to) => {
    navigate(`/${to}`);
    dispatch(toggleUserOptionModal(false));
  };

  return (
    <div className={pathname !== "/" ? "navigation" : "home-navigation"}>
      <div
        className="nav-logo-wrapper"
        title="TechStore"
        onClick={() => navigate("/")}
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
          >
            TV
          </NavLink>
          <NavLink
            to={"/computers"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
          >
            Computers
          </NavLink>
          <NavLink
            to={"/cellphones"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
          >
            Cell Phones
          </NavLink>
          <NavLink
            to={"/accessories"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
          >
            Accessories
          </NavLink>
          <NavLink
            to={"/about"}
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "#ff00c3", fontWeight: 700 } : undefined
            }
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
                    <p className="option-link">Your Orders</p>
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
                onClick={() => dispatch(toggleAuthModal(true))}
              >
                <span id="sign-in-link">Sign In</span>
                <FaRegUserCircle id="user-icon" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
