import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/products/Products";
import { getProducts } from "../redux/actions/productActions";
import Head from "../components/Head";

const CellPhones = () => {
  const { isLoading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ route: "cellphones" }));
  }, []);

  return (
    <div>
      <Head title="Cell Phones" />
      <Products
        content={products}
        contentType="cellphones"
        isLoading={isLoading}
      />
    </div>
  );
};

export default CellPhones;
