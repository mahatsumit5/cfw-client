import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignIn } from "./pages/signin-singup/SignIn";
import { SignUp } from "./pages/signin-singup/SignUp";
import { Home } from "./pages/home/Home";
import { VerifyEmail } from "./pages/verifyEmail/verifyEmail";
import { Profile } from "./pages/profile/Profile";
import { Cart } from "./pages/cart/Cart";
import { useEffect } from "react";
import { getCatagoriesAction } from "./action/catagoryAction";
import { useDispatch } from "react-redux";
import { getProductsAction } from "./action/productAction";
import { ProductLandingPage } from "./pages/product/ProductLandingPage";
import { ProductListing } from "./pages/product/ProductListing";
import { Checkout } from "./pages/checkout/Checkout";
import { getPaymentMethodAction } from "./action/paymentMethodAction";
import { OrderConfirmationPage } from "./pages/orderConfirmation/OrderConfirmationPage";
import { ResetPassword } from "./pages/signin-singup/ResetPassword";
import { StripeCheckout } from "./pages/checkout/StripeCheckout";
import { Loading } from "./pages/loading/Loading";
import { BackdropLoader } from "./components/backdropLoader/BackdropLoader";
import { SnackBar } from "./components/SnackBar";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import Order from "./pages/myOrder/Order";
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
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-verification" element={<VerifyEmail />} />
        <Route path={"/:slug/:productSlug/"} element={<ProductLandingPage />} />
        <Route path={"/:slug"} element={<ProductListing />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/order/:user"
          element={
            <PrivateRoute>
              <Order />
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
        <Route path="/loading" element={<Loading />} />
        <Route path="cart/checkout" element={<Checkout />} />
        <Route
          path="cart/checkout/stripe"
          element={
            <PrivateRoute>
              <StripeCheckout />
            </PrivateRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
      <BackdropLoader />
      <SnackBar />
    </div>
  );
}

export default App;
