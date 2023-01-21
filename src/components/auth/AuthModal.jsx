import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleAuthModal } from "../../redux/features/statesSlice";
import Login from "./Login";
import Register from "./Register";

const AuthModal = () => {
  const [addClass, setAddClass] = useState("");

  const dispatch = useDispatch();

  return (
    <div
      className="modal-wrapper"
      onClick={() => dispatch(toggleAuthModal(false))}
    >
      <div
        className={`modal-container ${addClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <AiFillCloseCircle
          id="modal-close"
          onClick={() => dispatch(toggleAuthModal(false))}
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
                To keep connected with us please login with your personal info
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
  );
};

export default AuthModal;
