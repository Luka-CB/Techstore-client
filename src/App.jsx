import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Tv from "./pages/Tv";
import Computers from "./pages/Computers";
import CellPhones from "./pages/CellPhones";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import RouteWrapper from "./components/RouteWrapper";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import AuthModal from "./components/auth/AuthModal";
import { toggleUserOptionModal } from "./redux/features/statesSlice";
import { getUser } from "./redux/actions/authActions";
import { useEffect } from "react";
import UserAccount from "./pages/UserAccount";

const App = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector((state) => state.states);
  const { user } = useSelector((state) => state.user);

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="app" onClick={() => dispatch(toggleUserOptionModal(false))}>
      {authModal && <AuthModal />}
      {pathname !== "/" && <Navigation />}
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvs" element={<Tv />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="/cellphones" element={<CellPhones />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/account"
            element={user?.id ? <UserAccount /> : <Navigate to="/" />}
          />
        </Routes>
      </RouteWrapper>
      <Footer />
    </div>
  );
};

export default App;
