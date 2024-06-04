import { useEffect } from "react";

const useWindowScroll = (direction) => {
  if (direction === "up") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }
};

export default useWindowScroll;
