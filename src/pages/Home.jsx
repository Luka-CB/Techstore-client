import TechImg from "../assets/images/tech.png";
import SlideShow from "../components/home/SlideShow";
import Navigation from "../components/navigation/Navigation";
import SearchHome from "../components/search/SearchHome";
import { useSelector } from "react-redux";
import SearchResult from "../components/search/SearchResult";
import MobileNavigationHome from "../components/navigation/MobileNavigationHome";
import Head from "../components/Head";
import LatestTvs from "../components/home/LatestTvs";
import useWindowWidth from "../hooks/windowWidth";
import LatestComputers from "../components/home/LatestComputers";
import LatestCellphones from "../components/home/LatestCellphones";
import LatestAccessories from "../components/home/LatestAccessories";

const Home = () => {
  const windowWidth = useWindowWidth();

  const { isSearchResultModalOpen } = useSelector(
    (state) => state.searchResultModal
  );

  return (
    <div className="container">
      <Head title="Welcome | Techstore" />
      <div className="landing">
        {windowWidth < 900 ? <MobileNavigationHome /> : <Navigation />}
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

      <SlideShow />

      <LatestTvs />
      <LatestComputers />
      <LatestCellphones />
      <LatestAccessories />
    </div>
  );
};

export default Home;
