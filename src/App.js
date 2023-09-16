import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignIn } from "./pages/signin-singup/SignIn";
import { SignUp } from "./pages/signin-singup/SignUp";
import { Home } from "./pages/home/Home";
import { VerifyEmail } from "./pages/verifyEmail/verifyEmail";
import { Profile } from "./pages/profile/Profile";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { Cart } from "./pages/cart/Cart";
import { useEffect } from "react";
import { getCatagoriesAction } from "./action/catagoryAction";
import { useDispatch } from "react-redux";
import { getProductsAction } from "./action/productAction";
import { ProductLandingPage } from "./pages/product/ProductLandingPage";
import { ProductListing } from "./pages/product/ProductListing";
import { AutoRedirect } from "./components/autoRedirect/AutoRedirect";
function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatagoriesAction());
    dispatch(getProductsAction());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <AutoRedirect>
              <SignIn />
            </AutoRedirect>
          }
        />
        <Route path="/user-verification" element={<VerifyEmail />} />
        <Route path={"product/:slug/"} element={<ProductLandingPage />} />
        <Route path={"items/:slug/:_id"} element={<ProductListing />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <AutoRedirect>
              <Cart />
            </AutoRedirect>
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
