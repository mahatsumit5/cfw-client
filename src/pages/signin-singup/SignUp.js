import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { SingUpForm } from "../../components/admin-signup/SingUpForm";

export const SignUp = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <SingUpForm />
      </main>
      <Footer />{" "}
    </div>
  );
};
