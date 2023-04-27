import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import useWindowWidth from "../../hooks/windowWidth";
import { setRoute } from "../../redux/features/savedRouteSlice";
import {
  toggleAuthModal,
  toggleIsModalOpen,
} from "../../redux/features/statesSlice";
import Login from "./Login";
import MobileAuth from "./MobileAuth";
import Register from "./Register";

const AuthModal = () => {
  const [addClass, setAddClass] = useState("");

  const windowWidth = useWindowWidth();

  const dispatch = useDispatch();

  const handleCloseAuthModal = () => {
    dispatch(toggleAuthModal(false));
    dispatch(toggleIsModalOpen());
    dispatch(setRoute(""));
  };

  return (
    <>
      {windowWidth < 800 && window.innerWidth < 800 ? (
        <MobileAuth
          handleCloseAuthModal={handleCloseAuthModal}
          windowWidth={windowWidth}
        />
      ) : (
        <div className="modal-wrapper" onClick={handleCloseAuthModal}>
          <div
            className={`modal-container ${addClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            <AiFillCloseCircle
              id="modal-close"
              onClick={handleCloseAuthModal}
            />
            <div className="form-container sign-up-container">
              <Register setAddClass={setAddClass} />
            </div>
            <div className="form-container sign-in-container">
              <Login />
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="h1">Welcome Back!</h1>
                  <p className="p">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="ghost-btn"
                    id="signIn"
                    onClick={() => setAddClass("")}
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="h1">Hello, Friend!</h1>
                  <p className="p">
                    Enter your personal details and start journey with us
                  </p>
                  <button
                    className="ghost-btn"
                    id="signUp"
                    onClick={() => setAddClass("right-panel-active")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
