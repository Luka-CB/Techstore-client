import React from "react";
import Login from "./Login";
import Register from "./Register";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignUp } from "../../redux/features/statesSlice";

const MobileAuth = ({ handleCloseAuthModal, windowWidth }) => {
  const { isSignupActive } = useSelector((state) => state.states);

  const dispatch = useDispatch();

  return (
    <div className="mobile-auth-container" onClick={(e) => e.stopPropagation()}>
      <AiFillCloseCircle id="close-icon" onClick={handleCloseAuthModal} />
      {isSignupActive ? (
        <div className="login-wrapper">
          <Register windowWidth={windowWidth} />
          <div className="notice">
            <h4>Already have an account?</h4>
            <span onClick={() => dispatch(toggleSignUp(false))}>Sign In</span>
          </div>
        </div>
      ) : (
        <div className="login-wrapper">
          <Login />
          <div className="notice">
            <h4>Don't have an account?</h4>
            <span onClick={() => dispatch(toggleSignUp(true))}>Sign Up</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileAuth;
