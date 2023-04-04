import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item, contentType }) => {
  const navigate = useNavigate();

  return (
    <div
      className={contentType === "cellphones" ? "cell-card" : "card"}
      onClick={() => navigate(`/${contentType}/details/${item._id}`)}
    >
      <div className="card-image">
        <img src={item.images?.imageUrl} alt={item.name} id="card-img" />
      </div>
      <div className="body">
        <h3 id="name">{item.name}</h3>
        {contentType === "tvs" && (
          <p id="spec">
            <b>
              {item.type} {item.resolution}
            </b>{" "}
            TV
          </p>
        )}
        {contentType === "computers" && (
          <>
            <p id="price">${item.price}</p>
            <p id="spec">
              <b>
                {item.storage?.size} {item.storage?.type}
              </b>{" "}
              Storage with <b>{item.ram}</b> Ram
            </p>
          </>
        )}
        {contentType === "cellphones" && (
          <>
            <p id="price">${item.price}</p>
            <h4 id="year">{item.year}</h4>
            <p id="spec">
              <b>{item.display?.size}</b> Display with Memory of{" "}
              <b>{item.memory?.internal}</b> Internal and{" "}
              <b>{item.memory?.ram}</b> Ram
            </p>
          </>
        )}

        {contentType === "accessories" && (
          <>
            <p id="price">${item.price}</p>
            <p id="spec">{item.category}</p>
          </>
        )}
      </div>
    </div>
  );
};

const LastAdded = ({ content, contentType }) => {
  const [windowWidth, setWindowWidth] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [window]);

  return (
    <div className="lastadded-container">
      <div className="content-wrapper">
        {contentType === "tvs" && <div className="right-half-bg"></div>}
        {contentType === "computers" && <div className="left-half-bg"></div>}
        {contentType === "cellphones" && <div className="right-half-bg"></div>}
        {contentType === "accessories" && <div className="left-half-bg"></div>}
        {windowWidth < 900 && window.innerWidth < 900 ? (
          <div className="content">
            {content.slice(0, 1).map((item) => (
              <Card key={item._id} item={item} contentType={contentType} />
            ))}
          </div>
        ) : windowWidth < 1100 && window.innerWidth < 1100 ? (
          <div className="content">
            {content.slice(0, 2).map((item) => (
              <Card key={item._id} item={item} contentType={contentType} />
            ))}
          </div>
        ) : (
          <div className="content">
            {content.map((item) => (
              <Card key={item._id} item={item} contentType={contentType} />
            ))}
          </div>
        )}

        <div
          className="see-all-link"
          onClick={() => navigate(`/${contentType}`)}
        >
          <p id="text">
            See Full List of <b>{contentType}</b>
          </p>
          <span id="chevrons-icon">{">>>"}</span>
        </div>
      </div>
    </div>
  );
};

export default LastAdded;
