import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import cartModalSlice from "./features/cart/cartModalSlice";
import msgModalSlice from "./features/msgModalSlice";
import statesSlice from "./features/statesSlice";
import registerSlice from "./features/users/registerSlice";
import loginSlice from "./features/users/loginSlice";
import logoutSlice from "./features/users/logoutSlice";
import userAccountSlice from "./features/users/userAccountSlice";
import updateSlice from "./features/users/updateSlice";
import getAllProductSlice from "./features/product/getAllProductSlice";
import getOneProductSlice from "./features/product/getOneProductSlice";
import detailsSlice from "./features/detailsSlice";
import fullDescriptionModalSlice from "./features/fullDescriptionModalSlice";
import getReviewsSlice from "./features/reviews/getReviewsSlice";
import addReviewSlice from "./features/reviews/addReviewSlice";
import warningPopupSlice from "./features/warningPopupSlice";
import deleteReviewSlice from "./features/reviews/deleteReviewSlice";
import updReviewModalSlice from "./features/reviews/updReviewModalSlice";
import updateReviewSlice from "./features/reviews/updateReviewSlice";
import getRandomProductsSlice from "./features/product/getRandomProductsSlice";
import getLatestAccessoriesSlice from "./features/product/getLatestAccessoriesSlice";
import getLatestCellphonesSlice from "./features/product/getLatestCellphonesSlice";
import getLatestComputersSlice from "./features/product/getLatestComputersSlice";
import getLatestTvsSlice from "./features/product/getLatestTvsSlice";
import searchProductSlice from "./features/product/searchProductSlice";
import searchResultModalSlice from "./features/searchResultModalSlice";
import getFiltersSlice from "./features/filters/getFiltersSlice";
import filterSlice from "./features/filters/filterSlice";
import getFilteredTvProductsSlice from "./features/filters/getFilteredTvProductsSlice";
import getFilteredComputerProductsSlice from "./features/filters/getFilteredComputerProductsSlice";
import getFilteredCellphoneProductsSlice from "./features/filters/getFilteredCellphoneProductsSlice";
import getFilteredAccessoryProductsSlice from "./features/filters/getFilteredAccessoryProductsSlice";
import orderSlice from "./features/order/orderSlice";
import saveOrderSlice from "./features/order/saveOrderSlice";
import getOrdersSlice from "./features/order/getOrdersSlice";
import getOrderSlice from "./features/order/getOrderSlice";
import updatePaidStateSlice from "./features/order/updatePaidStateSlice";
import deleteModalSlice from "./features/deleteModalSlice";
import deleteOrderSlice from "./features/order/deleteOrderSlice";
import deleteSlice from "./features/users/deleteSlice";
import filterOptionPopupSlice from "./features/filters/filterOptionPopupSlice";
import updateIncomeSlice from "./features/income/updateIncomeSlice";
import oauthUserSlice from "./features/users/oauthUserSlice";
import savedRouteSlice from "./features/savedRouteSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartModal: cartModalSlice,
    msgModal: msgModalSlice,
    deleteModal: deleteModalSlice,
    fullDescriptionModal: fullDescriptionModalSlice,
    states: statesSlice,
    register: registerSlice,
    login: loginSlice,
    oauthUser: oauthUserSlice,
    logout: logoutSlice,
    account: userAccountSlice,
    updateUser: updateSlice,
    deleteUser: deleteSlice,
    products: getAllProductSlice,
    randomProducts: getRandomProductsSlice,
    latestAccessories: getLatestAccessoriesSlice,
    latestCellphones: getLatestCellphonesSlice,
    latestComputers: getLatestComputersSlice,
    latestTvs: getLatestTvsSlice,
    product: getOneProductSlice,
    searchProduct: searchProductSlice,
    searchResultModal: searchResultModalSlice,
    details: detailsSlice,
    addReview: addReviewSlice,
    reviews: getReviewsSlice,
    updateReview: updateReviewSlice,
    deleteReview: deleteReviewSlice,
    updReviewModal: updReviewModalSlice,
    warningPopup: warningPopupSlice,
    getFilters: getFiltersSlice,
    filter: filterSlice,
    filteredTvProducts: getFilteredTvProductsSlice,
    filteredComputerProducts: getFilteredComputerProductsSlice,
    filteredCellphoneProducts: getFilteredCellphoneProductsSlice,
    filteredAccessoryProducts: getFilteredAccessoryProductsSlice,
    filterOptionPopup: filterOptionPopupSlice,
    order: orderSlice,
    saveOrder: saveOrderSlice,
    getOrders: getOrdersSlice,
    getOrder: getOrderSlice,
    updatePaidState: updatePaidStateSlice,
    deleteOrder: deleteOrderSlice,
    updateIncome: updateIncomeSlice,
    savedRoute: savedRouteSlice,
  },
});

export default store;
