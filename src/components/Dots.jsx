const Dots = ({ color }) => {
  return (
    <div className="dots-cont">
      <span
        className="dot dot-1"
        style={{ backgroundColor: !color ? "#ffa1cf" : color }}
      ></span>
      <span
        className="dot dot-2"
        style={{ backgroundColor: !color ? "#ffa1cf" : color }}
      ></span>
      <span
        className="dot dot-3"
        style={{ backgroundColor: !color ? "#ffa1cf" : color }}
      ></span>
    </div>
  );
};

export default Dots;
