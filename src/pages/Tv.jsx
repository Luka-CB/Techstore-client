import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/products/Products";
import { getProducts } from "../redux/actions/productActions";

const Tv = () => {
  const { isLoading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ route: "tvs" }));
  }, []);

  return (
    <div>
      <Products content={products} contentType="tvs" isLoading={isLoading} />
    </div>
  );
};

export default Tv;
