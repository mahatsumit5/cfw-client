import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
// these will store data in webstorage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //default localstorage for web
import userReducer from "./redux/userSlice";
import catReducer from "./redux/catagorySlice";
import mainCatalogueReducer from "./redux/mainCatalogueSlice";
import productReducer from "./redux/productSlice";
import displayReducer from "./redux/displayDataSlice";
import cartReducer from "./redux/cartSlice";
import modalReducer from "./redux/modalSlice";
import backdropReducer from "./redux/backdropLoader";
import paymentReducer from "./redux/paymentSlice";
import orderReducer from "./redux/orderSlice";
import snackbarReducer from "./redux/snackbarSlice";
const userPresistConfig = {
  //this is a configurations
  key: "userInfo",
  storage,
};
const cartPresistConfig = {
  key: "cartInfo",
  storage,
};
const orderPresistConfig = {
  key: "orderInfo",
  storage,
};

const presistedUserReducer = persistReducer(userPresistConfig, userReducer);
const presistedCartReducer = persistReducer(cartPresistConfig, cartReducer);
const presistedOrderReducer = persistReducer(cartPresistConfig, orderReducer);
const store = configureStore({
  reducer: {
    userInfo: presistedUserReducer, //this is for the user data stored in the local storage
    testUser: userReducer, //this data is removed every time browser reloads
    catagoryInfo: catReducer,
    productInfo: productReducer,
    paymentInfo: paymentReducer,
    display: displayReducer,
    cart: presistedCartReducer,
    modalInfo: modalReducer,
    mainCatalogueInfo: mainCatalogueReducer,
    orderInfo: presistedOrderReducer,
    snackBar: snackbarReducer,
    backDrop: backdropReducer,
  },
});
const persistor = persistStore(store);
export { store, persistor };
