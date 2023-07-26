import React, { useState } from "react";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { verifyAccountAction } from "../../action/userAction";
export const VerifyEmail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams?.get("c");
  const email = queryParams?.get("e");
  const [form, setForm] = useState({});
  const userName = email?.slice(0, email.indexOf("@"));
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      email: email,
    });
  };
  const handleOnVerify = async () => {
    const result = await verifyAccountAction(form);
    result && navigate("/");
  };
  return (
    <div>
      <Header />
      <main className="main d-flex justify-content-center">
        <div className="d-flex justify-content-around mt-5 border flex-column align-items-center shadow p-3 mb-5 bg-body-tertiary rounded w-50 p-3">
          <h1>Class Fashion Wears</h1>
          <h2>Hi, {userName}</h2>

          <p>
            Thanks for signing up to The Classic Fashion Wears. Before we can
            continue, we need to verify your email address.
          </p>
          <div className="d-grid">
            <Form>
              <p>Enter your code below</p>
              <Form.Control
                id="code"
                type="text"
                name="code"
                onChange={handleOnChange}
              />
              <label htmlFor="code">Enter your code</label>
            </Form>
            <Button onClick={handleOnVerify}>Activate My Account</Button>
          </div>

          <p>As a friendly reminder, your account details are:</p>

          <p>Email:{email}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
