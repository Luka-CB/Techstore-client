import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Head from "../components/Head";
import { Spinner } from "../components/Spinner";
import { getOauthUser } from "../redux/actions/authActions";
import { resetOauthUser } from "../redux/features/users/oauthUserSlice";

const Redirect = () => {
  const { isSuccess } = useSelector((state) => state.oauthUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      dispatch(resetOauthUser());
    } else {
      dispatch(getOauthUser());
    }
  }, [dispatch, isSuccess, navigate]);

  return (
    <div className="redirect-container">
      <Head title="Redirecting..." />
      <Spinner width={100} height={100} color="#7dce13" />
      <h1>redirecting</h1>
    </div>
  );
};

export default Redirect;
