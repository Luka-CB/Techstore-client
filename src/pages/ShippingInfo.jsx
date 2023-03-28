import { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TiCancelOutline, TiArrowBackOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearPickedProduct,
  clearShippingData,
  setShippingData,
} from "../redux/features/order/orderSlice";

const ShippingInfo = () => {
  const [firstName, setFirstName] = useState(
    localStorage.getItem("techstoreShippingData")
      ? JSON.parse(localStorage.getItem("techstoreShippingData")).firstName
      : ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("techstoreShippingData")
      ? JSON.parse(localStorage.getItem("techstoreShippingData")).lastName
      : ""
  );
  const [country, setCountry] = useState(
    localStorage.getItem("techstoreShippingData")
      ? JSON.parse(localStorage.getItem("techstoreShippingData")).country
      : ""
  );
  const [city, setCity] = useState(
    localStorage.getItem("techstoreShippingData")
      ? JSON.parse(localStorage.getItem("techstoreShippingData")).city
      : ""
  );
  const [street, setStreet] = useState(
    localStorage.getItem("techstoreShippingData")
      ? JSON.parse(localStorage.getItem("techstoreShippingData")).street
      : ""
  );
  const [address, setAddress] = useState(
    localStorage.getItem("techstoreShippingData")
      ? JSON.parse(localStorage.getItem("techstoreShippingData")).address
      : ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("techstoreShippingData")
      ? JSON.parse(localStorage.getItem("techstoreShippingData")).phoneNumber
      : ""
  );
  const [emailAddress, setEmailAddress] = useState(
    localStorage.getItem("techstoreShippingData")
      ? JSON.parse(localStorage.getItem("techstoreShippingData")).emailAddress
      : ""
  );

  const { originRoute } = useSelector((state) => state.order);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      setShippingData({
        firstName,
        lastName,
        country,
        city,
        street,
        address,
        phoneNumber,
        emailAddress,
      })
    );
  }, [
    firstName,
    lastName,
    country,
    city,
    street,
    address,
    phoneNumber,
    emailAddress,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  const handleCancel = () => {
    dispatch(clearShippingData());
    navigate(originRoute);
    dispatch(clearPickedProduct());
  };

  return (
    <div className="order-info-container">
      <h1>Please Fill Out These Fields to Order!</h1>
      <form onSubmit={handleSubmit}>
        <div className="col1">
          <div className="input-box-col1">
            <label>
              First Name <span>*</span>
            </label>
            <input
              className="col1-input"
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-box-col1">
            <label>
              Last Name <span>*</span>
            </label>
            <input
              className="col1-input"
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="col2">
          <div className="input-box-col2">
            <label>
              Country <span>*</span>
            </label>
            <input
              className="col2-input"
              type="text"
              placeholder="Country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="input-box-col2">
            <label>
              City <span>*</span>
            </label>
            <input
              className="col2-input"
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input-box-col2">
            <label>
              Street <span>*</span>
            </label>
            <input
              className="col2-input"
              type="text"
              placeholder="Street"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="input-box-col2">
            <label>
              Address <span>*</span>
            </label>
            <input
              className="col2-input"
              type="text"
              placeholder="Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="col3">
          <div className="input-box-col3">
            <label>
              Phone Number <span>*</span>
            </label>
            <input
              className="col3-input"
              type="number"
              placeholder="Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input-box-col3">
            <label>
              Email Address <span>*</span>
            </label>
            <input
              className="col3-input"
              type="email"
              placeholder="Email Address"
              required
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="btns">
          <div className="left-btns">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              <TiArrowBackOutline id="back-icon" />
              <span>Go Back</span>
            </button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              <TiCancelOutline id="cancel-icon" />
              <span>Cancel</span>
            </button>
          </div>
          <div className="right-btns">
            <button type="submit" className="checkout-btn">
              <MdOutlineShoppingBag id="checkout-icon" />
              <span>Proceed to Checkout</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
