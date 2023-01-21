import Products from "../components/products/Products";
import { tvs } from "../data";

const Tv = () => {
  return (
    <div>
      <Products content={tvs} contentType="tv" />
    </div>
  );
};

export default Tv;
