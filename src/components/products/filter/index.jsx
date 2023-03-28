import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilters } from "../../../redux/actions/filterActions";
import useWindowWidth from "../../../hooks/windowWidth";
import FilterContentSm from "./FilterContentSm";
import FilterContent from "./FilterContent";

const Filters = ({ contentType }) => {
  const windowWidth = useWindowWidth();

  const { filters } = useSelector((state) => state.getFilters);
  const { pickedFilters } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilters(contentType));
  }, [dispatch, contentType]);

  return (
    <>
      <h1 id="title">Filters</h1>
      {windowWidth < 800 && window.innerWidth < 800 ? (
        <FilterContentSm
          filters={filters}
          pickedFilters={pickedFilters}
          contentType={contentType}
        />
      ) : (
        <FilterContent
          filters={filters}
          pickedFilters={pickedFilters}
          contentType={contentType}
        />
      )}
    </>
  );
};

export default Filters;
