import { useEffect } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearFilter } from "../redux/features/filters/filterSlice";
import {
  getFilteredAccessoryProducts,
  getFilteredCellphoneProducts,
  getFilteredComputerProducts,
  getFilteredTvProducts,
  getFilters,
} from "../redux/actions/filterActions";
import {
  usePickedAccessoryFilters,
  usePickedCellphoneFilters,
  usePickedComputerFilters,
  usePickedTvFilters,
} from "../utils/usePickedFilters";
import Products from "../components/products/Products";

const FilteredProducts = () => {
  const { pickedFilters } = useSelector((state) => state.filter);
  const { isLoading: isFilteredTvLoading, filteredTvProducts } = useSelector(
    (state) => state.filteredTvProducts
  );
  const { isLoading: isFilteredComputerLoading, filteredComputerProducts } =
    useSelector((state) => state.filteredComputerProducts);
  const { isLoading: isFilteredCellphoneLoading, filteredCellphoneProducts } =
    useSelector((state) => state.filteredCellphoneProducts);
  const { isLoading: isFilteredAccessoryLoading, filteredAccessoryProducts } =
    useSelector((state) => state.filteredAccessoryProducts);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const contentType = pathname.split("/")[2];

  useEffect(() => {
    dispatch(getFilters(contentType));
  }, [dispatch]);

  useEffect(() => {
    if (pickedFilters.length > 0) {
      if (contentType === "tvs") {
        const { brand, type, size } = usePickedTvFilters(pickedFilters);
        dispatch(
          getFilteredTvProducts({
            route: contentType,
            brand: brand && brand.value,
            type: type && type.value,
            size: size && size.value,
          })
        );
      } else if (contentType === "computers") {
        const { brand, type, storageType, storageSize, ram } =
          usePickedComputerFilters(pickedFilters);

        dispatch(
          getFilteredComputerProducts({
            brand: brand && brand.value,
            type: type && type.value,
            storageType: storageType && storageType.value,
            storageSize: storageSize && storageSize.value,
            ram: ram && ram.value,
          })
        );
      } else if (contentType === "cellphones") {
        const { brand, internalStorage, ram } =
          usePickedCellphoneFilters(pickedFilters);

        dispatch(
          getFilteredCellphoneProducts({
            brand: brand && brand.value,
            internalStorage: internalStorage && internalStorage.value,
            ram: ram && ram.value,
          })
        );
      } else {
        const { brand, category } = usePickedAccessoryFilters(pickedFilters);

        dispatch(
          getFilteredAccessoryProducts({
            brand: brand && brand.value,
            category: category && category.value,
          })
        );
      }
    }
  }, [pickedFilters, dispatch, contentType]);

  const handleGoBack = () => {
    navigate(-1);
    dispatch(clearFilter());
  };

  return (
    <div className="filtered-products-container">
      <BsFillArrowLeftCircleFill
        id="back-icon"
        title="Go Back"
        onClick={handleGoBack}
      />
      <div className="content">
        {contentType === "tvs" ? (
          <Products
            content={filteredTvProducts}
            contentType={contentType}
            isLoading={isFilteredTvLoading}
          />
        ) : null}
        {contentType === "computers" ? (
          <Products
            content={filteredComputerProducts}
            contentType={contentType}
            isLoading={isFilteredComputerLoading}
          />
        ) : null}
        {contentType === "cellphones" ? (
          <Products
            content={filteredCellphoneProducts}
            contentType={contentType}
            isLoading={isFilteredCellphoneLoading}
          />
        ) : null}
        {contentType === "accessories" ? (
          <Products
            content={filteredAccessoryProducts}
            contentType={contentType}
            isLoading={isFilteredAccessoryLoading}
          />
        ) : null}
      </div>
    </div>
  );
};

export default FilteredProducts;
