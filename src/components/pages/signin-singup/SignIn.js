import React, { useState } from "react";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loginAction } from "../../../action/userAction";
import { useDispatch } from "react-redux";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(form));
  };
  return (
    <div>
      <Header />
      <main className="main ">
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
      </main>
      <Footer />
    </div>
  );
};
