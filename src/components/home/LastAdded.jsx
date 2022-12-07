import { useNavigate } from "react-router-dom";

const LastAdded = ({ content, contentType }) => {
  const navigate = useNavigate();

  return (
    <div className="lastadded-container">
      <div className="content-wrapper">
        {contentType === "tv" && <div className="right-half-bg"></div>}
        {contentType === "computer" && <div className="left-half-bg"></div>}
        {contentType === "cell" && <div className="right-half-bg"></div>}
        <div className="content">
          {content.map((item) => (
            <div
              className={contentType === "cell" ? "cell-card" : "card"}
              key={item._id}
            >
              <div className="card-image">
                <img src={item.images[2]} alt={item.name} id="card-img" />
              </div>
              <div className="body">
                <h3 id="name">{item.name}</h3>
                {contentType === "tv" && (
                  <p id="spec">
                    <b>
                      {item.type} {item.resolution}
                    </b>{" "}
                    TV
                  </p>
                )}
                {contentType === "computer" && (
                  <p id="spec">
                    <b>
                      {item.storage.size} {item.storage.type}
                    </b>{" "}
                    Storage with <b>{item.memory}</b> Ram
                  </p>
                )}
                {contentType === "cell" && (
                  <>
                    <h4 id="year">{item.year}</h4>
                    <p id="spec">
                      <b>{item.display.size}</b> Display with Memory of{" "}
                      <b>{item.memory.internal}</b> Internal and{" "}
                      <b>{item.memory.ram}</b> Ram
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="see-all-link"
          onClick={() =>
            navigate(
              contentType === "tv"
                ? "/tvs"
                : contentType === "computer"
                ? "/computers"
                : contentType === "cell"
                ? "/cellphones"
                : contentType === "accessorie"
                ? "/accessories"
                : "/"
            )
          }
        >
          <p id="text">
            See Full List of{" "}
            <b>
              {contentType}
              {contentType === "cell" ? "phones" : "s"}
            </b>
          </p>
          <span id="chevrons-icon">{">>>"}</span>
        </div>
      </div>
    </div>
  );
};

export default LastAdded;
