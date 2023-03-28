import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFullDescriptionModal } from "../../../redux/features/fullDescriptionModalSlice";
import { toggleIsModalOpen } from "../../../redux/features/statesSlice";
import FullDescriptionModal from "./FullDescriptionModal";

const ProductInfo = ({ info, contentType }) => {
  const { isFullDescriptionModalOpen } = useSelector(
    (state) => state.fullDescriptionModal
  );

  const dispatch = useDispatch();

  const handleOpenDescriptionModal = (e) => {
    e.stopPropagation();
    dispatch(toggleFullDescriptionModal(true));
    dispatch(toggleIsModalOpen(true));
  };

  return (
    <div className="product-info-container">
      <h1 id="name">{info.name}</h1>
      <h3 id="sub-info">
        Brand: <span>{info.brand}</span>
      </h3>

      {contentType === "tvs" && (
        <>
          <h3 id="sub-info">
            Type: <span>{info.type}</span>
          </h3>
          <h3 id="sub-info">
            Resolution: <span>{info.resolution}</span>
          </h3>
          <h3 id="sub-info">
            Year: <span>{info.year}</span>
          </h3>
        </>
      )}

      {contentType === "computers" && (
        <>
          <h3 id="sub-info">
            Type: <span>{info.type}</span>
          </h3>
          <h3 id="sub-info">
            Price: <span>${info.price}</span>
          </h3>
        </>
      )}

      {contentType === "cellphones" && (
        <>
          <h3 id="sub-info">
            Year: <span>{info.year}</span>
          </h3>
          <h3 id="sub-info">
            Price: <span>${info.price}</span>
          </h3>
        </>
      )}

      {contentType === "accessories" && (
        <>
          <h3 id="sub-info">
            Category: <span>{info.category}</span>
          </h3>
          <h3 id="sub-info">
            Price: <span>${info.price}</span>
          </h3>
        </>
      )}

      {contentType !== "tvs" && (
        <h5 id="see-full" onClick={(e) => handleOpenDescriptionModal(e)}>
          See Full Description
        </h5>
      )}

      {isFullDescriptionModalOpen && (
        <FullDescriptionModal info={info} contentType={contentType} />
      )}
    </div>
  );
};

export default ProductInfo;
