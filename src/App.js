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
import { Checkout } from "./pages/checkout/Checkout";
import { getPaymentMethodAction } from "./action/paymentMethodAction";
import { OrderConfirmationPage } from "./pages/orderConfirmation/OrderConfirmationPage";
import { ResetPassword } from "./pages/signin-singup/ResetPassword";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatagoriesAction());
    dispatch(getProductsAction());
    dispatch(getPaymentMethodAction());
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <AutoRedirect>
              <Home />
            </AutoRedirect>
          }
        />
        <Route
          path="/signin"
          element={
            <AutoRedirect>
              <SignIn />
            </AutoRedirect>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-verification" element={<VerifyEmail />} />
        <Route
          path={"product/:slug/"}
          element={
            <AutoRedirect>
              <ProductLandingPage />
            </AutoRedirect>
          }
        />
        <Route
          path={"items/:slug/:_id"}
          element={
            <AutoRedirect>
              <ProductListing />
            </AutoRedirect>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path={"/cart/order/:_id"}
          element={
            <PrivateRoute>
              <OrderConfirmationPage />
            </PrivateRoute>
          }
        />
        <Route
          path="cart/checkout"
          element={
            <PrivateRoute>
              <Elements stripe={stripePromise}>
                <Checkout />
              </Elements>
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
