import { Carousel } from "react-responsive-carousel";

const SlideShow = ({ content }) => {
  return (
    <Carousel
      className="carousel"
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {content.map((item) => (
        <div key={item._id} className="content">
          <div
            className={
              item.contentType === "cell" ? "slide-image-cell" : "slide-image"
            }
          >
            <img src={item.images[3]} alt={item.name} id="carousel-img" />
          </div>
          <div className="item-info">
            {item.contentType === "computer" && (
              <div className="info">
                <h1 id="item-brand">{item.brand}</h1>
                <p className="item-description">
                  <span className="spec">{item.type}</span> computer with{" "}
                  <span className="spec">{item.processor}</span> processor,{" "}
                  <span className="spec">{item.display}</span> display and{" "}
                  <span className="spec">{item.graphics}</span>
                </p>
                <p className="item-description">
                  <span className="spec">
                    {item.storage.size} {item.storage.type}
                  </span>{" "}
                  storage with <span className="spec">{item.memory}</span> ram
                </p>
              </div>
            )}
            {item.contentType === "tv" && (
              <div className="info">
                <h1 id="item-brand">{item.brand}</h1>
                <p className="item-description">
                  {item.year} <span className="spec">{item.type}</span>{" "}
                  {item.brand} <span className="spec">{item.resolution}</span>{" "}
                  TV
                </p>
              </div>
            )}
            {item.contentType === "cell" && (
              <div className="info">
                <h1 id="item-brand">{item.brand}</h1>
                <p className="item-description">
                  <span className="spec">{item.year}</span> cell phone with{" "}
                  <span className="spec">{item.platform.chipset}</span> chipset,{" "}
                  <span className="spec">{item.display.size} /</span>{" "}
                  <span className="spec">{item.display.type}</span> display and{" "}
                  <span className="spec">{item.platform.os}</span>
                </p>
                <p className="item-description">
                  <span className="spec">{item.memory.internal}</span> storage
                  with <span className="spec">{item.memory.ram}</span> ram
                </p>
              </div>
            )}
          </div>
          <h1 className="legend">{item.name}</h1>
        </div>
      ))}
    </Carousel>
  );
};

export default SlideShow;
