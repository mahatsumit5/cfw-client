import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignIn } from "./components/pages/signin-singup/SignIn";
import { SignUp } from "./components/pages/signin-singup/SignUp";
import { Home } from "./components/pages/home/Home";
import { ThemeProvider } from "react-bootstrap";
function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/new-admin" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
