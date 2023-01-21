import React from "react";
import Products from "../components/products/Products";
import { cellPhones } from "../data";

const CellPhones = () => {
  return (
    <div>
      <Products content={cellPhones} contentType="cell" />
    </div>
  );
};

export default CellPhones;
