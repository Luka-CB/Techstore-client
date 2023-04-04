import { useSelector } from "react-redux";

const PickedCartProducts = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((item) => (
        <tr key={item.key}>
          <td className="item">
            <div className="image">
              <img src={item.images[0].imageUrl} alt={item.name} />
            </div>
          </td>
          <td className="item name">{item.name}</td>
          {item.contentType === "tvs" ? (
            <td className="item color-size">{item.attr.size}"</td>
          ) : (
            <td className="item color-size">
              <div
                title={item.attr.name}
                id="color"
                style={{ backgroundColor: item.attr.code }}
              ></div>
            </td>
          )}
          <td className="item">{item.inCartQty}</td>
          <td className="item">
            ${item.price} x {item.inCartQty} = ${item.price * item.inCartQty}
          </td>
        </tr>
      ))}
    </>
  );
};

const PickedProduct = ({ item }) => {
  const priceSum = item.price * item.pickedQty;

  return (
    <tr>
      <td className="item">
        <div className="image">
          <img src={item.images[0].imageUrl} alt={item.name} />
        </div>
      </td>
      <td className="item name">{item.name}</td>
      {item.contentType === "tvs" ? (
        <td className="item color-size">{item.attr.size}"</td>
      ) : (
        <td className="item color-size">
          <div
            title={item.attr.name}
            id="color"
            style={{ backgroundColor: item.attr.code }}
          ></div>
        </td>
      )}
      <td className="item">{item.pickedQty}</td>
      <td className="item">
        ${item.price} x {item.pickedQty} = ${priceSum.toFixed(2)}
      </td>
    </tr>
  );
};

const OrderInfo = ({ data, originRoute }) => {
  const { shippingData } = useSelector((state) => state.order);

  return (
    <div className="order-info">
      <div className="row1">
        <div className="row1-col1">
          <div className="keys">
            <h4 className="key">First Name: </h4>
            <h4 className="key">Last Name:</h4>
            <h4 className="key">Phone Number: </h4>
            <h4 className="key">Email Address: </h4>
          </div>
          <div className="values">
            <p className="value">{shippingData.firstName}</p>
            <p className="value">{shippingData.lastName}</p>
            <p className="value">{shippingData.phoneNumber}</p>
            <p className="value">{shippingData.emailAddress}</p>
          </div>
        </div>
        <div className="row1-col2">
          <div className="keys">
            <h4 className="key">Country:</h4>
            <h4 className="key">City:</h4>
            <h4 className="key">Street:</h4>
            <h4 className="key">Address:</h4>
          </div>
          <div className="values">
            <p className="value">{shippingData.country}</p>
            <p className="value">{shippingData.city}</p>
            <p className="value">{shippingData.street}</p>
            <p className="value">{shippingData.address}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row2">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th className="name">Name</th>
              <th className="color-size">Color/Size</th>
              <th>QTY</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {originRoute === "/cart" ? (
              <PickedCartProducts cartItems={data} />
            ) : (
              <PickedProduct item={data} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderInfo;
