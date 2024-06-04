import React from "react";
import { useNavigate } from "react-router-dom";

const LatestContentCard = ({ item, contentType }) => {
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

export default LatestContentCard;
