const MyOrderInfo = ({ order }) => {
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
            <p className="value">{order.shippingData?.firstName}</p>
            <p className="value">{order.shippingData?.lastName}</p>
            <p className="value">{order.shippingData?.phoneNumber}</p>
            <p className="value">{order.shippingData?.emailAddress}</p>
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
            <p className="value">{order.shippingData?.country}</p>
            <p className="value">{order.shippingData?.city}</p>
            <p className="value">{order.shippingData?.street}</p>
            <p className="value">{order.shippingData?.address}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row2">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Color/Size</th>
              <th>QTY</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items?.map((item) => {
              const priceSum = item.price * item.qty;

              return (
                <tr key={item._id}>
                  <td className="item">
                    <div className="image">
                      <img src={item.imageUrl} alt={item.name} />
                    </div>
                  </td>
                  <td className="item name">{item.name}</td>
                  {item.itemType === "tvs" ? (
                    <td className="item">{item.size}"</td>
                  ) : (
                    <td className="item">
                      <div
                        title={item.color?.name}
                        id="color"
                        style={{ backgroundColor: item.color?.code }}
                      ></div>
                    </td>
                  )}
                  <td className="item">{item.qty}</td>
                  <td className="item">
                    ${item.price} x {item.qty} = ${priceSum.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderInfo;
