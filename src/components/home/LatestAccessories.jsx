import React, { useEffect } from "react";
import useWindowWidth from "../../hooks/windowWidth";
import { useSelector, useDispatch } from "react-redux";
import LatestContentCard from "./LatestContentCard";
import { Spinner } from "../Spinner";
import { getLatestAccessories } from "../../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

const LatestAccessories = () => {
  const windowWidth = useWindowWidth();

  const { latestAccessories, isLoading } = useSelector(
    (state) => state.latestAccessories
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestAccessories());
  }, []);

  return (
    <div className="lastadded-container">
      <div className="content-wrapper">
        <div className="left-half-bg"></div>

        {windowWidth < 900 ? (
          <div className="content">
            {isLoading ? (
              <div className="spinner">
                <Spinner width={70} height={70} color="#d800a6" />
              </div>
            ) : null}
            {latestAccessories.slice(0, 1).map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"accessories"}
              />
            ))}
          </div>
        ) : windowWidth < 1100 ? (
          <div className="content">
            {isLoading ? (
              <div className="spinner">
                <Spinner width={70} height={70} color="#d800a6" />
              </div>
            ) : null}
            {latestAccessories.slice(0, 2).map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"accessories"}
              />
            ))}
          </div>
        ) : (
          <div className="content">
            {isLoading ? (
              <div className="spinner">
                <Spinner width={70} height={70} color="#d800a6" />
              </div>
            ) : null}
            {latestAccessories.map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"accessories"}
              />
            ))}
          </div>
        )}

        <div className="see-all-link" onClick={() => navigate(`/accessories`)}>
          <p id="text">
            See Full List of <b>Accessories</b>
          </p>
          <span id="chevrons-icon">{">>>"}</span>
        </div>
      </div>
    </div>
  );
};

export default LatestAccessories;
