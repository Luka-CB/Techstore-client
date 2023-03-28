import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import { getRandomProducts } from "../../redux/actions/productActions";

const SlideShow = () => {
  const { randomProducts } = useSelector((state) => state.randomProducts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRandomProducts());
  }, []);

  return (
    <Carousel
      className="carousel"
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {randomProducts?.map((item) => (
        <div key={item._id} className="content">
          <div className="slide-image">
            <img
              src={item.images?.imageUrl}
              alt={item.name}
              id="carousel-img"
            />
          </div>
          <div className="item-info">
            {item.contentType === "computers" && (
              <div className="info">
                <h1 id="item-brand">{item.brand}</h1>
                <h2 id="item-price">${item.price}</h2>
                <p className="item-description">
                  <span className="spec">{item.type}</span> computer with{" "}
                  <span className="spec">{item.processor}</span> processor,{" "}
                  <span className="spec">{item.display}</span> display and{" "}
                  <span className="spec">{item.graphics}</span>
                </p>
                <p className="item-description">
                  <span className="spec">
                    {item.storage?.size} {item.storage?.type}
                  </span>{" "}
                  storage with <span className="spec">{item.ram}</span> ram
                </p>
              </div>
            )}
            {item.contentType === "tvs" && (
              <div className="info">
                <h1 id="item-brand">{item.brand}</h1>
                <p className="item-description">
                  {item.year} <span className="spec">{item.type}</span>{" "}
                  {item.brand} <span className="spec">{item.resolution}</span>{" "}
                  TV
                </p>
              </div>
            )}
            {item.contentType === "cellphones" && (
              <div className="info">
                <h1 id="item-brand">{item.brand}</h1>
                <h2 id="item-price">${item.price}</h2>
                <p className="item-description">
                  <span className="spec">{item.year}</span> cell phone with{" "}
                  <span className="spec">{item.platform?.chipset}</span>{" "}
                  chipset, <span className="spec">{item.display?.size} /</span>{" "}
                  <span className="spec">{item.display?.type}</span> display and{" "}
                  <span className="spec">{item.platform?.os}</span>
                </p>
                <p className="item-description">
                  <span className="spec">{item.memory?.internal}</span> storage
                  with <span className="spec">{item.memory?.ram}</span> ram
                </p>
              </div>
            )}
            {item.contentType === "accessories" && (
              <div className="info">
                <h1 id="item-brand">{item.brand}</h1>
                <p className="item-description">
                  <span className="spec">{item.category}</span>
                </p>
                <h2 id="item-price" style={{ marginTop: "30px" }}>
                  ${item.price}
                </h2>
              </div>
            )}
          </div>
          <h1
            className="legend"
            onClick={() => navigate(`/${item.contentType}/details/${item._id}`)}
          >
            {item.name}
          </h1>
        </div>
      ))}
    </Carousel>
  );
};

export default SlideShow;
