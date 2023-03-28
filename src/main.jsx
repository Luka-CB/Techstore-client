import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from "./App";
import "./assets/styles/index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PayPalScriptProvider
          options={{
            "client-id":
              "Ad26DOqTF_fTcnD-bzLadJZc3jjbXATDrCAxi4UQFdaAfJ6wUmb7rpUR_eAH6sAUbqDIgw3R4spwGr6L",
          }}
        >
          <App />
        </PayPalScriptProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
