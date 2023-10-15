import React, { useEffect } from "react";
import useWindowWidth from "../../hooks/windowWidth";
import { useDispatch, useSelector } from "react-redux";
import LatestContentCard from "./LatestContentCard";
import { Spinner } from "../Spinner";
import { getLatestCellphones } from "../../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

const LatestCellphones = () => {
  const windowWidth = useWindowWidth();

  const { latestCellphones, isLoading } = useSelector(
    (state) => state.latestCellphones
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestCellphones());
  }, []);

  return (
    <div className="lastadded-container">
      <div className="content-wrapper">
        <div className="left-half-bg"></div>

        {windowWidth < 900 && window.innerWidth < 900 ? (
          <div className="content">
            {isLoading ? (
              <div className="spinner">
                <Spinner width={70} height={70} color="#d800a6" />
              </div>
            ) : null}
            {latestCellphones.slice(0, 1).map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"cellphones"}
              />
            ))}
          </div>
        ) : windowWidth < 1100 && window.innerWidth < 1100 ? (
          <div className="content">
            {isLoading ? (
              <div className="spinner">
                <Spinner width={70} height={70} color="#d800a6" />
              </div>
            ) : null}
            {latestCellphones.slice(0, 2).map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"cellphones"}
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
            {latestCellphones.map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"cellphones"}
              />
            ))}
          </div>
        )}

        <div className="see-all-link" onClick={() => navigate(`/cellphones`)}>
          <p id="text">
            See Full List of <b>Cellphones</b>
          </p>
          <span id="chevrons-icon">{">>>"}</span>
        </div>
      </div>
    </div>
  );
};

export default LatestCellphones;
