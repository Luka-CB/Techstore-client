import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import SearchNav from "../search/SearchNav";
import SearchResult from "../search/SearchResult";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAuthModal,
  toggleIsModalOpen,
  toggleMobNav,
  toggleUserOptionModal,
} from "../../redux/features/statesSlice";
import { logout } from "../../redux/actions/authActions";
import { cleanUser } from "../../redux/features/users/userSlice";
import { resetAccount } from "../../redux/features/users/userAccountSlice";
import NavDrawer from "./NavDrawer";

const MobileNavigation = () => {
  const { cartItemCount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { isMobNavOpen, userOptionModal } = useSelector(
    (state) => state.states
  );
  const { isSearchResultModalOpen } = useSelector(
    (state) => state.searchResultModal
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigationHandler = (to) => {
    navigate(`/${to}`);
    dispatch(toggleUserOptionModal(false));
  };

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(cleanUser());
    dispatch(resetAccount());
    dispatch(toggleUserOptionModal(false));
  };

  const handleOpenMobNav = (e) => {
    e.stopPropagation();
    dispatch(toggleMobNav(true));
    dispatch(toggleIsModalOpen(true));
  };

  return (
    <div className="mobile-navigation">
      <div className="col1">
        <div className="logo" onClick={() => navigate("/")}>
          <h1>logo</h1>
        </div>
      </div>
      <div className="col2">
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

      {isSearchResultModalOpen && pathname !== "/" ? (
        <div className="search-result-nav-mob">
          <SearchResult />
        </div>
      ) : null}
    </div>
  );
};

export default MobileNavigation;
