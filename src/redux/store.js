import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import cartModalSlice from "./features/cartModalSlice";
import msgModalSlice from "./features/msgModalSlice";
import statesSlice from "./features/statesSlice";
import registerSlice from "./features/users/registerSlice";
import loginSlice from "./features/users/loginSlice";
import userSlice from "./features/users/userSlice";
import logoutSlice from "./features/users/logoutSlice";
import userAccountSlice from "./features/users/userAccountSlice";
import updateSlice from "./features/users/updateSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartModal: cartModalSlice,
    msgModal: msgModalSlice,
    states: statesSlice,
    register: registerSlice,
    login: loginSlice,
    logout: logoutSlice,
    user: userSlice,
    account: userAccountSlice,
    updateUser: updateSlice,
  },
});

export default store;
