import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCaretDown } from "react-icons/ai";
import {
  addFilter,
  clearFilter,
  removeFilter,
} from "../../../redux/features/filters/filterSlice";
import { toggleFilterOptionPopup } from "../../../redux/features/filters/filterOptionPopupSlice";
import { useLocation, useNavigate } from "react-router-dom";

const FilterContentSm = ({ filters, pickedFilters, contentType }) => {
  const [optionPopupIndex, setOptionPopupIndex] = useState(null);

  const { isFilterOptionPopupOpen } = useSelector(
    (state) => state.filterOptionPopup
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pickedFilters.length > 0 && pathname === `/${contentType}`) {
      setTimeout(() => {
        navigate(`/filtered/${contentType}`);
      }, 500);
    }
  }, [pickedFilters]);

  const handleShowOptionPopup = (i) => {
    setOptionPopupIndex(i);
    dispatch(toggleFilterOptionPopup(true));
  };

  const handleAddFilter = ({ title, value }) => {
    dispatch(
      addFilter({
        title,
        value,
      })
    );
    dispatch(toggleFilterOptionPopup(false));
  };

  return (
    <div className="filter-wrapper-sm">
      <div className={filters?.length > 3 ? "filters-long" : "filters"}>
        {filters?.map((filter, i) => (
          <div className="filter-wrapper" key={filter.title}>
            <div
              className="filter-title"
              onClick={() => handleShowOptionPopup(i)}
            >
              <AiOutlineCaretDown id="exp-icon" />
              <span>{filter.title}</span>
            </div>
            {isFilterOptionPopupOpen && optionPopupIndex === i ? (
              <div
                className="filter-option-container"
                onClick={(e) => e.stopPropagation()}
              >
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
                          handleAddFilter({
                            title: filter.title,
                            value,
                          })
                        }
                      >
                        <span>
                          {filter.title === "sizes" ? value + '"' : value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default FilterContentSm;
