import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Tv from "./pages/Tv";
import Computers from "./pages/Computers";
import CellPhones from "./pages/CellPhones";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import RouteWrapper from "./components/RouteWrapper";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== "/" && <Navigation />}
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvs" element={<Tv />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="/cellphones" element={<CellPhones />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </RouteWrapper>
      <Footer />
    </div>
  );
};

export default App;
