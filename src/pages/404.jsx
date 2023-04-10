import React from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import NotFoundImg from "../assets/images/404.webp";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="col1">
        <img src={NotFoundImg} alt="Page Not Found" />
      </div>
      <div className="col2">
        <p>
          <b>Ooops!</b> Seems like the page, you're trying to reach is broken or
          doesn't exist!
        </p>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <TiArrowBackOutline id="back-icon" />
          <h3>Go Back</h3>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
