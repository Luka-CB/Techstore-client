import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import {
  addFilter,
  clearFilter,
  removeFilter,
} from "../../../redux/features/filters/filterSlice";

const FilterContent = ({ pickedFilters, filters, contentType }) => {
  const [filterValueIndex, setFilterValueIndex] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleShowFilterValues = (i) => {
    if (filterValueIndex.includes(i)) {
      const filteredFilterValueIndex = filterValueIndex.filter(
        (fvi) => fvi !== i
      );
      setFilterValueIndex(filteredFilterValueIndex);
    } else {
      setFilterValueIndex((prev) => [...prev, i]);
    }
  };

  useEffect(() => {
    if (pickedFilters.length > 0 && pathname === `/${contentType}`) {
      setTimeout(() => {
        navigate(`/filtered/${contentType}`);
      }, 500);
    }
  }, [pickedFilters]);

  return (
    <div className="filter-wrapper">
      <div className="picked-filters">
        <button
          id="clear-btn"
          onClick={() => dispatch(clearFilter())}
          disabled={pickedFilters.length === 0}
        >
          Clear All
        </button>
        <div className="picked-value-wrapper">
          {pickedFilters?.map((pf) => (
            <div
              title="Double click to remove"
              className="picked-value"
              key={pf.value}
              onDoubleClick={() => dispatch(removeFilter(pf.value))}
            >
              <span>{pf.title === "sizes" ? pf.value + '"' : pf.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="filters">
        {filters?.map((filter, i) => (
          <div className="filter-wrapper" key={filter.title}>
            <div
              className="filter-title"
              onClick={() => handleShowFilterValues(i)}
            >
              {filterValueIndex.includes(i) ? (
                <AiOutlineCaretDown id="exp-icon" />
              ) : (
                <AiFillCaretRight id="exp-icon" />
              )}
              <span>{filter.title}</span>
            </div>

            {filterValueIndex.includes(i) ? (
              <div
                className={
                  filter.title === "sizes"
                    ? "filter-size-values"
                    : "filter-values"
                }
              >
                {filter.values?.map((value) => {
                  const isActive = pickedFilters?.some(
                    (pf) => pf.value === value
                  );

                  return (
                    <div
                      className={isActive ? "value-active" : "value"}
                      key={value}
                      onClick={() =>
                        dispatch(
                          addFilter({
                            title: filter.title,
                            value,
                          })
                        )
                      }
                    >
                      <span>
                        {filter.title === "sizes" ? value + '"' : value}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterContent;
