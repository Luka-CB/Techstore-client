import React from "react";
import Products from "../components/Products";
import { computers } from "../data";

const Computers = () => {
  return (
    <div>
      <Products content={computers} contentType="computer" />
    </div>
  );
};

export default Computers;
