export const SpinnerButton = ({ color, width = 35, height = 35 }) => {
  const style = {
    borderTopColor: color,
    borderBottomColor: color,
    width,
    height,
  };

  return <div className="spinner-button" style={style}></div>;
};

export const Spinner = ({ color, width = 35, height = 35 }) => {
  const style = {
    borderTopColor: color,
    borderBottomColor: color,
    width,
    height,
  };

  return (
    <div className="spinner-wrapper">
      <div className="spinner" style={style}></div>
    </div>
  );
};
