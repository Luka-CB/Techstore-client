import React, { useEffect } from "react";
import useWindowWidth from "../../hooks/windowWidth";
import { useDispatch, useSelector } from "react-redux";
import LatestContentCard from "./LatestContentCard";
import { Spinner } from "../Spinner";
import { getLatestTvs } from "../../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

const LatestTvs = () => {
  const windowWidth = useWindowWidth();

  const { latestTvs, isLoading } = useSelector((state) => state.latestTvs);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestTvs());
  }, []);

  return (
    <div className="lastadded-container">
      <div className="content-wrapper">
        <div className="right-half-bg"></div>

        {windowWidth < 900 ? (
          <div className="content">
            {isLoading ? (
              <div className="spinner">
                <Spinner width={70} height={70} color="#d800a6" />
              </div>
            ) : null}
            {latestTvs.slice(0, 1).map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"tvs"}
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
            {latestTvs.slice(0, 2).map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"tvs"}
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
            {latestTvs.map((item) => (
              <LatestContentCard
                key={item._id}
                item={item}
                contentType={"tvs"}
              />
            ))}
          </div>
        )}

        <div className="see-all-link" onClick={() => navigate(`/tvs`)}>
          <p id="text">
            See Full List of <b>TVs</b>
          </p>
          <span id="chevrons-icon">{">>>"}</span>
        </div>
      </div>
    </div>
  );
};

export default LatestTvs;
