import { TfiMenu } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/White-logo-no-background.png";
import {
  toggleAuthModal,
  toggleIsModalOpen,
  toggleMobNav,
  toggleUserOptionModal,
} from "../../redux/features/statesSlice";
import { logout } from "../../redux/actions/authActions";
import { resetAccount } from "../../redux/features/users/userAccountSlice";
import NavDrawer from "./NavDrawer";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../../redux/features/users/loginSlice";
import { logoutLocal } from "../../redux/features/users/logoutSlice";
import { resetOauthUser } from "../../redux/features/users/oauthUserSlice";
import { clearFilter } from "../../redux/features/filters/filterSlice";
import { resetGetFilters } from "../../redux/features/filters/getFiltersSlice";

const MobileNavigationHome = () => {
  const { isMobNavOpen, userOptionModal } = useSelector(
    (state) => state.states
  );
  const { cartItemCount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigationHandler = (to) => {
    navigate(`/${to}`);
    dispatch(toggleUserOptionModal(false));
  };

  const logoutHandler = () => {
    dispatch(resetAccount());
    dispatch(resetUser());
    dispatch(toggleUserOptionModal(false));
    navigate("/");
    if (user.provider === "local") {
      dispatch(logoutLocal());
    } else {
      dispatch(logout());
      dispatch(resetOauthUser());
    }
  };

  const handleOpenMobNav = (e) => {
    e.stopPropagation();
    dispatch(toggleMobNav(true));
    dispatch(toggleIsModalOpen(true));
  };

  const handleOnClickNavlink = () => {
    dispatch(clearFilter());
    dispatch(resetGetFilters());
  };

  return (
    <div className="mobile-navigation-home">
      <div
        className="nav-logo-wrapper"
        title="TechStore"
        onClick={() => {
          navigate("/");
          handleOnClickNavlink();
        }}
      >
        <img src={logo} alt="logo" id="img" />
      </div>
      <div className="nav-items">
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
              onClick={() => dispatch(toggleUserOptionModal(!userOptionModal))}
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
        <div className="menu" onClick={handleOpenMobNav}>
          <TfiMenu id="menu-icon" />
        </div>
      </div>

      {isMobNavOpen ? <NavDrawer /> : null}
    </div>
  );
};

export default MobileNavigationHome;
