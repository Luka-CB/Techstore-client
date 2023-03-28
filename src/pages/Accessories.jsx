import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/products/Products";
import { getProducts } from "../redux/actions/productActions";

const Accessories = () => {
  const { isLoading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ route: "accessories" }));
  }, []);

  return (
    <div>
      <Products
        content={products}
        contentType="accessories"
        isLoading={isLoading}
      />
    </div>
  );
};

export default Accessories;
