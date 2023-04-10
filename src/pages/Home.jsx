import { useEffect, useState } from "react";
import TechImg from "../assets/images/tech.png";
import LastAdded from "../components/home/LastAdded";
import SlideShow from "../components/home/SlideShow";
import Navigation from "../components/navigation/Navigation";
import SearchHome from "../components/search/SearchHome";
import { useDispatch, useSelector } from "react-redux";
import {
  getLatestAccessories,
  getLatestCellphones,
  getLatestComputers,
  getLatestTvs,
} from "../redux/actions/productActions";
import SearchResult from "../components/search/SearchResult";
import MobileNavigationHome from "../components/navigation/MobileNavigationHome";
import Head from "../components/Head";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState("");

  const { latestAccessories } = useSelector((state) => state.latestAccessories);
  const { latestCellphones } = useSelector((state) => state.latestCellphones);
  const { latestComputers } = useSelector((state) => state.latestComputers);
  const { latestTvs } = useSelector((state) => state.latestTvs);
  const { isSearchResultModalOpen } = useSelector(
    (state) => state.searchResultModal
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLatestAccessories());
    dispatch(getLatestCellphones());
    dispatch(getLatestComputers());
    dispatch(getLatestTvs());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [window]);

  return (
    <div className="container">
      <Head title="Welcome | Techstore" />
      <div className="landing">
        {windowWidth < 900 && window.innerWidth < 900 ? (
          <MobileNavigationHome />
        ) : (
          <Navigation />
        )}
        <div className="landing-info">
          <div className="hero-wrapper">
            <SearchHome />
            {isSearchResultModalOpen ? (
              <div className="search-result-home">
                <SearchResult />
              </div>
            ) : null}
          </div>
          <div className="main-title">
            <div className="title-wrapper">
              <div className="top">Techstore</div>
              <div className="bottom" aria-hidden="true">
                Techstore
              </div>
            </div>
            <div className="image">
              <img src={TechImg} alt="Tech Image" id="tech-img" />
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/test")}>
        <h1>Test</h1>
      </button>
      <button onClick={() => navigate("/redirect")}>
        <h1>Redirect</h1>
      </button>

      <SlideShow />

      <LastAdded content={latestTvs} contentType="tvs" />
      <LastAdded content={latestComputers} contentType="computers" />
      <LastAdded content={latestCellphones} contentType="cellphones" />
      <LastAdded content={latestAccessories} contentType="accessories" />
    </div>
  );
};

export default Home;
