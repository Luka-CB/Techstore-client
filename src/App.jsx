import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Tv from "./pages/Tv";
import Computers from "./pages/Computers";
import CellPhones from "./pages/CellPhones";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Navigation from "./components/navigation/Navigation";
import RouteWrapper from "./components/RouteWrapper";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import AuthModal from "./components/auth/AuthModal";
import {
  toggleIsModalOpen,
  toggleUserOptionModal,
} from "./redux/features/statesSlice";
import { useEffect } from "react";
import UserAccount from "./pages/UserAccount";
import Details from "./pages/Details";
import { toggleWarningPopup } from "./redux/features/warningPopupSlice";
import MsgModal from "./components/MsgModal";
import { toggleSearchResultModal } from "./redux/features/searchResultModalSlice";
import FilteredProducts from "./pages/FilteredProducts";
import ShippingInfo from "./pages/ShippingInfo";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import FullOrder from "./pages/FullOrder";
import { toggleFilterOptionPopup } from "./redux/features/filters/filterOptionPopupSlice";
import useWindowWidth from "./hooks/windowWidth";
import MobileNavigation from "./components/navigation/MobileNavigation";
import { getOauthUser } from "./redux/actions/authActions";
import NotFound from "./pages/404";

const routsToExclude = ["/", "/shipping", "/checkout"];

const App = () => {
  const windowWidth = useWindowWidth();

  const dispatch = useDispatch();
  const { authModal, isModalOpen, userOptionModal } = useSelector(
    (state) => state.states
  );
  const { user } = useSelector((state) => state.login);
  const { showMsgModal, msg, msgType } = useSelector((state) => state.msgModal);
  const { isSearchResultModalOpen } = useSelector(
    (state) => state.searchResultModal
  );
  const { isFilterOptionPopupOpen } = useSelector(
    (state) => state.filterOptionPopup
  );

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getOauthUser());
  }, [dispatch]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => (document.body.style.overflow = "unset");
  }, [isModalOpen]);

  const handleBgClick = () => {
    dispatch(toggleIsModalOpen(false));
    dispatch(toggleWarningPopup(false));
    if (userOptionModal) dispatch(toggleUserOptionModal(false));
    if (isSearchResultModalOpen) dispatch(toggleSearchResultModal(false));
    if (isFilterOptionPopupOpen) dispatch(toggleFilterOptionPopup(false));
  };

  return (
    <div className="app" onClick={handleBgClick}>
      {authModal ? <AuthModal /> : null}
      {routsToExclude.includes(pathname) ? null : windowWidth < 1300 &&
        window.innerWidth < 1300 ? (
        <MobileNavigation />
      ) : (
        <Navigation />
      )}
      {showMsgModal ? <MsgModal text={msg} classname={msgType} /> : null}
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvs" element={<Tv />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="/cellphones" element={<CellPhones />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/filtered/:contentType" element={<FilteredProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order/:orderId" element={<FullOrder />} />
          <Route
            path="/:contentRoute/details/:productId"
            element={<Details />}
          />
          <Route
            path="/account"
            element={user?.id ? <UserAccount /> : <NotFound />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RouteWrapper>
      <Footer />
    </div>
  );
};

export default App;
