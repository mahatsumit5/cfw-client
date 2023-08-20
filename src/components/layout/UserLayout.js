import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomMenu } from "../menu/CustomMenu";

export const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <CustomMenu />
      <main className="main ">{children}</main>
      <Footer />
    </div>
  );
};
