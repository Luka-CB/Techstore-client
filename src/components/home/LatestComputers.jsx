import React, { useEffect } from "react";
import useWindowWidth from "../../hooks/windowWidth";
import { useDispatch, useSelector } from "react-redux";
import LatestContentCard from "./LatestContentCard";
import { Spinner } from "../Spinner";
import { getLatestComputers } from "../../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

const LatestComputers = () => {
  const windowWidth = useWindowWidth();

  const { latestComputers, isLoading } = useSelector(
    (state) => state.latestComputers
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestComputers());
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
            {latestComputers.slice(0, 1).map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"computers"}
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
            {latestComputers.slice(0, 2).map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"computers"}
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
            {latestComputers.map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"computers"}
              />
            ))}
          </div>
        )}

        <div className="see-all-link" onClick={() => navigate(`/computers`)}>
          <p id="text">
            See Full List of <b>Computers</b>
          </p>
          <span id="chevrons-icon">{">>>"}</span>
        </div>
      </div>
    </div>
  );
};

export default LatestComputers;
