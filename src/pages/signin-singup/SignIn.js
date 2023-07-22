import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../action/userAction";
import { toast } from "react-toastify";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form?.email && form?.password) {
      const user = await dispatch(loginAction(form));
      if (user?._id) navigate("/");

      return user;
    }
    toast.info("Email and Password Required");
  };
  return (
    <div>
      <Header />
      <main className="main ">
        <Container className="w-80  d-flex m-auto justify-content-center mt-5 align-items-center">
          <Form className="form" onSubmit={handleOnSubmit}>
            <p className="form-title">Sign in to your account</p>
            <div className="d-grid input-container">
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleOnChange}
              />
            </div>
            <div className="d-grid input-container">
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={handleOnChange}
              />
            </div>
            <div className="d-grid">
              <Button type="submit">Sign in</Button>
            </div>

            <p className="signup-link">
              No account?
              <Link to="/signup">Sign up</Link>
            </p>
          </Form>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
