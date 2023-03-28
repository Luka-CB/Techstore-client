import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductImages } from "../../redux/features/detailsSlice";

const ProductImages = ({ images, contentType }) => {
  const [displayImage, setDisplayImage] = useState({});

  const { pickedAttr, productImages } = useSelector((state) => state.details);

  const dispatch = useDispatch();

  const imagesFiltered = images?.filter(
    (img) => img.colorName === pickedAttr?.name
  );

  useEffect(() => {
    if (imagesFiltered) {
      const mainImg = imagesFiltered?.find((img) => img.isMain);
      if (mainImg) {
        setDisplayImage({
          _id: mainImg._id,
          url: mainImg.imageUrl,
        });
      } else {
        const mainImg = images?.find((img) => img.isMain);
        setDisplayImage({
          _id: contentType === "tvs" ? mainImg?._id : imagesFiltered[0]?._id,
          url:
            contentType === "tvs"
              ? mainImg?.imageUrl
              : imagesFiltered[0]?.imageUrl,
        });
      }
    }
  }, [pickedAttr, images]);

  useEffect(() => {
    if (images && imagesFiltered) {
      const galleryimages = contentType === "tvs" ? images : imagesFiltered;
      dispatch(setProductImages(galleryimages));
    }
  }, [images, pickedAttr, dispatch]);

  return (
    <div className="product-images-container">
      <div className="thumbnails">
        {productImages?.map((img, i) => (
          <div
            className={
              img._id === displayImage._id
                ? "thumbnail-wrapper-active"
                : "thumbnail-wrapper"
            }
            key={img._id}
            onClick={() =>
              setDisplayImage({
                _id: img._id,
                url: img.imageUrl,
              })
            }
          >
            <div className="thumbnail">
              <img src={img.imageUrl} alt={`Thumbnail #${i}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="display-image">
        <div className="display-image-wrapper">
          <img src={displayImage.url} alt="Display Image" />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
