import { BiSearch } from "react-icons/bi";

const SearchHome = () => {
  return (
    <div className="search-container">
      <div className="search-box">
        <p id="site-description">
          Aliquam convallis nisi ut tortor venenatis lacinia. Ut at commodo
          lacus. Cras sed nunc efficitur, fermentum felis vitae, egestas tortor.
          Pellentesque finibus leo quam, ut suscipit urna fringilla eu. Praesent
          ullamcorper turpis et mauris tristique ullamcorper. In hac habitasse
          platea dictumst. In tristique, velit vestibulum viverra condimentum,
          sapien est tempor turpis, at vehicula lorem sapien vel urna. Ut sapien
          odio, vestibulum a turpis at, vulputate pulvinar diam. Mauris at nunc
          nisl.
        </p>
        <h3 id="search-text">Search for Technologies You Desire!</h3>
        <div className="search-input-box">
          <div className="search-icon">
            <BiSearch id="glass-icon" />
          </div>
          <input
            type="search"
            id="search-input"
            placeholder="What are you looking for?"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchHome;
