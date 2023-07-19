import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux"; //for redux-toolkot
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// import { PersistGate } from "redux-persist/integration/react"; //for reduz-persistor  which is for localstorageimport "bootstrap/dist/css/bootstrap.min.css";
import { persistor, store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
