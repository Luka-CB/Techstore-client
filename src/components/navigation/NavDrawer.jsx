import React from "react";
import useWindowWidth from "../../hooks/windowWidth";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  toggleIsModalOpen,
  toggleMobNav,
} from "../../redux/features/statesSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { clearFilter } from "../../redux/features/filters/filterSlice";
import { resetGetFilters } from "../../redux/features/filters/getFiltersSlice";
import { useDispatch } from "react-redux";

const NavDrawer = () => {
  const windowWidth = useWindowWidth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseMobNav = () => {
    dispatch(toggleMobNav(false));
    dispatch(toggleIsModalOpen(false));
  };

  const handleOnClickNavlink = () => {
    dispatch(clearFilter());
    dispatch(resetGetFilters());
    handleCloseMobNav();
  };

  const handleOnClickLogo = () => {
    navigate("/");
    handleCloseMobNav();
  };

  return (
    <div className="mob-nav-bg" onClick={handleCloseMobNav}>
      <div className="mob-nav-container" onClick={(e) => e.stopPropagation()}>
        <div className="mob-nav-logo" onClick={handleOnClickLogo}>
          <h1>logo</h1>
        </div>
        {windowWidth < 500 && window.innerWidth < 500 ? (
          <div className="close-btn" onClick={handleCloseMobNav}>
            <AiFillCloseCircle id="close-icon" />
          </div>
        ) : null}
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
      </div>
    </div>
  );
};

export default NavDrawer;
