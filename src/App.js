import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import { ProductLandingPage } from "./pages/product/ProductPage";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatagoriesAction());
    dispatch(getProductsAction());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user-verification" element={<VerifyEmail />} />
        <Route path={"product/:_id"} element={<ProductLandingPage />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
