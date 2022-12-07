import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import SearchNav from "./search/SearchNav";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
          <div className="nav-cart" title="Your Cart">
            <BsCart3 id="cart-icon" />
            <div className="pill">
              <span id="item-count">12</span>
            </div>
          </div>
          <div className="auth">
            <div className="sign-in">
              <span id="sign-in-link">Sign In</span>
              <FaRegUserCircle id="user-icon" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
