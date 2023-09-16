import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import CustomBreadCrumb from "../breadCrumb/BreadCrumb";

export const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <CustomBreadCrumb />

      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};
