import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions";
import { resetRegister } from "../../redux/features/users/registerSlice";
import {
  setRegSuccessMsg,
  toggleSignUp,
} from "../../redux/features/statesSlice";

const Register = ({ setAddClass, windowWidth }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [regErr, setRegErr] = useState("");

  const { isLoading, isSuccess, error } = useSelector(
    (state) => state.register
  );
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      dispatch(register({ username, email, password }));
    } else {
      setRegErr("Passwords Don't Match!");
    }
  };

  useEffect(() => {
    if (error) {
      setRegErr(error);
    }

    if (isSuccess) {
      if (windowWidth < 800 && window.innerWidth < 800) {
        dispatch(toggleSignUp(false));
      } else {
        setAddClass("");
      }
      dispatch(setRegSuccessMsg("Registration Success! Now you can sign in"));
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRegErr("");
      dispatch(resetRegister());
    }
  }, [dispatch, isSuccess, error]);

  return (
    <>
      <form className="auth-form" onSubmit={submitHandler}>
        <h1 className="h1">Create Account</h1>
        <span className="span">Enter your credentials for registration</span>
        {regErr && (
          <div className="auth-error">
            <p>{regErr}</p>
          </div>
        )}
        <input
          type="text"
          placeholder="User Name"
          className="auth-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="auth-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="auth-btn">Sign Up</button>
      </form>
    </>
  );
};

export default Register;
