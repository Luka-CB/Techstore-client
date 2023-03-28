import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/products/Products";
import { getProducts } from "../redux/actions/productActions";

const CellPhones = () => {
  const { isLoading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ route: "cellphones" }));
  }, []);

  return (
    <div>
      <Products
        content={products}
        contentType="cellphones"
        isLoading={isLoading}
      />
    </div>
  );
};

export default CellPhones;
