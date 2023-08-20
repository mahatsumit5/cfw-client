import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";

export const Profile = () => {
  return (
    <div>
      <Header />

      <main className="main p-2">This is my profile page</main>

      <Footer />
    </div>
  );
};
