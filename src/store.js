import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
// these will store data in webstorage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //default localstorage for web
import userReducer from "./redux/userSlice";
const userPresistConfig = {
  //this is a configurations
  key: "userInfo",
  storage,
};

const presistedUserReducer = persistReducer(userPresistConfig, userReducer);
const store = configureStore({
  reducer: {
    userInfo: presistedUserReducer, //this is for the user data stored in the local storage
    testUser: userReducer, //this data is removed every time browser reloads
  },
});
const persistor = persistStore(store);
export { store, persistor };
