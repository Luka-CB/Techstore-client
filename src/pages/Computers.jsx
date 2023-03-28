import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/products/Products";
import { getProducts } from "../redux/actions/productActions";

const Computers = () => {
  const { isLoading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ route: "computers" }));
  }, []);

  return (
    <div>
      <Products
        content={products}
        contentType="computers"
        isLoading={isLoading}
      />
    </div>
  );
};

export default Computers;
