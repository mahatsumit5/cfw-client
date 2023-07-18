import React from "react";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div>
      <Header />
      <main className="main ">
        <Form className="form">
          <p className="form-title">Sign in to your account</p>
          <div className="d-grid input-container">
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="d-grid input-container">
            <input type="password" placeholder="Enter password" />
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
