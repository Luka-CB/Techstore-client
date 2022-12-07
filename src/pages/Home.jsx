import TechImg from "../assets/images/tech.png";
import LastAdded from "../components/home/LastAdded";
import SlideShow from "../components/home/SlideShow";
import Navigation from "../components/Navigation";
import { tvs, computers, cellPhones } from "../data";
import SearchHome from "../components/search/SearchHome";

const Home = () => {
  return (
    <div className="container">
      <div className="landing">
        <Navigation />
        <div className="landing-info">
          <div className="hero">
            <div className="title-wrapper">
              <div className="top">Techstore</div>
              <div className="bottom" aria-hidden="true">
                Techstore
              </div>
            </div>
            <SearchHome />
          </div>
        </div>
      </div>
      <div className="image">
        <img src={TechImg} alt="Tech Image" id="tech-img" />
      </div>

      <SlideShow
        content={[
          { ...tvs[0], contentType: "tv" },
          { ...computers[0], contentType: "computer" },
          { ...cellPhones[0], contentType: "cell" },
        ]}
      />

      <LastAdded content={tvs.slice(1, 4)} contentType="tv" />
      <LastAdded content={computers.slice(1, 4)} contentType="computer" />
      <LastAdded content={cellPhones.slice(1, 4)} contentType="cell" />
    </div>
  );
};

export default Home;
