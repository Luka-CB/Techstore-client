import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ content, contentType }) => {
  return (
    <div className="products-container">
      <div className="filters">
        <h2>Here Goes Filters</h2>
      </div>
      <div className="cards">
        {content.map((item) => (
          <ProductCard key={item._id} data={item} contentType={contentType} />
        ))}
      </div>
    </div>
  );
};

export default Products;
